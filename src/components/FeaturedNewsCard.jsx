import { Clock } from 'lucide-react';

export const FeaturedNewsCard = ({ news, onBookmark, isBookmarked }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
      <div 
        className="relative rounded-3xl overflow-hidden h-80 sm:h-96 lg:h-112 cursor-pointer hover:scale-[1.01] transition-all duration-300 shadow-2xl group"
        onClick={() => window.open(news.url, '_blank')}
      >
        <img 
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-90"></div>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onBookmark();
          }}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-linear-to-r from-red-500 to-red-600 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center hover:scale-110 transition-all z-10 shadow-2xl"
        >
          <span className="text-xl sm:text-2xl">{isBookmarked ? '📕' : '📑'}</span>
        </button>
        
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-xl rounded-full text-xs font-medium border border-white/20">
              {news.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
              <Clock className="w-3 h-3" />
              <span>{news.time}</span>
            </div>
          </div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 leading-tight text-white">
            {news.title}
          </h2>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="font-medium">{news.source}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};