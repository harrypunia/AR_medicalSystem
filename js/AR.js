THREEx.ArToolkitContext.baseURL = '/';
class AR {
    constructor() {
        this.context;
        this.source = new THREEx.ArToolkitSource({sourceType: 'webcam'});
        this.marker;
        this.customMarker = new THREE.Group;
        this.onRender = [];
    }
    init(renderer, scene, camera) {
        this.setSource(renderer);
        this.setContext(camera);
        this.onRender.push(() => {
            if (this.source.ready === false) return
            this.context.update(this.source.domElement)
        });
        this.setMarker(scene);
        this.onRender.push(function () {});
        this.onRender.push(function () { renderer.render(scene, camera) });
    }
    setContext(camera) {
        const scope = this;
        this.context = new THREEx.ArToolkitContext({
            cameraParametersUrl: 'data/camera_para.dat',
            detectionMode: 'mono',
            maxDetectionRate: 30,
            canvasWidth: 80 * 3,
            canvasHeight: 60 * 3,
        });
        this.context.init(function onCompleted () {
            camera.projectionMatrix.copy(scope.context.getProjectionMatrix())
        });
    }
    setSource(renderer) {
        const scope = this
        this.source.init(function onReady () {
            scope.source.onResize(renderer.domElement) 
        });
        window.addEventListener('resize', function () { 
            scope.source.onResize(renderer.domElement) 
        });
    }
    setMarker(scene) {
        scene.add(this.customMarker);
        this.marker = new THREEx.ArMarkerControls(
            this.context,
            this.customMarker,
            {type: 'pattern', patternUrl: 'data/patt.hiro'}
        );
    }
    add(obj) {this.customMarker.add(obj)}
    attachSprite(sprite) {
        this.customMarker = new THREE.Group;
        this.customMarker.add(sprite);
    }
    update(nowMsec, lastTimeMsec) {
        lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60;
        const deltaMsec = Math.min(200, nowMsec - lastTimeMsec);
        lastTimeMsec = nowMsec;
        const pulse = Date.now() * 0.0009;
        this.onRender.forEach(el => el(deltaMsec/1000, nowMsec/1000));
    }
}