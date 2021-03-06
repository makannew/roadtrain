// truck head
export function truckWheelsInfo() {
  let radius = 0.65,
    width = 0.3,
    axelLength = 1.4,
    axelHeight = 0.8,
    axelDiameter = 0.15;
  let frontAxel = 3.1,
    midleAxel = -1.9,
    rearAxel = -3.5;
  let frontStiffness = 220,
    frontDamping = 60,
    frontSpringLength = 0.8;
  let rearStiffness = 170,
    rearDamping = 30,
    rearSpringLength = 0.8;
  let angularDamping = 0;
  let wheelMass = 1,
    axelMass = 25;
  let textureFileName = [
      "./textures/tyreInside.png",
      "./textures/tyreTexture.png",
      "./textures/tyreOutside.png",
    ],
    color = 0xffffff,
    susColor = 0x333333;
  let wheelMaterial = "wheelMaterial",
    axelMaterial = "objectMaterial",
    fakeMaterial = "fakeWheelMaterial",
    frontWheel = "frontWheelMaterial";
  let steeringWheelMass = 1,
    steeringAxelMass = 25;
  let wheelsInfo = [];
  let doubleWheelGap = 0.07;
  //front left
  wheelsInfo.push({
    radius,
    width,
    axelLength: axelLength + width - doubleWheelGap,
    axelHeight,
    axelDiameter,
    distance: frontAxel,
    stiffness: frontStiffness,
    damping: frontDamping,
    springLegth: frontSpringLength,
    steering: true,
    engine: true,
    left: true,
    wheelMass: steeringWheelMass,
    axelMass: steeringAxelMass,
    textureFileName,

    color,
    susColor,
    wheelMaterial: frontWheel,
    axelMaterial,
    angularDamping,
  });
  //front right
  wheelsInfo.push({
    radius,
    width,
    axelLength: axelLength + width - doubleWheelGap,
    axelHeight,
    axelDiameter,
    distance: frontAxel,
    stiffness: frontStiffness,
    damping: frontDamping,
    springLegth: frontSpringLength,
    steering: true,
    engine: true,
    left: false,
    wheelMass: steeringWheelMass,
    axelMass: steeringAxelMass,
    textureFileName,
    color,
    susColor,
    wheelMaterial: frontWheel,
    axelMaterial,
    angularDamping,
  });
  //middle left
  wheelsInfo.push({
    radius,
    width: width * 2 + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance: midleAxel,
    stiffness: rearStiffness,
    damping: rearDamping,
    springLegth: rearSpringLength,
    steering: false,
    engine: true,
    left: true,
    wheelMass,
    axelMass,
    textureFileName,
    color,
    susColor,
    wheelMaterial: fakeMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap,
  });
  //middle right
  wheelsInfo.push({
    radius,
    width: width * 2 + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance: midleAxel,
    stiffness: rearStiffness,
    damping: rearDamping,
    springLegth: rearSpringLength,
    steering: false,
    engine: true,
    left: false,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial: fakeMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap,
  });
  //rear left
  wheelsInfo.push({
    radius,
    width: width * 2 + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance: rearAxel,
    stiffness: rearStiffness,
    damping: rearDamping,
    springLegth: rearSpringLength,
    steering: false,
    engine: true,
    left: true,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap,
  });
  //rear right
  wheelsInfo.push({
    radius,
    width: width * 2 + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance: rearAxel,
    stiffness: rearStiffness,
    damping: rearDamping,
    springLegth: rearSpringLength,
    steering: false,
    engine: true,
    left: false,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap,
  });

  return wheelsInfo;
}

// trailer
export function trailerWheelsInfo() {
  let radius = 0.65,
    width = 0.3,
    axelLength = 1.4,
    axelHeight = 0.8,
    axelDiameter = 0.1;
  let frontAxel = 1,
    midleAxel = 0.5,
    rearAxel = -1.5;
  let frontStiffness = 50,
    frontDamping = 30,
    frontSpringLength = 0.8;
  let rearStiffness = 70,
    rearDamping = 30,
    rearSpringLength = 0.8;
  let angularDamping = 0;

  let wheelMass = 1,
    axelMass = 5;
  let textureFileName = [
      "./textures/tyreInside.png",
      "./textures/tyreTexture.png",
      "./textures/tyreOutside.png",
    ],
    color = 0xffffff,
    susColor = 0x333333;
  let wheelMaterial = "wheelMaterial",
    axelMaterial = "objectMaterial",
    fakeMaterial = "fakeWheelMaterial";
  let doubleWheelGap = 0.07;

  let wheelsInfo = [];
  //front left
  // wheelsInfo.push({
  //   radius,
  //   width,
  //   axelLength,
  //   axelHeight,
  //   axelDiameter,
  //   distance:frontAxel,
  //   stiffness:frontStiffness,
  //   damping:frontDamping,
  //   springLegth:frontSpringLength,
  //   steering:false,
  //   engine:false,
  //   left:true,
  //   wheelMass,
  //   axelMass,
  //   textureFileName,
  //   color,
  //   wheelMaterial:fakeMaterial,
  //   axelMaterial,
  //   angularDamping
  // });
  // front right
  // wheelsInfo.push({
  //   radius,
  //   width,
  //   axelLength,
  //   axelHeight,
  //   axelDiameter,
  //   distance:frontAxel,
  //   stiffness:frontStiffness,
  //   damping:frontDamping,
  //   springLegth:frontSpringLength,
  //   steering:false,
  //   engine:false,
  //   left:false,
  //   wheelMass,
  //   axelMass,
  //   textureFileName,
  //   color,
  //   wheelMaterial:fakeMaterial,
  //   axelMaterial,
  //   angularDamping
  // });
  //middle left
  wheelsInfo.push({
    radius,
    width: width * 2 + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance: midleAxel,
    stiffness: rearStiffness,
    damping: rearDamping,
    springLegth: rearSpringLength,
    steering: false,
    engine: false,
    left: true,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap,
  });
  //middle right
  wheelsInfo.push({
    radius,
    width: width * 2 + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance: midleAxel,
    stiffness: rearStiffness,
    damping: rearDamping,
    springLegth: rearSpringLength,
    steering: false,
    engine: false,
    left: false,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap,
  });
  //rear left
  wheelsInfo.push({
    radius,
    width: width * 2 + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance: rearAxel,
    stiffness: rearStiffness,
    damping: rearDamping,
    springLegth: rearSpringLength,
    steering: false,
    engine: false,
    left: true,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap,
  });
  //rear right
  wheelsInfo.push({
    radius,
    width: width * 2 + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance: rearAxel,
    stiffness: rearStiffness,
    damping: rearDamping,
    springLegth: rearSpringLength,
    steering: false,
    engine: false,
    left: false,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap,
  });

  return wheelsInfo;
}
// additional trailer
export function additionalTrailerWheelsInfo() {
  let radius = 0.65,
    width = 0.3,
    axelLength = 1.4,
    axelHeight = 0.8,
    axelDiameter = 0.1;
  let frontAxel = 7,
    midleAxel = 0.5,
    rearAxel = -1.5;
  let frontStiffness = 40,
    frontDamping = 30,
    frontSpringLength = 0.8;
  let rearStiffness = 40,
    rearDamping = 30,
    rearSpringLength = 0.8;
  let angularDamping = 0;

  let wheelMass = 1,
    axelMass = 5;
  let textureFileName = [
      "./textures/tyreInside.png",
      "./textures/tyreTexture.png",
      "./textures/tyreOutside.png",
    ],
    color = 0xffffff,
    susColor = 0x333333;
  let wheelMaterial = "wheelMaterial",
    axelMaterial = "objectMaterial",
    fakeMaterial = "fakeWheelMaterial",
    frontWheel = "frontWheelMaterial";
  let doubleWheelGap = 0.07;

  let wheelsInfo = [];
  //front left
  wheelsInfo.push({
    radius,
    width, //:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance: frontAxel,
    stiffness: frontStiffness,
    damping: frontDamping,
    springLegth: frontSpringLength,
    steering: false,
    engine: false,
    left: true,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    //doubleWheelGap
  });
  // front right
  wheelsInfo.push({
    radius,
    width, //:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance: frontAxel,
    stiffness: frontStiffness,
    damping: frontDamping,
    springLegth: frontSpringLength,
    steering: false,
    engine: false,
    left: false,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    //doubleWheelGap
  });
  //middle left
  // wheelsInfo.push({
  //   radius,
  //   width:(width * 2) + doubleWheelGap,
  //   axelLength,
  //   axelHeight,
  //   axelDiameter,
  //   distance:midleAxel,
  //   stiffness:rearStiffness,
  //   damping:rearDamping,
  //   springLegth:rearSpringLength,
  //   steering:false,
  //   engine:false,
  //   left:true,
  //   wheelMass,
  //   axelMass,
  //   textureFileName,
  //   color,
  //   wheelMaterial,
  //   axelMaterial,
  //   angularDamping,
  //   doubleWheelGap
  // });
  //middle right
  // wheelsInfo.push({
  //   radius,
  //   width:(width * 2) + doubleWheelGap,
  //   axelLength,
  //   axelHeight,
  //   axelDiameter,
  //   distance:midleAxel,
  //   stiffness:rearStiffness,
  //   damping:rearDamping,
  //   springLegth:rearSpringLength,
  //   steering:false,
  //   engine:false,
  //   left:false,
  //   wheelMass,
  //   axelMass,
  //   textureFileName,
  //   color,
  //   wheelMaterial,
  //   axelMaterial,
  //   angularDamping,
  //   doubleWheelGap
  // });
  //rear left
  wheelsInfo.push({
    radius,
    width, //:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance: rearAxel,
    stiffness: rearStiffness,
    damping: rearDamping,
    springLegth: rearSpringLength,
    steering: false,
    engine: false,
    left: true,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    //doubleWheelGap
  });
  //rear right
  wheelsInfo.push({
    radius,
    width, //:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance: rearAxel,
    stiffness: rearStiffness,
    damping: rearDamping,
    springLegth: rearSpringLength,
    steering: false,
    engine: false,
    left: false,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    //doubleWheelGap
  });

  return wheelsInfo;
}
