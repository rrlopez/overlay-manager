import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};