import { useUnit } from "effector-react";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router";

import { setErrorEvent } from "@/shared/api";
import { routes } from "@/shared/router";

import { deleteEvent } from "../api";

export const useEventDeleteController = (eventId: number) => {
  const navigate = useNavigate();
  const setError = useUnit(setErrorEvent);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = useCallback(async () => {
    setDeleting(true);
    try {
      await deleteEvent(eventId);
      navigate(routes.profile);
    } catch (error) {
      setError(error);
    } finally {
      setDeleting(false);
    }
  }, [setError, navigate, eventId]);

  return { dialogOpen, setDialogOpen, handleDelete, deleting };
};
