var images=[
    "Screenshot_20210720-113624_Gallery.jpg",
    "Screenshot_20210720-113552_Gallery.jpg",
    "Screenshot_20210720-113650_Gallery.jpg",
    "Screenshot_20210720-113631_Gallery.jpg"];

var names =["Family","Jasmeet Singh","Damandeep Kaur","Agamjyot Singh","Gurkeerat Kaur"];

var i = 0;
function update()

{
    i++
    var familymembers =5
    if (1>familymembers)

    {
        i=0;
    }

    var updateimage = images[i]
    var updatedname = names[i]

    document.getElementById("family image").src= updatedimage;
    document.getElementById("name").innerhtml = updatedname;
}
