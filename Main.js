var images = [
    "Dad.jpeg","Mom.jpeg","Gurkeerat.jpg","Agam photo.png","Family.jpeg"
];

var names = [
    "Jasmeet Singh Sodhi","Damandeep Kaur","Gurkeerat Kaur","Agamjyot Singh Sodhi"
];

var i = 0
function update(){

    i++;
    var Members = 5;
    if(i > Members)
    {
        i = 0
    }

    var uimg = images[i];
    var uname = names[i];

    document.getElementById("fimg").src = uimg;
    document.getElementById("name").src = uname;
}