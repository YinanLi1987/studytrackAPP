// delete the saved data in localStorage of last login
   function loadEmail() {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("courseNames");
}
//get all the courses created by the login teacher
function loadJason(){
    let userEmail=localStorage.getItem("userEmail");
    //create XHR Object
    var xhr = new XMLHttpRequest();
    //open -type, url/file,async
    xhr.open("GET", 'https://stark-ridge-06549.herokuapp.com/courseinfo', true);
    xhr.onload=function(){
        if(this.status==200){
            var courses=JSON.parse (this.responseText);
            var courseNames=[];
            for(var i in courses){
                if(courses[i].teacher=userEmail){
                    courseNames.push(courses[i].coursename);
                }  
            }
            localStorage.setItem("courseNames",JSON.stringify(courseNames));
        }
    }
xhr.send();
}
//show login user name
function loginUser(){
    let userEmail=localStorage.getItem("userEmail");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://stark-ridge-06549.herokuapp.com/userinfo', true);
    xhr.onload=function(){
        if(this.status==200){
            var userInfo=JSON.parse (this.responseText);
            var userIndex=userInfo.map(object => object.email).indexOf(userEmail);
            var username=userInfo[userIndex].fname;   
            document.getElementById("user").innerText=username;
        }
    } 
xhr.send();
} 