document.getElementById('bai1').addEventListener("submit",function(event)
{
    event.preventDefault();// ngăn chặn hành động mặc định: tải lại trang
    var input = document.getElementById("BANG").value;
    RunAndWrite("Kết quả Phép tính bạn vừa nhập là: "+ Pheptinh(input) + "<br>");

});
function Pheptinh(value)
{
    return eval(value);
}
async function RunAndWrite(Text) 
{
    var count = 0;
    var sl = 15;
    do {
        await sleep(150);
        count++;
        for (var j = 0; j < Text.length; j++) {
            document.write(Text[j]);
            await sleep(sl);
        }
        var button = document.createElement("button");
        var button2 = document.createElement("button");
        // Đặt thuộc tính và nội dung cho button
        button.innerHTML = "Quay Lại Trang chủ"; // Nội dung của button
        button.id = "BT1"; // Đặt id cho button
        button2.innerHTML = "Quay Lại Phép Tính"; // Nội dung của button
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
    while (count < 1)
}
function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}