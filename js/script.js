console.log("Estoy Vivo");

//const
const key_press_route = "../source/sounds/key_press.mp3";

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


