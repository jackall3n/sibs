function* sibs<T>(items: T[]): Generator<[T | undefined, T, T | undefined]> {
    for (let i = 0; i < items.length; i++) {
        yield [items[i - 1], items[i], items[i + 1]];
    }
}

export default sibs;
