import { isValidIdentifier, toIdentifier } from "@babel/types"

export const asValidIdentifier = (name: string) => {
  if (isValidIdentifier(name)) return name
  return toIdentifier(name)
}

export { isValidIdentifier, toIdentifier }
