import { Link } from 'react-router';

import { routes } from '@/shared/router';
import { AuthLayout } from '@/shared/ui/AuthLayout';
import { Button } from '@/shared/ui/Button';

export const Welcome = () => {
  return (
    <AuthLayout
      footer={
        <div className="flex flex-col items-stretch w-full gap-4">
          <Button asChild>
            <Link to={routes.register}>Зарегистрироваться</Link>
          </Button>
          <Button asChild>
            <Link to={routes.login}>Уже знакомы? Войти</Link>
          </Button>
        </div>
      }
    >
      <div className="flex flex-col items-center gap-5 md:gap-6">
        <h1 className="font-semibold text-4xl md:text-7xl text-center">
          Привет, давай познакомимся!
        </h1>
        <Button variant="secondary" asChild>
          <Link to={routes.main}>Продолжить как гость</Link>
        </Button>
      </div>
    </AuthLayout>
  );
};
