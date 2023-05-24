export interface Galeria {
    id:number,
    nombre:string,
    imagen: string,
    descripcion: string,
    fecha:string,
    estado:boolean,
    visitas:number
}


export const ListaGalerias:Array<Galeria>=[
   {
    id: 1,
    nombre:"foto 1",
    imagen:"imagen 1",
    descripcion:"descripcion",
    fecha: "12-02/2002",
    estado: true,
    visitas:0
   },
   {
    id: 2,
    nombre:"foto 2",
    imagen:"imagen 2",
    descripcion:"descripcion",
    fecha: "12-02/2002",
    estado: true,
    visitas:1
   },
   {
    id: 3,
    nombre:"foto 3",
    imagen:"imagen 2",
    descripcion:"descripcion",
    fecha: "12-02/2002",
    estado: true,
    visitas:1
   },
   {
    id: 4,
    nombre:"foto 4",
    imagen:"imagen 2",
    descripcion:"descripcion",
    fecha: "12-02/2002",
    estado: true,
    visitas:1
   }
]

