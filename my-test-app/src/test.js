const initialList = [
  {
    id: 1,
    checked: true,
    todo: "do  this",
  },
  {
    id: 2,
    checked: false,
    todo: "do ds  this",
  },
  {
    id: 3,
    checked: true,
    todo: "do  this",
  },
];

var completed = initialList.filter((items) => !items.checked).map((it) => it);

completed;

// reduce method
var total = initialList.reduce(
  (count, li) => {
    if (li.checked == true) {
      return { ...count, trueCount: count.trueCount + 1 };
    } else return { ...count, falseCOunt: count.falseCOunt + 1 };
  },
  { trueCount: 0, falseCOunt: 0 }
);

// var completed = initialList.filter((items, a) => items.todo.includes("ds"));
// const listToShow = (() => {
//   switch (filter) {
//     case "active":
//       return items.filter((item) => !item.completed);
//     case "completed":
//       return items.filter((item) => item.completed);
//     case "search":
//       return items.filter((item) => item.title.includes(searchTerm));
//     default:
//       return items;
//   }
// })();

var deketeItem = initialList.filter((items) => items.id != 1);
deketeItem;
