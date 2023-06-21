// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('Argentina_Provincias_Ciudades', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//   });

//   module.exports = {
//     sequelize,
//     DataTypes,
//     Model
//   }

//   sequelize.authenticate()
//   .then(() => {
//     console.log('¡LA CONEXION ES EXITOSA!');
//   })
//   .catch((error) => {
//     console.log('El error de conexión es: ' + error);
//   });

  
// module.exports = sequelize; 

const mysql =  require('mysql')

const conexion = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_DATABASE,
})


conexion.connect((error)=>{
    if(error){
        console.log('El error de conexion es: '+error)
    return
    }
    console.log('¡LA CONEXION ESTA EXCITADA!')
})

module.exports = conexion