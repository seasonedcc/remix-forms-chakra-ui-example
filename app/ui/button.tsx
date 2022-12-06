import { Button as ChakraButton } from '@chakra-ui/react'

function Button({
  type = 'submit',
  ...props
}: JSX.IntrinsicElements['button']) {
  return <ChakraButton type={type} {...props} />
}

export { Button }
