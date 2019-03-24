let lastTimeMsec = null;
let template = new Template();
let ar = new AR();
let interface = document.getElementById('interface');

const init = () => {
    template.init();
    ar.init(template.renderer, template.scene, template.camera);
    animate();
}

const animate = nowMsec => {
    requestAnimationFrame(animate);
    ar.update(nowMsec, lastTimeMsec);
    ar.customMarker.visible ? interface.style.display = 'block': interface.style.display = 'none';
}

init();