
var i = 0;
var images = [];
var time = 3000;

//Image List
images[0] = 'img/HVE_Meat1.jpg';
images[1] = 'img/HVE_Meat4.jpg';
images[2] = 'img/Steaks.jpg';
images[3] = 'img/T-bone.jpg';
images[4] = 'img/Tomahawk.jpg';
images[5] = 'img/Flanksteak.jpg';
images[6] = 'img/Land.jpg';
images[7] = 'img/HVE_Bull.jpg';
images[8] = 'img/HVE_group.jpg';
images[9] = 'img/sheep.jpg';
images[10] = 'img/sheep2.jpg';
images[11] = 'img/Hochland2.jpg';
images[12] = 'img/Hochland.jpg';

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

