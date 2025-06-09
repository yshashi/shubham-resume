import { useContext } from 'react';
import { ThemeProviderContext, Theme } from '../lib/theme-context';

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

export type { Theme };
