function SoSanh(name) {
    RUNBOT(name);
}
function RUNBOT(name) {
    var Random = Number(Math.round(2 * Math.random()));
    switch (Random) 
    {
        case 0:
            Ketqua(name,"ROCK");
            break;
        case 1:
            Ketqua(name, "PAPER");
            break;
        case 2:
            Ketqua(name, "SCISSORS");
            break;
        default:
            break;
    }
}
function Ketqua(name,name2)
{
    // - Rock đánh bại Scissors
    // - Paper đánh bại Rock
    // - Scissors đánh bại Paper
    var s;
    if(name == "ROCK" && name2 =="SCISSORS")
    {
        s = "Thắng";
        alert(s);
    }
    else if(name == "PAPER" && name2 =="ROCK")
    {
        s = "Thắng";
        alert(s);
    }
    else if(name == "SCISSORS" && name =="PAPER")
    {
        s = "Thắng";
        alert(s);
    }
    else if(name2 == "ROCK" && name =="SCISSORS")
    {
        s = "Thua";
        alert(s);
    }
    else if(name2 == "PAPER" && name =="ROCK")
    {
        s = "Thua";
        alert(s);
    }
    else if(name2 == "SCISSORS" && name =="PAPER")
    {
        s = "Thua";
        alert(s);
    }
    else if(name == name2)
    {
        s = "HOA";
        alert(s);
    }
}