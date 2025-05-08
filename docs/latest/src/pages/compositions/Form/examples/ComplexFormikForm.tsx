import { Field, Form, Formik } from 'formik'
import { type CSSProperties, type FC, useState } from 'react'
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
import * as Yup from 'yup'

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

const validationSchema = Yup.object({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long'),
  phone: Yup.string()
    .required('Phone number is required')
    .min(2, 'Phone number is required'),
  country: Yup.string()
    .oneOf(countries, 'Please select a country')
    .required('Please select a country'),
  conditionAccepted: Yup.boolean()
    .oneOf([true], 'You must accept the conditions to continue')
    .required('You must accept the conditions to continue'),
})

type FormValues = {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  phone: string,
  country: typeof countries[number],
  conditionAccepted: boolean,
}

type FieldRenderProps<T extends keyof FormValues> = {
  field: {
    value: FormValues[T],
  },
  form: {
    errors: Partial<Record<keyof FormValues, string>>,
    touched: Partial<Record<keyof FormValues, boolean>>,
  },
}

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

export const ComplexFormikFormExample: FC = () => {
  const [countryDropDownOpen, setCountryDropDownOpen] = useState(false)
  const [result, setResult] = useState<[string, unknown][]>([])

  const initialValues: FormValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone: '',
    country: '' as typeof countries[number],
    conditionAccepted: false,
  }

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setResult(Object.entries(values))
      }}
    >
      {({ setFieldValue, setFieldTouched }) => (
        <Form style={formContainerStyles}>
          <div style={nameRowStyles}>
            <Field name="firstname">
              {({ field, form: { errors, touched } }: FieldRenderProps<'firstname'>) => (
                <sinch-field
                  label="First Name"
                  invalidText={touched.firstname === true ? errors.firstname : undefined}
                >
                  <sinch-input
                    slot="input"
                    aria-label="First name input"
                    placeholder="John"
                    value={field.value}
                    on-change={(e) => setFieldValue('firstname', e.detail)}
                    on-blur={() => setFieldTouched('firstname')}
                  />
                </sinch-field>
              )}
            </Field>
            <Field name="lastname">
              {({ field, form: { errors, touched } }: FieldRenderProps<'lastname'>) => (
                <sinch-field
                  label="Last name"
                  invalidText={touched.lastname === true ? errors.lastname : undefined}
                >
                  <sinch-input
                    slot="input"
                    aria-label="Last name input"
                    placeholder="Doe"
                    value={field.value}
                    on-change={(e) => setFieldValue('lastname', e.detail)}
                    on-blur={() => setFieldTouched('lastname')}
                  />
                </sinch-field>
              )}
            </Field>
          </div>

          <Field name="email">
            {({ field, form: { errors, touched } }: FieldRenderProps<'email'>) => (
              <sinch-field
                label="Email"
                invalidText={touched.email === true ? errors.email : undefined}
              >
                <sinch-help-tooltip slot="tooltip" text="Email you provided during the sign up"/>
                <sinch-input
                  slot="input"
                  aria-label="Email input"
                  placeholder="john.doe@sinch.com"
                  value={field.value}
                  on-change={(e) => setFieldValue('email', e.detail)}
                  on-blur={() => setFieldTouched('email')}
                />
              </sinch-field>
            )}
          </Field>

          <Field name="password">
            {({ field, form: { errors, touched } }: FieldRenderProps<'password'>) => (
              <sinch-field
                label="Password"
                invalidText={touched.password === true ? errors.password : undefined}
              >
                <sinch-input
                  slot="input"
                  aria-label="Password input"
                  placeholder="****"
                  value={field.value}
                  on-change={(e) => setFieldValue('password', e.detail)}
                  on-blur={() => setFieldTouched('password')}
                  type="password"
                />
              </sinch-field>
            )}
          </Field>

          <Field name="phone">
            {({ field, form: { errors, touched } }: FieldRenderProps<'phone'>) => (
              <sinch-field
                label="Phone number"
                invalidText={touched.phone === true ? errors.phone : undefined}
              >
                <sinch-help-tooltip slot="tooltip" text="See /compositions > phoneinput for a more complex phone input example"/>
                <sinch-input
                  slot="input"
                  aria-label="Phone number"
                  placeholder="Phone Number"
                  value={field.value}
                  on-change={(e) => setFieldValue('phone', e.detail)}
                  on-blur={() => setFieldTouched('phone')}
                />
              </sinch-field>
            )}
          </Field>

          <Field name="country">
            {({ field, form: { errors, touched } }: FieldRenderProps<'country'>) => (
              <sinch-field
                label="Country"
                invalidText={touched.country === true ? errors.country : undefined}
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
                    on-blur={() => setFieldTouched('country')}
                  />
                  <sinch-select-menu
                    slot="content"
                    aria-label="Action menu"
                    value={field.value}
                    on-change={(e) => {
                      void setFieldValue('country', e.detail)
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
          </Field>

          <Field name="conditionAccepted">
            {({ field, form: { errors, touched } }: FieldRenderProps<'conditionAccepted'>) => (
              <>
                <sinch-checkbox
                  text="I accept the conditions"
                  aria-label="Checkbox"
                  checked={field.value}
                  on-change={(e) => setFieldValue('conditionAccepted', e.detail)}
                  on-blur={() => setFieldTouched('conditionAccepted')}
                />
                {touched.conditionAccepted === true && errors.conditionAccepted !== undefined && (
                  <sinch-text type="s" style={{ '--sinch-global-color-text': 'var(--sinch-sys-color-feedback-danger-default)' }}>
                    {errors.conditionAccepted}
                  </sinch-text>
                )}
              </>
            )}
          </Field>

          <sinch-button
            text="Submit"
            aria-label="Submit"
            form-type="submit"
            type="primary"
          />

          {result.map(([key, value]) => (
            <sinch-text key={key} type="m">{`${key}: ${value}`}</sinch-text>
          ))}
        </Form>
      )}
    </Formik>
  )
}
