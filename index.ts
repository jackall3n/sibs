/**
 * Returns an iterator with previous and next siblings, along with the index
 * @param items
 */
function* sibs<T>(items: T[]): Generator<[T | undefined, T, T | undefined, number]> {
    for (let i = 0; i < items.length; i++) {
        yield [items[i - 1], items[i], items[i + 1], i];
    }
}

export default sibs;
