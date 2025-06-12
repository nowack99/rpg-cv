
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'pixel': ['Press Start 2P', 'monospace'],
				'retro': ['VT323', 'monospace'],
			},
			colors: {
				// RPG Dark Theme Colors
				'dungeon': {
					'950': '#0a0a0f',
					'900': '#1a1a2e',
					'800': '#16213e',
					'700': '#1f2937',
					'600': '#374151',
					'500': '#6b7280',
				},
				'fantasy': {
					'gold': '#ffd700',
					'copper': '#b87333',
					'silver': '#c0c0c0',
					'emerald': '#50c878',
					'ruby': '#e0115f',
					'sapphire': '#0f52ba',
					'amethyst': '#9966cc',
				},
				'health': '#dc2626',
				'mana': '#3b82f6',
				'xp': '#16a34a',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			backgroundImage: {
				'dungeon-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
				'fantasy-gradient': 'linear-gradient(45deg, #1f2937 0%, #374151 100%)',
				'quest-gradient': 'linear-gradient(90deg, #16213e 0%, #1a1a2e 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(255, 215, 0, 0.6)'
					}
				},
				'stat-fill': {
					'0%': {
						width: '0%'
					},
					'100%': {
						width: 'var(--stat-width)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'stat-fill': 'stat-fill 1.5s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
