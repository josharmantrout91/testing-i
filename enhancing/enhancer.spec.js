const { repair, fail, succeed } = require("./enhancer.js");
// test away!

// Items.
// Items have name, durability and enhancement.
// The item's enhancement it's a number from 0 to 20.
// The item's durability it's a number from 0 to 100.

describe("enhancer.js", () => {
  test("can run the tests", () => {
    expect(false).toBe(false);
  });

  // a repair(item) method that accepts an item object and returns a new item with the durability restored to 100.
  describe("repair()", () => {
    it("should return a new item with durability restored to 100", () => {
      const item = {
        name: "Staff of Stuff",
        durability: 42,
        enhancement: 39
      };
      expect(repair(item).durability).toBe(100);
    });
  });

  // a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.

  // When enhancement succeeds
  // The item's enhancement increases by 1.
  // If the item enhancement level is 20, the enhancement level is not changed.
  // The durability of the item is not changed.
  describe("succeed()", () => {
    it("should return an item with an enhancement incremented by 1, but not exceeding 20", () => {
      const item = {
        name: "Staff of Izalith",
        durability: 75,
        enhancement: 20
      };
      expect(succeed(item).enhancement).toBe(20);
      expect(succeed(item).durability).toBe(75);
    });
  });

  // a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.

  // When enhancement fails
  // If the item's enhancement is less than 15, the durability of the item is decreased by 5.
  // If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
  // If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

  describe("fail()", () => {
    it("Should decrement durability by 5 when enhancement is less than 15, decrement durability by 10 when enhancement is 15 or more, and decrement enhancement by 1 when enhancement is greater than 16", () => {
      const item = {
        name: "Sword of Drows",
        durability: 85,
        enhancement: 17
      };
      expect(fail(item).durability).toBe(75);
      expect(fail(item).enhancement).toBe(16);
    });
  });
});

// a get() method for use when working on the stretch problem.
