                    //DATE METHODSS //
                   //CHAPTER 31 - 34 //
     
     
     
     // QUESTION 1 //
//var currentDate = new Date();
//document.write(currentDate);
     // QUESTION 2 //
// var abc = currentDate.toString();
// var namey = abc.slice(3,7);
// document.write("Current month : " + namey);
     // QUESTION 3 //
// var day = abc.slice(0,3);
// alert("Today is " + day);
      // QUESTION 4 //
// if (day === "Sun" || day === "Sat"){
//     document.write("its a fun day");

// }
//       // QUESTION 5 //
// var datey = abc.slice(8,10);

// if (datey < "16") {
//     document.write("First fifteen days of the month");
// }
// else {
//     document.write("Last days of the month");
// }

     // QUESTION 6 //

// var currentDateee = new Date();
// var abcd = currentDateee.getTime();
// var num = Number(abcd);
// document.write("Current date :" + currentDateee);
// document.write("<br>" + "Elasped miliseconds since 1 january 1970 :" + num);
// var min = (num/60000);
// document.write("<br>" + "Elasped minutes since 1 january 1970 :" + min);


      // QUESTION 7 //


//  var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }

      // QUESTION 8 //

// var leterDate = new Date();
// leterDate.setFullYear(2000);
// leterDate.setDate(30);
// leterDate.setMonth(11);
// leterDate.setMinutes(00);
// leterDate.setHours(00);
// leterDate.setSeconds(00);
// alert("Later Date : " + leterDate);


     // QUESTION 9 //

// var timew = new Date();
// timew.setFullYear(2015);
// timew.setMonth(4);
// timew.setDate(18);
// var abc = timew.getTime();
// var q = abc/(8.64e+7);
// var a = q.toFixed(0);
// alert(a + " days have been past 1st ramadan");    



       // QUESTION 10 //

// var date = new Date();
// date.setFullYear(2005);
// date.setMonth(11);
// date.setDate(05);
// var datee = date.getTime();
// var spec =  new Date();
// spec.setFullYear(2015);
// spec.setMonth(0);
// spec.setDate(1);
// var datey = spec.getTime();
// var diff = (datey - datee);
// var abc = (diff/1000);


// document.write("On reference date " + date + "<br>" + abc + " seconds has been has past since the begining of 2015.");


         // QUESTION 11 //



// var date = new Date();
// document.write("Current date:",date);
// var e=date.getHours()
// var date1= e + 1
// var b = date.toString();
// var c = b.slice(0,16);
// var d = b.slice(18,60)
//  document.write("<br>1 hour ago, it was ",c);
//  document.write(date1);
//  document.write(d);



      // QUESTION 12  //

// var data = new Date();
// var datay = new Date();
// datay.setFullYear(1915);
// alert("Current Date :" + data +  "100 years back, it was " + datay); 



        // QUESTION NO 13 //

// var age = +prompt("Enter your age?");
// var currentYear = new Date().getFullYear();
// var diff = currentYear - age;
// alert("Your age is : " + age + "\nYour birth day year is :" + diff);


        // QUESTION NO 14 // 

// var namei = prompt("Enter your Name!");
// var units = +prompt("Enter total units?");   
// var charge = 16;    
// var date = new Date();
// var date1 = date.getMonth()
// var a;
// if (date1==0){
//     a=January
// }else if (date1 === 1){
//     a = "February"
// }else if (date1 === 2){
//     a = "March"
// }else if (date1 === 3){
//     a =" April"
// }else if (date1 === 4){
//     a = "May"
// }else if (date1 === 5){
//     a = "June"
// }else if (date1 === 6){
//     a = "July"
// }else if (date1 === 7){
//     a = "August"
// }else if (date1 === 8){
//     a =" September"
// }else if (date1 === 9){
//     a =" October"
// }else if (date1 === 10){
//     a = "November"
// }else if (date1 === 11){
//     a = "December"
// }

// var nett = units * charge;
// var late = 350;
// var groos = nett + late;




// document.write("Customer Name :" + namei);

// document.write("<br>" + "Month : "  + a);

// document.write("<br>" + "No of units : "  + units);
// document.write("<br>" + "Charges per unit : " + charge);
// document.write("<br>" + "Net Amount Payable (within Due Date) :" + nett );
// document.write("<br>" + "Late payment surcharge :" + late );
// document.write("<br>" + "Gross Amount Payable (after Due Date) :" + groos);



                              //  FUNCTIONS //
                              //  35-38     //

     // QUESTION 1 //                          

// function datea() {
//      var qa = new Date();
//      alert(qa);
// }     
// datea();

      // QUESTION 2 //

// function fullName() {
//      var firs =  prompt("Enter your first name!");
//      var sec = prompt("Enter your last name!");
//      alert(firs + " " + sec);
// }      
// fullName();


     // QUESTION 3 //

// function suum() {
//      var num1 = +prompt("Enter first number?");
//      var num2 = +prompt("Enter second number?");
//      var sum = num1 + num2;
//      var sum1 = alert(sum);
//      return sum1;    
// } 
// suum();

     
       // QUESTION 4 //

       
// function operration() {
//      var numm1 = +prompt("Enter first number..");
//      var numm2 = +prompt("Enter first number..");
//      var oop = prompt("Enter your operation?");
//      if (oop === "+") {
//           alert(numm1 + numm2);
     
//      }
//      else if(oop === "-") {
//           alert(numm1 - numm2);
//      }
//      else if(oop === "*") {
//           alert(numm1 * numm2);
//      }
//      else if(oop === "/") {
//           alert(numm1 / numm2);
//      }
// }       
// operration();


         // QUESTION 5 //

// function sqr() {
//      var num21 = +prompt("Enter a number!");
//      var sqrr = (num21 * num21);
//      alert(sqrr);
// }         
// sqr();


          // QUESTION 6 //

// function factorial(){
//      var n = +prompt("Enter a number?");
//           var fact=1
//           if(n===0){
//                document.write("<h2>"+"0!=1"+"</h2>")
               
//                }
//           else if(n<0){
//                document.write("<h2>"+"SORRY FACTORIAL CANNOT BE FIND OF NEGATIVE NUMBER"+"</h2>")
               
//                }
//           else if(n>0){
//                for(var i=1;i<=n;i++){
//                     fact=fact*i;
//                }
//                document.write("<h2>"+"THE FACTORIAL OF "+ n +":"+fact+"</h2>")
//                }
//                }
// factorial();


      // QUESTION 7 //

// function countingg() {
//      var first = +prompt("Enter the starting number");
//      var end = +prompt("Enter the ending number");
//      for (i=first; i<end; i++) {
//           document.write(i);
//      }
// }      
// countingg();



          // QUESTION 8 //

// function hypo() {
     
     
//      var basee = +prompt("Enter the base of the right angle tringle!");
//      var prep = +prompt("Enter the prependicular of right angle triangle");
//      var hypoo = (basee * basee) + (prep * prep);
//      var happy = Math.sqrt(hypoo).toFixed(2);
     
     
//      alert("The hypotineous of the given triangle is : " + happy);
// }          
// hypo();


         // QUESTION 9 //

// function areaa(width ,height) {
//      var a , width , height;
//      a = width * height;
//      alert(a);

// }        
// areaa(5,4) ;



          // // QUESTION 10 //

          // function pal() {
          //      var checky = prompt("enter someting");
          //          var j = checky.lenght-1;
          //          for (var i=0; i < j/2; i++){
          //           var x = checky[i];
          //           var y = checky[j-i];
          //          }
          //          if(x === y) {
          //           document.write("This is palidrone");
          //          }
          //          else{
          //           document.write("Its not palidrone");
          //          }
          //      }    
          // pal();           

           //  QUESTION NO 11
function capitalFirstLetter(){
     var str = "abcdgwtuik kh";
    var word=str.split(" ");
    for(var i=0;i<word.length;i++){
        word[i]=word[i].charAt(0).toUpperCase()+ word[i].slice(1);
    }
    document.write(word);


}
capitalFirstLetter();
// QUESTION NO 12
// function longestWord(wording){
//     var maxword
//     var maxLength =0;
//     var wording=prompt("ENTER THE WORD");
//     wording=wording.toLowerCase();
//     wording=wording.split(" ")
//     for(var i =0;i<wording.length;i++){ 
//         if(wording[i].length>maxLength){
//             maxLength=wording[i].length
//              maxword=wording[i]
//         }
//         } 
//         console.log(maxword)
//         return maxword
//     }
// // QUESTION NO 13
// function countingWords(text,countWord){
//     var text;
//     var countWord;
//     var countWord3=0;
//     for(var i=0;i<text.length;i++){
//         if(text[i]===countWord){
//             ++countWord3
//         }
//     }
//     document.write("<h2>"+"THE GIVEN TEXT IS : "+text+"</h2>")
//     document.write("<h2>"+"THE OCCURENCE OF : "+countWord +" IS "+countWord3+"TIMES"+"</h2>")


//     return countWord3
// }
// // QUESTION NO 14
// function calcCircumference(radius){
//     var curcumference=2 * 3.14 * radius;
//     curcumference=Math.round(curcumference)
//     document.write("<h2>"+"THE CIRCUMFERENCE IS " + curcumference +"</h2>");
//     return curcumference

// }
// var a=calcCircumference(5)
// function calcArea(radius){
//     var curcumarea=3.14 * (radius * radius);
//     document.write("<h2>"+"THE AREA OF CIRCLE IS " + curcumarea +"</h2>");
//     return curcumarea
// }
                                // CHAPTER NO 38-42
// document.write("<h2> CHAPTER 38-40 </h2>");

