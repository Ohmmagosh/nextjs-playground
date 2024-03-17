"use client"
import { useCounterStore, useNameStore } from "./store";

export default function Home() {
  const [increase, decrease, num, reset] = useCounterStore((state) => [state.increase, state.decrease, state.num, state.reset])
  const [setName, name, resetName] = useNameStore((state) => [state.setName, state.name, state.resetName])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello world
      </h1>
      {num}
      <button onClick={increase}>
        incre
      </button>
      <button onClick={decrease}>
        decre
      </button>
      <button onClick={reset}>
        reset
      </button>
      <div className="flex flex-col text-black">
          <h1 className="text-white">{name}</h1>
          <input
          type="text"
          value={name}
          placeholder={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          />
      </div>
          <button onClick={resetName}>reset name</button>
    </main>
  );
}
