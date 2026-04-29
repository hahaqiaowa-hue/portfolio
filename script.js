const depthScenes = document.querySelectorAll("[data-depth-scene]");
const tiltLiteScenes = document.querySelectorAll("[data-tilt-lite]");

depthScenes.forEach((scene) => {
  const resetScene = () => {
    scene.style.setProperty("--bg-shift-x", "0px");
    scene.style.setProperty("--bg-shift-y", "0px");
    scene.style.setProperty("--glow-x", "50%");
    scene.style.setProperty("--glow-y", "50%");
  };

  resetScene();

  scene.addEventListener("pointermove", (event) => {
    const rect = scene.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const shiftX = (px - 0.5) * -18;
    const shiftY = (py - 0.5) * -14;

    scene.style.setProperty("--bg-shift-x", `${shiftX}px`);
    scene.style.setProperty("--bg-shift-y", `${shiftY}px`);
    scene.style.setProperty("--glow-x", `${px * 100}%`);
    scene.style.setProperty("--glow-y", `${py * 100}%`);
  });

  scene.addEventListener("pointerleave", resetScene);
});

tiltLiteScenes.forEach((scene) => {
  const resetTilt = () => {
    scene.style.setProperty("--tilt-x", "0deg");
    scene.style.setProperty("--tilt-y", "0deg");
  };

  resetTilt();

  scene.addEventListener("pointermove", (event) => {
    const rect = scene.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const tiltY = (px - 0.5) * 3.2;
    const tiltX = (0.5 - py) * 2.6;

    scene.style.setProperty("--tilt-x", `${tiltX}deg`);
    scene.style.setProperty("--tilt-y", `${tiltY}deg`);
  });

  scene.addEventListener("pointerleave", resetTilt);
});
