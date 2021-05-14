// Import stylesheets
import './style.css';


// Write Javascript code!
var increment=0;
var s=document.getElementById("snake");
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
function snake()
{

  s.style.left=increment+"px";
  increment+=5;

}
setInterval(snake,600)