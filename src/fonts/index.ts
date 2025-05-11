import { Anonymous_Pro } from 'next/font/google';
import localFont from 'next/font/local';

export const anonymousPro = Anonymous_Pro({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const logoFont = localFont({
    src: './LogoFont.ttf',
    display: 'swap'
});
