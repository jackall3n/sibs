declare function sibs<T>(items: T[]): Generator<[T | undefined, T, T | undefined]>;
export default sibs;
