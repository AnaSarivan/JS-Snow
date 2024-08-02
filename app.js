const containerW = 950;
const containerH = 630;

/* let f1 = new Flake(1, randCoord(0, containerW), 0, 10);
f1.render(scene)
f1.fall(containerW, containerH) */

let n = 1;

setInterval(() => {
    if (n < 100) {
        addAnotherFlake();
    }  
}, 10);

function addAnotherFlake() {
  n++;
  let scale = randFloat(1.6);
  let f = new Flake(n, randCoord(0, containerW), 0, scale, scale);
  f.render(scene);
  f.fall(containerW, containerH, addAnotherFlake);
}

