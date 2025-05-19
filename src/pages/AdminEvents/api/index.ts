import type { Event } from "@/entities/Event";

export const eventsMock: Event[] = [
  {
    id: 1,
    name: "Community Charity Run",
    description: "A 5K run to raise funds for local schools. All ages welcome!",
    capacity: 500,
    participantCount: 237,
    latitude: 40.7128,
    longitude: -74.006,
    address: "Central Park, New York, NY",
    date: "2023-10-15T09:00:00",
    isPrivate: false,
    isPremium: false,
    ownerUsername: "org_runner123",
    preview: "Join us for a fun morning run!",
    tags: [
      { id: 1, name: "sports" },
      { id: 2, name: "charity" },
    ],
    isOwner: false,
    isParticipant: true,
    imageEventUrl: "https://example.com/charity-run.jpg",
    imageUserUrl: "https://example.com/user-profiles/runner123.jpg",
  },
  {
    id: 2,
    name: "Exclusive Wine Tasting",
    description:
      "Private tasting of rare vintage wines with sommelier commentary",
    capacity: 30,
    participantCount: 28,
    latitude: 34.0522,
    longitude: -118.2437,
    address: "123 Vine Street, Los Angeles, CA",
    date: "2023-11-05T19:30:00",
    isPrivate: true,
    isPremium: true,
    ownerUsername: "winexpert42",
    preview: "Exclusive event for premium members only",
    tags: [
      { id: 3, name: "food" },
      { id: 4, name: "luxury" },
    ],
    isOwner: true,
    imageEventUrl: "https://example.com/wine-tasting.jpg",
  },
  {
    id: 3,
    name: "Book Club Meeting",
    description: "Monthly discussion of 'The Midnight Library' by Matt Haig",
    capacity: 20,
    participantCount: 12,
    latitude: 41.8781,
    longitude: -87.6298,
    address: "Chicago Public Library, Main Branch",
    date: "2023-09-20T18:00:00",
    isPrivate: false,
    isPremium: false,
    ownerUsername: "booklover99",
    tags: [
      { id: 5, name: "books" },
      { id: 6, name: "discussion" },
    ],
    isParticipant: false,
  },
];

export function getEvents() {
  return new Promise<Event[]>((resolve) => resolve(eventsMock));
}

export function deleteEvent(eventId: number) {
  return new Promise<Event[]>((resolve) =>
    resolve(eventsMock.filter((event) => event.id !== eventId)),
  );
}
