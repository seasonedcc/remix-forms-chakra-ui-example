import { Box } from '@chakra-ui/react'

function Field({ className, ...props }: JSX.IntrinsicElements['div']) {
  return <Box paddingBottom={4} {...props} />
}

export { Field }
