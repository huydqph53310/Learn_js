var baitap = Number(prompt("Bài tập cần check (Nhập Bài hoặc bai + số bài): "));

switch(baitap) {
    case 1:
            // Bài 1
    document.write("Bài 1: tính cạnh huyền của tam giác bằng định lý Pytago");
    var a = prompt("Nhập vào cạnh góc vuông a: ");
    var b = prompt("Nhập vào cạnh góc vuông b: ");

    var a1 = Math.pow(a, 2);
    var b1 = Math.pow(b, 2);
    var c1 = a1 + b1
    var canhhuyen = Math.sqrt(c1);
    document.write("<br/> - giá trị của Cạnh huyền là: " + canhhuyen);
        break;
    case 2:
 // Bài 2
 var khuvuc = prompt("Bắc Bộ 1 sào = 360m2; Trung Bộ 1 sào = 500m2; Nam Bộ 1 sào = 1000m2");
 var dientich = prompt("Nhập vào đơn vị mét vuông để chuyển đổi: ");
 var count = 0;
 var mau = 1;
 var min = 0;
 if (khuvuc == "Bắc Bộ" || khuvuc == 1) {
     min = 360;
     if (dientich < 360) {
         alert("Giá trị diện tích: " + dientich + " nhập nhỏ hơn so với điều kiện -> Nhập lại");
         location.reload();
     }
     else {
         count = dientich / min;
     }
     document.write("<br/> Số Sào Tại khu vực Bắc Bộ là: ", count);
     document.write("<br/> Khu vực miền bắc có " + count + " sào " + " và có " + ((mau * count) / 10) + " mẫu")
 }

 else if (khuvuc == "Trung Bộ" || khuvuc == 2) {
     min = 500;
     if (dientich < 500) {
         alert("Giá trị diện tích: " + dientich + " nhập nhỏ hơn so với điều kiện -> Nhập lại");
         location.reload();
     }
     else {
         count = dientich / min;
     }
         document.write("<br/> Số Sào Tại khu vực Tung Bộ là: ", count);
         document.write("<br/> Khu vực miền trung có " + count + " sào " + " và có " + ((mau * count) / 10) + " mẫu")
     
 }
 else if (khuvuc == "Nam Bộ" || khuvuc == 3) {
     min = 1000;
     if (dientich < 1000) {
         alert("Giá trị diện tích: " + dientich + " nhập nhỏ hơn so với điều kiện -> Nhập lại");
         location.reload();
     }
     else {
         count = dientich / min;
     }
         document.write("<br/> Số Sào Tại khu vực Nam Bộ là: ", count);
         document.write("<br/> Khu vực miền nam có " + count + " sào " + " và có " + ((mau * count) / 10) + " mẫu")
 }
 else {
     document.write("helo");
 }
 break;
 case 3:
    alert("Đây là Phương thức tính số BMI");
    var kg = prompt("Nhập vào trọng lượng cơ thể: ");
    var height = prompt("Nhập vào chiều cao của bạn(Đơn vị CM): ");
    var height1 = height / 100;
    var BMI = kg / (height1 * height1);
    if (BMI < 18.5) {
        alert("Thiếu Cân");
        location.replace();

    }
    else if (BMI >= 18.5 && BMI < 25) {
        alert("Bình Thường");
        location.replace();

    }
    else if (BMI >= 25 && BMI < 29.99) {
        alert("Thừa Cân");
        location.replace();

    }
    else {
        alert("Béo Phì");
        location.replace();
    }
    break;
    case 4:
        const TheList =  ['Lauren', 'Kevin', 'true', '35', 'null', 'underfined', ['one', 'tow']];
        const remove = TheList.splice(0, TheList.length -1);
        document.write("<br/> ", remove);
        TheList.splice(0,0,'FRIST');
        console.log(TheList);
        TheList.splice(3,0,'Hello World');
        console.log(TheList);
        TheList.splice(2,0,'middle');
        console.log(TheList);
        TheList.push('Last')
        console.log(TheList);
        break;
    case 5:
        var nguoichoi = prompt("Nhap vao con số may mắn");
        var x = 10 + Math.round(5 * Math.random());
        console.log(x);
        if(x == nguoichoi)
        {
            alter("Chúc Mừng");
        }
        else if(nguoichoi > x)
        {
            alert("Số Bạn chọn lớn hơn");
        }
        else 
        {
            alert("Số bạn chọn nhỏ hơn");
        }
        break;
    default:
        alert("Khong co gia tri bai tap");
        location.reload();
        break;
}

