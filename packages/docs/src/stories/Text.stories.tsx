import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@erick-ui/react'

export default {
    title: 'Typrography/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, et aliquid, aspernatur fugiat iure odio fuga sed similique temporibus officia laborum assumenda, quod ducimus soluta velit provident autem quisquam! Harum.'
    },
    argTypes: {
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control: 'inline-radio'
        },
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong Text',
        as: 'strong'
    }
}



