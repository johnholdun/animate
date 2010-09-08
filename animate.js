function animate(stage, frames, frame) {
  if (typeof frame == "undefined") {
    frame = -1;
  }

  frame++;

  if (frame >= frames.length) {
    frame = 0;
  }

  stage.innerHTML = frames[frame][0];

  setTimeout(function() { animate(stage, frames, frame) }, frames[frame][1]);
}