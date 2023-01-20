
// 스프레드 : 안전한 객체, 배열 복사
const foodList = ['짜장면', '볶음밥', '탕수육'];

// const copyFoodList = [foodList[0], foodList[1], foodList[2]];

// for (let f of foodList) {
//     copyFoodList.push(f);
// }

const copyFoodList = [...foodList, '떡볶이', '파스타'];

// foodList[1] = '짬뽕';
// copyFoodList[2] = '깐풍기'

console.log('원본 : ' + foodList);
console.log('사본 : ' + copyFoodList);