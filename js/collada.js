class Collada {
    constructor() {
        this.loader = new THREE.ColladaLoader();       
    }
    load(name) {
        this.loader.load('../assets/' + name + '.dae', collada => {
            ar.add(collada.scene);
            const details = model.getObjectByName("details", true);
        })
    }
}