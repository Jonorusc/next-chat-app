import * as S from './styles'

export type MenuProps = {
  divider?: boolean
}

const Menu = ({divider = false}: MenuProps) => (
  <S.Wrapper>
    <h1>Menu</h1>
  </S.Wrapper>
)

export default Menu