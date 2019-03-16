class Sketch {
    constructor() {
        this.camera = new THREE.Camera();
        this.renderer = new THREE.WebGLRenderer({alpha: true});
        this.scene = new THREE.Scene();
    }
    init() {
        this.initRenderer();
        this.initScene();
        this.initCamera();
    }
    initRenderer() {
        this.renderer.setClearColor(new THREE.Color('lightgrey'), 0);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    }
    initScene() {
        this.ambient = new THREE.AmbientLight(0x666666);
        this.scene.add(ambient);
    }
    initCamera () {
        this.scene.add(camera);
    }
    update() {
        
    }
}