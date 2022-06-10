const {
  isFileExist,
  writeFileName,
  readFileName,
} = require("../helpers/utils");

class Contenedor {
  constructor(fileName) {
    this.fileName = fileName;
    this.init();
  }
  async init() {
    if (!isFileExist(this.fileName)) {
      await writeFileName(this.fileName);
    }
  }
  async save(objeto) {
    try {
      let data = await this.getAll(this.fileName);
      if (data.length > 0) {
        objeto.id = data[data.length - 1].id + 1;
      } else {
        objeto.id = 1;
      }
      data.push(objeto);
      await writeFileName(this.fileName, data);
      return "Datos guardados correctamente";
    } catch (error) {
      throw "Error al intentar guardar datos";
    }
  }
  async getById(id) {
    try {
      const data = await this.getAll(this.fileName);
      const filtro = data.filter((obj) => obj.id === id);
      if (filtro.length == 0) {
        return `El objeto con id: ${id} no existe`;
      } else {
        return filtro[0];
      }
    } catch (error) {
      throw "Error al intentar obtener datos";
    }
  }
  async getAll() {
    return await readFileName(this.fileName);
  }
  async deleteById(id) {
    try {
      let data = await this.getAll(this.fileName);
      const filtro = data.filter((obj) => obj.id != id);
      await writeFileName(this.fileName, filtro);
      if (filtro.length == data.length) {
        return `El objeto con id: ${id} no existe`;
      } else {
        return `El objeto con id: ${id} fue eliminado`;
      }
    } catch (error) {
      throw "Error al intentar borrar datos";
    }
  }
  async deleteAll() {
    try {
      await writeFileName(this.fileName);
      return "Los datos fueron borrados";
    } catch (error) {
      throw "Ocurrio un error al intentar borrar los datos...";
    }
  }
}

module.exports = Contenedor;
