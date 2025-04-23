
import 'tailwindcss/tailwind.css';

declare module 'tailwindcss/tailwind.css' {
  export interface Theme {
    colors: {
      'neon-blue': string;
      'neon-purple': string;
      'neon-pink': string;
      background: string;
      foreground: string;
    }
  }
}

declare global {
  interface Window {
    lenis: any;
  }
}
