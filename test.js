let data =[
    {"courseid":10,
    "coursename":"001  Finnish",
    "coursecontent":"Finnish language and culture",
    "credits":5,
    "numberoflectures":8,
    "examdate":"2022-07-10",
    "students":null},
    {"courseid":11,
    "coursename":"002Finnish",
    "coursecontent":"Finnish language and culture",
    "credits":5,
    "numberoflectures":8,
    "examdate":"2022-07-10",
    "students":null},
    {"courseid":12,
    "coursename":"003Object Oriented Programming",
    "coursecontent":"rtyuiopåghjklöävbnm,.-",
    "credits":5,
    "numberoflectures":8,
    "examdate":"2022-06-26",
    "students":["liyinan001@gmail.com","liyinan002@gmail.com"]}
]
let result=data[0];
let result2=data[0].students;
//let result3=data[0].students[0];
let result4=data[2].students[1];

let result5=data[2].students[1];
console.log(result);
console.log(result2);
//console.log(result3);
console.log(result4);
console.log(result5);