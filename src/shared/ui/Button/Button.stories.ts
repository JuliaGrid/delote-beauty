
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './index';
import { ButtonTheme } from './ui/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        theme: { control: 'color' },
    },
    args: { onClick: fn(), children: 'hi' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        theme: ButtonTheme.CLEAR
        // label: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        // label: 'Button',
    },
};

export const Large: Story = {
    args: {
        // size: 'large',
        // label: 'Button',
    },
};

export const Small: Story = {
    args: {
        // size: 'small',
        // label: 'Button',
    },
};
