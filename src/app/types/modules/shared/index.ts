export enum FilterType {
  SET = "set",
  TOGGLE = "toggle",
};

export type UseStateObject<T> = [T, (arg: T) => void];
