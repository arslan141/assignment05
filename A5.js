
class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
        return volume.toFixed(4);
    }
}


class Sphere {
    constructor(radius) {
        this.radius = radius;
    }

    getVolume() {
        const volume = (4 / 3) * Math.PI * Math.pow(this.radius, 3);
        return volume.toFixed(4);
    }
}


class Cone {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        const volume = (Math.PI * Math.pow(this.radius, 2) * this.height) / 3;
        return volume.toFixed(4);
    }
}

let cylinder = new Cylinder(5, 10);
console.log("Cylinder Volume: " + cylinder.getVolume()); 


let sphere = new Sphere(5);
console.log("Sphere Volume: " + sphere.getVolume()); 


let cone = new Cone(5, 10);
console.log("Cone Volume: " + cone.getVolume()); 
