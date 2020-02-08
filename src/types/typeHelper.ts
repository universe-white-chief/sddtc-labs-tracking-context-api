export type Diff<T, U> = Pick<T, Exclude<keyof T, keyof U>>;
