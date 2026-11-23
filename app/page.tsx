'use client'

import { useThemeContext, ThemeContextProvider } from '../context/themeContext'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
      <main>
        <ThemeContextProvider>
        <div style={{ fontFamily: montserrat.style.fontFamily }}>Hello world!</div>
        <div>Dark mode is {useThemeContext().darkMode ? 'On' : 'Off'}</div>
        </ThemeContextProvider>
      </main>
  );
}