module.exports = {
  succeed,
  fail,
  repair,
  get
};

// When enhancement succeeds
// The item's enhancement increases by 1.
// If the item enhancement level is 20, the enhancement level is not changed.
// The durability of the item is not changed.

function succeed(item) {
  if (item.enhancement === 20) {
    return { ...item };
  } else {
    return {
      ...item,
      enhancement: item.enhancement + 1,
      name: `+${item.enhancement} ${item.name}`
    };
  }
}

// When enhancement fails
// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

function fail(item) {
  const failure = Object.assign({}, item);
  let d = failure.durability;
  let e = failure.enhancement;

  return { ...item };
}

function repair(item) {
  const repairedItem = {
    ...item,
    durability: 100
  };
  return repairedItem;
}

function get(item) {
  return { ...item };
}
