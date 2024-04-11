/*
getElementByid() - phương thức tìm phần tử và thay đổi giá trị hiển thị
*/
// ví dụ:
document.getElementById("demo").innerHTML = "Hello World";
// Js Chấp nhận cả ngoặc kép lẫn ngoặc nháy đơn
// viết vào HTML: innerHTML
// đầu ra: document.write()
// hộp cảnh báo: windown.alert()
// bảng điều khiển trình duyệt: console.log()

// block code: các lệnh được nằm trong dấu{} là một block code
function HUYMOD()
{
    document.getElementById("demo").innerHTML = "HUYDZ";
}
HUYMOD();
/*
biến và các câu lệnh điều kiện
var: khai báo 1 biến
let: khai báo một biến khối
const: khai báo một hằng số khối
if: một khối câu lệnh sẽ được thực hiên có điều kiện
switch: một câu lệnh được thực thi theo nhiều trường hợp khác nhau
for: đánh dấu khối lệnh sẽ được thực thi trong vòng lặp
function: khai báo một hàm
return: Thoát khỏi một chức năng
try: thực hiển xử lý lỗi với một câu lệnh
*/ 
// Mảng trong js
const cars = ["Saab", "Volvo", "BWM"];
cars.push("Audi"); // Thêm vào cuối mảng
// đối tượng không đổi
const Car1 =
{
    type: "Fiat",
    Model: "500",
    color: "While"
};
Car1.color = "red";
Car1.Name = "HUY";
// demo mảng
// toán tử
// toán tử số học:
let a = 3;
let x = (100 + 50) * a;
// toán tử gán
let y = 10;
    y+=5;
// toán tử so sánh
// ==   Ngang bằng
// ===  Ngang bằng và loại ngang bằng
// !=   Khác
// !==  Khác và loại khác
// ?    Toán tử bậc 3

// Toán tử Logic
// &&   Và
// ||   Hoặc
// !    Khác

// Toán tử bitwise
// &    Và
// |    Hoặc
// ~    Không
// <<   Left Shift"Dịch trái n  tương ứng 2^n và Kết quả được dịch sẽ nhân với lũy thừa này>
// >>   Riht Shift"Dịch Phải n  tương ứng 2^n và Kết quả được dịch sẽ chia với lũy thừa này>
// var num = 10;
// var n = 1;
// var num2 = num >> n;
// document.getElementById("demo").innerHTML = num2;

// Toán tử +=
let text = "Hello ";
text += "World";
console.log(text);
// toán tử -=
let x2 = 10;
x2 -=5;
console.log(x2);
// toán tử *=
// toán tử %=
// toán tử <<=
let x3 = -100;
x3 <<= 5;
console.log(x3);
// toán tử >>>=
let x4 = -100;
x4 >>>= 1;
console.log(x4);

// JS có 8 kiểu dữ liệu
/*
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object
*/ 

// Đối tượng trong js
const person = {
    firstName:"John",
     lastName:"Doe", 
     age:50, 
     eyeColor:"blue"
};

// typeof dùng để kiểm tra kiểu dữ liệu trả về mô tả đúng với kiểu dữ liệu
var x5 = "huy";
console.log(typeof(x5));
if(typeof(x5) === "number")
{
    console.log("So");
}
else if(typeof(x5) === "string")
{
    console.log("string");
}

// Hàm trong js

function TinhTong(a,b)
{
    return a+b;
}
TinhTong(3,4);

// event Sự kiện JS
/*
onchange    Một phần tử HTML đã được thay đổi
onclick     Người dùng nhấp vào 1 phần tử HTML
conmouseout Người dùng di chuyển chuột qua phần tử HTML
onmouseover Người dùng di chuyển chuột ra khỏi phần tử HTML
onkeydown   Người dùng nhấn phím trên bàn phím
onload      Trình duyệt đã tải trang xong
 */

// Phương thức chuỗi trong JavaScript
// Độ dài chuỗi Length
let text2 = "DOQUOCHUY";
let length = text2.length;

var num = 20;
var num2 = num >> 2;
console.log(num2);

class Mode{
    constructor(name, age, gender, address, salary, major){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address =  address;
        this.salary = salary;
        this.major = major;
    }
    show(){
        return this.name + " " + this. age + " " + this.gender + " " + this.address + " " + this.salary + " " + this.major;
    }
}
var Manganer_Mem = [
    new Mode("HUY",19,"Nam","Ha Noi","1000", "DEV"),
    new Mode("ANH",19,"Nam","Ha Noi","1000", "DEV"),
    new Mode("HUY",19,"Nam","Ha Noi","1000", "DEV"),
    new Mode("EM",19,"Nam","Ha Noi","1000", "DEV"),
    new Mode("HUY",19,"Nam","Ha Noi","1000", "DEV"),
    new Mode("HUY",19,"Nam","Ha Noi","1000", "DEV"),
    new Mode("HUY",19,"Nam","Ha Noi","1000", "DEV"),
    new Mode("HUY",19,"Nam","Ha Noi","1000", "DEV"),
    new Mode("HUY",19,"Nam","Ha Noi","1000", "DEV"),
]

for(var i = 0; i < Manganer_Mem.length; i++){
    if(Manganer_Mem[i].name === "HUY")
    {
        document.write(Manganer_Mem[i].show() + "<br>");
    }
}
    
