import { FC } from 'react'
import cn from 'classnames'

import classes from './text-field.module.css'
import { ITextFieldProps } from './text-field.types'

export const TextField: FC<ITextFieldProps> = ({
  variant = 'outlined',
  placeholder,
  value,
}) => {
  const main = cn(classes.input, classes[variant])

  return <input className={main} placeholder={placeholder} value={value} />
}
