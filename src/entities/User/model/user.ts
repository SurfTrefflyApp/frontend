import type { Tag } from "@/entities/Tag/shared/user";

export interface User {
  id?: number;
  username: string;
  email: string;
  tags: Tag[];
  imageUrl?: string;
}
