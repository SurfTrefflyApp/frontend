const EventSkeleton = () => {
  return (
    <div className="w-full aspect-video max-w-[600px] md:aspect-6/2 bg-white rounded-2xl overflow-hidden shadow-md">
      <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
    </div>
  );
};

export const AdminEventsSkeleton = () => {
  return (
    <div className="h-full w-full flex flex-col gap-6 p-2 pt-4 md:pt-2 mx-auto md:px-20 lg:max-w-1/2">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <EventSkeleton key={index} />
        ))}
    </div>
  );
};
