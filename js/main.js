let lastTimeMsec = null;
let template = new Template();
let ar = new AR();
let interface = new Interface();
let feed = new Feed();
let audio = new Audio("../assets/cough.mp3");
let reason = [
    "A general patient has paid to upgrade to priority status",
    "Your wait time has been adjusted",
    "A priority patient has paid to have their cough looked at immediately",
    "Your wait time has been adjusted",
    "A priority patient has purchased a larger private room",
    "Your wait time has been adjusted",
];

const init = () => {
    feed.init();
    template.init();
    interface.init();
    ar.init(template.renderer, template.scene, template.camera);
    animate();
}

const animate = nowMsec => {
    requestAnimationFrame(animate);
    ar.update(nowMsec, lastTimeMsec);
    ar.customMarker.visible ? interface.container.style.display = 'block': interface.container.style.display = 'none';
    interface.update();
}

init();