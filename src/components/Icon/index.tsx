import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type IconProps = {
  icon: JSX.Element
  badge?: boolean
  color?: 'white' | 'black' | 'blue'
  as?: React.ElementType
} & ButtonTypes

const Icon: React.ForwardRefRenderFunction<S.StyleProps, IconProps> = (
  { 
    icon, 
    badge = false, 
    color = 'white',
    ...props 
  },
  ref
) => (
  <S.Wrapper badge={badge} color={color} ref={ref} {...props}>
    {icon}
  </S.Wrapper>
)

export default forwardRef(Icon)
