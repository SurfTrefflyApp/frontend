export const PaymentSkeleton = () => {
  return (
    <main className="flex-1 w-full relative flex flex-col gap-8 justify-center p-8">
      <div className="w-full aspect-video md:aspect-6/2 bg-white rounded-2xl overflow-hidden shadow-md">
        <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
      </div>
      <div className="w-full aspect-video md:aspect-6/2 bg-white rounded-2xl overflow-hidden shadow-md">
        <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
      </div>
      <div className="w-full aspect-video md:aspect-6/2 bg-white rounded-2xl overflow-hidden shadow-md">
        <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
      </div>
    </main>
  );
};
