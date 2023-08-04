prompt("HELLO, Kindly Enter You Name");



// id section
let hr = document.getElementById('hour');
let min = document.getElementById('minutes');
let sec = document.getElementById('second');

//  function

function displaytime(){
    let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
 
  let hRotation = 30*hh + mm/2;  
  let mRotation = 6*mm;
  let sRotation = 6*ss;
//  rotation section
hr.style.transform = `rotate(${hRotation}deg)`;
min.style.transform = `rotate(${mRotation}deg)`;
sec.style.transform = `rotate(${sRotation}deg)`;


}
 setInterval(displaytime,1000);