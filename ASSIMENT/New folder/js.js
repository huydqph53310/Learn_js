var Bai = Number(prompt("Nhap vao bai tap"));
switch (Bai) 
{
    case 1:
        var chieudai = Number(prompt("CHIEU DAI"));
        var ChieuRong = Number(prompt("CHIEU RONG"));
        if(chieudai < ChieuRong)
        {
            alert("CHIEU DAI KHONG DUOC NHO HON CHIEU RONG");
        }
        else
        {
            console.log(TinhHCN(chieudai,ChieuRong));
            DrawHCN(chieudai,ChieuRong);
        }
        break;
    case 2:
        ShowInfomationMem();
        break;
    case 3:
        Bai4();
        break;
    default:
        break;
}

function TinhHCN(a,b)
{
    return a*b;
}
function DrawHCN(a,b)
{
    for(var i = 0; i< a;i++)
    {
        document.write("*");
    }
}
let NV1 = new Bai2("HUY",19,"HaNam","DEV-WEB",1000);
function Bai2(Ten, Tuoi, DiaChi, NgheNghiep, MucLuong)
{
    this.Ten = Ten;
    this.Tuoi = Tuoi
    this.DiaChi = DiaChi;
    this.NgheNghiep = NgheNghiep;
    this.MucLuong = MucLuong;
}

function ShowInfomationMem()
{
    for (var a in Bai2)
    {
       document.write(Bai2[a]);
    }
}
function Bai4()
{
    var o = 7;
    for(var i = 0; i < o; i++)
    {
        var buttom = document.createElement("button");
        buttom.textContent = i;
        var container = document.getElementById("ale");
        // Thêm nút vào phần tử div
        buttom.onclick = function()
        {
            var message = [this.textContent];
            Trave(message);
        }
        container.appendChild(buttom);
    }
}
function Trave(Num)
{  
    var random = Number(Math.round(6*Math.random()));
    if(Num == random)
    {
        alert("Ban Dap Trung" + random +" "+ Num);
    }
    else if(Num != random)
    {
        alert("Ban Dap truot" + random +" "+ Num);
    }
}
