import * as React from 'react'
import { styled } from '@stackup-ui/web'
import * as avatar from '@radix-ui/react-avatar'
import { User } from 'phosphor-react'

import {
  avatarContainer,
  avatarImage,
  avatarFallback,
} from '@stackup-ui/styles'

const AvatarContainer = styled(avatar.Root, avatarContainer)
const AvatarImage = styled(avatar.Image, avatarImage)
const AvatarFallback = styled(avatar.Fallback, avatarFallback)

export interface AvatarProps extends React.ComponentProps<typeof AvatarImage> {}

export const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
