import { ParamMap } from "@angular/router";

export const useComponentSearchParams = (paramMap: ParamMap, prefix: string) => {
  const searchParams = new URLSearchParams();

  paramMap.keys.forEach(key => {
    const value = paramMap.get(key);
    if (value !== null) {
      const originalKey = prefix ? key.replace(prefix + '-', '') : key;
      searchParams.set(originalKey, value);
    }
  });

  return searchParams;
}
