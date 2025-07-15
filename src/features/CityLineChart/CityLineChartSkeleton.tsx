export const CityLineChartSkeleton = () => {
  return (
    <div className="size-full p-4 border-2 border-solid border-slate-600 rounded-xl">
      <h3 className="bg-gray-300 rounded mb-5 h-8 w-44"></h3>
      <div className="flex flex-wrap gap-1 mb-4 animate-pulse">
        <div className="bg-gray-300 rounded h-8 w-24"></div>
        <div className="bg-gray-300 rounded h-8 w-18"></div>
        <div className="bg-gray-300 rounded h-8 w-18"></div>
        <div className="bg-gray-300 rounded h-8 w-18"></div>
        <div className="bg-gray-300 rounded h-8 w-18"></div>
        <div className="bg-gray-300 rounded h-8 w-18"></div>
        <div className="bg-gray-300 rounded h-8 w-18"></div>
      </div>
      <div className="flex items-center justify-center h-64">
        <div className="w-6 h-6 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};