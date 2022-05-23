console.log("Estoy Vivo")

//const
const key_press_route = "../source/sounds/key_press.mp3";
const percent_scroll = 0.25; // porcentaje de scroll 

// key press efect
function key_press() {
  const key_press_effect = new Audio(key_press_route);
  key_press_effect.preload = "auto";
  key_press_effect.play();
  //key_press_effect.playbackRate = 2;

  //MediaStreamAudioSourceNode.pause();
}

function key_press2() {
  key_press_effect.play();
  key_press_effect.playbackRate = 2;
  MediaStreamAudioSourceNode.pause();
}

window.onscroll = function() {
  var distanceScrolled = document.documentElement.scrollTop;
  console.log('Scrolled: ' + distanceScrolled);
}

// delay scroll

let delay_scroll = document.querySelectorAll(".delay_scroll");

function simple_delay_scrolled() {
  let scrollTop = document.documentElement.scrollTop;

  for (var i=0; i<delay_scroll.length ; i++ ){
    let e = delay_scroll[i];
    let eheight = e.offsetTop;
    if(eheight - 300 < scrollTop) {
      e.style.opacity = 1;
    }
  }
}

window.addEventListener('scroll', simple_delay_scrolled);