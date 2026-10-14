var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "ENTRADA",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0849615469452285,
          "pitch": 0.24785638918164388,
          "rotation": 5.497787143782138,
          "target": "1-baos"
        },
        {
          "yaw": 1.6386955455239267,
          "pitch": 0.2905285405004605,
          "rotation": 0.7853981633974483,
          "target": "2-zona-de-juego"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-baos",
      "name": "BAÑOS",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0053265502129918,
          "pitch": 0.2418423762914923,
          "rotation": 0.7853981633974483,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-zona-de-juego",
      "name": "ZONA DE JUEGO",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1201701479512636,
          "pitch": 0.2860084984610012,
          "rotation": 5.497787143782138,
          "target": "0-entrada"
        },
        {
          "yaw": 0.7117691169190739,
          "pitch": 0.40537614709150027,
          "rotation": 0,
          "target": "3-zona-privada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-zona-privada",
      "name": "ZONA PRIVADA",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0024893674421733,
          "pitch": 0.38910284428593833,
          "rotation": 0,
          "target": "2-zona-de-juego"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CERVECERIA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
