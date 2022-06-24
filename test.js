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

function getCourse(){
for(var i in data){
    if(data[i].students.includes("liyinan002@gmail.com")==true){
       return data[i].cousename;
       }
}};
getCourse();