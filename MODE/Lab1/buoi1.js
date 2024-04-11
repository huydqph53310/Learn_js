document.write("Hello World");

// gan link
let mang = [2,1,2,4,1,2,4,5,7,4,2]

let b =0; 
for (let i = 0; i < mang.length; i++)
{
    for (let j = i + 1; j < mang.length; j++)
    {
        if(mang[i] > mang[j])
        {
            b = mang[i];
            mang[i] = mang[j];
            mang[j] = b;
        }
    }
}
for (let i = 0; i < mang.length; i++)
{
    document.write(mang[i] + " ")
}
let tong = 0;
for (let i = 0; i < mang.length; i++)
{
    tong += i;
}
document.writeln(tong);

