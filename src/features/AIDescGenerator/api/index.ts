// import { api } from "@/shared/api";

interface Limit {
  limit: number;
  remaining: number;
  resetAt: string;
}

const mockedLimit: Limit = {
  limit: 3,
  remaining: 2,
  resetAt: "2025-05-17T21:21:13.6427902Z",
};

export function getUserLimit() {
  // return api.get<Limit>('/users/generate-limit');
  return new Promise<Limit>((resolve) => resolve(mockedLimit));
}

interface DescriptionResponse {
  description: string;
  remaining: number;
  resetAt: string;
}

const generationMock: DescriptionResponse = {
  description:
    'Погрузитесь в мир невероятных приключений с "Скибиди" — уникальным кинотеатром, где главные герои — забавные и харизматичные скибиди-унитазы! Это не просто просмотр фильмов, это настоящее погружение в атмосферу веселья, юмора и неожиданных поворотов сюжета. Каждый сеанс — это шквал эмоций, смеха и удивления, который не оставит равнодушным ни детей, ни взрослых. Откройте для себя мир, где обычные унитазы становятся настоящими звездами экрана! Приходите, чтобы посмеяться, удивиться и получить заряд позитива. "Скибиди" — кинотеатр, который подарит вам незабываемые впечатления и яркие эмоции!',
  remaining: 2,
  resetAt: "2025-05-17 22:18:46.7106223 +0300 MSK m=+4400.303406501",
};

export function generateDescription(eventName: string, maxLength = 500) {
  console.debug(eventName, maxLength);
  // return api.post<DescriptionResponse>("/events/generate-desc", eventName);
  return new Promise<DescriptionResponse>((resolve) => resolve(generationMock));
}
