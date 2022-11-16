import sibs from "../";

describe("sibs", function () {
  it("should access the siblings of an array", () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 3 }];

    const [first] = Array.from(sibs(array));
    const [previous, current, next] = first;

    expect(previous).toBeUndefined();
    expect(current.id).toBe(1);
    expect(next?.id).toBe(2);
  });
});
