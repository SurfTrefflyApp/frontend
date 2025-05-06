const EventSkeleton = () => {
  return (
    <div className="w-full aspect-4/2 bg-white rounded-2xl overflow-hidden shadow-md">
      <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
    </div>
  );
};

export const EventsSearchListSkeleton = () => {
  return (
    <div className="mt-2 p-2 lg:max-w-2/4 w-full mx-auto no-scrollbar flex flex-col gap-4">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <EventSkeleton key={index} />
        ))}
    </div>
  );
};
