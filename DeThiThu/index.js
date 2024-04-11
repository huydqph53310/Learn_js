var arr_slide_show = [
    "img/Anh[1].jpg",
    "img/Anh[2].jpg",
    "img/Anh[3].jpg",
    "img/Anh[4].jpg",
    "img/Anh[5].jpg",
]
var arr_button = [
    "Next",
    "Prv",
    "Start",
    "Stop",
    "First",
    "Last"
]
var button = document.getElementById("button");
var Change = document.getElementById("image");
for(let i = 0; i < arr_button.length;i++){
    var btn = document.createElement('button');
    btn.textContent = arr_button[i];
    btn.onclick = function(){
        var cod = [this.textContent]
        cod.forEach(function(message)
        {
            InPUT(message);
        })
    }
    button.appendChild(btn);
}
function InPUT(id){
    switch (id){
        case arr_button[0]:
            Run();
            break;
            case arr_button[1]:
                if(index_html > 0){
                    index_html--;
                    Change.src = arr_slide_show[index_html];
                }
                else if(index_html === 0){
                    index_html = arr_slide_show[arr_slide_show.length -1];
                }
            break;
            case arr_button[2]:
            Sleep = setInterval(Run, 1500);
            break;
            case arr_button[3]:
            Sleep = clearInterval();
            break;
    }
}
var Sleep = 1;
var index_html = 0;
function Run(){
    if(index_html < arr_slide_show.length -1){
        index_html++;
        Change.src = arr_slide_show[index_html];
    }
    else if(index_html === arr_slide_show.length-1){
        index_html = 0
    }
}
function Next(){
    document.getElementById("imgae").src ="img/Anh[1].jpg";
}
function Render(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var local = document.getElementById("name").value;
    var Email = document.getElementById("name").value;
    if(name === ''){
        document.getElementById("err-name").innerHTML = "Không được để trống tên";
    }
    if(phone === ''){
        document.getElementById("err-phone").innerHTML = "Không được để trống số điện thoại";
    }
    if(phone !== '')
    {
        if(phone.indexOf('0' !== 0))
        {
            document.getElementById("err-phone").innerHTML = "Số điện thoại phải bắt đầu là số 0";
        }
        if(phone % 1 != 0)
        {
            document.getElementById("err-phone").innerHTML = "Số điện thoại phải là số";
        }
        if(phone.length > 10 || phone.length < 10  && phone !== ''){
            document.getElementById("err-phone").innerHTML += " Số điện thoại sẽ có 10 số";
        }
    }
    if(local === ''){
        document.getElementById("err-local").innerHTML = "Không được để trống địa chỉ";
    }
    if(Email === ''){
        document.getElementById("err-email").innerHTML = "Không được để trống địa chỉ email";
    }
    if(Email.includes('.')&&Email.includes('@') && Email !== ''){
        document.getElementById("err-email").innerHTML = "Email phaỉ chứa @ hoặc .";
    }
    return false;

}

function ThanhTien(){
    var Price = document.getElementById("hang").value;
    var Qty = document.getElementById("Qty").value;
    document.getElementById("price").value = Price;
    var ThanhTien = Price * Qty;
    console.log(ThanhTien);
    var phukien = document.querySelectorAll(".phukien");
    for(let i=0; i < phukien.length;i++){
        if(phukien[i].checked == true){
            ThanhTien += Number(phukien[i].value)
        }
    }
    var Ship = document.querySelectorAll(".ship");
    for(let i=0; i < Ship.length;i++){
        if(Ship[i].checked == true){
            ThanhTien += Number(Ship[i].value)
        }
    }
    document.getElementById("ThanhTien").innerHTML = Number(ThanhTien);
}