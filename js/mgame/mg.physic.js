
export function addPhysicBody(mainComposite , obj){
  if (!obj.physicMaterial) obj.physicMaterial= "objectMaterial";
  if (!obj.linearDamping) obj.linearDamping = 0.15;
  if (!obj.angularDamping) obj.angularDamping = 0.15;

  if (!obj.cylinderSegments) obj.cylinderSegments = 16;
  if (obj.physicStatus===undefined) obj.physicStatus = true;
  if (obj.sleep==undefined) obj.sleep = false;



  obj.addFunction(shape);
  obj.addFunction(body);
  obj.addFunction(getMaterial);
  obj.addFunction(updatePhysic);
  obj.addFunction(setLoadIndex);
  obj.addFunction(setStatus);
  obj.addFunction(setActivityStatus);

  //
  mainComposite.addLink(mainComposite.loadIndex,obj.loadIndex);
  //mainComposite.addLink(mainComposite.cannon , obj.cannon);
  //mainComposite.addLink(mainComposite.physicSettings.materials , obj.materials);
  obj.cannon = mainComposite.cannon.getProxyLessObject;
  obj.materials = mainComposite.physicSettings.materials;

  //if (!obj.sleep) mainComposite.addLink(mainComposite.timeStamp , obj.timeStamp);
}

function setActivityStatus({sleep}){
  if (sleep){
    if (timeStamp){
      mainComposite.removeLink(mainComposite.timeStamp,self.timeStamp);
    }
  }else{
    mainComposite.addLink(mainComposite.timeStamp,self.timeStamp);

  }
}
function setLoadIndex({body}){
  if (setLoadIndex) return true;
  ++loadIndex;
  return true;
}

const updatePhysic = function({timeStamp , body}){
  if (body && mass!=0){
    sceneUpdate.position.x = body.position.x;
    sceneUpdate.position.y = body.position.y;
    sceneUpdate.position.z = body.position.z;
    //
    sceneUpdate.quaternion.x = body.quaternion.x;
    sceneUpdate.quaternion.y = body.quaternion.y;
    sceneUpdate.quaternion.z = body.quaternion.z;
    sceneUpdate.quaternion.w = body.quaternion.w;
  }
}

export function getMaterial({materials , physicMaterial}){
  if (physicMaterial in materials){
    return materials[physicMaterial];
  }else{
    return undefined;
  }
}

function setStatus({body,physicStatus}){
  if(physicStatus){
    cannon.add(body);
  }else{
    cannon.remove(body);
  }
}
const body = function({sceneUpdate , getMaterial , shape , mass , cannon }){
  if (body){
    cannon.remove(body);
  }
  if (!sceneUpdate){
    return false;
  }
  let cannonBody = new CANNON.Body({mass:mass , shape: shape , material: getMaterial });
  cannonBody.position.x = sceneUpdate.position.x;
  cannonBody.position.y = sceneUpdate.position.y;
  cannonBody.position.z = sceneUpdate.position.z;
  //
  cannonBody.quaternion.x = sceneUpdate.quaternion.x;
  cannonBody.quaternion.y = sceneUpdate.quaternion.y;
  cannonBody.quaternion.z = sceneUpdate.quaternion.z;
  cannonBody.quaternion.w = sceneUpdate.quaternion.w;
  //
  cannonBody.linearDamping = linearDamping;
  cannonBody.angularDamping = angularDamping;

  return cannonBody;
}

export function shape ({geometryName , dimension , scale}){
  let result;
  switch (geometryName){
    case "plane":
      if (heightData){
        result = new CANNON.Heightfield(heightData, {elementSize:dimension.width/dimension.xSeg});// error: heightData need to converted 
      }else{
        result = new CANNON.Plane();
      }
      break;
    case "box":
      result =  new CANNON.Box(new CANNON.Vec3(dimension.length * scale/2 ,dimension.width * scale/2 ,dimension.height * scale/2));
      break;
    case "sphere":
      result = new CANNON.Sphere(dimension.radius * scale);
      break;
    case "cylinder":
      result = new CANNON.Cylinder( dimension.radiusTop, dimension.radiusBottom , 
        dimension.height,cylinderSegments);
        let quat = new CANNON.Quaternion();
        quat.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
        let translation = new CANNON.Vec3(0,0,0);
        result.transformAllPoints(translation,quat);
      break;

  }

  return result;
}
