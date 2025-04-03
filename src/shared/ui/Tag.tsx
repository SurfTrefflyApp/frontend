interface Tag {
  name: string;
}

export const Tag = ({ name }: Tag) => {
  return (
    <div className="bg-primary rounded-xl p-3 leading-none text-white text-base font-semibold">
      {name}
    </div>
  );
};
