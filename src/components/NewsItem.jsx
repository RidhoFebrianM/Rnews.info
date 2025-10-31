import { Clock } from 'lucide-react';

export const NewsItem = ({ news }) => {
  return (
    <a
      href={news.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-3 sm:gap-4 bg-linear-to-r from-white/5 to-white/2 rounded-2xl sm:rounded-3xl p-3 sm:p-4 hover:translate-x-1 hover:from-white/10 hover:to-white/5 transition-all cursor-pointer border border-white/5 hover:border-white/10 shadow-lg group"
    >
      <img 
        src={news.image}
        alt={news.title}
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl object-cover shrink-0 group-hover:scale-105 transition-transform"
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-sm sm:text-base font-semibold mb-2 line-clamp-2 text-white group-hover:text-red-400 transition-colors">
          {news.title}
        </h3>
        <div className="flex items-center gap-2 sm:gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 bg-white/5 px-2 sm:px-3 py-1 rounded-lg">
            <span>{news.icon}</span>
            <span className="hidden sm:inline">{news.category}</span>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {news.time}
          </span>
        </div>
      </div>
    </a>
  );
};