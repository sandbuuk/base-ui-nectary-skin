import countriesJson from './countries.json'

export type TSinchCountry = {
  name: string,
  phoneCode: string,
}

export const countries = countriesJson as Record<string, TSinchCountry>
