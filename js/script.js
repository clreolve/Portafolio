console.log("Estoy Vivo");

const key_press_effect = new Audio('../source/sounds/key_press.mp3')
function key_press(){
    key_press_effect.play();
    key_press_effect.playbackRate = 2;
    MediaStreamAudioSourceNode.pause();
}

window.onload = function () {
  type_machines = document.getElementsByClassName("type_machine_text");
  console.log(type_machines);
  console.log(type_machines.length);

  for (var i = 0; i < type_machines.length; i++) {
    type_machines[i].addEventListener("webkitAnimationStart", key_press, false);
    type_machines[i].addEventListener("webkitAnimationIteration", key_press, false);
  }
};
