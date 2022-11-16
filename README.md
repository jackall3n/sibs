# Sibs 👧🏻👦🏽

A small utility function used to loop through an array and easily access the previous and next sibling of the current item


### Installation
```shell
pnpm add sibs

npm install sibs

yarn add sibs
```

### Usage

```typescript
import sibs from 'sibs';

const array = [{}, {}, {}];

for (const [previous, current, next] of sibs(array)) {
        
}
```

### Typed

```typescript
import sibs from 'sibs';

interface Item {
    id: string;
}

const array: Item[] = [...];

for (const item of sibs(array)) {
    const [
        previous,   // Item | undefined
        current,    // Item
        next        // Item | undefined
    ] = item;
}
```
