// Bai1
/// focus Bai1 bai1 bai 1
const menus = document.querySelectorAll(".title");
const opentext = document.querySelectorAll(".mytext");
menus.forEach((el) => {
    el.addEventListener("click", (e) => {
        opentext.forEach((el) => {
            el.classList.remove("active");
        })
        e.target.nextElementSibling.classList.add("active");
    })
})

function remove() {
    opentext.forEach((ele) => {
        ele.classList.remove("active");
    })
}
/// Bài 2
/// focus Bai2 bai2 bai 2


var buttonContainer = document.getElementById("Show");
var List_Item = [];
var Change;
// Số lượng nút bạn muốn tạo
var numberOfButtons = 9;
var count = 0;
var check;
// Tạo và thêm các nút vào container
class List_Items {
    constructor(id) {
        this.id = id;
    }
}

for (var i = 1; i <= numberOfButtons; i++) {
    var button = document.createElement("button");
    button.id = i;
    buttonContainer.appendChild(button);


    button.onclick = function () {
        for (var i in List_Item) {
            if (List_Item[i].id == this.id) {
                alert("Bạn đã chọn rồi vui lòng chọn cái khác");
                check = true;
                break;
            }
        }
        if (count == (numberOfButtons - 1)) {
            alert("Bạn đã click vào hết các nút");
           location.reload();
        }
        else {
            if (!check) {
                Change = !Change;
                if (Change) {
                    this.style.backgroundColor = "green";
                    this.textContent = "X";
                    List_Item.push(new List_Items(this.id));
                    count++;
                }
                else if (!Change) {
                    for (var i in List_Item) {
                        if (List_Item[i].id == this.id) {
                            Change = !Change;
                            break;
                        }
                    }
                    this.style.backgroundColor = "red";
                    this.textContent = "O";
                    List_Item.push(new List_Items(this.id));
                    count++;
                }
            }
        }
        console.log(Change);
        console.log(count);
        check = false;
    }
}



/// focus Bai3 bai3 bai 3
// tạo button
var button = document.getElementById("button");
var Text_in_Img = document.getElementById("Text");
var text = ["First", "Prev", "Next", "Last", "Stop"]
for (var i = 0; i < text.length; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = text[i];
    btn.onclick = function () {
        var Cod = [this.textContent];
        Cod.forEach(function (message) {
            InPut(message);

        });
    }
    btn.setAttribute("class", "tile");
    button.appendChild(btn);
}
var change = document.getElementById("img");
var index = 0;
var Source_IMG =
    [
        "./P3_IMG/Anh[1].jpg",
        "./P3_IMG/Anh[2].jpg",
        "./P3_IMG/Anh[3].jpg",
        "./P3_IMG/Anh[4].jpg",
        "./P3_IMG/Anh[5].jpg"
    ];
var Index_IMG = 0;
function InPut(index) {
    switch (index) {
        case text[0]:
            Index_IMG = 0;
            change.src = Source_IMG[Index_IMG];
            Text_in_Img.innerHTML = "Anh " + (Index_IMG);
            break;
        case text[1]:
            Sleep = setInterval(Run, 1000);
            break;
        case text[2]:
            Run();
            // dùng chung hàm với prv
            break;
        case text[3]:
            if (Index_IMG > 0) {
                Index_IMG--;
                change.src = Source_IMG[Index_IMG];
                Text_in_Img.innerHTML = "Anh " + (Index_IMG);
            }
            if (Index_IMG === 0) {
                Index_IMG = Source_IMG.length;
            }
            break;
        case text[4]:
            clearInterval(Sleep);
            break;
        default:
            break;
    }
}
var Sleep = 1;
function Run() {
    if (Index_IMG < Source_IMG.length - 1) {
        Index_IMG++;
        change.src = Source_IMG[Index_IMG];
        Text_in_Img.innerHTML = "Anh " + (Index_IMG);
    }
    if (Index_IMG === Source_IMG.length - 1) {
        Index_IMG = 0;
    }
}


// bai 4
/// focus Bai4 bai4 bai 4
var ouput = document.getElementById("output");
var message = document.getElementById("message");
message.textContent = "Click để bắt đầu";
// bắt đầu tạo sự kiện textcontenr
function Click() {
    addbox();

    // bắt sự kiện click chuột của người dùng
}
var box = document.createElement("div");
var game = {
    timer: 0,
    start: null
};
box.classList.add('box');
ouput.append(box);
function ranNum(max) {
    return Math.round(Math.random() * max);
}
var size = 50;
function addbox() {
    size -= 2;
    if (size <= 0) {
        size = 50;
    }
    message.textContent = "Click để tiếp tục";
    game.start = new Date().getTime();
    box.style.display = 'block';
    box.style.backgroundColor = 'red';
    box.style.position = 'relative';
    box.style.width = size + "px";
    box.style.height = size + 'px';
    box.style.cursor = 'pointer';
    box.style.left = ranNum(450) + 'px';
    box.style.top = ranNum(450) + 'px';
}
box.onclick = function () {
    box.textContent = "";
    box.style.display = 'none';
    game.timer = setTimeout(addbox, ranNum(3000));
    if (!game.start) {
        message.textContent = 'loading...';
    }
    else {
        var cur = new Date().getTime();
        var dur = (cur - game.start) / 1000;
        message.textContent = `click trong ${dur} giay`;
        console.log(dur);
    }
}

