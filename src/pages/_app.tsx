/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from 'react-toastify';

import api from '@/lib/api/axios';

import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';
import '@/styles/app.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    api.post('/api/login', {
      email: 'suzuki@example.com',
      password: '123456789'
    }).then(response => {
      console.log(response);
    });
  }, []);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      },
      mutations: {
        retry: false
      }
    }
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ToastContainer hideProgressBar={true} />
    </QueryClientProvider>
  );
}

export default MyApp;
