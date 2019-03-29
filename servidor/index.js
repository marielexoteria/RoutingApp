import express from 'express';
import jwt from 'express-jwt';
import cors from 'cors';
import jwks from 'jwks-rsa';
import jwtAuthz from 'express-jwt-authz';
import bodyParser from 'body-parser';

//crear servidor
const app = express();

//configurando el servidor de express para que use json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//usando cors para que el servidor pueda ser consumido desde otro servidor
app.use(cors());

//verifica que el web token sea válido
const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://dev-mkgxogdb.auth0.com/.well-known/jwks.json"
    }),
    audience: 'http://productos',
    issuer: "https://dev-mkgxogdb.auth0.com/", //este bloque de código sale de la api que creé en auth0.com
    algorithms: ['RS256']
});

//revisando y validando los scopes/permissions que se declararon en el api en auth0.com
const checkScopes = jwtAuthz(['read:productos']);


//configurando el endpoint de la parte de la página que solamente es accesible mediante iniciar sesión
app.get('/productos', jwtCheck, checkScopes, (req, res) => {
    let productos = [ //contenido del archivo datos.json en el proyecto routingapp
        {
            "id" : 0,
            "nombre" : "HTML5",
            "precio" : 25,
            "imagen" : "camisa_1",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        },
        {
            "id" : 1,
            "nombre" : "CSS3",
            "precio" : 25,
            "imagen" : "camisa_2",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        },
        {
            "id" : 2,
            "nombre" : "NodeJS",
            "precio" : 30,
            "imagen" : "camisa_3",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        },
        {
            "id" : 3,
            "nombre" : "JavaScript",
            "precio" : 25,
            "imagen" : "camisa_4",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        },
        {
            "id" : 4,
            "nombre" : "Angular",
            "precio" : 20,
            "imagen" : "camisa_5",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        },
        {
            "id" : 5,
            "nombre" : "Github",
            "precio" : 20,
            "imagen" : "camisa_6",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        },
        {
            "id" : 6,
            "nombre" : "WordPress",
            "precio" : 25,
            "imagen" : "camisa_7",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        },
        {
            "id" : 7,
            "nombre" : "React",
            "precio" : 20,
            "imagen" : "camisa_8",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        }
    ]

    //convirtiendo el contenido de la variable productos a formato json
    res.json(productos);
});

//configurando el puerto que el servidor usará
app.listen(5000, () => {
    console.log('servidor funcionando en puerto 5000');
});

/*app.use(jwtCheck);

app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

app.listen(port);*/