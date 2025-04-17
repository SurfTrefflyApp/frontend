import type { Tag as TagModel } from "@/entities/Tag";

import { Tag } from "./Tag";

interface TagsContainer {
  tags: TagModel[];
  emptyText: string;
}

export const TagsContainer = ({ tags, emptyText }: TagsContainer) => {
  return (
    <div className="text-center flex justify-center items-center flex-wrap gap-2 gap-x-6">
      {tags.length ? (
        tags.map(({ id, name }) => (
          <Tag key={id} name={name} variant="static" />
        ))
      ) : (
        <p className="text-sm">{emptyText}</p>
      )}
    </div>
  );
};
