import { atom } from 'jotai'

const isLoggedInAtom = atom(false)
const userAtom = atom<any>(null)

export { isLoggedInAtom, userAtom }
