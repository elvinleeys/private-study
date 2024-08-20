// 대카테고리
// 번호, 대카테고리명
let categoryA = {
    number: 1,
    name: "봄",
};

// 소카테고리
// 번호, 소카테고리명, 대카테고리
let categoryB = {
    number: 5,
    name: "코트",
    categoryA: categoryA,
};

// 객체안의 프로퍼티로 또 다른 객체를 불러올 수 있으며,
// 큰 카테고리 내 작은 카테고리를 프로퍼티로 설정할 경우, 작은 카테고리가 추가될때마다,
// 큰 카테고리에 추가되어야 하므로 유지/보수가 어렵다.
// 따라서 작은 카테고리의 프로퍼티에 큰 카테고리를 넣는것이 올바르다.
console.log(categoryB.categoryA.name);
console.log(categoryB.name);
