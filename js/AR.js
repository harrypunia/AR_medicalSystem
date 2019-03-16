THREEx.ArToolkitContext.baseURL = '/';
class AR {
    constructor() {
        this.context;
        this.source = new THREEx.ArToolkitSource({sourceType: 'webcam'});
        this.marker;
        this.customMarker;
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
    setSource(renderer) {
        this.source.init(() => this.source.onResize(renderer.domElement));
        window.addEventListener('resize', () => this.source.onResize(renderer.domElement));
    }
    setContext(camera) {
        this.context = new THREEx.ArToolkitContext({
            cameraParametersUrl: 'data/camera_para.dat',
            detectionMode: 'mono',
            maxDetectionRate: 30,
            canvasWidth: 80 * 3,
            canvasHeight: 60 * 3,
        });
        this.context.init(() => camera.projectionMatrix.copy(this.context.getProjectionMatrix()));
    }
    setMarker(scene) {
        this.customMarker = new THREE.Group;
        scene.add(this.customMarker);
        this.marker = new THREEx.ArMarkerControls(this.context, this.customMarker, {
            type: 'pattern',
            patternUrl: 'data/patt.hiro'
        });
    }
    attachSprite(sprite) {
        this.customMarker.add(sprite);
    }
    update(deltaMsec, nowMsec) {
        this.onRender.forEach(el => el(deltaMsec/1000, nowMsec/1000));
    }
}