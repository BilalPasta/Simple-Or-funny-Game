var randomnum1 = Math.random() * 9;
randomnum1 = Math.ceil(randomnum1);

var randomnum2 = Math.random() * 9;
randomnum2 = Math.ceil(randomnum2);

var randomnum3 = Math.random() * 9;
randomnum3 = Math.ceil(randomnum3);

var randomnum4 = Math.random() * 9;
randomnum4 = Math.ceil(randomnum4);

var randomnum5 = Math.random() * 9;
randomnum5 = Math.ceil(randomnum5);

var randomnum6 = Math.random() * 9;
randomnum6 = Math.ceil(randomnum6);

var randomnum7 = Math.random() * 9;
randomnum7 = Math.ceil(randomnum7);

var randomnum8 = Math.random() * 9;
randomnum8 = Math.ceil(randomnum8);

var randomnum9 = Math.random() * 9;
randomnum9 = Math.ceil(randomnum9);


var  main=document.getElementById('first_game');
var winumrlost= document.getElementById('second_game');




function ran(random_num, target,target1) {
  if (random_num === 1) {
    document.getElementById(target).src = "images/noproblem.gif";
    document.getElementById(target1).innerHTML = "kOI Baat nai Dobara Try Karo";

  }
  else if (random_num === 2) {
    document.getElementById(target).src = "images/oooooh.gif";
    document.getElementById(target1).innerHTML = "Aesa Luck hOna Tou Insaan Aesa hojata he";
  }
  else if (random_num === 3) {
    document.getElementById(target).src = "images/scratch.gif";
    document.getElementById(target1).innerHTML = "chOor dE is Game ko ,Tujh sE na hOPaega";

  }
  else if (random_num === 4) {
    document.getElementById(target).src = "images/lol.gif";
    document.getElementById(target1).innerHTML = "Lol Insaan Q game ka image kharab kr rHa hE";
  }
  else if (random_num === 5) {
    document.getElementById(target).src = "images/hahah.gif";
    document.getElementById(target1).innerHTML = "aEsa luck hoTo insaan Chullu bhar PaNi me DooB maRe";
  }
  else if (random_num === 6) {
    document.getElementById(target).src = "images/doobmar.gif";
    document.getElementById(target1).innerHTML = "choOr yaR Ab kiA kAho";
  }
  else if (random_num === 7) {
    // document.getElementById('top').style.backgroundImage = "url('images/win3.jpg')";
main.style.display = "none";
winumrlost.innerHTML='<img src="images/win1.gif" />';
  }
  else if (random_num === 8) {
    document.getElementById(target).src = "images/clapping.gif";
    document.getElementById(target1).innerHTML = "Bht Ache AAp ke liae tou Clapping Honi Chaiye";
  }
  else if (random_num === 9) {
    document.getElementById(target).src = "images/byby.gif";
    document.getElementById(target1).innerHTML = "Tujh Se NA hOpaega Choorde Choorde Game ko";
  }
}
var num=0;
function imagechanger(target,target1) {

  if (target === 'one'&&num<3) {
    ran(randomnum1, target,target1);
    console.log(randomnum1);
    console.log(num);
    num++;
  }
  else if (target === 'two'&&num<3) {
    ran(randomnum2, target,target1);
    console.log(randomnum2);
      console.log(num);
    num++;
  }
  else if (target === 'three'&&num<3) {
    ran(randomnum3, target,target1);
    console.log(randomnum3);
      console.log(num);
    num++;
  }
  else if (target === 'four'&&num<3) {
    ran(randomnum4, target,target1);
    console.log(randomnum4);
      console.log(num);
    num++;
  }
  else if (target === 'five'&&num<3) {
    ran(randomnum5, target,target1);
    console.log(randomnum5);
      console.log(num);
    num++;


  }
  else if (target === 'six'&&num<3) {
    ran(randomnum6, target,target1);
    console.log(randomnum6);
      console.log(num);
    num++;
  }
  else if (target === 'seven'&&num<3) {
    ran(randomnum7, target,target1);
    console.log(randomnum7);
      console.log(num);
    num++;
  }
  else if (target === 'eight'&&num<3) {
    ran(randomnum8, target,target1);
    console.log(randomnum8);
      console.log(num);
    num++;

  }
  else if (target === 'nine'&&num<3){
    ran(randomnum9, target,target1);
    console.log(randomnum9);
      console.log(num);
    num++;}
else{
  
    main.style.display = "none";
 winumrlost.innerHTML='<img src="images/lost.png" />';
}
}