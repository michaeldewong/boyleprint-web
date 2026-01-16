'use client';

import { FormEvent } from 'react';
import Button from './Button';

interface RfqFormProps {
  initialProduct?: string;
}

export default function RfqForm({ initialProduct }: RfqFormProps = {}) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="product-type"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Product type
        </label>
        <input
          type="text"
          id="product-type"
          name="product-type"
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="qty"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Qty
        </label>
        <input
          type="number"
          id="qty"
          name="qty"
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="method"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Method
        </label>
        <input
          type="text"
          id="method"
          name="method"
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="deadline"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Deadline
        </label>
        <input
          type="date"
          id="deadline"
          name="deadline"
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="artwork"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Upload artwork
        </label>
        <input
          type="file"
          id="artwork"
          name="artwork"
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        />
      </div>

      <div className="pt-4">
        <Button type="submit" variant="primary" className="w-full md:w-auto">
          Submit RFQ
        </Button>
      </div>
    </form>
  );
}
