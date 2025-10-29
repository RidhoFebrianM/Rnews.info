export const Loading = () => {
  return (
    <div className="py-12 sm:py-16 text-center">
      <div className="w-14 h-14 sm:w-16 sm:h-16 border-4 border-white/10 border-t-red-500 rounded-full animate-spin mx-auto mb-5"></div>
      <p className="text-slate-400 text-sm sm:text-base">Memuat berita...</p>
    </div>
  );
};