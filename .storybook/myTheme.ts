import { create } from "@storybook/theming";

export default create({
	base: "dark",
	fontBase: '"Open Sans", sans-serif',
	fontCode: "monospace",

	brandTitle: "Custom Components",
	brandUrl: "https://example.com",
	brandImage: "https://storybook.js.org/images/placeholders/350x150.png",
	brandTarget: "_self",

	colorPrimary: "#3A10E5", 
	colorSecondary: "#585C6D",

	// UI Colors
	appBg: "#2D2F33",         // Dark gray background to reduce glare
	appContentBg: "#1E2022",  // Darker gray for content background
	appPreviewBg: "#F3F4F6",  // Matching dark gray for preview area
	appBorderColor: "#3A3D41", // Dark border to keep contrast without harshness
	appBorderRadius: 6,       // Keeps a modern rounded aesthetic

	// Text Colors
	textColor: "#E5E7EB",       // Soft light gray for readability
	textInverseColor: "#111827", // Almost black for inverse contrast

	// Toolbar Colors
	barTextColor: "#9CA3AF",    // Muted gray for inactive items
	barSelectedColor: "#D1D5DB", // Light gray for selected items
	barHoverColor: "#F3F4F6",   // Slightly lighter on hover
	barBg: "#1F2933",           // Dark background for toolbar to reduce brightness

	// Form Colors
	inputBg: "#1E2022",          // Dark input background for coherence
	inputBorder: "#374151",      // Dark gray border for inputs
	inputTextColor: "#E5E7EB",   // Light text for readability
	inputBorderRadius: 4,
});

