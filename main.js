var images = ["https://i.postimg.cc/PPptWW2Q/Keshawn.jpg", "https://i.postimg.cc/fJGMBVPn/Jaylan.jpg" , "https://i.postimg.cc/NLPs2J70/Mum.jpg", "https://i.postimg.cc/1V4yYwPP/Dad.jpg", "https://i.postimg.cc/xd3Zskhv/All-the-Family.jpg"];
var names = ["Keshawn Ngwa","Jaylan Ngwa", "Mum", "Dad", "My Family"];
var i = 0;
function update()
{
    
    var numbers_of_family_member_in_array = 4;
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName; i++;
}
