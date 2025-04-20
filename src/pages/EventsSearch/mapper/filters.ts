import type { Tag } from "@/entities/Tag";

import type { APIParams } from "../api";
import type { FiltersSchema } from "../model/filters";

export function mapFiltersToAPI(filters: FiltersSchema): APIParams {
  return {
    keywords: filters.keywords ?? "",
    tags: mapTagsToAPI(filters.tags),
    dateWithin: filters.time,
  };
}

function mapTagsToAPI(tags: Tag[]) {
  return tags.map((tag) => tag.id).join(",");
}
