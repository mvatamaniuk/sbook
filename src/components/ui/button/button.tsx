import { FC } from 'react'
import cn from 'classnames'

import classes from './button.module.css'
import { IButtonProps } from './button.types'

export const Button: FC<IButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
}) => {
  const main = cn(classes.button, classes[size], classes[variant])

  return <button className={main}>{children}</button>
}
