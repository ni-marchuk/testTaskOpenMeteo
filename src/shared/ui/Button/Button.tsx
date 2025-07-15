import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const Button: FC<ButtonProps> = ({ children, disabled = false, ...rest }) => {
  return (
    <button
      className={
        clsx(
          `bg-cyan-700 text-white active:bg-cyan-800 font-satoshi font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150`,
          {
            'bg-cyan-950': disabled,
          },
        )
      }
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};