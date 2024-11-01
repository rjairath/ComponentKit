import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
	colors: {
		primary: "#6F4E37", // Dark brown for main brand color
		secondary: "#D2B48C", // Light tan for secondary elements
		background: "#FFF8E7", // Soft cream background for a warm, cozy feel
		text: "#4B3621", // Dark coffee color for primary text
		accent: "#C19A6B" // Accent color for highlights or buttons
	},
	fonts: {
		base: '"Open Sans", sans-serif', // Base font for the theme
		heading: '"Roboto Slab", sans-serif', // Font for headings
		code: "monospace" // Font for code snippets
	},
	spacing: {
		xs: "4px",
		sm: "8px",
		md: "16px",
		lg: "24px",
		xl: "32px"
	},
	padding: {
		small: "8px 24px 8px",
		medium: "10px 32px 10px",
		large: "16px 32px 16px"
	},
	borders: {
		radius: "5px" // Border radius for buttons and containers
	},
	brand: {
		title: "Light Theme Components",
		url: "https://example.com",
		image: "https://storybook.js.org/images/placeholders/350x150.png"
	}
};

export const darkTheme: DefaultTheme = {
	colors: {
		primary: "#D7CCC8", // Soft beige as the main brand color for contrast on dark background
		secondary: "#A1887F", // Warm coffee tone for secondary elements
		background: "#2D2424", // Dark coffee background for a cozy, muted effect
		text: "#EDE0D4", // Light coffee cream for primary text
		accent: "#8D6E63" // Deep mocha accent color for highlights or buttons
	},
	fonts: {
		base: '"Open Sans", sans-serif', // Consistent base font
		heading: '"Roboto Slab", sans-serif', // Consistent heading font
		code: "monospace" // Consistent code font
	},
	spacing: {
		xs: "4px",
		sm: "8px",
		md: "16px",
		lg: "24px",
		xl: "32px"
	},
	padding: {
		small: "8px 24px 8px",
		medium: "10px 32px 10px",
		large: "16px 32px 16px"
	},
	borders: {
		radius: "5px" // Border radius to match the light theme for consistency
	},
	brand: {
		title: "Dark Theme Components",
		url: "https://example.com",
		image: "https://storybook.js.org/images/placeholders/350x150.png"
	}
};

