import { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'square'
type Size = 'large' | 'medium' | 'small'

export interface IButtonProps {
  variant?: Variant
  size?: Size
  children?: ReactNode
  onClick?: () => void
}
