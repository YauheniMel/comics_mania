import { AButton } from '../../components/AButton/AButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/AButton',
  component: AButton,
} as ComponentMeta<typeof AButton>;

const Template: ComponentStory<typeof AButton> = args => <AButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Button kfkffd kdskodk ksdodk',
  onClick: () => alert('Click'),
};
