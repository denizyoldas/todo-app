import { atom } from 'jotai'

const isLoggedInAtom = atom(true)
const userAtom = atom<any>(null)

export { isLoggedInAtom, userAtom }
