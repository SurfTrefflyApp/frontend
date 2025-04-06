export const EventSkeleton = () => {
  return (
    <div className="relative aspect-video bg-white rounded-3xl overflow-hidden shadow-md">
      <div className="shimmer h-full w-full bg-surface-container" />
    </div>
  );
};

export const EventsSkeleton = () => {
  return <EventSkeleton />;
};
