'use client';

import { ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';

const Providers = ({ children }: { children: ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
