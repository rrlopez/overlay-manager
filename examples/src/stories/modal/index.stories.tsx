import type { Meta, StoryObj } from '@storybook/react';
import { ModalExample } from './';
// import mdx from "./index.mdx";
import src from './index?raw';
import * as DocBlock from '@storybook/blocks';

const meta = {
  title: 'Examples/Modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: ()=>(
        <>
          <DocBlock.Title/>
          <DocBlock.Description/>
          <DocBlock.Subtitle/>
          <DocBlock.Controls/>
          <DocBlock.Stories/>
        </>
      ),
    },
  },
} satisfies Meta<typeof ModalExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: ModalExample,
  args: {},
  parameters: {
    docs: {
      source: {
        code: src,
        language: 'tsx',
      },
    },
  },
};

export const PassingCustomProps: Story = {
  render: ModalExample,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Another description on the story, overriding the comments'
      },
      source: {
        code: src,
        language: 'tsx',
      },
    },
  },
};

export const PersistModalState: Story = {
  render: ModalExample,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Another description on the story, overriding the comments'
      },
      source: {
        code: src,
        language: 'tsx',
      },
    },
  },
};

export const DisplayLoadingModal: Story = {
  render: ModalExample,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Another description on the story, overriding the comments'
      },
      source: {
        code: src,
        language: 'tsx',
      },
    },
  },
};