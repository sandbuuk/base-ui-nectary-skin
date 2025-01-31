import countriesJson from './countries.json'

export type TSinchCountry = {
  name: string,
  phoneCode: string,
  phoneMask: string | null,
}

/**
 * @deprecated -
 * not up to date:
 * - for a general list of country, https://www.npmjs.com/package/countries-list is a better choice
 * - for validating phone numbers, we recommend https://www.npmjs.com/package/google-libphonenumber or https://www.npmjs.com/package/awesome-phonenumber
 * - for the phone masks, we used the `countries-phone-masks` (https://www.npmjs.com/package/countries-phone-masks) in the example, but how well maintained it is is unknown.
 **/
export const countries = countriesJson as Record<string, TSinchCountry>
