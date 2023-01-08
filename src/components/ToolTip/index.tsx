import { forwardRef, AnchorHTMLAttributes } from 'react'
import * as S from './styles'

type HTMLTypes = AnchorHTMLAttributes<HTMLAnchorElement>

export type TooltipProps = {
  value: string
  direction: 'top' | 'bottom' | 'right' | 'left'
  as?: React.ElementType
} & HTMLTypes

const ToolTip: React.ForwardRefRenderFunction<
  S.TooltipStyleProps,
  TooltipProps
> = ({ value, direction, children, ...props }, ref) => (
  <S.Wrapper value={value} direction={direction} ref={ref} {...props}>
    {children}
  </S.Wrapper>
)

export default forwardRef(ToolTip)
