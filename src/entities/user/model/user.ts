import { Tag } from "@/entities/tag/shared/user";

export interface User {
  username: string;
  email: string;
  tags: Tag[];
}
