import { FC } from 'react';

import LoginForm from './login-form';

const LoginPage: FC = () => {
  return (
    <div className="container flex h-full grow items-center justify-center">
      <div className="flex w-full max-w-md flex-col gap-10">
        <h2 className="text-3xl font-bold">Вход</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
