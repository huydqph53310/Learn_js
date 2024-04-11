// Lab3: Thực hành làm việc với switch case     
// DO not reup @ bản quyền thuộc về HUYDEV

function Bai1() 
{
    // var a = Number(prompt("Nhap vao so a: "));
    // var b = Number(prompt("Nhap vao so b: "));
    // var o = prompt("Phep tinh");
    // switch (o) {
    //     case "+":
    //         var kq = a + b;
    //         console.log("ket qua la: " + kq);
    //         break;
    //     case "-":
    //         var kq = a - b;
    //         console.log("ket qua la: " + kq);
    //         break;
    //     case "x":
    //         var kq = a * b;
    //         console.log("ket qua la: " + kq);
    //         break;
    //     case "/":
    //         if (b == 0) {
    //             console.log("Phép tính không thể thực hiện/Math error");
    //         }
    //         else {
    //             var kq = a / b;
    //             console.log("ket qua la: " + kq);
    //         }
    //         break;
    //     default:
    //         console.log("Toán tử hỗ trợ phép tính + - x /");
    //         break;
    // }
    var evals = prompt("Nhap vao bieu thuc: ");  
    document.writeln("Ket qua cua phep tinh la: " + PHEPTINH(evals));
}