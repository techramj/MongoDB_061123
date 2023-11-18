db.inventory.insertMany([
  {
    _id: 11,
    item: { name: "pen", code: "123" },
    qty: 10,
    tags: ["A", "b", "c"],
  },
  { _id: 2, item: { name: "pencil", code: "222" }, qty: 40, tags: ["A"] },
  { _id: 3, item: { name: "bag", code: "333" }, qty: 10, tags: ["c"] },
  { _id: 4, item: { name: "pen", code: "123" }, qty: 9, tags: ["c"] },
  { _id: 5, item: { name: "book", code: "444" }, qty: 5, tags: ["A"] },
  {
    _id: 6,
    item: { name: "eraser", code: "126663" },
    qty: 60,
    tags: ["A", "b"],
  },
]);
