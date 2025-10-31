import { Home, Search, Bookmark, User } from 'lucide-react';

export const BottomNav = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'bookmark', icon: Bookmark, label: 'Bookmark' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl bg-linear-to-t from-slate-950 via-slate-950 to-slate-950/95 px-4 sm:px-6 lg:px-2 py-3 sm:py-4 flex justify-around items-center border-t border-slate-800/50 z-40 backdrop-blur-xl">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex flex-col items-center gap-1 transition-all px-4 sm:px-6 py-2 rounded-2xl ${
              isActive ? 'bg-red-500/10' : ''
            }`}
          >
            <Icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${isActive ? 'text-red-500' : 'text-slate-400'}`} />
            <span className={`text-[10px] sm:text-xs font-medium ${isActive ? 'text-red-500' : 'text-slate-500'}`}>
              {item.label}
            </span>
            {isActive && <div className="w-1 h-1 bg-red-500 rounded-full mt-0.5"></div>}
          </button>
        );
      })}
    </div>
  );
};