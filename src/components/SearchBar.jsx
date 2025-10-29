import { Search, X } from 'lucide-react';

export const SearchBar = ({ isActive, onSearch, value, onClear }) => {
  if (!isActive) return null;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 animate-fadeIn">
      <div className="flex items-center bg-gradient-to-r from-white/10 to-white/5 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 gap-3 backdrop-blur-md border border-white/10 shadow-xl">
        <Search className="w-5 h-5 text-slate-400" />
        <input 
          type="text"
          value={value}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Cari berita terkini..."
          className="flex-1 bg-transparent border-none text-white text-sm sm:text-base outline-none placeholder-slate-400"
          autoFocus
        />
        {value && (
          <button 
            onClick={onClear}
            className="bg-red-500/20 text-red-500 w-7 h-7 rounded-full flex items-center justify-center hover:bg-red-500/30 transition-all hover:scale-110"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};