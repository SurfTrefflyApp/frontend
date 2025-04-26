import { createFormDataAppender } from "@/shared/formData/createFormDataAppender";

import type { EventSchema } from "../../../widgets/EventForm/model/formSchema";

export type ServerEvent = {
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
  image?: File;
};

function formatDate(dateTime: string) {
  const [date, time] = dateTime.split(" ");
  const [d, mon, y] = date.split(".");
  const [h, m] = time.split(":");

  return `${y}-${mon}-${d}T${h}:${m}:00Z`;
}

type ServerEventSchemaWithoutTags = Omit<ServerEvent, "tags">;

export function mapDataToServer(values: EventSchema): FormData {
  const mappedObject: ServerEventSchemaWithoutTags = {
    name: values.title,
    description: values.description,
    latitude: values.location.coordinates[0],
    longitude: values.location.coordinates[1],
    address: values.location.address,
    date: formatDate(values.dateTime),
    is_private: values.eventType === "private",
    is_premium: false,
    capacity: values.participantsCount,
    image: values.image,
  };
  const appendEventForm =
    createFormDataAppender<ServerEventSchemaWithoutTags>();
  const formData = appendEventForm(mappedObject);
  values.tags.forEach(({ id }) => {
    console.debug(id);
    formData.append("tags", id.toString());
  });

  return formData;
}
