type ToBeOrNotToBe = {
  toBe: (val: any) => boolean
  notToBe: (val: any) => boolean
}

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (input: any) => {
      if (input !== val) throw Error('Not Equal')
      return true
    },
    notToBe: (input: any) => {
      if (input === val) throw Error('Equal')
      return true
    },
  }
}
