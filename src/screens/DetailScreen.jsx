import React, { useState } from 'react';
import { ArrowLeft, Share2 } from 'lucide-react';
import { NewsItem } from '../components/NewsItem';

export const DetailScreen = ({ onBack }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState('news');

  const detailNews = [
    {
      id: 1,
      title: "Destinasi Wisata Warisan Dunia UNESCO Terpopuler 2024",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=200&h=200&fit=crop",
      category: "Travel",
      icon: "🌍",
      time: "7 jam lalu",
      url: "https://www.bbc.com/travel"
    },
    {
      id: 2,
      title: "Meta Berencana Rekrut 10.000 Karyawan untuk Proyek Metaverse",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=200&fit=crop",
      category: "Business",
      icon: "💼",
      time: "8 jam lalu",
      url: "https://www.bbc.com/news/technology"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pb-24">
      <div className="flex justify-between items-center p-4 sm:p-6 lg:p-8">
        <button 
          onClick={onBack}
          className="bg-linear-to-r from-white/10 to-white/5 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center hover:from-white/20 hover:to-white/10 transition-all border border-white/10 shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
        <button className="bg-linear-to-r from-white/10 to-white/5 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center hover:from-white/20 hover:to-white/10 transition-all border border-white/10 shadow-lg">
          <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-8">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-linear-to-br from-red-500 to-red-600 rounded-3xl mx-auto mb-5 sm:mb-6 flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-2xl shadow-red-500/30">
          RN
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white">Rnews Publisher</h2>
        <button 
          onClick={() => setIsFollowing(!isFollowing)}
          className={`px-8 sm:px-10 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold mb-4 sm:mb-5 transition-all ${
            isFollowing 
              ? 'bg-white/10 text-white border border-white/20' 
              : 'bg-linear-to-r from-red-500 to-red-600 text-white hover:scale-105 shadow-lg shadow-red-500/30'
          }`}
        >
          {isFollowing ? '✓ Following' : '+ Follow'}
        </button>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Sumber berita terpercaya dengan liputan nasional dan internasional serta analisis mendalam tentang peristiwa terkini.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 sm:gap-6 bg-linear-to-r from-white/5 to-white/2 rounded-3xl mx-4 sm:mx-6 lg:mx-8 p-5 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-white/10 shadow-xl">
        {[
          { value: '230', label: 'News' },
          { value: '25k', label: 'Follower' },
          { value: '120', label: 'Following' },
          { value: '50k', label: 'Uploaded' }
        ].map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 text-white bg-linear-to-r from-red-500 to-red-600 bg-clip-text">
              {stat.value}
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 mb-5 sm:mb-6">
        {['News', 'Update'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`flex-1 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold transition-all border ${
              activeTab === tab.toLowerCase()
                ? 'bg-linear-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 border-transparent'
                : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4">
        {detailNews.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};
