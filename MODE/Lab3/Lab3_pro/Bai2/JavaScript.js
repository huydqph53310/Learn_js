document.getElementById("bai2").addEventListener("submit", function(event)
{
    event.preventDefault();
    var submits = Number(document.getElementById("BANG").value);
    RunAndWrite(submits);
});
async function RunAndWrite(Id) 
{
    // Đặt nội dung cho phần tử
    var chu = "Bảng cửu chương " + Id + " của bạn đang được thực hiện";
    var count = 0;
    var ID2 = 0;
    var sl = 15;
    do {
        await sleep(150);
        count++;
        ID2 = Id * count;
        if (count == 1) {
            for (let i = 0; i < chu.length; i++) { 
                document.write(chu[i]);
                await sleep(10);
            }
        }
        var ketqua = "<br>" + Id + " * " + count + " = " + ID2;
        for (var j = 0; j < ketqua.length; j++) {
            document.write(ketqua[j]);
            await sleep(sl);
        }
    }
    while (count < 10)
     document.write("<br>");
    var button = document.createElement("button");
    var button2 = document.createElement("button");
    // Đặt thuộc tính và nội dung cho button
    button.innerHTML = "Quay Lại Trang chủ"; // Nội dung của button
    button.id = "BT1"; // Đặt id cho button
    button2.innerHTML = "Quay Lại Bảng Cửu Chương"; // Nội dung của button
    button2.id = "BT2"; // Đặt id cho button
    // Thêm sự kiện click vào button
  button.onclick = function()
  {
    window.location.href ="http://127.0.0.1:5500/Lab3_pro/index.html";
  }
  button2.onclick = function()
  {
    location.reload();
  } 
    // Thêm button vào trong DOM (ví dụ: thêm vào trong body)
    document.body.appendChild(button);
    document.body.appendChild(button2);
}
function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}