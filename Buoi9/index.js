var anh = document.createElement("img");
document.getElementById("HUY").src = "./imd/images (1).jpg";
anh.id = "HUY";

var anhArr = ["./imd/images (1).jpg","./imd/images (2).jpg","./imd/images (3).jpg","./imd/images (4).jpg","./imd/images (5).jpg"];
var currentIndex = 0;
function Next()
{
    currentIndex++;
    Document.getElementById("HUY").src = anhArr[currentIndex];
}