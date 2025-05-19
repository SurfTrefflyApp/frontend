const UserSkeleton = () => {
  return (
    <div className="w-full h-[90px] max-w-[400px] md:aspect-6/2 bg-white rounded-2xl overflow-hidden shadow-md">
      <div className="shimmer h-full w-full bg-surface-container rounded-2xl shadow" />
    </div>
  );
};
export const AdminUsersSkeleton = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 px-20 lg:max-w-2/4 mx-auto">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <UserSkeleton key={index} />
        ))}
    </div>
  );
};
