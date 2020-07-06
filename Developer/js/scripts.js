// console.log("مرحبا بك في شركة تطبيل.كو اللامحدودة للبرمجة! أجب عن الأسئلة التالية من فضلك");

// let name = prompt(" أدخل اسمك");

// let age = prompt(" أدخل عمرك");

// let exp = prompt(" أدخل عدد سنوات الخبرة لديك");

// let languages = [
//     "1.Java Script",
//     "2.PHP",
//     "3.CSS",
//     "4.HTML",
//     "5.Python",
// ];

// console.log(languages);

// let code = prompt(" أدخل رقم لغة البرمجة التي تعرفها");

// let code1 = prompt(" أدخل رقم لغة برمجة أخرى تعرفها");


// if (age >= 25, age < 40, exp >= 4, code == 1 ){
    
//     console.log("مرحبا بك معنا!")
// }
// else { 
//     console.log("نحن نأسف، لكن لم يتم قبولك");
// };

// let Fahrenheit = [70, 121, 80, 66, 75, ];

// console.log("مصفوفة درجات الحرارة بالفهرنهايت ")

// function temps(){
// console.log(Fahrenheit);
// };

// temps();

// console.log("القيمة المبدئية بالفهرنهايت " + Fahrenheit[0])

// console.log("-------------------------------")

// function C(){
//     let celsius = [];
//     for(temperature of Fahrenheit){
//      if( temperature > [0] )
//       celsius.push(temperature*(5/6));
    
//     }
//     console.log(celsius);
// };

// C(Fahrenheit);

let grades = [];

function user(){
    
grades[0]=(document.getElementById('input1'). value);
grades[1]=(document.getElementById('input2'). value);
grades[2]=(document.getElementById('input3'). value);
grades[3]=(document.getElementById('input4'). value);



document.getElementById('ngrade1').innerHTML = 
"quizes "+grades[0] +"/10";
document.getElementById('ngrade2').innerHTML =
"midterm "+grades[1] +"/25";
document.getElementById('ngrade3').innerHTML =
"final test "+grades[2]+"/50";
document.getElementById('ngrade4').innerHTML =
"oral "+grades[3]+"/15";


if( (parseInt(grades[0])+ parseInt(grades[1]) + parseInt(grades[2]) + parseInt(grades[3])) >= 90 ){
document.getElementById('lgrade').innerHTML = "A"
}

else if( (parseInt(grades[0])+ parseInt(grades[1]) + parseInt(grades[2]) + parseInt(grades[3])) < 90 && (parseInt(grades[0])+ parseInt(grades[1]) + parseInt(grades[2]) + parseInt(grades[3])) >= 80 ){
    document.getElementById('lgrade').innerHTML = "B"
}
    
else if( (parseInt(grades[0])+ parseInt(grades[1]) + parseInt(grades[2]) + parseInt(grades[3])) < 80 && (parseInt(grades[0])+ parseInt(grades[1]) + parseInt(grades[2]) + parseInt(grades[3])) >= 70 ){
    document.getElementById('lgrade').innerHTML = "C";
}

else if( (parseInt(grades[0])+ parseInt(grades[1]) + parseInt(grades[2]) + parseInt(grades[3])) < 70 && (parseInt(grades[0])+ parseInt(grades[1]) + parseInt(grades[2]) + parseInt(grades[3])) >= 60 ){
    document.getElementById('lgrade').innerHTML = "D";
}

else{

    document.getElementById('lgrade').innerHTML = "F";
};

    
}



