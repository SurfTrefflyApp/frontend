const EventSkeleton = () => {
  return (
    <div className="min-w-90 md:min-w-120 aspect-3/2 bg-white rounded-2xl overflow-hidden shadow-md">
      <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
    </div>
  );
};

export const EventsSkeleton = () => {
  return (
    <div className="flex gap-4 h-fit w-full bg-surface-container-low rounded-3xl p-3 overflow-x-auto no-scrollbar">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <EventSkeleton key={index} />
        ))}
    </div>
  );
};
