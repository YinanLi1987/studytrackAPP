Database
d9q6kt8p73kfmr


CREATE TABLE usrInfo (
    userId SERIAL,
    fname VARCHAR(255) NOT NULL,
	lname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phoneNumber INTEGER NOT NULL,
	userType VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (userId),
    UNIQUE(email)
);
CREATE TABLE courseInfo (
    courseId SERIAL,
    courseName VARCHAR(255) NOT NULL,
    PRIMARY KEY (courseId)
);
ALTER TABLE courseInfo
ADD COLUMN students varchar ;
ALTER TABLE courseInfo
add COLUmn lesson02 varchar;
ALTER TABLE courseInfo
add COLUmn lesson03 varchar;
ALTER TABLE courseInfo
add COLUmn lesson04 varchar;
ALTER TABLE courseInfo
add COLUmn lesson05 varchar;
ALTER TABLE courseInfo
add COLUmn lesson06 varchar;
ALTER TABLE courseInfo
add COLUmn lesson07 varchar;
ALTER TABLE courseInfo
add COLUmn lesson08 varch;
let data =[
    {"lightid":18,"studentemail":"liyinan001@gmail.com","coursename":"Finnish","lesson01":"Unmark","lesson02":"Unmark","lesson03":"Unmark","lesson04":"Unmark","lesson05":"Unmark","lesson06":"Unmark","lesson07":"Unmark","lesson08":"Unmark","lesson09":"Unmark","date01":"2022-06-01","date02":"2022-06-08","date03":"2022-06-15","date04":"2022-06-22","date05":"2022-06-30","date06":"2022-07-06","date07":"2022-07-13","date08":"2022-07-20","date09":"2022-07-20","teacher":"liyinan41@gmail.com"},
    {"lightid":23,"studentemail":"liyinan002@gmail.com","coursename":"005JAVA","lesson01":"Green","lesson02":"Green","lesson03":"Green","lesson04":"Yellow","lesson05":"Yellow","lesson06":"Yellow","lesson07":"Red","lesson08":"Red","lesson09":"Green","date01":"2022-07-08","date02":"2022-07-15","date03":"2022-07-22","date04":"2022-07-29","date05":"2022-08-06","date06":"2022-07-09","date07":"2022-07-16","date08":"2022-07-23","date09":"2022-07-23","teacher":"liyinan41@gmail.com"},
    {"lightid":19,"studentemail":"liyinan002@gmail.com","coursename":"Finnish","lesson01":"Yellow","lesson02":"Green","lesson03":"Red","lesson04":"Yellow","lesson05":"Green","lesson06":"Yellow","lesson07":"Yellow","lesson08":"Yellow","lesson09":"Red","date01":"2022-06-01","date02":"2022-06-08","date03":"2022-06-15","date04":"2022-06-22","date05":"2022-06-30","date06":"2022-07-06","date07":"2022-07-13","date08":"2022-07-20","date09":"2022-07-20","teacher":"liyinan41@gmail.com"},
    {"lightid":22,"studentemail":"liyinan001@gmail.com","coursename":"005JAVA","lesson01":"Unmark","lesson02":"Unmark","lesson03":"Unmark","lesson04":"Unmark","lesson05":"Unmark","lesson06":"Unmark","lesson07":"Unmark","lesson08":"Unmark","lesson09":"Unmark","date01":"2022-07-08","date02":"2022-07-15","date03":"2022-07-22","date04":"2022-07-29","date05":"2022-08-06","date06":"2022-07-09","date07":"2022-07-16","date08":"2022-07-23","date09":"2022-07-23","teacher":"liyinan41@gmail.com"}]
