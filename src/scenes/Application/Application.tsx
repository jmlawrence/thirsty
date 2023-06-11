'use client';

import { ReactNode } from 'react';
import s from './Application.module.scss';
import Header from './components/Header';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

const Application = ({
  children,
}: {
  children?: ReactNode;
}) => {
  return (
    <div className={s.pageWrapper}>
      <QueryClientProvider client={queryClient}>
        <Header />
        {children}
      </QueryClientProvider>
    </div>
  );
};

export default Application;
