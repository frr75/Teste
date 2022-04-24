var APP_DATA = {
  "scenes": [
    {
      "id": "0-varanda",
      "name": "Varanda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.5573458343995092,
        "pitch": 0,
        "fov": 1.4259191846740524
      },
      "linkHotspots": [
        {
          "yaw": -0.2571002778403866,
          "pitch": 0.013784003981767157,
          "rotation": 4.71238898038469,
          "target": "2-cozinha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-copa",
      "name": "Copa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "2-cozinha",
      "name": "Cozinha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.006605435499581702,
          "pitch": 0,
          "rotation": 0,
          "target": "1-copa"
        },
        {
          "yaw": 2.8229504543309583,
          "pitch": 0.03908513748154441,
          "rotation": 4.71238898038469,
          "target": "0-varanda"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
