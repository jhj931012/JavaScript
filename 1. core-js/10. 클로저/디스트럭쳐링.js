

// 배열 디스트럭쳐링
const arr = ['김철수', '박영희', '홍길동'];
// const kim = arr[0];
// const park = arr[1];
// const hong = arr[2];

const [kim, park, hong] = arr;

console.log(`kim: ${kim}, park: ${park}, hong: ${hong}`);

const emp = {
    empName: '빡빡이',
    hireDate: '2014-01-01', age : 29,
    birthDay: '1995-12-31'
}

const copyEmp = {
    ...emp,
    isCopy: true,
    age:50
};
console.log(copyEmp);




