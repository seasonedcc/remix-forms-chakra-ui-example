import * as React from 'react'
import { Input as ChakraInput } from '@chakra-ui/react'

const Input = React.forwardRef<
  HTMLInputElement,
  Omit<JSX.IntrinsicElements['input'], 'size'>
>(({ type = 'text', className, ...props }, ref) => (
  <ChakraInput ref={ref} type={type} {...props} />
))

export { Input }
