export const CategoryFilter = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5">
      <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 border-transparent scale-105'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border-white/10'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};