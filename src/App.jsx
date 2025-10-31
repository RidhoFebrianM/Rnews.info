import React, { useState } from 'react';
import { Toast } from './components/Toast';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { FeaturedNewsCard } from './components/FeaturedNewsCard';
import { CategoryFilter } from './components/CategoryFilter';
import { NewsItem } from './components/NewsItem';
import { Loading } from './components/Loading';
import { EmptyState } from './components/EmptyState';
import { BottomNav } from './components/BottomNav';
import { DetailScreen } from './screens/DetailScreen';
import { categories, featuredNews, newsList } from './data/newsData';
import { filterNews } from './utils/filterUtils';

const App = () => {
  const [screen, setScreen] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('home');
  const [bookmarkedUrls, setBookmarkedUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 300);
    }
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const category = categories.find(c => c.id === categoryId);
      showToast(`Filter: ${category.label}`);
    }, 300);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'search') {
      showToast('Ketik untuk mencari berita', 'success');
    } else if (tab === 'bookmark') {
      if (bookmarkedUrls.length === 0) {
        showToast('Belum ada berita yang di-bookmark', 'error');
      } else {
        showToast(`Menampilkan ${bookmarkedUrls.length} bookmark`, 'success');
      }
    } else if (tab === 'profile') {
      setScreen('detail');
    } else if (tab === 'home') {
      setSearchQuery('');
      setActiveCategory('all');
    }
  };

  const toggleBookmark = (url) => {
    if (bookmarkedUrls.includes(url)) {
      setBookmarkedUrls(bookmarkedUrls.filter(u => u !== url));
      showToast('Berita dihapus dari bookmark', 'error');
    } else {
      setBookmarkedUrls([...bookmarkedUrls, url]);
      showToast('Berita disimpan ke bookmark!', 'success');
    }
  };

  const filteredNews = filterNews(newsList, searchQuery, activeCategory, activeTab, bookmarkedUrls);

  if (screen === 'detail') {
    return <DetailScreen onBack={() => { setScreen('home'); setActiveTab('home'); }} />;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 max-w-7xl mx-auto relative">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      <Header notificationCount={3} />
      
      <SearchBar 
        isActive={activeTab === 'search'}
        value={searchQuery}
        onSearch={handleSearch}
        onClear={() => setSearchQuery('')}
      />

      <div className="pb-24 sm:pb-28">
        <FeaturedNewsCard 
          news={featuredNews}
          isBookmarked={bookmarkedUrls.includes(featuredNews.url)}
          onBookmark={() => toggleBookmark(featuredNews.url)}
        />

        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={handleCategoryChange}
        />

        {isLoading ? (
          <Loading />
        ) : filteredNews.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
            {filteredNews.map((news) => (
              <NewsItem key={news.id} news={news} />
            ))}
          </div>
        )}
      </div>

      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />

      <style>{`
        @keyframes slideDown {
          from {
            transform: translate(-50%, -100px);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;