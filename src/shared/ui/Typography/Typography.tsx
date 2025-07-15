import type { FC, PropsWithChildren } from 'react';

const variants = {
  h1: 'text-4xl font-bold font-inter',
  h2: 'text-3xl font-semibold font-inter',
  p: 'text-base font-satoshi',
} as const;

type TypographyProps = PropsWithChildren<{
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  variant?: keyof typeof variants;
  className?: string;
}>;

export const Typography: FC<TypographyProps> = ({
                                                  as: Tag = 'p',
                                                  variant = 'p',
                                                  className = '',
                                                  children,
                                                }) => {
  return <Tag className={`${variants[variant]} ${className}`}>{children}</Tag>;
};
