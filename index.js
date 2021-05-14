// Import stylesheets
import './style.css';


// Write Javascript code!
var increment=0;
var s=document.getElementById("snake");
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
function snake(e)
{

  s.style.left=increment+"px";
  increment+=5;
}
function k(e)
{ if(e.key=="ArrowUp")
{
  console.log(e.key);
}
 console.log(e.key);
}
addEventListener("keydown",k,false);
//setInterval(snake,600)