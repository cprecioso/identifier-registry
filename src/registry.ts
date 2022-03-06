import { asValidIdentifier } from "./identifier"

export class IdentifierRegistry implements Iterable<string> {
  private _registeredIdentifiers = new Set<string>();

  *[Symbol.iterator]() {
    yield* this._registeredIdentifiers
  }

  add(name: string) {
    const baseIdentifier = asValidIdentifier(name)
    let identifier = baseIdentifier

    for (let i = 2; this._registeredIdentifiers.has(identifier); i++) {
      identifier = `${baseIdentifier}_${i}`
    }

    this._registeredIdentifiers.add(identifier)

    return identifier
  }

  remove(name: string) {
    this._registeredIdentifiers.delete(name)
  }

  cloneRegistry() {
    const newRegistry = new IdentifierRegistry()
    newRegistry._registeredIdentifiers = new Set(this._registeredIdentifiers)
    return newRegistry
  }
}
