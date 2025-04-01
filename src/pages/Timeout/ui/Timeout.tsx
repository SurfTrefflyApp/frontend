import { Link } from "react-router";

import { routes } from "@/shared/router";

export const Timeout = () => {
  return (
    <div>
      <h1>504 Timeout Error</h1>
      <p>Сервер не отвечает. Пожалуйста, попробуйте позже.</p>
      <Link to={routes.main}>Вернуться на главную</Link>
    </div>
  );
};
