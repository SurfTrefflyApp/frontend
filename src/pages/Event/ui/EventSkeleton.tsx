export const EventSkeleton = () => {
  return (
    <main className="p-2 lg:max-w-2/4 w-full mx-auto no-scrollbar flex flex-col gap-4">
      <div className="w-full aspect-5/2 bg-white rounded-2xl overflow-hidden shadow-md">
        <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
      </div>
      <div className="w-full aspect-8/2 bg-white rounded-2xl overflow-hidden shadow-md">
        <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-1/2 h-5 bg-white rounded-2xl overflow-hidden shadow-md">
          <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
        </div>
        <div className="w-1/3 h-5 aspect-8/2 bg-white rounded-2xl overflow-hidden shadow-md">
          <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
        </div>
        <div className="w-1/3 h-5 aspect-8/2 bg-white rounded-2xl overflow-hidden shadow-md">
          <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
        </div>
        <div className="w-1/3 h-5 aspect-8/2 bg-white rounded-2xl overflow-hidden shadow-md">
          <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
        </div>
      </div>
      <div className="w-full aspect-8/2 bg-white rounded-2xl overflow-hidden shadow-md">
        <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
      </div>
      <div className="w-full aspect-4/2 bg-white rounded-2xl overflow-hidden shadow-md">
        <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
      </div>
      <div className="w-1/3 aspect-4/2 bg-white rounded-2xl overflow-hidden shadow-md">
        <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
      </div>
    </main>
  );
};
