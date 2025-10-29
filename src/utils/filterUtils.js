export const filterNewsBySearch = (news, searchQuery) => {
  return news.title.toLowerCase().includes(searchQuery.toLowerCase());
};

export const filterNewsByCategory = (news, activeCategory) => {
  return activeCategory === 'all' || news.categoryId === activeCategory;
};

export const filterNewsByBookmark = (news, bookmarkedUrls) => {
  return bookmarkedUrls.includes(news.url);
};

export const filterNews = (newsList, searchQuery, activeCategory, activeTab, bookmarkedUrls) => {
  return newsList.filter((news) => {
    const matchesSearch = filterNewsBySearch(news, searchQuery);
    const matchesCategory = filterNewsByCategory(news, activeCategory);
    const matchesBookmark = activeTab !== 'bookmark' || filterNewsByBookmark(news, bookmarkedUrls);
    return matchesSearch && matchesCategory && matchesBookmark;
  });
};