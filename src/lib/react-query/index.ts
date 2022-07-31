import { QueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const queryKeys = {
  user: 'user',
}

function queryErrorHandler(error: unknown): void {
  // error is type unknown because in js, anything can be an error(e.g. throw(5))
  const title =
    error instanceof Error ? error.message : 'error connecting to server';
  toast.error(title);
}

export function generateQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        onError: queryErrorHandler,
        staleTime: 60000, // 10 minutes
        cacheTime: 90000, // 15 minutes
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
      mutations: {
        onError: queryErrorHandler,
      },
    },
  });
}

export const queryClient = generateQueryClient();
