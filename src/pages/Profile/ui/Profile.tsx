import { useUnit } from "effector-react";
import { Link } from "react-router";

import { $isAuth, logoutEvent as logout } from "@/shared/auth";
import { routes } from "@/shared/router";
import { Button } from "@/shared/ui/button";

export const Profile = () => {
  const isAuth = useUnit($isAuth);
  const logoutEvent = useUnit(logout);

  return (
    <main className="mx-auth">
      {isAuth ? <p>User is logged in</p> : <p>we dond know who you are</p>}
      {isAuth ? (
        <Button onClick={logoutEvent}>Logout</Button>
      ) : (
        <Button asChild>
          <Link to={routes.welcome}>Auth</Link>
        </Button>
      )}
    </main>
  );
};
