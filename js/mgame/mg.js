
import CompositeObject from "../composer.js"
import { addCamera, activeCamera } from "./mg.camera.js"
import { addObject } from "./mg.object.js"
import { activeWorld , addSkyBox} from "./mg.skyBox.js"
import { startEngine } from "./mg.startEngine.js"
import { initializeThreeJs ,settings } from "./mg.initialize.js"
import { addLight } from "./mg.light.js"
import { cannonSettingsBuilder } from "./mg.physic.settings.js"
import { addPhysicBody } from "./mg.physic.js"

export function MGame(){
  let result = CompositeObject();
  result.three = initializeThreeJs();

  result.utils = {};
  result.utils.addCamera = function(cameraName){addCamera(result , cameraName);}
  result.utils.addLight = function(lightName){addLight(result , lightName);}
  result.utils.addObject = function(objectName){addObject(result , objectName);}
  result.utils.addSkyBox = function(skyBoxName){addSkyBox(result , skyBoxName);}
  result.utils.addPhysicBody = function(sceneObject){addPhysicBody(result , sceneObject);}

  result.utils.start = startEngine;

  result.sceneObjects = {};
  result.cameras = {};
  result.worlds = {};
  result.lights ={};
  result.physicBodies = {};


  cannonSettingsBuilder(result);


  result.actualInterval = 0;
  result.running = false;
  result.needsUpdate = undefined;



  result.addFunction(demandInterval);
  // default values
  result.settings = settings;

  result.addFunction(activeCamera);
  result.addFunction(activeWorld);
  result.addFunction(newAnimationFrame);
  //result.addFunction(updateLight);

  return result;

}

const newAnimationFrame = function({timeStamp , three , activeCamera , cannon}){
  cannon.step(demandInterval , actualInterval , settings.maxSubStep);

  three.renderer.render( three.scene , activeCamera);
  return true;
}

const demandInterval = function({settings}){
  return 1/settings.frameRate;

}


