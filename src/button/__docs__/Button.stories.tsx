import React from 'react';
import type { Meta, StoryObj, Decorator } from '@storybook/react';
import Example from "./Example";
import { action } from '@storybook/addon-actions';
import { FaCoffee } from 'react-icons/fa';

const meta: Meta<typeof Example> = {
    title: "Button",
    component: Example,
    argTypes: {
        handleClick: { action: "onClick" },
        theme: { control: false }, // Disables control for `theme`
        icon: { control: false } // Disables control for `icon`
    },
}

export default meta;
type Story = StoryObj<typeof Example>;


export const Primary: Story = {
    args: {
        text: "Button",
        primary: true,
        disabled: false,
        size: "medium",
        handleClick: action("Button Primary"),
        borderStyle: "1px solid black"
    }
};

export const Secondary: Story = {
    args: {
        text: "Button",
        primary: false,
        disabled: false,
        size: "medium",
        handleClick: action("Button Secondary"),
        borderStyle: "1px dashed black"
    },
};

export const WithIcon: Story = {
    args: {
        text: "Button",
        primary: true,
        disabled: false,
        size: "medium",
        handleClick: action("Button Icon"),
        icon: <FaCoffee />,
        iconPosition: "left"
    },
};

export const LoadingButton: Story = {
    args: {
        text: "Loading Button",
        primary: true,
        disabled: false,
        size: "medium",
    },
};