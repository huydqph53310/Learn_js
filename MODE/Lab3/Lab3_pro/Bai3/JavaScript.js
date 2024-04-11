MayTinh();
function MayTinh() 
{
    var numberOfButtons = 16;
    var dulieu = "/=C0*321-654+987";
    // Lặp để tạo và thêm nhiều nút
    for (var i = numberOfButtons - 1; i >= 0; i--) {
        // Tạo một nút mới
        var  button = document.createElement("button");
        for (var j = 0; j < dulieu.length + 1; j++) {
            button.textContent = dulieu[i];
        }
        // Onclick được sử dụng để bắt sự kiện
        button.onclick = function () {
            var messages = [this.textContent];
            messages.forEach(function (message) {
                if (message === "=") {
                    calculateResult()
                }
                else if (message === "C") {
                    clearDisplay();
                }
                else {
                    appendToDisplay(message);
                }
            });
        }
        // Lấy ra phần tử div có id là "button-container"
        var container = document.getElementById("button-container");
        // Thêm nút vào phần tử div
        container.appendChild(button);
    }
}
function calculateResult() 
{
    var result = eval(document.getElementById('display').value); // doc du lieu trong id display - ham eval 
    document.getElementById('display2').value = result;
}
/*

calculateResult(): Được gọi khi người dùng nhấp vào nút "=" để tính toán kết quả. Nó sẽ sử dụng 
hàm eval() để tính toán giá trị của biểu thức trong ô hiển thị và hiển thị kết quả trên ô hiển thị.*/

function appendToDisplay(value) 
{
    document.getElementById('display').value += value;
}
// appendToDisplay(value): Được gọi khi người dùng nhấp vào một nút số hoặc toán tử. Nó sẽ thêm giá trị của nút vào ô hiển thị.
function clearDisplay() 
{
    document.getElementById('display').value = '';
    document.getElementById('display2').value = '';
}
// clearDisplay(): Được gọi khi người dùng nhấp vào nút "C" để xóa ô hiển thị.
