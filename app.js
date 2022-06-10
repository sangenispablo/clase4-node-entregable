// Para probar debe ir descomentando lo que quiera hacer !!!

const Contenedor = require("./classes/contenedor");

const productos = new Contenedor("productos.txt");

const cargarVarios = async () => {
  await productos.save({
    title: "Monitor LCD",
    price: 120,
    thumbnail: "https://picsum.photos/id/237/200/300",
  });
  await productos.save({
    title: "Gabinete Marshall",
    price: 230,
    thumbnail: "https://picsum.photos/id/201/200/300",
  });
  await productos.save({
    title: "Microprocesador Intel i7 11234 5.4Ghz",
    price: 450,
    thumbnail: "https://picsum.photos/id/137/200/300",
  });
  await productos.save({
    title: "Disco SSD 240Gb",
    price: 100,
    thumbnail: "https://picsum.photos/id/127/200/300",
  });
};

// Cargar varios Productos
// cargarVarios()

// Consultas de Productos
// productos.getById(1).then(console.log);
// productos.getById(2).then(console.log);
// productos.getById(3).then(console.log);
// productos.getById(4).then(console.log);

// Consulta de producto Inexistente
// productos.getById(14).then(console.log);

// Consulta de todos los productos
// productos.getAll().then(console.log);

// Eliminar un producto
// productos.deleteById(1).then(console.log);

// Eliminar todos los datosç
// productos.deleteAll().then(console.log);
