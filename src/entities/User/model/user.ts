import { Tag } from "@/entities/Tag/shared/user";

export interface User {
  username: string;
  email: string;
  tags: Tag[];
}
