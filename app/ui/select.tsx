import * as React from 'react'
import { Select as ChakraSelect } from '@chakra-ui/react'

const Select = React.forwardRef<
  HTMLSelectElement,
  Omit<JSX.IntrinsicElements['select'], 'size'>
>(({ className, ...props }, ref) => <ChakraSelect ref={ref} {...props} />)

export { Select }
