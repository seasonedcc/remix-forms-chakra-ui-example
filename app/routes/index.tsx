import { z } from 'zod'
import { Form } from '~/ui/form'

const schema = z.object({
  firstName: z.string().min(1),
  email: z.string().min(1).email(),
  howYouFoundOutAboutUs: z.enum(['fromAFriend', 'google']),
})

export default () => <Form schema={schema} />
