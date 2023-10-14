
//some arrays program//
 let favrtthings=["chilana","cheekhna","shormachan"];
 favrtthings.splice(2,1,"areeba","beautifull","goodjob");
 let newarr= favrtthings.slice(0,5);// THE first one is where to start and the second argument is where to end//
 console.log(favrtthings)
 console.log(newarr)
 let fruits=["apple","banana","grapes","lemon"];
 fruits.forEach(function(val,index){
    console.log(index,val);
 });
 console.log(fruits);

let num =["1","2","3","4","5","6"];
let numfilter = num.filter(function (val){
    return val %2==0
});
console.log(numfilter);
console.log(num);
prompt ("hey pretty girl");
console.log(prompt);


//program of checking vowel //
let question=prompt("vowel or consonent") ;
if (question =="a","e","i","o","u"){
    console.log("vowel");}
else{
        console.log("consonents");
    }

//table of even numbers//
let input=prompt("enetr any even no")
if( input%2===0 ){
for(i=1;i<=10;i++){
   console.log(input+"*"+i+"="+input*i);  
}
}
else{
    console.log("its odd")
}
//table of random num//
let randomnum= Math.round(Math.random()*10);
console.log(randomnum)
if (
    randomnum%2===0
){
    console.log("its even")
}
else{
    console.log("its odd")
}
localStorage.setItem("randomnum",randomnum)

//DOM//
let populr= document.getElementById("popular");
populr.innerText="HEY dost";
populr.style.color="#fff";
populr.style.backgroundColor="#ddd";
//set inteval// it have two arguments one function and second times in millisec//
setInterval(function(){
console.log("aslamualikum");
} ,) 
//replace.. y ik ayssa keyword hai jo replace kardeta hai is ky syntax:("jo replace karwana ho","jiss sy replace karrwana ho")//
                     //for example//
let namer="areeba is very beautiful";
namer = namer.replace ("very","")      
console.log(namer);   
//addition//
let sumup= "12";
let addup= "13";
addup= addup.replace("13","10")
addition=addup+sumup
console.log(addup);
console.log(addition) ;    