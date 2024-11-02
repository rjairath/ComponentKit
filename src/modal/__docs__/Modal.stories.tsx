import React from 'react';
import type { Meta, StoryObj, Decorator } from '@storybook/react';
import Example from "./Example";
import { Button } from '../../button';

const meta: Meta<typeof Example> = {
    title: "Modal",
    component: Example,
}
export default meta;

type Story = StoryObj<typeof Example>;
export const Basic: Story = {
    args: {
        headerTitle: "Basic Modal",
        contentChildren: <div>
            <p>Content...</p>
            <p>Content...</p>
            <p>Content...</p>
        </div>,
        footer: <Button 
            handleClick={() => console.log('Footer Action')}
            text="OK"
            size="small"
            primary={true}
        >
        </Button>,
    }
};

export const AsyncLogic: Story = {
    args: {
        headerTitle: "Async Modal",
        contentChildren: <div>
            <p>Click OK to close modal in 2s</p>
        </div>
    }
};