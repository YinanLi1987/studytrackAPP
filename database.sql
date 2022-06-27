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