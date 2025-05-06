const EventSkeleton = () => {
  return (
    <div className="w-full aspect-4/2 md:aspect-6/2 bg-white rounded-2xl overflow-hidden shadow-md">
      <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
    </div>
  );
};

export const EventsSearchListSkeleton = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 p-2 mt-2">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <EventSkeleton key={index} />
        ))}
    </div>
  );
};
