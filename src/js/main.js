import Grupo from './grupo.js';
import Persona from './persona.js';
  
let g3h=new Grupo()
let p=new Persona('A',1);//A1
g3h.agregar(p);//A1
p=new Persona('B',2);//B2
g3h.agregar(p); //(B2)
p=new Persona('C',3);
g3h.agregar(p);
g3h.agregar(new Persona('D',4));

console.log(g3h.listar());

let res=g3h.buscar('F');
if (res==null)
    console.log('No existe F');
else
    console.log(res.info());

res=g3h.buscar('C');
if (res==null)
    console.log('No existe C');
else
    console.log(res.info());

res=g3h.eliminar('F');
if (res==null)
    console.log('No se pudo eliminar la F');
else
    console.log(res.info() + 'se elimino ');
    
res=g3h.eliminar('B');
if (res==null)
    console.log('No se pudo eliminar la B');
else
    console.log('se elimino ' + res.info());    
console.log(g3h.listar());