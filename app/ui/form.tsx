import type { FormSchema, FormProps } from 'remix-forms'
import { createForm } from 'remix-forms'
import {
  Form as FrameworkForm,
  useActionData,
  useSubmit,
  useTransition as useNavigation,
} from '@remix-run/react'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'
import { Input } from './input'
import { Select } from './select'
import { Button } from './button'
import { Field } from './field'

const RemixForm = createForm({
  component: FrameworkForm,
  useNavigation,
  useSubmit,
  useActionData,
})

function Form<Schema extends FormSchema>(props: FormProps<Schema>) {
  return (
    <RemixForm<Schema>
      fieldComponent={Field}
      labelComponent={FormLabel}
      errorComponent={FormErrorMessage}
      globalErrorsComponent={FormErrorMessage}
      buttonComponent={Button}
      inputComponent={Input}
      selectComponent={Select}
      renderField={({ Field, ...props }) => {
        return (
          <Field key={String(props.name)} {...props}>
            {({ Label, SmartInput, Errors }) => (
              <FormControl isInvalid={Boolean(props.errors)}>
                <Label />
                <SmartInput />
                <Errors />
              </FormControl>
            )}
          </Field>
        )
      }}
      {...props}
    />
  )
}

export { Form }
