
var i = 0;
var images = [];
var time = 3000;

//Image List
images[0] = 'img/HVE_Meat1.jpg';
images[1] = 'img/HVE_Meat2.jpg';
images[2] = 'img/HVE_Meat3.jpg';
images[3] = 'img/HVE_Meat4.jpg';
images[4] = 'img/HVE_Bull.jpg';
images[5] = 'img/HVE_group.jpg';
images[6] = 'img/sheep.jpg';
images[7] = 'img/sheep2.jpg';
images[7] = 'img/Hochland2.jpg';

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

