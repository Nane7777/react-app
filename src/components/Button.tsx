import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  color?: string;
  onClick: () => void;
};

export default function Button({
  children,
  onClick,
  color = 'primary',
}: ButtonProps) {
  return (
    <button
      type='button'
      className={`btn btn-${color}`}
      onClick={onClick}
      color={color}
    >
      {children}
    </button>
  );
}
