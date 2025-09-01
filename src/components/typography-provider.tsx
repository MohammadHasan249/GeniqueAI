"use client";

import { Inter, Poppins, Playfair_Display, JetBrains_Mono, Montserrat, Source_Serif_4, Space_Grotesk, DM_Sans, Crimson_Text } from 'next/font/google';
import React from 'react';

// Pre-load all fonts we might use
const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap'
});

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
});

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap'
});

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap'
});

const sourceSerif4 = Source_Serif_4({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-source-serif',
  display: 'swap'
});

const dmSans = DM_Sans({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap'
});

const crimsonText = Crimson_Text({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  variable: '--font-crimson',
  display: 'swap'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains',
  display: 'swap'
});

// Create a combined class name with all font variables
const allFontVariables = [
  inter.variable,
  poppins.variable,
  playfairDisplay.variable,
  spaceGrotesk.variable,
  montserrat.variable,
  sourceSerif4.variable,
  dmSans.variable,
  crimsonText.variable,
  jetbrainsMono.variable
].join(' ');

interface TypographyProviderProps {
  children: React.ReactNode;
  className?: string;
}

export function TypographyProvider({ children, className = "" }: TypographyProviderProps) {
  return (
    <div className={`${allFontVariables} ${className}`}>
      {children}
    </div>
  );
}

// Export individual font instances if needed
export {
  inter,
  poppins,
  playfairDisplay,
  spaceGrotesk,
  montserrat,
  sourceSerif4,
  dmSans,
  crimsonText,
  jetbrainsMono
};
