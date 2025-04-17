import type { EventSchema } from "../model/formSchema";

interface ServerEvent {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  address: string;
  date: string;
  is_private: boolean;
  is_premium: boolean;
  tags: number[];
  capacity: number;
}

function formatDate(dateTime: string) {
  const [date, time] = dateTime.split(" ");
  const [d, mon, y] = date.split(".");
  const [h, m] = time.split(":");

  return `${y}-${mon}-${d}T${h}:${m}:00Z`;
}

export function mapDataToServer(values: EventSchema): ServerEvent {
  return {
    name: values.title,
    description: values.description,
    latitude: values.location.coordinates[0],
    longitude: values.location.coordinates[1],
    address: values.location.address,
    date: formatDate(values.dateTime),
    is_private: values.eventType === "private",
    is_premium: false,
    tags: values.tags.map((tag) => tag.id),
    capacity: values.participantsCount,
  };
}
