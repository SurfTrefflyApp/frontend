export const ProfileSkeleton = () => {
  return (
    <main className="mx-auto flex flex-col h-full max-w-2xl gap-8 overflow-hidden flex-1 w-full">
      <div className="aspect-video w-full">
        <div className="flex flex-col bg-surface-container items-center rounded-b-3xl md:rounded-t-3xl h-full w-full overflow-hidden shadow-md">
          <div className="shimmer h-full w-full bg-secondary-container shadow" />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="w-full aspect-5/2 bg-white rounded-2xl overflow-hidden shadow-md">
          <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
        </div>
        <div className="w-full aspect-4/2 bg-white rounded-2xl overflow-hidden shadow-md">
          <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
        </div>
      </div>
    </main>
  );
};
