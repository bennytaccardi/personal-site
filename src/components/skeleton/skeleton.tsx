"use client";

export default function Skeleton() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-8">Portfolio Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="group relative flex flex-col rounded-lg bg-white/5 border border-white/10 
              transition-all duration-850 overflow-hidden animate-pulse"
          >
            {/* Skeleton Content */}
            <div className="p-6 flex-1 flex flex-col">
              {/* Title and Date Skeleton */}
              <div className="flex justify-between items-start mb-2">
                <div className="h-5 w-1/3 bg-gray-300/20 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-300/20 rounded"></div>
              </div>

              {/* Description Skeleton */}
              <div className="h-4 w-full bg-gray-300/20 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-300/20 rounded mb-2"></div>
              <div className="h-4 w-2/3 bg-gray-300/20 rounded mb-4"></div>

              {/* Tech Stack Skeleton */}
              <div className="flex flex-wrap gap-2 mb-4">
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="px-2 py-1 h-6 w-12 bg-gray-300/20 rounded-full"
                  ></div>
                ))}
              </div>

              {/* Links Skeleton */}
              <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                <div className="h-4 w-16 bg-gray-300/20 rounded"></div>
                <div className="h-4 w-16 bg-gray-300/20 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
