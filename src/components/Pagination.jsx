import React from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  isFetching = false,
  isDarkMode = true,
  totalCount = 100,
  limit = 9,
}) {
  if (totalPages <= 1) return null;

  // Calculate start & end indices for UI info
  const startItem = (currentPage - 1) * limit + 1;
  const endItem = Math.min(currentPage * limit, totalCount);

  // Generate visible page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const delta = 1; // Number of pages to show around current page

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }
    return pages;
  };

  const pages = getPageNumbers();

  const handlePageClick = (page) => {
    if (typeof page === 'number' && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <nav
      className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 mt-6 border-t border-dashed transition-colors duration-500"
      aria-label="Pagination Navigation"
      style={{ borderColor: isDarkMode ? '#1e293b' : '#e2e8f0' }}
    >
      {/* Left: Summary Info & Background Fetching Indicator */}
      <div className="flex items-center gap-2 text-xs font-medium">
        <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
          Showing <span className="font-bold text-indigo-500">{startItem}</span> -{' '}
          <span className="font-bold text-indigo-500">{endItem}</span> of{' '}
          <span className="font-bold text-indigo-500">{totalCount}</span> articles
        </span>

        {isFetching && (
          <span
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-400 animate-pulse border border-indigo-500/20"
            title="TanStack Query background revalidation"
          >
            <Loader2 className="w-3 h-3 animate-spin" />
            <span>Syncing cache...</span>
          </span>
        )}
      </div>

      {/* Right: Page Buttons */}
      <div className="flex items-center gap-1.5 sm:gap-2 select-none">
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Go to previous page"
          className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            currentPage === 1
              ? 'opacity-40 cursor-not-allowed bg-slate-500/10 text-slate-500'
              : isDarkMode
                ? 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        {/* Numbered Buttons */}
        {pages.map((p, idx) => {
          if (p === '...') {
            return (
              <span
                key={`ellipsis-${idx}`}
                className={`px-2 py-1 text-xs font-semibold ${
                  isDarkMode ? 'text-slate-600' : 'text-slate-400'
                }`}
              >
                ...
              </span>
            );
          }

          const isActive = p === currentPage;
          return (
            <button
              key={`page-${p}`}
              type="button"
              onClick={() => handlePageClick(p)}
              aria-current={isActive ? 'page' : undefined}
              aria-label={`Page ${p}`}
              className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                isActive
                  ? 'bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 scale-105'
                  : isDarkMode
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm'
              }`}
            >
              {p}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          type="button"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Go to next page"
          className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            currentPage === totalPages
              ? 'opacity-40 cursor-not-allowed bg-slate-500/10 text-slate-500'
              : isDarkMode
                ? 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm'
          }`}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}
