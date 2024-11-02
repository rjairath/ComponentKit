import React from "react";
import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/styles/theme';
import "@fontsource/roboto-slab";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		docs: {
			theme: themes.light
		}
	},
};

export const decorators = [
	(Story, context) => {
	  // Determine the theme based on the selected scheme
	  const selectedTheme = context.globals.scheme === "dark" ? darkTheme : lightTheme;
  
	  return (
		<ThemeProvider theme={selectedTheme}>
		  <Story />
		</ThemeProvider>
	  );
	},
];

export default preview;

// Toolbar items
export const globalTypes = {
	scheme: {
		name: "Scheme",
		description: "Select light or dark",
		defaultValue: "light",
		toolbar: {
			icon: "mirror",
			items: ["light", "dark"],
			dynamicTitle: true,
		}
	}
}