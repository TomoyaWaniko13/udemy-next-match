'use client';
import LoginForm from '@/app/(auth)/login/LoginForm';
import { useEffect } from 'react';

const LoginPage = () => {
  return (
    <div className={'flex items-center justify-center align-middle min-h-screen'}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
