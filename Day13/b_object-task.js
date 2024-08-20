// 회원
// 번호, 이름
// let user = {
//     id: 1,
//     name: "이영섭",
// };

// 게시글
// 번호, 제목, 내용
// let post = new Object();
// post.id = 3;
// post.title = "테스트 게시글3";
// post.content = "테스트 내용3";
// post.user = user;

// 좋아요
// 번호

// let like = new Object();
// like.id = 5;
// like.post = post;

// console.log(post.user.name);
// console.log(like.post.user.name);
// console.log(like.post.title);

// 숙제
// 중고차 시장에서 다음과 같은 데이터가 필요하다.
// 우리는 소카테고리 내 대카테고리를 집어넣어야 된다는 것을 배웠다.
// 그렇다면, 중고차 시장에 있어서 자동차와 차주의 관계는 어느 것이 대카테고리인것인가?
// 이는 관점에 따라 다르다. 한 종의 차 하나를 정해서 보면 여러명의 차주가 있을 것이고
// 고객 한 명을 대상으로 했을 때 차량은 여러 종류의 차량이 존재할 것이다.
// 따라서 중간 매개체인 registration, 즉 등록증 객체를 매개로 내부의 프로퍼티를
// car와 owner 둘다 가지고 있는 것이 맞다. 
// 자동차
let car = {};

// 등록증
let registration = { car: car, owner: owner };

// 차주
let owner = {};
