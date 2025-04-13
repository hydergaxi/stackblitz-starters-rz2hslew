import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
          './pages/**/*.{js,ts,jsx,tsx,mdx}',
              './components/**/*.{js,ts,jsx,tsx,mdx}',
                ],
                  darkMode: 'class',
                    theme: {
                        extend: {
                              fontFamily: {
                                      sans: ['Inter', 'sans-serif'],
                                            },
                                                  backgroundImage: {
                                                          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                                                                  'gradient-conic':
                                                                            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                                                                                  },
                                                                                        animation: {
                                                                                                pulseSlow: 'pulse 3s infinite',
                                                                                                      },
                                                                                                            colors: {
                                                                                                                    neon: {
                                                                                                                              purple: '#9f00ff',
                                                                                                                                        pink: '#ff00c3',
                                                                                                                                                },
                                                                                                                                                      },
                                                                                                                                                          },
                                                                                                                                                            },
                                                                                                                                                              plugins: [],
                                                                                                                                                              };
                                                                                                                                                              export default config;