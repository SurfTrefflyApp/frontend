import { useParams } from "react-router";

export const Event = () => {
  const { id } = useParams();

  return <>Event {id}</>;
};
