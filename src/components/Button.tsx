import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button type='button' className='btn'>
      {children}
    </button>
  );
}
