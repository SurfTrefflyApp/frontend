import type { User } from "@/entities/User";

export const usersMock: User[] = [
  {
    id: 1,
    username: "User 1",
    email: "user1@user.ru",
    tags: [],
  },
  {
    id: 2,
    username: "User 2",
    email: "user2@user.ru",
    tags: [],
  },
  {
    id: 3,
    username: "User 3",
    email: "user3@user.ru",
    tags: [],
  },
  {
    id: 4,
    username: "User 4",
    email: "user4@user.ru",
    tags: [],
  },
];

export function getUsers() {
  return new Promise<User[]>((resolve) => resolve(usersMock));
}

export function deleteUser(userId: number) {
  return new Promise<User[]>((resolve) =>
    resolve(usersMock.filter((user) => user.id !== userId)),
  );
}
