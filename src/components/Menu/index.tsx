import * as S from './styles'
import { Container } from '../Container'
import Icon from '../Icon'
import ProfilePhoto from '../ProfilePhoto'
import ToolTip from '../ToolTip'
import Link from 'next/link'

import {
  Chat,
  Groups,
  WebStories,
  Settings
} from 'styled-icons/material-outlined'

import { useState } from 'react'

export type MenuProps = {
  userProfile: string
}

const Menu = ({ userProfile }: MenuProps) => {
  const [active, setActive] = useState(0)

  return (
    <S.Wrapper>
      <Container>
        <S.Menu>
          <ProfilePhoto title="User name" img={userProfile} />
          <S.MenuItems>
            <S.MenuItem>
              <ToolTip direction="right" value="Stories">
                <Link href="#stories" passHref>
                  <Icon icon={<WebStories />} />
                </Link>
              </ToolTip>
            </S.MenuItem>
            <S.MenuItem>
              <ToolTip direction="right" value="Messages">
                <Link href="#chat" passHref>
                  <Icon icon={<Chat />} badge />
                </Link>
              </ToolTip>
            </S.MenuItem>
            <S.MenuItem>
              <ToolTip direction="right" value="Groups">
                <Link href="#groups" passHref>
                  <Icon icon={<Groups />} />
                </Link>
              </ToolTip>
            </S.MenuItem>
            <S.MenuItem>
              <ToolTip direction="right" value="Settings">
                <Link href="#settings" passHref>
                  <Icon icon={<Settings />} />
                </Link>
              </ToolTip>
            </S.MenuItem>
            <S.Line active={active} />
          </S.MenuItems>
        </S.Menu>
        <S.Logo>JN</S.Logo>
      </Container>
    </S.Wrapper>
  )
}

export default Menu
