
import { MGame } from '../js/mgame/mg.js';
import { loadWorlds } from "./snake.worlds.js";
import { exampleGeometries } from "./snake.example.geometries.js"
import { loadLights } from './snake.lights.js';
import { loadCameras } from './snake.cameras.js';
import { setupControls } from './snake.controls.js';
import { loadPlayerSettings } from './snake.player.js';
import { updateGame } from './snake.logics.js';
import { loadRigidVehicle } from './snake.rigidVehicle.js';
import { initialize } from './snake.initialize.js';
import { loadRayCastVehicle } from './snake.rayCastVehicle.js';
import { loadRoadTrain } from './snake.roadTrain.js';
import { startSnake } from './snake.start.js';
import { loadGround } from './snake.ground.js';


const snake = MGame();
snake.loadIndex = 0;
//snake.self = snake;
console.log(snake)

// load Cameras
loadCameras(snake);

// lights
loadLights(snake);

//
loadGround(snake);
// load world texture
//loadWorlds(snake);

// load example geometries
//exampleGeometries(snake);


// load rigid vehicle
//loadRigidVehicle(snake);

//load ray cast vehicle
//loadRayCastVehicle(snake);

// load mg road train
loadRoadTrain(snake);
// player settings
loadPlayerSettings(snake);

// game logic updating
updateGame(snake);

// setup game user controls
setupControls(snake);

// initialize the game
initialize(snake);

// start game
startSnake(snake);


