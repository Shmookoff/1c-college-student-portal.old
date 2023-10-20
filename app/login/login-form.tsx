'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  login: z
    .string({ required_error: 'Обязательное поле' })
    .max(15, 'Максимум 15 символов')
    .refine((v) => /^\d+$/.test(v), {
      message: 'Только цифры',
    })
    .transform((v) => v.padEnd(15, ' ')),
  password: z
    .string({ required_error: 'Обязательное поле' })
    .max(15, 'Максимум 15 символов')
    .refine((v) => /^\d+$/.test(v), {
      message: 'Только цифры',
    })
    .transform((v) => v.padEnd(15, ' ')),
});

const LoginForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { login: '', password: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    const response = await fetch('/api/auth/login', {
      body: JSON.stringify(values),
      method: 'POST',
    });
    setIsLoading(false);
    if (response.ok) {
      router.push('/dashboard');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="login"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Логин</FormLabel>
              <FormControl>
                <Input disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input disabled={isLoading} type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} className="w-full" type="submit">
          Войти
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
