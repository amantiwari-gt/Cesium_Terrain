Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMDA1MGMyZS01Mzg4LTRmMDctOTM2MS1iYjRhZDhlZDBlM2EiLCJpZCI6MTEyNjc4LCJpYXQiOjE2NjY4NzU1NTJ9.G3Zt4HeJ-J5ko1wF46c-1vFCgbhMME8xE5k6XTBCskA';


const worldTerrain = Cesium.createWorldTerrain({
  requestWaterMask: true,
  requestVertexNormals: true,
});

const viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: worldTerrain,
});

const solani = viewer.entities.add({
  polygon: {
    hierarchy: Cesium.Cartesian3.fromDegreesArray([
        // 77.79,30.04, 77.79,30.27, 78.0,30.27, 78.0,30.04, 
        77.79,      30.04,
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

viewer.zoomTo(solani);
solani.polygon.height = 100;
const initValue =document.getElementById("volume").value;
solani.polygon.extrudedHeight = initValue;

const buttonTest = document.getElementById("volume");
buttonTest.addEventListener("input", (e)=>{
  solani.polygon.extrudedHeight = e.target.value;
});

// set lighting to true
viewer.scene.globe.enableLighting = false;

const layer = viewer.imageryLayers.addImageryProvider(
  new Cesium.IonImageryProvider({ assetId: 2042038 }) 
  // new Cesium.IonImageryProvider({ assetId: 2054764 })
);
    // Centering the view above Solani Basin
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(77.927621,  30.186689 , 20000), 
    orientation: {
    heading: Cesium.Math.toRadians(0.0),
    pitch: Cesium.Math.toRadians(-90,0)
    }
    });

    // 77.92, 30.11
    
// Viewer
// const worldTerrain = Cesium.createWorldTerrain({
//   requestWaterMask: true,
//   requestVertexNormals: true,
// });

// const viewer = new Cesium.Viewer("cesiumContainer", {
//   terrainProvider: worldTerrain,
// });

// const solani = viewer.entities.add({
//   polygon: {
//     hierarchy: Cesium.Cartesian3.fromDegreesArray([
//         77.72,29.88, 77.72,30.30, 78.0,30.30, 78.0,29.88, 
//       ]),
        
//     height: 0,
//     material: Cesium.Color.BLUE.withAlpha(0.5),
//     outline: true,
//     outlineColor: Cesium.Color.BLACK,
//   },
// });

// viewer.zoomTo(solani);
// solani.polygon.height = 0;
// solani.polygon.extrudedHeight = 1000;

// // set lighting to true
// viewer.scene.globe.enableLighting = false;

// const layer = viewer.imageryLayers.addImageryProvider(
//   new Cesium.IonImageryProvider({ assetId: 2012824 })
// );

  

//     // Centering the view above Solani Basin
// viewer.camera.flyTo({
//     destination: Cesium.Cartesian3.fromDegrees( 77.92, 30.11, 100000),
//     orientation: {
//     heading: Cesium.Math.toRadians(0.0),
//     pitch: Cesium.Math.toRadians(-90,0)
//     }
//     });



    


    // const viewer = new Cesium.Viewer("cesiumContainer");


    