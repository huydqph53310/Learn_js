
/// bài 1
function Bai1() {
    // var textLable = document.getElementById('label');
    // textLable.textContent = "Thành tiền:";
    var Name = document.getElementById('Name').value;
    var Tuoi = document.getElementById('Tuoi').value;
    var Local = document.getElementById('Diachi').value;  
    var Phone_Num = document.getElementById('Phone').value;
    if(Name === '')
    {
        document.getElementById('err-Ten').innerHTML = "Không được để trống tên";
        if(Tuoi > 200)
        {
            document.getElementById('err-Tuoi').innerHTML += "Tuổi ko thể lớn như vậy";          
        }
        if(Tuoi % 1 !== 0)
        {
            document.getElementById('err-Tuoi').innerHTML = "Tuổi Phải là số";
        }
        if(Local === '')
        {
            document.getElementById('err-DC').innerHTML = "Không được để trống địa chỉ";
        }
        if(Phone_Num == '')
        {
            document.getElementById('err-Phone').innerHTML = "Không được để trống số điện thoại";
            if(Phone_Num  % 1 !== 0)
            {
                document.getElementById('err-Phone').innerHTML = "Không chứa ký tự chữ trong số điện thoại";
            }
            if(Phone_Num.length  > 10 || Phone_Num.length  < 10 && Phone_Num !== '')
            {
                document.getElementById('err-Phone').innerHTML += "Số Điện thoại phải là 10 số";
            }
        }
        return false;
    }
}
function TinhTien() {
    var GiaMatHang = document.getElementById('mathang').value;
    var Soluong = document.getElementById('Qty').value;
    var phukien = document.querySelectorAll(".MOD");
    var Ship = document.querySelectorAll(".SHIP");
    var Sum = 0;
    var Sum2 = 0;
    for (let i = 0;i < phukien.length;i++)
    {
        if(phukien[i].checked == true)
        {
            Sum += Number(phukien[i].value);
        }
    }
    for (let i = 0;i < Ship.length;i++)
    {
        if(Ship[i].checked == true)
        {
            Sum2 += Number(Ship[i].value);
        }
    }
    var ThanhTien = GiaMatHang * Soluong;
    document.getElementById('TongTien').innerHTML = Number(ThanhTien) + Number(Sum) + Number(Sum2);
}
function ChangeSelect(text) {
    console.log(text);
}
/// bai 2
// DataBase
class DataBase {
    constructor(Name, Price) {
        this.NAME = Name;
        this.Price = Price;
    }
}
var Listitem = [
    new DataBase('Iphone 15', 1950),
    new DataBase('SamSung Start', 1500),
    new DataBase('NoKia 2020', 1200),
    new DataBase('Sony Xperia', 1700),
    new DataBase('xiaomi not 100', 22700)
]

for (var i in Listitem) {
    var ItemTable = document.getElementById('Data');
    var newRow = ItemTable.insertRow();
    newRow.innerHTML = `
        <td>${Listitem[i].NAME}</td>
        <td>${Listitem[i].Price + "$"}</td>
        <td><button onclick="Add_Product('${Listitem[i].NAME}',${Listitem[i].Price})">ADD</button></td>
    `;
    // Learn ChatGPT And Create new Idea "data in Database - By DO QUOC HUY"
}
// Create Table and add item in database

class List_Product {
    constructor(Name, Price) {
        this.Name = Name;
        this.Price = Price;
    }
}
var List = [];
var total = document.getElementById('total');
function Add_Product(Name, Price) {
    List.push(new List_Product(Name, Price));
    console.log("Danh Sách Thêm Mới: ");
    for (var i in List) {
        console.log(List[i]);
    }
    var cartTable = document.getElementById('cart-items');
    var newRow = cartTable.insertRow();
    newRow.innerHTML = `
        <td>${Name}</td>
        <td class="item-price">${Price + "$"}</td>
        <td><button onclick="removeFromCart(this)">Remove</button></td>
    `;
    total.innerHTML = "Tong tien: " + (Sum(Price) + "$")
    // Learn ChatGPT And Create new Idea "data in Database - By DO QUOC HUY"
}
function removeFromCart(button) {
    var row = button.parentNode.parentNode;
    var price = parseFloat(row.querySelector('.item-price').textContent.replace('$', ''));
    row.parentNode.removeChild(row);
    // Sum(-price);
    total.innerHTML = "Tong tien: " + (Sum(-price) + "$")
}
var sum = 0;
//  Tinh Tong tien
function Sum(Price = 0) {
    return sum += Price;
}
