import { expect, test } from '@playwright/test'
import { runScreenshotTests, subscribeToEvents, getAllEvents } from '../screenshot-tests'
import { objectToQueryString } from '../utils'

const basePath = '/composition/uncontrolled-form'

const initialFormState = {
  fieldEmail: {
    label: 'Email',
  },
  inputEmail: {
    name: 'email',
    type: 'email',
    width: 200,
    value: '',
  },
  fieldPassword: {
    label: 'Password',
  },
  inputPassword: {
    name: 'password',
    type: 'password',
    width: 200,
    value: '',
  },
  datePicker: {
    name: 'date',
    locale: 'en',
    min: '2025-04-02',
    max: '2027-04-02',
  },
  checkboxDefault: {
    name: 'checkbox-default',
    text: 'Checkbox without value',
  },
  checkboxValue: {
    name: 'checkbox-value',
    text: 'Checkbox with value',
    value: 'somevalue123',
  },
  radio: {
    name: 'radio',
  },
  selectMenu: {
    name: 'select-menu',
    multiple: true,
  },
  textarea: {
    name: 'textarea',
  },
  buttonSubmit: {
    type: 'primary',
    text: 'Submit',
    formType: 'submit',
  },
  buttonReset: {
    type: 'primary',
    text: 'Reset',
    formType: 'reset',
  },
}

const formStateFilled = {
  ...initialFormState,
  inputEmail: {
    ...initialFormState.inputEmail,
    value: 'john.doe@example.com',
  },
  inputPassword: {
    ...initialFormState.inputPassword,
    value: '123456',
  },
  datePicker: {
    ...initialFormState.datePicker,
    value: '2025-04-15',
  },
  checkboxDefault: {
    ...initialFormState.checkboxDefault,
    checked: true,
  },
  checkboxValue: {
    ...initialFormState.checkboxValue,
    checked: true,
    value: 'yoyoyo',
  },
  radio: {
    ...initialFormState.radio,
    value: '3',
  },
  selectMenu: {
    ...initialFormState.selectMenu,
    value: '3,4',
  },
  textarea: {
    ...initialFormState.textarea,
    value: 'Some text',
  },
}

const filledSubmitData = {
  email: 'john.doe@example.com',
  password: '123456',
  checkboxDefault: 'on',
  checkboxValue: 'yoyoyo',
  radio: '3',
  selectMenu: ['3', '4'],
  datePicker: '2025-04-15',
  textarea: 'Some text',
}

const emptySubmitData = {
  email: '',
  password: '',
  checkboxDefault: '',
  checkboxValue: '',
  radio: '',
  selectMenu: [''],
  datePicker: '',
  textarea: '',
}

const initialForm = `${basePath}?${objectToQueryString(initialFormState)}`
const filledForm = `${basePath}?${objectToQueryString(formStateFilled)}`

test('uncontrolled-form screenshots', runScreenshotTests(['sinch-card-v2', 'sinch-button', 'sinch-field', 'sinch-input', 'sinch-date-picker'], [
  {
    name: 'focus',
    url: filledForm,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      yield { name: '1' }

      await page.keyboard.press('Tab')
      yield { name: '2' }

      await page.keyboard.press('Tab')
      yield { name: '3' }
    },
  },
  {
    name: 'reset',
    url: filledForm,
    async *fn({ page, $evalBySelectors }) {
      const resetButton = page.locator('sinch-button').nth(1)

      await resetButton.click()

      await $evalBySelectors['sinch-date-picker'][0]((el) => {
        el.value = '2025-04-02'
      })

      // Select input so whole form is screenshotted
      await page.locator('sinch-input').nth(0).focus()

      yield { name: 'click' }
    },
  },
]))

test('uncontrolled-form events', runScreenshotTests(['sinch-card-v2', 'sinch-button', 'sinch-field', 'sinch-input'], [
  {
    name: 'submit',
    url: filledForm,
    async *fn({ page }) {
      await subscribeToEvents(page, 'uncontrolled-form-submit')

      const submitButton = page.locator('sinch-button').nth(0)

      await submitButton.click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        {
          type: 'uncontrolled-form-submit',
          detail: filledSubmitData,
        },
      ])
    },
  },
  {
    name: 'submit-implicit',
    url: filledForm,
    async *fn({ page }) {
      await subscribeToEvents(page, 'uncontrolled-form-submit')

      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        {
          type: 'uncontrolled-form-submit',
          detail: filledSubmitData,
        },
      ])
    },
  },
  {
    name: 'submit-empty',
    url: initialForm,
    async *fn({ page }) {
      await subscribeToEvents(page, 'uncontrolled-form-submit')

      const submitButton = page.locator('sinch-button').nth(0)

      await submitButton.click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        {
          type: 'uncontrolled-form-submit',
          detail: emptySubmitData,
        },
      ])
    },
  },
  {
    name: 'submit-reset',
    url: filledForm,
    async *fn({ page }) {
      await subscribeToEvents(page, 'uncontrolled-form-submit')

      const resetButton = page.locator('sinch-button').nth(1)

      await resetButton.click()

      const submitButton = page.locator('sinch-button').nth(0)

      await submitButton.click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        {
          type: 'uncontrolled-form-submit',
          detail: emptySubmitData,
        },
      ])
    },
  },
]))
