let data=[
    {"lightid":12,"studentemail":"liyinan001@gmail.com","coursename":"Finnish","lesson01":"Unmark","lesson02":"Unmark","lesson03":"Unmark","lesson04":"Unmark","lesson05":"Unmark","lesson06":"Unmark","lesson07":"Unmark","lesson08":"Unmark","lesson09":"Unmark","date01":"2022-06-07","date02":"2022-06-14","date03":"2022-06-21","date04":"2022-06-28","date05":"2022-07-05","date06":"2022-07-12","date07":"2022-07-19","date08":"2022-07-26","date09":"2022-08-02"},
    {"lightid":13,"studentemail":"liyinan002@gmail.com","coursename":"Finnish","lesson01":"yellow","lesson02":"Unmark","lesson03":"Unmark","lesson04":"Unmark","lesson05":"Unmark","lesson06":"Unmark","lesson07":"Unmark","lesson08":"Unmark","lesson09":"Unmark","date01":"2022-06-07","date02":"2022-06-14","date03":"2022-06-21","date04":"2022-06-28","date05":"2022-07-05","date06":"2022-07-12","date07":"2022-07-19","date08":"2022-07-26","date09":"2022-08-02"},
    {"lightid":14,"studentemail":"liyinan001@gmail.com","coursename":"Finnish","lesson01":"Unmark","lesson02":"Unmark","lesson03":"Unmark","lesson04":"Unmark","lesson05":"Unmark","lesson06":"Unmark","lesson07":"Unmark","lesson08":"Unmark","lesson09":"Unmark","date01":"2022-06-01","date02":"2022-06-08","date03":"2022-06-15","date04":"2022-06-22","date05":"2022-06-29","date06":"2022-07-06","date07":"2022-07-13","date08":"2022-07-06","date09":"2022-07-13"},
    {"lightid":15,"studentemail":"liyinan002@gmail.com","coursename":"Finnish","lesson01":"Unmark","lesson02":"Unmark","lesson03":"Unmark","lesson04":"Unmark","lesson05":"Unmark","lesson06":"Unmark","lesson07":"Unmark","lesson08":"Unmark","lesson09":"Unmark","date01":"2022-06-01","date02":"2022-06-08","date03":"2022-06-15","date04":"2022-06-22","date05":"2022-06-29","date06":"2022-07-06","date07":"2022-07-13","date08":"2022-07-06","date09":"2022-07-13"},
    {"lightid":16,"studentemail":"liyinan001@gmail.com","coursename":"005JAVA","lesson01":"Unmark","lesson02":"Unmark","lesson03":"Unmark","lesson04":"Unmark","lesson05":"Unmark","lesson06":"Unmark","lesson07":"Unmark","lesson08":"Unmark","lesson09":"Unmark","date01":"2022-06-03","date02":"2022-06-10","date03":"2022-06-17","date04":"2022-06-24","date05":"2022-06-24","date06":"2022-07-01","date07":"2022-07-08","date08":"2022-07-15","date09":"2022-07-22"},
    {"lightid":17,"studentemail":"liyinan002@gmail.com","coursename":"005JAVA","lesson01":"Unmark","lesson02":"Unmark","lesson03":"Unmark","lesson04":"Unmark","lesson05":"Unmark","lesson06":"Unmark","lesson07":"Unmark","lesson08":"Unmark","lesson09":"Unmark","date01":"2022-06-03","date02":"2022-06-10","date03":"2022-06-17","date04":"2022-06-24","date05":"2022-06-24","date06":"2022-07-01","date07":"2022-07-08","date08":"2022-07-15","date09":"2022-07-22"}
]

let course =["Finnish","005JAVA"]
for(let i=0; i<data.length; i++){ 
    if(course.includes(data[i].coursename)){ 
        console.log(data[i].studentemail)
 } }

