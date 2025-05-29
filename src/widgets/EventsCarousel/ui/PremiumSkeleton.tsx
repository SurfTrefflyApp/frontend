export const EventSkeleton = () => {
  return (
    <div className="min-w-[400px] relative aspect-video bg-white rounded-3xl overflow-hidden shadow-md">
      <div className="shimmer h-full w-full bg-surface-container" />
    </div>
  );
};

export const PremiumSkeleton = () => {
  return (
    <div className="flex py-2 overflow-scroll no-scrollbar gap-4">
      <EventSkeleton />
      <EventSkeleton />
      <EventSkeleton />
    </div>
  );
};
