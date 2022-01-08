const usuarios=[
    {id:1,nombre:'francisco', username:'frank', edad:20, tipoUsuario:1},
    {id:2,nombre:'alvaro', username:'alvarito', edad:15, tipoUsuario:1},
    {id:3,nombre:'jared', username:'jaredsito', edad:12, tipoUsuario:1},
    {id:4,nombre:'meme', username:'mierde', edad:45, tipoUsuario:2},
    {id:5,nombre:'christian', username:'chiquite', edad:18, tipoUsuario:2},
]
   // MAP sirve para obtener cierta informacion de un array
const usuariosNombre= usuarios.map(usuario =>usuario.nombre)

const usuariosEdad= usuarios.map(usuario=>usuario.edad)

//FILTER sirve para filtrar cierta informacion que cumpla "x" condicion


    const usuariosActualizada= usuarios.push({id:6,nombre:'Hilario',username:'ChefMaster',edad:46,tipoUsuario:2})
    
    const usuariosMenores45= usuarios.filter(usuario=> usuario.edad < 45)

//DESTRUCTURING EN JAVASCRIPT

const {username, edad} = usuarios[0];

console.log(username)
console.log(edad)


const divContenido=document.getElementById('contenido');

divContenido.innerHTML= `
    <h1>Hola ${usuarios[1].nombre}, como estas?</h1>
`






