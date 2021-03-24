var images = ['images/rock.png', 'images/paper.png', 'images/scissor.png'];

// get random image for img1
var randomNumber1 = Math.floor(Math.random()*images.length);
var newHand1 = images[randomNumber1];

// get random image for img2
var randomNumber2 = Math.floor(Math.random()*images.length);
var newHand2 = images[randomNumber2];

document.querySelector(".img1").setAttribute("src", newHand1);
document.querySelector(".img2").setAttribute("src", newHand2);

if ((newHand1=='images/rock.png'&&newHand2=='images/scissor.png')||(newHand1=='images/scissor.png'&&newHand2=='images/paper.png')||(newHand1=='images/paper.png'&&newHand2=='images/rock.png')) {
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
} else if ((newHand1=='images/scissor.png'&&newHand2=='images/rock.png')||(newHand1=='images/paper.png'&&newHand2=='images/scissor.png')||(newHand1=='images/rock.png'&&newHand2=='images/paper.png')) {
  document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
} else if (newHand1==newHand2) {
  document.querySelector("h1").innerHTML="Draw!";
}
