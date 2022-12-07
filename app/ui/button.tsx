import { useTransition } from '@remix-run/react'
import { Button as ChakraButton } from '@chakra-ui/react'

function Button({
  type = 'submit',
  ...props
}: JSX.IntrinsicElements['button']) {
  const transition = useTransition()
  return (
    <ChakraButton
      isLoading={transition.state === 'submitting'}
      type={type}
      {...props}
    />
  )
}

export { Button }
