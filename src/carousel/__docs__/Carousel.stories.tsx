import React from 'react';
import type { Meta, StoryObj, Decorator } from '@storybook/react';
import Example from "./Example";

const imageList = [
    "https://picsum.photos/id/1/300/200",
    "https://picsum.photos/id/2/300/200",
    "https://picsum.photos/id/7/300/200",
    "https://picsum.photos/id/9/300/200",
    "https://picsum.photos/id/10/300/200"
]

const meta: Meta<typeof Example> = {
    title: "Carousel",
    component: Example,
}
export default meta;

type Story = StoryObj<typeof Example>;
export const Basic: Story = {
    args: {
        imageList: imageList,
        height: "200",
        width: "300"
    }
}

export const AutoPlay: Story = {
    args: {
        imageList: imageList,
        height: "200",
        width: "300",
        autoPlay: true,
        transitionDuration: 1000
    }
}