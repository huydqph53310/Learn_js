function Render()
{
    var name = document.getElementById("name").value;
    var local = document.getElementById("local").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var soluong = document.getElementById("soluong").value;
    if(soluong ===''){
        document.getElementById("err-soluong").innerHTML = "Không được để trống số lượng";
    }
        if(phone ===''){
            document.getElementById("err-phone").innerHTML = "Không được để trống số điện thoại";
        }
        if(email ===''){
            document.getElementById("err-email").innerHTML = "Không được để trống email";
        }
        if(local ===''){
            document.getElementById("err-local").innerHTML = "Không được để trống địa chỉ";
        }
        if(age ===''){
            document.getElementById("err-age").innerHTML = "Không được để trống tuổi";
        }   
        if(name === ''){
            document.getElementById("err-name").innerHTML = "Không được để trống tên";
        }
        else 
        {
            if(soluong !== '' && soluong % 1 !== 0){
                document.getElementById("err-soluong").innerHTML = "Số lượng phải là số";
            } 
            if(age !== '' && age % 1 !== 0){
                document.getElementById("err-age").innerHTML = "Tuổi phải là số";
            }
            if(age !== '' && age > 150){
                document.getElementById("err-age").innerHTML = "Tuổi " + age + " quá lớn";
            }
            if(phone !=='' && (phone.length > 10 || phone < 10)){
                document.getElementById("err-phone").innerHTML = "Số điện thoại chỉ bao gồm 10 số";
            }  
            if(phone !=='' && phone % 1 !== 0){
                document.getElementById("err-phone").innerHTML = "Số điện thoại Phải là số"; 
            }          
        }
        return false;
}