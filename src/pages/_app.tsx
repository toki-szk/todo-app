import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';
import '@/styles/app.css';

function MyApp({ Component, pageProps }: AppProps) {
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
