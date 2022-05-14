// function check() {
//     let number1 =document.getElementById('soA');
//     let number2 =document.getElementById('soB');
//         let a = parseInt(number1);
//         let b = parseInt(number2);
//     if (a % b === 0)
//         document.getElementById('chiahet').innerHTML = "a chia hết cho b";
//
//     else
//         document.getElementById('chiahet').innerHTML = "a không chia hết cho b"
//
//
// }

// Bài 1
// let a = +prompt("Nhập a");
// let b = +prompt("Nhập b");
// if (a % b === 0) {
//     alert("a chia hết cho b");
// } else {
//     alert("a không chia hết cho b");
// }

// Bài 2
// let age = +prompt("Nhập tuoi");
// console.log(age)
// if (age >= 16) {
//     alert("Bạn đã đủ tuổi lên lớp");
// } else {
//     alert("Bạn không đủ tuổi lên lớp");
// }


// Bài 4
// function timMax() {
//     let a = parseInt(document.getElementById('soA').value);
//     let b = parseInt(document.getElementById('soB').value);
//     let c = parseInt(document.getElementById('soC').value);
//     if (a>b && b> c){
//         document.getElementById('solon').innerText = "Số lớn nhất là " + a
//     }
//         else if (b>a && b> c){
//             document.getElementById('solon').innerText= "Số lớn nhất là " + b
//     }
//         else{
//             document.getElementById("solon").innerText= 'Số lớn nhất là ' + c
//         }
// }
//

///////////////////////////
// Luyện tập cấu trúc câu điều kiện 2

// Bài 1:

// Bài 7: Giải phương trình bậc 2
// function timN() {
//     let a = parseInt(document.getElementById('nhapa').value);
//     let b = parseInt(document.getElementById('nhapb').value);
//     let c = parseInt(document.getElementById('nhapc').value);
//     let e;
//     let x1;
//     let x2;
//
//     if ( a===0 && b === 0 && c=== 0){
//         document.getElementById('ptbac2').innerText = "Phương trình vô số nghiệm"
//     }
//     else if (a===0 && b === 0 && c !== 0){
//         document.getElementById('ptbac2').innerText = "Phương trình vô nghiệm"
//
//     }
//     else if (a===0 && b!==0 && c!==0){
//         let d = (-c)/b
//         document.getElementById('ptbac2').innerText = "Phương trình có nghiệm duy nhất x = " + d;
//     }
//     else{
//        e = (b**2)-4*a*c
//         if (e < 0){
//             document.getElementById('ptbac2').innerText = "Phương trình vô nghiệm"
//         }
//         else if (e === 0){
//            x1 =  (-b)/(2*a);
//            document.getElementById('ptbac2').innerText = "Phương trình có nghiệm duy nhất x = " + x1;
//         }
//         else
//             x1 = ((-b)+Math.sqrt(e))/(2*a);
//             x2 = ((-b)-Math.sqrt(e))/(2*a);
//             document.getElementById('ptbac2').innerHTML = "Phương trình có 2 nghiệm phân biệt: " + "Nghiệm x1 = " + x1.toFixed(3) + "Nghiệm x2 = " + x2.toFixed(3)
//
//     }
//
//
//
//
// }



//





