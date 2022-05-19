let products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 32000, title: "Check Shirt" },
  { id: 2, price: 15000, title: "Black Tie" },
  { id: 3, price: 67000, title: "Springfield Shirt" },
  { id: 4, price: 82000, title: "Red Mini Dress" },
];
// 가격 낮은 순으로 정렬하기
let lowSort = function () {
  return console.log(products.sort((a, b) => a.price - b.price));
};
//lowSort();
// 가격 높은 순으로 정렬하기
let highSort = function () {
  return console.log(products.sort((a, b) => b.price - a.price));
};
//highSort();

// abc 순서대로 정렬하기
let titleSort = function () {
  return console.log(
    products.sort(function (a, b) {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else return 0;
    })
  );
};

//// b.title < a.title ? 1 : a.title < b.title ? -1 : 0
titleSort();
