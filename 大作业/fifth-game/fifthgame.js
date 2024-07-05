const canvas = document.getElementById('canvas');
const cvs = canvas.getContext('2d');

//set canvas width, heigth
canvas.width = 900;
canvas.height = 600;

const clearSrc = "../trueEnd/trueEnd.html";
const failSrc = "ending5.html";



const up = "up";
const right = "right";
const left = "left";
const down = "down";

const upAroow = new Image();
const downAroow = new Image();
const leftAroow = new Image();
const rightAroow = new Image();

upAroow.src = "";
downAroow.src = ""
leftAroow.src = ""
rightAroow.src = ""

var image1;
var image2;
var image3;
var image4;
var image5;
var image6;
var image7;
var image8;
var image9;
var image10;

var image1Answer;
var image2Answer;
var image3Answer;
var image4Answer;
var image5Answer;
var image6Answer;
var image7Answer;
var image8Answer;
var image9Answer;
var image10Answer;


var imageLvl = 1;
var blurLvl = 1;
var blurLvlUp = 0.5;

var imageAnswer;
var userAnswer;

//set image blur function
function setBlur(blurLvl){
    canvas.style.filter = `blur(${blurLvl}px)`;
}

//change imgs size
function changeSize(img, setWidth){

    const raito = img.height / img.width;
    const newWidth = setWidth;
    const newHeight = setWidth * raito;

    return {width:newWidth, height:newHeight};

}//changeSize

 

//check answer is correct or wrong
function checkAnswer(){

    if (userAnswer != null){

        if (userAnswer == imageAnswer){
             
            imageLvlUp();
        }

        else{

            alert("Wrong way");
            window.location.href = failSrc;
             
        }

    }

    else{
        
    }

}

function imageLvlUp(){

    setBlur(0);
     

    imageLvl++;
    var img;

    switch(imageLvl){

        case 2:
            alert("Correct");
            img = image2;
            imageAnswer = image2Answer;
        break;


        case 3:
            alert("Correct");
            img = image3;
            imageAnswer = image3Answer;
        break;


        case 4:
            alert("Correct");
            img = image4;
            imageAnswer = image4Answer;
        break;

        case 5:
            alert("Correct");
            img = image5;
            imageAnswer = image5Answer;
        break;


        case 6:
            alert("Correct");
            img = image6;
            imageAnswer = image6Answer;

        break;

        case 7:
            alert("Correct");
            img = image7;
            imageAnswer = image7Answer;
        break;

        case 8 :
            alert("Correct");
            img = image8;
            imageAnswer = image8Answer;
        break;

        case 9:
            alert("Correct");
            img = image9;
            imageAnswer = image9Answer;
        break;

        case 10:
            alert("Correct");
            img = image10;
            imageAnswer = image10Answer;
        break;

        case 11:
            alert("Arrived");
            window.location.href = clearSrc;
        break;

    }

    blurLvl += blurLvlUp;
    imageSize = changeSize(img, canvas.width);
    cvs.drawImage(img, 0, 0, imageSize.width, imageSize.height);
    setBlur(blurLvl);
}


function gameStart() {

    document.addEventListener("keydown", function(e){

        if(e.key == "ArrowRight") {
            userAnswer = right;
        }
        else if( e.key == "ArrowLeft") {
            userAnswer = left;
        }
        else if( e.key == "ArrowUp") {
            userAnswer = up;
        }
        else if(e.key == "ArrowDown") {
            userAnswer = down;
        }
    
        else{
            userAnswer = null;
        }

        checkAnswer();

    });

  }


document.getElementById('overlay').addEventListener('click', function () {

    this.style.display = 'none';

    imageSize = changeSize(image1, canvas.width);
    cvs.drawImage(image1, 0, 0, imageSize.width, imageSize.height);
    imageAnswer = image1Answer;
    setBlur(blurLvl);

    gameStart();

  });
  

