import type { FC, PropsWithChildren } from 'react';

const variants = {
  h1: 'text-3xl sm:text-4xl md:text-5xl font-bold font-inter',
  h2: 'text-2xl sm:text-3xl md:text-4xl font-semibold font-inter',
  p: 'text-base sm:text-lg md:text-xl font-satoshi',
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
