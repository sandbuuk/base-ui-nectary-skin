import countriesJson from './countries.json'

export type TSinchCountry = {
  name: string,
  phoneCode: string,
  phoneMask: string | null,
}

export const countries = countriesJson as Record<string, TSinchCountry>
