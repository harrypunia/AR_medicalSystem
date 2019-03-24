let lastTimeMsec = null;
let template = new Template();
let ar = new AR();
let interface = new Interface();
let feed = new Feed();
let defaultText = "An adjustment was made for"
let reason = ["Knee Injury",  "Dick Injury",  "Neck Injury",  "Ankle Injury",  "Face Injury"];
let people = ["Donald Hump",  "Donald Hump",  "Donald Hump",  "Donald Hump",  "Donald Hump"];

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
   // ar.customMarker.visible ? interface.style.display = 'block': interface.style.display = 'none';
    interface.update();
}

init();