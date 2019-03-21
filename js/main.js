let lastTimeMsec = null;
let template = new Template();
let collada = new Collada();
let ar = new AR();
let audio1 = new Audio("assets/audio1.mp3");

const init = () => {
    template.init();
    collada.load('eyeball');
    ar.init(template.renderer, template.scene, template.camera);
    animate();
}

const animate = nowMsec => {
    requestAnimationFrame(animate);
    ar.update(nowMsec, lastTimeMsec);
    ar.customMarker.visible ? audio1.play() : audio1.pause();
}

init();