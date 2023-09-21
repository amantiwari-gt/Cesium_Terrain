Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMDA1MGMyZS01Mzg4LTRmMDctOTM2MS1iYjRhZDhlZDBlM2EiLCJpZCI6MTEyNjc4LCJpYXQiOjE2NjY4NzU1NTJ9.G3Zt4HeJ-J5ko1wF46c-1vFCgbhMME8xE5k6XTBCskA';


const worldTerrain = Cesium.createWorldTerrain({
  requestWaterMask: true,
  requestVertexNormals: false,
});

const viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: worldTerrain,
  // imageryProvider: Cesium.createWorldImagery(),
});

const floodVis = viewer.entities.add({
  polygon: {
    hierarchy: Cesium.Cartesian3.fromDegreesArray([
        // 77.79,30.04, 77.79,30.27, 78.0,30.27, 78.0,30.04, 
        77.79    ,  30.04,
        77.787998,  30.060827,
        77.803101,  30.113857,
        77.811828,  30.124262,
        77.865529,  30.177292,
        77.877947,  30.176621,
        77.887681,  30.186689,
        77.887009,  30.205821,
        77.917216,  30.249117,
        77.952458,  30.261871,
        78.015221,  30.186689,
        77.987028,  30.159503,
        77.902448,  30.101439,
        // 77.811828,  30.038676,
        // 77.896407,  30.075595,
        77.896528,  30.075401,
        // 77.861837,  30.063512,
        77.811343,  30.039709
      ]),
        
    height: 0,
    material: Cesium.Color.BLUE.withAlpha(0.5),
    outline: true,
    outlineColor: Cesium.Color.BLACK,
  },
});

viewer.zoomTo(floodVis);
floodVis.polygon.height = 100;
const initValue =document.getElementById("volume").value;
floodVis.polygon.extrudedHeight = initValue;

const buttonTest = document.getElementById("volume");
buttonTest.addEventListener("input", (e)=>{
  floodVis.polygon.extrudedHeight = e.target.value;
});

let demLayer, hand50Layer, HAND1200Layer;

let demBtn = document.getElementById("dem");
demBtn.addEventListener("click", (e)=>{
  if (demLayer) {
    viewer.imageryLayers.remove(demLayer);
    demLayer = null;
  } else {
    demLayer = viewer.imageryLayers.addImageryProvider(
      new Cesium.IonImageryProvider({ assetId: 2284954 })
    );
  }
});

// let hand50Btn = document.getElementById("hand50");
// hand50Btn.addEventListener("click", (e)=>{
//   if (hand50Layer) {
//     viewer.imageryLayers.remove(hand50Layer);
//     hand50Layer = null;
//   } else {
//     hand50Layer = viewer.imageryLayers.addImageryProvider(
//       new Cesium.IonImageryProvider({ assetId: 2146760 })
//     );
//   }
// });

let HAND1200Btn = document.getElementById("hand1200");
HAND1200Btn.addEventListener("click", (e)=>{
  if (HAND1200Layer) {
    viewer.imageryLayers.remove(HAND1200Layer);
    HAND1200Layer = null;
  } else {
    HAND1200Layer = viewer.imageryLayers.addImageryProvider(
      new Cesium.IonImageryProvider({ assetId: 2147240  })
    );
  }
});

// set lighting to true
viewer.scene.globe.enableLighting = true;

    // Centering the view above floodVis Basin
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(77.927621,  30.186689 , 30000), 
    // orientation: {
    // heading: Cesium.Math.toRadians(0.0),
    // pitch: Cesium.Math.toRadians(-90,0)
    // }
    });

