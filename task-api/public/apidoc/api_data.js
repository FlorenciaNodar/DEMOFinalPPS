define({ "api": [
  {
    "type": "get",
    "url": "/login",
    "title": "Inicio de Sesión",
    "version": "0.1.0",
    "name": "GetUser",
    "group": "Logueo",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "true/false",
            "description": "<p>True o false dependiendo del resultado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>! Usuario y/o contraseña incorrectas.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ADVERTENCIA",
            "description": "<p>! Debe completar todos los campos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Error! Usuario y/o contraseña incorrectas\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ADVERTENCIA! Debe completar todos los campos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Logueo"
  }
] });
