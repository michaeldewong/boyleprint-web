'use client';

import {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type ReactNode,
} from 'react';
import Button from './Button';
import { buildRfqMailtoUrl } from './rfqMailto';
import Link from 'next/link';

const inputClass =
  'w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-400';
const labelClass = 'block text-sm font-semibold text-slate-900 mb-1.5';

function Req() {
  return <span className="text-red-600 ml-0.5" aria-hidden>*</span>;
}

function Opt() {
  return <span className="text-slate-500 font-normal text-xs ml-1">(optional)</span>;
}

function SubSection({
  letter,
  title,
  children,
}: {
  letter: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="rounded-lg border border-slate-200 bg-white p-6 md:p-8 mb-8 md:mb-10 shadow-sm">
      <legend className="sr-only">
        Section {letter}: {title}
      </legend>
      <div className="border-b border-slate-200 pb-4 mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-1">
          Section {letter}
        </p>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h3>
      </div>
      <div className="space-y-5">{children}</div>
    </fieldset>
  );
}

function RadioRow({ name, value, label }: { name: string; value: string; label: string }) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-md border border-slate-200 bg-slate-50/80 px-4 py-3 hover:bg-slate-50">
      <input
        type="radio"
        name={name}
        value={value}
        className="mt-1 h-4 w-4 border-slate-300 text-slate-900 focus:ring-slate-500"
      />
      <span className="text-sm font-medium text-slate-800">{label}</span>
    </label>
  );
}

function CheckboxRow({ name, value, label }: { name: string; value: string; label: string }) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-md border border-slate-200 bg-slate-50/80 px-4 py-3 hover:bg-slate-50">
      <input
        type="checkbox"
        name={name}
        value={value}
        className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500"
      />
      <span className="text-sm font-medium text-slate-800">{label}</span>
    </label>
  );
}

export default function RfqForm() {
  const successRef = useRef<HTMLDivElement>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [lastMailtoUrl, setLastMailtoUrl] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [artworkProvided, setArtworkProvided] = useState('');
  const [projectType, setProjectType] = useState('');
  const [productOther, setProductOther] = useState(false);
  const [placementOther, setPlacementOther] = useState(false);
  const [packagingOther, setPackagingOther] = useState(false);
  const [fileFormatOther, setFileFormatOther] = useState(false);

  const syncFormState = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    const el = e.target;
    if (!(el instanceof HTMLInputElement)) return;
    if (el.name === 'project_type' && el.type === 'radio') {
      setProjectType(el.value);
    }
    if (el.name === 'artwork_provided' && el.type === 'radio') {
      setArtworkProvided(el.value);
    }
    if (el.name === 'product_item' && el.type === 'checkbox' && el.value === 'other') {
      setProductOther(el.checked);
    }
    if (el.name === 'decoration_placement' && el.type === 'checkbox' && el.value === 'other') {
      setPlacementOther(el.checked);
    }
    if (el.name === 'packaging_requirements' && el.type === 'checkbox' && el.value === 'other') {
      setPackagingOther(el.checked);
    }
    if (el.name === 'file_format' && el.type === 'checkbox' && el.value === 'other') {
      setFileFormatOther(el.checked);
    }
  }, []);

  useEffect(() => {
    if (!submitSuccess) return;
    const el = successRef.current;
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.focus({ preventScroll: true });
  }, [submitSuccess]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setFormError(null);
      const form = e.currentTarget;

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const reqGroup = (name: string, message: string) => {
        if (!form.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`)) {
          setFormError(message);
          return false;
        }
        return true;
      };

      if (!reqGroup('project_type', 'Please select a project type in Section A.')) return;
      if (!reqGroup('rush_order', 'Please indicate whether this is a rush order in Section B.'))
        return;
      if (!reqGroup('delivery_method', 'Please select a preferred delivery method in Section B.'))
        return;
      if (!reqGroup('garment_provider', 'Please indicate who is providing garments in Section C.'))
        return;
      if (!reqGroup('artwork_provided', 'Please answer Artwork Provided in Section D.')) return;
      if (!reqGroup('fulfillment_needed', 'Please select fulfillment options in Section G.'))
        return;

      const productTypes = form.querySelectorAll<HTMLInputElement>(
        'input[name="product_item"]:checked'
      );
      if (productTypes.length === 0) {
        setFormError('Please select at least one product type in Section C.');
        return;
      }

      const methods = form.querySelectorAll<HTMLInputElement>(
        'input[name="decoration_method"]:checked'
      );
      if (methods.length === 0) {
        setFormError('Please select at least one requested decoration method in Section E.');
        return;
      }

      if (artworkProvided === 'yes') {
        const formats = form.querySelectorAll<HTMLInputElement>('input[name="file_format"]:checked');
        if (formats.length === 0) {
          setFormError('Please select at least one file format in Section D, or change Artwork Provided.');
          return;
        }
        const prodReady = form.querySelector<HTMLInputElement>(
          'input[name="artwork_production_ready"]:checked'
        );
        if (!prodReady) {
          setFormError('Please indicate whether artwork is production-ready in Section D.');
          return;
        }
      }

      const mailtoUrl = buildRfqMailtoUrl(form);
      setLastMailtoUrl(mailtoUrl);
      window.location.href = mailtoUrl;
      setSubmitSuccess(true);
    },
    [artworkProvided]
  );

  const openMailtoAgain = () => {
    if (lastMailtoUrl) {
      window.location.href = lastMailtoUrl;
    }
  };

  if (submitSuccess) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        id="rfq-submit-success"
        className="rounded-lg border border-slate-200 bg-slate-50 p-8 md:p-10 text-center shadow-sm scroll-mt-24"
        role="status"
        aria-live="polite"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
          QUOTE REQUEST PREPARED
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Thank you — your project details are ready to send.
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-4">
          {`We've prepared an email with your project details addressed to quotes@boyleprint.com. If your email application opened automatically, please review and send the message.`}
        </p>
        <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
          {`If your email application did not open, you can send the same details directly to quotes@boyleprint.com from any email client. A member of the Boyle Print team will follow up within 1 business day at the email address you provided.`}
        </p>
        <Button
          type="button"
          variant="primary"
          onClick={openMailtoAgain}
          className="px-8 py-3.5 text-base font-semibold"
        >
          Open Email Again
        </Button>
        <p className="mt-6 text-sm text-slate-500">
          Need to start over?{' '}
          <Link href="/" className="font-medium text-slate-700 underline-offset-2 hover:underline">
            Refresh the page
          </Link>{' '}
          or return to home.
        </p>
      </div>
    );
  }

  return (
    <form
      id="rfq-form"
      onSubmit={handleSubmit}
      onChange={syncFormState}
      className="space-y-0"
    >
      {formError && (
        <div
          className="mb-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-900"
          role="alert"
        >
          {formError}
        </div>
      )}

      {/* A — Customer Information */}
      <SubSection letter="A" title="Customer Information">
        <div>
          <label htmlFor="customer_company_name" className={labelClass}>
            Customer / Company Name
            <Req />
          </label>
          <input
            type="text"
            id="customer_company_name"
            name="customer_company_name"
            required
            autoComplete="organization"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact_person" className={labelClass}>
            Contact Person
            <Req />
          </label>
          <input
            type="text"
            id="contact_person"
            name="contact_person"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className={labelClass}>
              Email
              <Req />
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone
              <Opt />
            </label>
            <input type="tel" id="phone" name="phone" autoComplete="tel" className={inputClass} />
          </div>
        </div>
        <div>
          <label htmlFor="billing_address" className={labelClass}>
            Billing Address
            <Opt />
          </label>
          <input type="text" id="billing_address" name="billing_address" className={inputClass} />
        </div>
        <div>
          <label htmlFor="shipping_pickup_address" className={labelClass}>
            Shipping / Pickup Address
            <Opt />
          </label>
          <input
            type="text"
            id="shipping_pickup_address"
            name="shipping_pickup_address"
            className={inputClass}
          />
        </div>
        <div>
          <p className={`${labelClass} mb-2`}>
            Resale Certificate Available?
            <Opt />
          </p>
          <div className="flex flex-wrap gap-3">
            <RadioRow name="resale_certificate" value="yes" label="Yes" />
            <RadioRow name="resale_certificate" value="no" label="No" />
          </div>
        </div>
        <div>
          <p className={`${labelClass} mb-2`}>
            Project Type
            <Req />
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            <RadioRow name="project_type" value="distributor" label="Distributor Order" />
            <RadioRow name="project_type" value="brand_drop" label="Brand Drop" />
            <RadioRow
              name="project_type"
              value="local_business"
              label="Local Business Merchandise"
            />
            <RadioRow name="project_type" value="sample" label="Sample / Prototype" />
            <RadioRow
              name="project_type"
              value="archive"
              label="Archive Sale / Inventory Prep"
            />
            <RadioRow name="project_type" value="fulfillment" label="Fulfillment / Kitting" />
            <RadioRow name="project_type" value="other" label="Other" />
          </div>
          {projectType === 'other' && (
            <div className="mt-3 transition-all duration-200">
              <label htmlFor="project_type_other" className={labelClass}>
                Other (describe)
              </label>
              <input
                type="text"
                id="project_type_other"
                name="project_type_other"
                className={inputClass}
              />
            </div>
          )}
        </div>
      </SubSection>

      {/* B — Project Overview */}
      <SubSection letter="B" title="Project Overview">
        <div>
          <label htmlFor="project_name" className={labelClass}>
            Project Name
            <Opt />
          </label>
          <input type="text" id="project_name" name="project_name" className={inputClass} />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="due_date" className={labelClass}>
              Due Date
              <Req />
            </label>
            <input type="date" id="due_date" name="due_date" required className={inputClass} />
          </div>
          <div>
            <p className={`${labelClass} mb-2`}>
              Is this a rush order?
              <Req />
            </p>
            <div className="flex flex-wrap gap-3">
              <RadioRow name="rush_order" value="yes" label="Yes" />
              <RadioRow name="rush_order" value="no" label="No" />
            </div>
          </div>
        </div>
        <div>
          <p className={`${labelClass} mb-2`}>
            Preferred Delivery Method
            <Req />
          </p>
          <div className="grid gap-2">
            <RadioRow name="delivery_method" value="pickup" label="Pickup" />
            <RadioRow name="delivery_method" value="local_delivery" label="Local Delivery" />
            <RadioRow
              name="delivery_method"
              value="ship_one"
              label="Ship to One Address"
            />
            <RadioRow
              name="delivery_method"
              value="drop_ship_multi"
              label="Drop Ship to Multiple Addresses"
            />
            <RadioRow
              name="delivery_method"
              value="fulfillment_support"
              label="Fulfillment Support Needed"
            />
          </div>
        </div>
        <div>
          <label htmlFor="project_description" className={labelClass}>
            Brief Project Description
            <Req />
          </label>
          <textarea
            id="project_description"
            name="project_description"
            required
            rows={5}
            className={`${inputClass} min-h-[120px]`}
          />
        </div>
      </SubSection>

      <SubSection letter="C" title="Product / Garment Details">
        <div>
          <p className={`${labelClass} mb-2`}>
            Who is providing the garments / products?
            <Req />
          </p>
          <div className="grid gap-2 sm:grid-cols-3">
            <RadioRow name="garment_provider" value="customer_supplied" label="Customer-supplied" />
            <RadioRow name="garment_provider" value="boyle_source" label="Boyle Print to source" />
            <RadioRow name="garment_provider" value="mixed" label="Mixed" />
          </div>
        </div>
        <div>
          <p className={`${labelClass} mb-2`}>
            Product Type
            <Req />
          </p>
          <p className="text-xs text-slate-600 mb-3">Select all that apply (at least one).</p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <CheckboxRow name="product_item" value="tshirt" label="T-shirt" />
            <CheckboxRow name="product_item" value="hoodie" label="Hoodie" />
            <CheckboxRow name="product_item" value="hat" label="Hat" />
            <CheckboxRow name="product_item" value="tote_bag" label="Tote Bag" />
            <CheckboxRow name="product_item" value="patch" label="Patch" />
            <CheckboxRow name="product_item" value="promo" label="Promotional Product" />
            <CheckboxRow name="product_item" value="hard_goods" label="Hard Goods" />
            <CheckboxRow name="product_item" value="other" label="Other" />
          </div>
          {productOther && (
            <div className="mt-3">
              <label htmlFor="product_item_other_text" className={labelClass}>
                Other (describe)
              </label>
              <input
                type="text"
                id="product_item_other_text"
                name="product_item_other_text"
                className={inputClass}
              />
            </div>
          )}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="brand_style_sku" className={labelClass}>
              Brand / Style / SKU
              <Opt />
            </label>
            <input type="text" id="brand_style_sku" name="brand_style_sku" className={inputClass} />
          </div>
          <div>
            <label htmlFor="colors" className={labelClass}>
              Color(s)
              <Opt />
            </label>
            <input type="text" id="colors" name="colors" className={inputClass} />
          </div>
        </div>
        <div>
          <label htmlFor="size_breakdown" className={labelClass}>
            Size Breakdown
            <Opt />
          </label>
          <textarea
            id="size_breakdown"
            name="size_breakdown"
            rows={3}
            placeholder="e.g., S: 10, M: 20, L: 15"
            className={`${inputClass} min-h-[88px]`}
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="total_quantity" className={labelClass}>
              Total Quantity
              <Req />
            </label>
            <input
              type="number"
              id="total_quantity"
              name="total_quantity"
              required
              min={0}
              className={inputClass}
            />
          </div>
          <div>
            <p className={`${labelClass} mb-2`}>
              Extra Units Provided for Testing?
              <Opt />
            </p>
            <div className="flex flex-wrap gap-3">
              <RadioRow name="extra_units_testing" value="yes" label="Yes" />
              <RadioRow name="extra_units_testing" value="no" label="No" />
            </div>
          </div>
        </div>
      </SubSection>

      <SubSection letter="D" title="Artwork / Design Details">
        <div>
          <p className={`${labelClass} mb-2`}>
            Artwork Provided?
            <Req />
          </p>
          <div className="flex flex-wrap gap-3">
            <RadioRow name="artwork_provided" value="yes" label="Yes" />
            <RadioRow name="artwork_provided" value="no" label="No" />
          </div>
        </div>

        {artworkProvided === 'yes' && (
          <div className="space-y-5 rounded-md border border-slate-200 bg-slate-50/60 p-4 md:p-5 transition-all duration-200">
            <div>
              <p className={`${labelClass} mb-2`}>File Format</p>
              <p className="text-xs text-slate-600 mb-3">Select all that apply.</p>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                <CheckboxRow name="file_format" value="ai" label="AI" />
                <CheckboxRow name="file_format" value="pdf" label="PDF" />
                <CheckboxRow name="file_format" value="eps" label="EPS" />
                <CheckboxRow name="file_format" value="svg" label="SVG" />
                <CheckboxRow name="file_format" value="png" label="PNG" />
                <CheckboxRow name="file_format" value="jpg" label="JPG" />
                <CheckboxRow name="file_format" value="psd" label="PSD" />
                <CheckboxRow name="file_format" value="other" label="Other" />
              </div>
              {fileFormatOther && (
                <div className="mt-3">
                  <label htmlFor="file_format_other_text" className={labelClass}>
                    Other (describe)
                  </label>
                  <input
                    type="text"
                    id="file_format_other_text"
                    name="file_format_other_text"
                    className={inputClass}
                  />
                </div>
              )}
            </div>
            <div>
              <p className={`${labelClass} mb-2`}>Is artwork production-ready?</p>
              <div className="flex flex-wrap gap-3">
                <RadioRow name="artwork_production_ready" value="yes" label="Yes" />
                <RadioRow name="artwork_production_ready" value="no" label="No" />
                <RadioRow name="artwork_production_ready" value="not_sure" label="Not Sure" />
              </div>
            </div>
          </div>
        )}

        <div>
          <p className={`${labelClass} mb-2`}>Decoration Placement</p>
          <p className="text-xs text-slate-600 mb-3">Select all that apply.</p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <CheckboxRow name="decoration_placement" value="left_chest" label="Left Chest" />
            <CheckboxRow name="decoration_placement" value="full_front" label="Full Front" />
            <CheckboxRow name="decoration_placement" value="full_back" label="Full Back" />
            <CheckboxRow name="decoration_placement" value="sleeve" label="Sleeve" />
            <CheckboxRow name="decoration_placement" value="neck_label" label="Neck Label" />
            <CheckboxRow name="decoration_placement" value="hat_front" label="Hat Front" />
            <CheckboxRow name="decoration_placement" value="patch_placement" label="Patch Placement" />
            <CheckboxRow name="decoration_placement" value="product_surface" label="Product Surface" />
            <CheckboxRow name="decoration_placement" value="other" label="Other" />
          </div>
          {placementOther && (
            <div className="mt-3">
              <label htmlFor="decoration_placement_other_text" className={labelClass}>
                Other (describe)
              </label>
              <input
                type="text"
                id="decoration_placement_other_text"
                name="decoration_placement_other_text"
                className={inputClass}
              />
            </div>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="approx_decoration_size" className={labelClass}>
              Approximate Decoration Size
              <Opt />
            </label>
            <input
              type="text"
              id="approx_decoration_size"
              name="approx_decoration_size"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="num_designs" className={labelClass}>
              Number of Artwork Designs
              <Opt />
            </label>
            <input type="number" id="num_designs" name="num_designs" min={0} className={inputClass} />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="num_locations" className={labelClass}>
              Number of Print / Decoration Locations
              <Opt />
            </label>
            <input type="number" id="num_locations" name="num_locations" min={0} className={inputClass} />
          </div>
          <div>
            <p className={`${labelClass} mb-2`}>
              Pantone / Color Match Required?
              <Opt />
            </p>
            <div className="flex flex-wrap gap-3">
              <RadioRow name="pantone_match" value="yes" label="Yes" />
              <RadioRow name="pantone_match" value="no" label="No" />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="artwork_files" className={labelClass}>
            File Upload
            <Opt />
          </label>
          <input
            type="file"
            id="artwork_files"
            name="artwork_files"
            multiple
            accept=".ai,.pdf,.eps,.svg,.png,.jpg,.jpeg,.psd,image/*"
            className={`${inputClass} file:mr-4 file:rounded file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-slate-800`}
          />
        </div>
      </SubSection>

      <SubSection letter="E" title="Decoration Method">
        <div>
          <p className={`${labelClass} mb-2`}>
            Requested Decoration Method
            <Req />
          </p>
          <p className="text-xs text-slate-600 mb-3">Select all that apply (at least one).</p>
          <div className="grid gap-2 sm:grid-cols-2">
            <CheckboxRow name="decoration_method" value="dtf" label="DTF Transfer" />
            <CheckboxRow name="decoration_method" value="heat_press" label="Heat Press" />
            <CheckboxRow name="decoration_method" value="uv_transfer" label="UV Transfer" />
            <CheckboxRow name="decoration_method" value="laser" label="Laser Decoration" />
            <CheckboxRow name="decoration_method" value="patch" label="Patch Application" />
            <CheckboxRow name="decoration_method" value="screen_print" label="Screen Print" />
            <CheckboxRow name="decoration_method" value="embroidery" label="Embroidery" />
            <CheckboxRow name="decoration_method" value="neck_relabel" label="Neck Label / Relabeling" />
            <CheckboxRow name="decoration_method" value="hangtag_sku" label="Hangtag / SKU Sticker" />
            <CheckboxRow
              name="decoration_method"
              value="not_sure"
              label="Not Sure — Need Recommendation"
            />
          </div>
        </div>
        <div>
          <label htmlFor="decoration_special_notes" className={labelClass}>
            Special Notes
            <Opt />
          </label>
          <textarea
            id="decoration_special_notes"
            name="decoration_special_notes"
            rows={4}
            className={`${inputClass} min-h-[100px]`}
          />
        </div>
      </SubSection>

      <SubSection letter="F" title="Labeling / Tagging / Sale Prep (optional add-ons)">
        <p className={`${labelClass} mb-2`}>Select any that apply.</p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <CheckboxRow name="labeling_addon" value="neck_size" label="Neck label / size label support" />
          <CheckboxRow name="labeling_addon" value="hangtag" label="Hangtag application" />
          <CheckboxRow name="labeling_addon" value="barcode_sku" label="Barcode / SKU sticker" />
          <CheckboxRow name="labeling_addon" value="price_sticker" label="Price sticker" />
          <CheckboxRow
            name="labeling_addon"
            value="retail_sale_label"
            label="Original retail price / sale price label"
          />
          <CheckboxRow name="labeling_addon" value="folding" label="Folding" />
          <CheckboxRow name="labeling_addon" value="poly_bag" label="Poly bagging" />
          <CheckboxRow name="labeling_addon" value="insert_card" label="Insert card" />
          <CheckboxRow name="labeling_addon" value="sku_org" label="SKU organization" />
          <CheckboxRow name="labeling_addon" value="inventory_sort" label="Inventory sorting" />
          <CheckboxRow name="labeling_addon" value="condition_review" label="Condition review" />
          <CheckboxRow name="labeling_addon" value="sale_page_assets" label="Sale-page asset preparation" />
          <CheckboxRow name="labeling_addon" value="basic_photo" label="Basic product photography" />
        </div>
      </SubSection>

      <SubSection letter="G" title="Fulfillment / Shipping">
        <div>
          <p className={`${labelClass} mb-2`}>
            Fulfillment Needed?
            <Req />
          </p>
          <div className="grid gap-2">
            <RadioRow name="fulfillment_needed" value="no" label="No" />
            <RadioRow name="fulfillment_needed" value="pack_only" label="Pack only" />
            <RadioRow name="fulfillment_needed" value="pack_and_ship" label="Pack and ship" />
            <RadioRow
              name="fulfillment_needed"
              value="drop_ship_multi"
              label="Drop ship to multiple addresses"
            />
            <RadioRow name="fulfillment_needed" value="kitting" label="Kitting" />
            <RadioRow
              name="fulfillment_needed"
              value="storage"
              label="Storage needed before fulfillment"
            />
          </div>
        </div>
        <div>
          <p className={`${labelClass} mb-2`}>
            Packaging Requirements
            <Opt />
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            <CheckboxRow name="packaging_requirements" value="poly_bag" label="Standard poly bag" />
            <CheckboxRow
              name="packaging_requirements"
              value="customer_packaging"
              label="Customer-provided packaging"
            />
            <CheckboxRow name="packaging_requirements" value="insert_card" label="Insert card" />
            <CheckboxRow name="packaging_requirements" value="sticker" label="Sticker" />
            <CheckboxRow name="packaging_requirements" value="custom_kit" label="Custom kit" />
            <CheckboxRow name="packaging_requirements" value="other" label="Other" />
          </div>
          {packagingOther && (
            <div className="mt-3">
              <label htmlFor="packaging_requirements_other_text" className={labelClass}>
                Other (describe)
              </label>
              <input
                type="text"
                id="packaging_requirements_other_text"
                name="packaging_requirements_other_text"
                className={inputClass}
              />
            </div>
          )}
        </div>
        <div>
          <p className={`${labelClass} mb-2`}>
            Shipping Paid By
            <Opt />
          </p>
          <div className="grid gap-2">
            <RadioRow name="shipping_paid_by" value="customer" label="Customer" />
            <RadioRow name="shipping_paid_by" value="boyle_quote" label="Boyle Print to include in quote" />
            <RadioRow
              name="shipping_paid_by"
              value="third_party"
              label="Third-party shipping account"
            />
          </div>
        </div>
      </SubSection>

      <SubSection letter="H" title="Approval Process">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="approval_contact" className={labelClass}>
              Approval Contact
              <Opt />
            </label>
            <input
              type="text"
              id="approval_contact"
              name="approval_contact"
              placeholder="Name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="approval_contact_email_phone" className={labelClass}>
              Approval Contact Email / Phone
              <Opt />
            </label>
            <input
              type="text"
              id="approval_contact_email_phone"
              name="approval_contact_email_phone"
              className={inputClass}
            />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <p className={`${labelClass} mb-2`}>Sample Required?</p>
            <div className="flex flex-wrap gap-3">
              <RadioRow name="sample_required" value="yes" label="Yes" />
              <RadioRow name="sample_required" value="no" label="No" />
            </div>
          </div>
          <div>
            <p className={`${labelClass} mb-2`}>Digital Mockup Required?</p>
            <div className="flex flex-wrap gap-3">
              <RadioRow name="digital_mockup_required" value="yes" label="Yes" />
              <RadioRow name="digital_mockup_required" value="no" label="No" />
            </div>
          </div>
          <div>
            <p className={`${labelClass} mb-2`}>Physical Sample Required?</p>
            <div className="flex flex-wrap gap-3">
              <RadioRow name="physical_sample_required" value="yes" label="Yes" />
              <RadioRow name="physical_sample_required" value="no" label="No" />
            </div>
          </div>
        </div>
        <div>
          <p className={`${labelClass} mb-2`}>Production may begin after</p>
          <p className="text-xs text-slate-600 mb-3">Select all that apply.</p>
          <div className="grid gap-2 sm:grid-cols-2">
            <CheckboxRow name="production_begin_after" value="digital_mockup" label="Digital mockup approval" />
            <CheckboxRow name="production_begin_after" value="physical_sample" label="Physical sample approval" />
            <CheckboxRow name="production_begin_after" value="written_approval" label="Written customer approval" />
            <CheckboxRow name="production_begin_after" value="deposit" label="Deposit received" />
          </div>
        </div>
      </SubSection>

      <div className="rounded-lg border border-slate-200 bg-slate-50/90 p-6 md:p-8 mb-8">
        <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-[70ch] mb-6">
          By submitting this request, you acknowledge that production begins only after deposit,
          artwork approval, and written project confirmation. Boyle Print will follow up within one
          business day.
        </p>
        <Button type="submit" variant="primary" className="px-8 py-3.5 text-base font-semibold">
          Send Project Details
        </Button>
      </div>
    </form>
  );
}
