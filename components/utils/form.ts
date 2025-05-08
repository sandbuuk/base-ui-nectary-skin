import type { NectaryComponentVanilla } from '../types'

export const setFormValue = (internals: ElementInternals, value: File | string | FormData | null) => {
  // Convert nullish values to empty string for consistency
  let formValue = value ?? ''

  if (formValue instanceof FormData && [...formValue.keys()].length === 0) {
    formValue = ''
  }

  if (formValue instanceof File && formValue.size === 0) {
    formValue = ''
  }

  if (internals.form !== null) {
    internals.setFormValue(formValue)
  }
}

/**
 *  The ElementInternals API currently does not support web components as form submitters,
 *  so we need to create a native button and copy form-related options to it.
 */
export const requestSubmitForm = (form: HTMLFormElement, submitter: NectaryComponentVanilla<'sinch-button'>) => {
  const submitterProxy = document.createElement('button')

  submitterProxy.style.display = 'none'
  submitterProxy.type = submitter.formType

  // Copy accessibility attributes
  Array.from(submitter.attributes)
    .filter((attr) => attr.name.startsWith('aria-'))
    .forEach((attr) => {
      submitterProxy.setAttribute(attr.name, attr.value)
    })

  // For submission to work the submitter needs a descendant of the form
  form.appendChild(submitterProxy)

  try {
    form.requestSubmit(submitterProxy)
  } finally {
    form.removeChild(submitterProxy)
  }
}

export const CSVToFormData = (name: string, csv: string) => {
  if (csv.length === 0) {
    return ''
  }

  const formData = new FormData()

  csv.split(',').forEach((value) => {
    formData.append(name, value)
  })

  return formData
}
