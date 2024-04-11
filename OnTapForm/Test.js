function ReadForm(){
    // validate
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var Local = document.getElementById("Local").value;
    var Email = document.getElementById("Email").value;
    var Phone_num = document.getElementById("Phone").value;
    if(name === ''){
        document.getElementById('err-name').innerHTML = "Không được để trống tên";
        if(age ===''){
            document.getElementById('err-age').innerHTML = "Không được để trống tuối";
        }
        if(age % 1 !== 0){
            document.getElementById('err-age').innerHTML = "Tuổi phải là số";          
        }
        if(age > 200){
            document.getElementById('err-age').innerHTML = "Tuổi " +age+ " quá cao bạn có chắc ko";          
        }
        if(Local === ''){
            document.getElementById('err-Local').innerHTML = "Không được để trống địa chỉ";          
        }
        if(Email === ''){
            document.getElementById('err-Email').innerHTML = "Không được để trống Email";          
        }
        if(Phone_num === ''){
            document.getElementById('err-Phone').innerHTML = "Không được để trống số điện thoại";       
        }
        if(Phone_num % 1 !== 0){
            document.getElementById("err-Phone").innerHTML = "Số điện thoại phải là số";
        }
        if((Phone_num > 10) || Phone_num < 10 && Phone_num !== ''){
            document.getElementById("err-Phone").innerHTML = "Số điện thoại chỉ có 10 số";
        }
        return false;
    }
}
function ThanhTien(){
    var hang = document.getElementById("hang").value;
    var Soluong = document.getElementById("Qty").value;
    var Thanhtien = hang * Soluong;
    var phukien = document.querySelectorAll(".phukien");
    var Sum = 0;
    for (var i in phukien){
        if(phukien[i].checked == true){
            Sum += Number(phukien[i].value);
        }
    }
    var Sum2 = 0;
    var Ship = document.querySelectorAll(".Ship");
    for (var i in Ship){
        if(Ship[i].checked == true){
            Sum2 += Number(Ship[i].value);
        }
    }
    document.getElementById("ThanhTien").innerHTML =  Number(Thanhtien) + Number(Sum) + Number(Sum2) +  " VND";
}