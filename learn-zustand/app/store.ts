
import { create } from 'zustand'

type TCounterState = {
  num: number
}

type TCounterAction = {
  increase: () => void;
  decrease: () => void;
  reset: () => void
}

const initialState: TCounterState = {
  num: 0
}

export const useCounterStore = create<TCounterState & TCounterAction>((set) => ({
  ...initialState,
  increase: () => {
    set((state) => ({ num : state.num + 1}))
  },
  decrease: () => {
    set((state) => ({ num: state.num - 1}))
  },
  reset: () => {
    set(initialState)
  }
}))

type TNameState = {
  name: string
}

type TNameAction = {
  setName: (e: string) => void;
  resetName: () => void;
}

const initialNameState : TNameState = {
  name : ""
}

export const useNameStore = create<TNameState & TNameAction>((set) => ({
  ...initialNameState,
  setName: (e: string) => {
    set(() => ({name: e}))
  },
  resetName: () => { set(initialNameState) }
}))
