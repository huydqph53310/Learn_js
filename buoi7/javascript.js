// var a = document.getElementById("target")
// a.innerHTML = "huydev";
// console.log(a.innerHTML)

// var element = document.createElement('div')
// a .appendChild(element);
// // con lợn element mới được tạo ra sẽ biến thành con của con lợn a

function DOIMAUs(x) {
  const background = document.getElementById(x);
  const arrayColor = ['red','organe','yellow','green','blue','indigo','purple'];
  background.style.backgroundColor = arrayColor[x];
}
function DOIMAU(x) {
x.style.backgroundColor = x.id
  }
  
function DOI()
{
    var all = document.getElementsByTagName('div');
    for (var i= 0; i< all.length;i++)
    {
        all[i].style.backgroundColor = all[i].id;
    }
}