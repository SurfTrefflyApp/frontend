import { Tag } from "@/entities/Tag/shared/event";

export interface Event {
  id: number;
  name: string;
  description: string;
  capacity: number;
  participantCount: number;
  latitude: number;
  longitude: number;
  address: string;
  date: string;
  isPrivate: boolean;
  isPremium: boolean;
  ownerName: string;
  preview?: string;
  tags: Tag[];
}
