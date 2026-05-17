const RFQ_EMAIL = 'quotes@boyleprint.com';
const RFQ_SUBJECT = 'Boyle Print — New Project Request';

const radioLabels: Record<string, Record<string, string>> = {
  resale_certificate: { yes: 'Yes', no: 'No' },
  project_type: {
    distributor: 'Distributor Order',
    brand_drop: 'Brand Drop',
    local_business: 'Local Business Merchandise',
    sample: 'Sample / Prototype',
    archive: 'Archive Sale / Inventory Prep',
    fulfillment: 'Fulfillment / Kitting',
    other: 'Other',
  },
  rush_order: { yes: 'Yes', no: 'No' },
  delivery_method: {
    pickup: 'Pickup',
    local_delivery: 'Local Delivery',
    ship_one: 'Ship to One Address',
    drop_ship_multi: 'Drop Ship to Multiple Addresses',
    fulfillment_support: 'Fulfillment Support Needed',
  },
  garment_provider: {
    customer_supplied: 'Customer-supplied',
    boyle_source: 'Boyle Print to source',
    mixed: 'Mixed',
  },
  extra_units_testing: { yes: 'Yes', no: 'No' },
  artwork_provided: { yes: 'Yes', no: 'No' },
  artwork_production_ready: { yes: 'Yes', no: 'No', not_sure: 'Not Sure' },
  pantone_match: { yes: 'Yes', no: 'No' },
  fulfillment_needed: {
    no: 'No',
    pack_only: 'Pack only',
    pack_and_ship: 'Pack and ship',
    drop_ship_multi: 'Drop ship to multiple addresses',
    kitting: 'Kitting',
    storage: 'Storage needed before fulfillment',
  },
  shipping_paid_by: {
    customer: 'Customer',
    boyle_quote: 'Boyle Print to include in quote',
    third_party: 'Third-party shipping account',
  },
  sample_required: { yes: 'Yes', no: 'No' },
  digital_mockup_required: { yes: 'Yes', no: 'No' },
  physical_sample_required: { yes: 'Yes', no: 'No' },
};

const checkboxLabels: Record<string, Record<string, string>> = {
  product_item: {
    tshirt: 'T-shirt',
    hoodie: 'Hoodie',
    hat: 'Hat',
    tote_bag: 'Tote Bag',
    patch: 'Patch',
    promo: 'Promotional Product',
    hard_goods: 'Hard Goods',
    other: 'Other',
  },
  file_format: {
    ai: 'AI',
    pdf: 'PDF',
    eps: 'EPS',
    svg: 'SVG',
    png: 'PNG',
    jpg: 'JPG',
    psd: 'PSD',
    other: 'Other',
  },
  decoration_placement: {
    left_chest: 'Left Chest',
    full_front: 'Full Front',
    full_back: 'Full Back',
    sleeve: 'Sleeve',
    neck_label: 'Neck Label',
    hat_front: 'Hat Front',
    patch_placement: 'Patch Placement',
    product_surface: 'Product Surface',
    other: 'Other',
  },
  decoration_method: {
    dtf: 'DTF Transfer',
    heat_press: 'Heat Press',
    uv_transfer: 'UV Transfer',
    laser: 'Laser Decoration',
    patch: 'Patch Application',
    screen_print: 'Screen Print',
    embroidery: 'Embroidery',
    neck_relabel: 'Neck Label / Relabeling',
    hangtag_sku: 'Hangtag / SKU Sticker',
    not_sure: 'Not Sure — Need Recommendation',
  },
  labeling_addon: {
    neck_size: 'Neck label / size label support',
    hangtag: 'Hangtag application',
    barcode_sku: 'Barcode / SKU sticker',
    price_sticker: 'Price sticker',
    retail_sale_label: 'Original retail price / sale price label',
    folding: 'Folding',
    poly_bag: 'Poly bagging',
    insert_card: 'Insert card',
    sku_org: 'SKU organization',
    inventory_sort: 'Inventory sorting',
    condition_review: 'Condition review',
    sale_page_assets: 'Sale-page asset preparation',
    basic_photo: 'Basic product photography',
  },
  packaging_requirements: {
    poly_bag: 'Standard poly bag',
    customer_packaging: 'Customer-provided packaging',
    insert_card: 'Insert card',
    sticker: 'Sticker',
    custom_kit: 'Custom kit',
    other: 'Other',
  },
  production_begin_after: {
    digital_mockup: 'Digital mockup approval',
    physical_sample: 'Physical sample approval',
    written_approval: 'Written customer approval',
    deposit: 'Deposit received',
  },
};

function textValue(form: HTMLFormElement, name: string): string {
  const el = form.elements.namedItem(name);
  if (!el || !(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) return '';
  return el.value.trim();
}

function radioValue(form: HTMLFormElement, name: string): string {
  const checked = form.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`);
  if (!checked) return '—';
  return radioLabels[name]?.[checked.value] ?? checked.value;
}

function checkboxValues(form: HTMLFormElement, name: string): string {
  const checked = form.querySelectorAll<HTMLInputElement>(`input[name="${name}"]:checked`);
  if (checked.length === 0) return '—';
  return Array.from(checked)
    .map((el) => checkboxLabels[name]?.[el.value] ?? el.value)
    .join(', ');
}

function line(label: string, value: string) {
  const v = value.trim() || '—';
  return `${label}: ${v}`;
}

function section(title: string, lines: string[]) {
  return `${title}\n${lines.map((l) => `  ${l}`).join('\n')}`;
}

export function buildRfqMailtoUrl(form: HTMLFormElement): string {
  const sections = [
    section('Customer Information', [
      line('Customer / Company Name', textValue(form, 'customer_company_name')),
      line('Contact Person', textValue(form, 'contact_person')),
      line('Email', textValue(form, 'email')),
      line('Phone', textValue(form, 'phone')),
      line('Billing Address', textValue(form, 'billing_address')),
      line('Shipping / Pickup Address', textValue(form, 'shipping_pickup_address')),
      line('Resale Certificate Available?', radioValue(form, 'resale_certificate')),
      line('Project Type', radioValue(form, 'project_type')),
      line('Project Type (Other)', textValue(form, 'project_type_other')),
    ]),
    section('Project Overview', [
      line('Project Name', textValue(form, 'project_name')),
      line('Due Date', textValue(form, 'due_date')),
      line('Is this a rush order?', radioValue(form, 'rush_order')),
      line('Preferred Delivery Method', radioValue(form, 'delivery_method')),
      line('Brief Project Description', textValue(form, 'project_description')),
    ]),
    section('Product / Garment Details', [
      line('Who is providing the garments / products?', radioValue(form, 'garment_provider')),
      line('Product Type', checkboxValues(form, 'product_item')),
      line('Product Type (Other)', textValue(form, 'product_item_other_text')),
      line('Brand / Style / SKU', textValue(form, 'brand_style_sku')),
      line('Color(s)', textValue(form, 'colors')),
      line('Size Breakdown', textValue(form, 'size_breakdown')),
      line('Total Quantity', textValue(form, 'total_quantity')),
      line('Extra Units Provided for Testing?', radioValue(form, 'extra_units_testing')),
    ]),
    section('Artwork / Design Details', [
      line('Artwork Provided?', radioValue(form, 'artwork_provided')),
      line('File Format', checkboxValues(form, 'file_format')),
      line('File Format (Other)', textValue(form, 'file_format_other_text')),
      line('Is artwork production-ready?', radioValue(form, 'artwork_production_ready')),
      line('Decoration Placement', checkboxValues(form, 'decoration_placement')),
      line('Decoration Placement (Other)', textValue(form, 'decoration_placement_other_text')),
      line('Approximate Decoration Size', textValue(form, 'approx_decoration_size')),
      line('Number of Artwork Designs', textValue(form, 'num_designs')),
      line('Number of Print / Decoration Locations', textValue(form, 'num_locations')),
      line('Pantone / Color Match Required?', radioValue(form, 'pantone_match')),
      line('File Upload', '(see attached files in your email client if applicable)'),
    ]),
    section('Decoration Method', [
      line('Requested Decoration Method', checkboxValues(form, 'decoration_method')),
      line('Special Notes', textValue(form, 'decoration_special_notes')),
    ]),
    section('Labeling / Tagging / Sale Prep (optional add-ons)', [
      line('Selected add-ons', checkboxValues(form, 'labeling_addon')),
    ]),
    section('Fulfillment / Shipping', [
      line('Fulfillment Needed?', radioValue(form, 'fulfillment_needed')),
      line('Packaging Requirements', checkboxValues(form, 'packaging_requirements')),
      line('Packaging Requirements (Other)', textValue(form, 'packaging_requirements_other_text')),
      line('Shipping Paid By', radioValue(form, 'shipping_paid_by')),
    ]),
    section('Approval Process', [
      line('Approval Contact', textValue(form, 'approval_contact')),
      line('Approval Contact Email / Phone', textValue(form, 'approval_contact_email_phone')),
      line('Sample Required?', radioValue(form, 'sample_required')),
      line('Digital Mockup Required?', radioValue(form, 'digital_mockup_required')),
      line('Physical Sample Required?', radioValue(form, 'physical_sample_required')),
      line('Production may begin after', checkboxValues(form, 'production_begin_after')),
    ]),
  ];

  const body = `Boyle Print — Project Intake Form\n\n${sections.join('\n\n')}`;
  return `mailto:${RFQ_EMAIL}?subject=${encodeURIComponent(RFQ_SUBJECT)}&body=${encodeURIComponent(body)}`;
}

export { RFQ_EMAIL, RFQ_SUBJECT };
