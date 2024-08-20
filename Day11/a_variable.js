// 동적 바인딩: 컴파일 시 값에 따라 자료형이 동적으로 결정된다.

data = 10;
// 출력시 data의 자료형은 number로 나온다.
console.log(typeof data); 
// 여기서의 data는 값으로 사용되었으며, 콘솔 창에는 20이 출력된다.
console.log(data + 10);

// data를 문자열로 선언하였다.
data = "이영섭";
// 따라서 자료형이 문자열, String으로 출력된다.
console.log(typeof data);
// 여기서의 data는 값으로 사용되어 이영섭이 출력된다.
console.log(data);
// 문자열에 있어서 +는 연결로 사용되었다.
console.log(data + "님");
// +를 이용해 연결할 수 있지만, ``로 감싼 후 ${}사이에 변수명을 적어줌으로써
// 위에 선언된 변수를 값으로 이용할 수 있다.
console.log(`${data}님`);
