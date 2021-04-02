
var i = 0;
var images = [];
var time = 3000;

//Image List
images[0] = 'img/HVE_Meat1.jpg';
images[1] = 'img/Butchering.jpg';
images[2] = 'img/HVE_Meat4.jpg';
images[3] = 'img/Steaks.jpg';
images[4] = 'img/T-bone.jpg';
images[5] = 'img/Tomahawk.jpg';
images[6] = 'img/Flanksteak.jpg';
images[7] = 'img/Land.jpg';
images[8] = 'img/HVE_Bull.jpg';
images[9] = 'img/HVE_group.jpg';
images[10] = 'img/sheep.jpg';
images[11] = 'img/sheep2.jpg';
images[12] = 'img/Hochland2.jpg';
images[13] = 'img/Hochland.jpg';
images[14] = 'img/group2.jpg';
images[15] = 'img/BullResting.jpg';
images[16] = 'img/unterhose.jpg';


//Change Image
function changeImg() {

    document.slide.src = images[i];

    if(i < images.length - 1) {

        i++;

    }
    else {
        i = 0;
    }

    setTimeout("changeImg()", time);

}

window.onload = changeImg;

