console.log('hello vite');

export type MyPick<T, U extends keyof T> = {
  [K in U]: T[K]
}

export type T = MyPick<{ name: string, age: number, gender: string }, 'gender'>
