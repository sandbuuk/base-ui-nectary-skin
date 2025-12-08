import { zodResolver } from '@hookform/resolvers/zod'
import { type CSSProperties, type FC, useCallback, useState } from 'react'
import '@nectary/components/input'
import '@nectary/components/button'
import '@nectary/components/field'
import '@nectary/components/help-tooltip'
import '@nectary/components/text'
import '@nectary/components/popover'
import '@nectary/components/select-button'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/checkbox'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import type { SubmitHandler } from 'react-hook-form'

const countries = [
  'Narnia',
  'Middle Earth',
  'Westeros',
  'Neverland',
  'Atlantis',
  'Oz',
  'El Dorado',
  'Shangri-La',
  'Avalon',
  'Camelot',
  'Agartha',
] as const

const formSchema = z.object({
  firstname: z.string().min(1, { message: 'First name is required' }),
  lastname: z.string().min(1, { message: 'Last name is required' }),
  email: z.string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' }),
  password: z.string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
  phone: z.string()
    .min(2, { message: 'Phone number is required' }),
  country: z.enum(countries, {
    errorMap: () => ({ message: 'Please select a country' }),
  }),
  conditionAccepted: z.boolean()
    .refine((value) => value === true, {
      message: 'You must accept the conditions to continue',
    }),
}).strict()

type FormSchema = z.infer<typeof formSchema>

const formContainerStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  width: 300,
}

const nameRowStyles: CSSProperties = {
  display: 'flex',
  gap: 16,
}

export const ComplexReactHookFormExample: FC = () => {
  const [countryDropDownOpen, setCountryDropDownOpen] = useState(false)
  const [result, setResult] = useState<[string, unknown][]>([])

  const { control, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      phone: '',
    },
  })

  const onSubmit: SubmitHandler<FormSchema> = useCallback((data) => {
    setResult(Object.entries(data))
  }, [])

  return (
    <form style={formContainerStyles} onSubmit={handleSubmit(onSubmit, (e) => console.error(e))}>
      <div style={nameRowStyles}>
        <Controller
          name="firstname"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <sinch-field
              label="First Name"
              invalidText={error?.message}
            >
              <sinch-input
                slot="input"
                aria-label="First name input"
                placeholder="John"
                value={field.value}
                on-change={(e) => field.onChange(e.detail)}
                on-blur={() => field.onBlur()}
              />
            </sinch-field>
          )
        }
        />
        <Controller
          name="lastname"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <sinch-field
              label="Last name"
              invalidText={error?.message}
            >
              <sinch-input
                slot="input"
                aria-label="Last name input"
                placeholder="Doe"
                value={field.value}
                on-change={(e) => field.onChange(e.detail)}
                on-blur={() => field.onBlur()}
              />
            </sinch-field>
          )
        }
        />

      </div>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <sinch-field
            label="Email"
            invalidText={error?.message}
          >
            <sinch-help-tooltip slot="tooltip" text="Email you provided during the sign up"/>
            <sinch-input
              slot="input"
              aria-label="Email input"
              placeholder="john.doe@sinch.com"
              value={field.value}
              on-change={(e) => field.onChange(e.detail)}
              on-blur={() => field.onBlur()}
            />
          </sinch-field>
        )
        }
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <sinch-field
            label="Password"
            invalidText={error?.message}
          >
            <sinch-input
              slot="input"
              aria-label="Password input"
              placeholder="****"
              value={field.value}
              on-change={(e) => field.onChange(e.detail)}
              on-blur={() => field.onBlur()}
              type="password"
            />
          </sinch-field>
        )}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <sinch-field
            label="Phone number"
            invalidText={error?.message}
          >
            <sinch-help-tooltip slot="tooltip" text="See /compositions > phoneinput for a more complex phone input example"/>
            <sinch-input
              slot="input"
              aria-label="Phone number"
              placeholder="Phone Number"
              value={field.value}
              on-change={(e) => field.onChange(e.detail)}
              on-blur={() => field.onBlur()}
            />
          </sinch-field>
        )}
      />
      <Controller
        name="country"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <sinch-field
            label="Country"
            invalidText={error?.message}
          >
            <sinch-popover
              slot="input"
              open={countryDropDownOpen}
              aria-label="Select"
              orientation="bottom"
              modal
              on-click={() => setCountryDropDownOpen(false)}
            >
              <sinch-select-button
                slot="target"
                text={field.value}
                placeholder="Select option"
                aria-label="Open select"
                on-click={() => setCountryDropDownOpen((state) => !state)}
                on-blur={() => field.onBlur()}
              />
              <sinch-select-menu
                slot="content"
                aria-label="Action menu"
                value={field.value}
                on-change={(e) => {
                  field.onChange(e.detail)
                  setCountryDropDownOpen(false)
                }}
              >
                {countries.map((country) => (
                  <sinch-select-menu-option
                    key={country}
                    text={country}
                    aria-label={`${country} option`}
                    value={country}
                  />
                ))}
              </sinch-select-menu>
            </sinch-popover>
          </sinch-field>
        )}
      />
      <Controller
        name="conditionAccepted"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <sinch-checkbox
              text="I accept the conditions"
              aria-label="I accept the conditions"
              checked={field.value}
              on-change={(e) => field.onChange(e.detail)}
              on-blur={() => field.onBlur()}
            />
            {(error != null) && <sinch-text type="s" style={{ '--sinch-global-color-text': 'var(--sinch-sys-color-feedback-danger-default)' }}>{error.message}</sinch-text>}
          </>
        )}
      />
      <sinch-button
        text="Submit"
        aria-label="Submit"
        form-type="submit"
        type="primary"
      />
      {result.map(([key, value]) => (
        <sinch-text key={key} type="m">{`${key}: ${value}`}</sinch-text>
      ))}
    </form>
  )
}
