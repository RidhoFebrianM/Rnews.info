import { Bell, TrendingUp } from 'lucide-react';

export const Header = ({ notificationCount }) => {
  return (
    <div className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center sticky top-0 z-40 border-b border-slate-700/50 backdrop-blur-lg">
      <div className="flex items-center gap-3">
        <div className="text-2xl sm:text-3xl font-bold text-white flex items-center">
          <span className="bg-linear-to-r from-red-500 to-red-600 bg-clip-text text-transparent">R</span>
          <span>NEWS</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-red-500/10 rounded-full">
          <TrendingUp className="w-4 h-4 text-red-500" />
          <span className="text-xs text-red-500 font-medium">Trending</span>
        </div>
      </div>
      <div className="relative">
        <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-white cursor-pointer hover:text-red-500 transition-colors" />
        <div className="absolute -top-1 -right-1 bg-linear-to-r from-red-500 to-red-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center font-semibold shadow-lg animate-pulse">
          {notificationCount}
        </div>
      </div>
    </div>
  );
};