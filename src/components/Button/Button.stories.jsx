import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'The visual style of the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take up the full width of its container',
    },
    children: {
      control: 'text',
      description: 'The content rendered inside the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button if set to true',
    }
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Sign up',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Log in',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    children: 'Cancel',
  },
};

export const FullWidth = {
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Continue Context',
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Disabled = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Processing...',
  },
};
