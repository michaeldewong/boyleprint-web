export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Boyle Print</h3>
          </div>
          <div>
            {/* Placeholder column */}
          </div>
          <div>
            {/* Placeholder column */}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>© {currentYear} Boyle Print. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
