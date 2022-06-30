let data=[
   {"lightid":18,"studentemail":"liyinan001@gmail.com","coursename":"Finnish"},
   {"lightid":19,"studentemail":"zhang002@gmail.com","coursename":"Finnish"},
   {"lightid":20,"studentemail":"liyinan001@gmail.com","coursename":"005JAVA"},
   {"lightid":21,"studentemail":"zhang002@gmail.com","coursename":"005JAVA"}
]
let userEmail="liyinan41@gmail.com"

let courseArray=['Finnish','005JAVA'];

let output1='';
let output2='';               
                 
for(i in data){
    if(courseArray[0]==data[i].coursename ){
      output1+=data[i].studentemail+'\n'
                                       
    }   
                            
}  


for(i in data){
  if(courseArray[1]==data[i].coursename ){
    output2+=data[i].studentemail+'\n'
                                     
  }   
                          
}  
                          
 
                      
let x=courseArray[0]+'\n'+output1
let y=courseArray[1]+'\n'+output2
                   
console.log(x);
console.log(y);
             