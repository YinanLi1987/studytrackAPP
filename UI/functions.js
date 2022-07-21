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