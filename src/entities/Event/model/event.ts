import type { Tag } from "@/entities/Tag/shared/event";

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
  ownerUsername: string;
  preview?: string;
  tags: Tag[];
  isOwner?: boolean;
  isParticipant?: boolean;
}
