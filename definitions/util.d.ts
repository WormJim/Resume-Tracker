type PickPartial<T, K extends keyof T> = Partial<Pick<T, K>>;

type PartialWithKeys<T, K extends keyof T> = Omit<T, K> & PickPartial<T, K>;
