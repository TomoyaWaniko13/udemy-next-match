'use client';

import { loginSchema, LoginSchema } from '@/lib/validationSchemas/loginSchema';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import { GiPadlock } from 'react-icons/gi';
import { Button } from '@nextui-org/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInUser } from '@/app/actions/authActions';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema), mode: 'onTouched' });

  const onSubmit = async (data: LoginSchema) => {
    const result = await signInUser(data);

    if (result.status === 'success') {
      router.push('/members');
    } else {
      console.log(result.error);
    }
  };

  return (
    <Card className='w-2/5 mx-auto '>
      <CardHeader className={'flex flex-col items-center justify-center'}>
        <div className={'flex flex-col gap-2 items-center text-secondary'}>
          <div className={'flex flex-row items-center gap-3'}>
            <GiPadlock size={30} />
            <h1 className={'text-3xl font-semibold'}>Login</h1>
          </div>
          <p className={'text-neutral-500'}>Welcome back to NextMatch</p>
        </div>
      </CardHeader>
      <CardBody className='overflow-visible py-2'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={'space-y-4'}>
            <Input
              className={'space-y-4'}
              label={'Email'}
              variant={'bordered'}
              {...register('email')}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message as string}
            />
            <Input
              className={'space-y-4'}
              label={'Password'}
              variant={'bordered'}
              type={'password'}
              {...register('password')}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message as string}
            />
            <Button isLoading={isSubmitting} isDisabled={!isValid} fullWidth color={'secondary'} type={'submit'}>
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default LoginForm;
