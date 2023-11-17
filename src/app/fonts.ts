import { Inter, Pacifico, Roboto_Mono } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const pacifico = Pacifico({
  subsets: ['cyrillic'],
  display: 'swap',
  weight: '400',
});
