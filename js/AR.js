THREEx.ArToolkitContext.baseURL = '/'
class AR {
    constructor() {
        this.context;
        this.source;
        this.marker;
        this.customMarker;
        this.onRender = [];
    }
    init(renderer, scene, camera) {
        this.setSource();
        this.setContext(camera);
        this.onRender.push(function() {
            if (arToolkitSource.ready === false) return
            arToolkitContext.update(arToolkitSource.domElement)
        });
        this.setMarker();
        this.onRender.push(function() {});
        this.onRender.push(function() {
            renderer.render(scene, camera)
        });
    }
    setSource() {
        this.source = new THREEx.ArToolkitSource({sourceType: 'webcam'});
        this.source.init(() =>arToolkitSource.onResize(renderer.domElement));
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
    setMarker() {
        this.customMarker = new THREE.Group
        scene.add(this.customMarker)
        this.marker = new THREEx.ArMarkerControls(this.contet, this.customMarker, {
            type: 'pattern',
            patternUrl: 'data/mac.patt'
        });
        this.customMarker.add(sprite);
    }
    attachSprite(sprite) {
        this.customMarker.add(sprite);
    }
    update() {
    
    }
}