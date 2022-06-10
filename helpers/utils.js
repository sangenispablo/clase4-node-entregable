const fs = require("fs");

const isFileExist = (fileName) => {
  const fullName = "./data/" + fileName;
  return fs.existsSync(fullName);
};

const writeFileName = async (fileName, array = []) => {
  const fullName = "./data/" + fileName;
  try {
    await fs.promises.writeFile(fullName, JSON.stringify(array));
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const readFileName = async (fileName) => {
  try {
    const fullName = "./data/" + fileName;
    const data = await fs.promises.readFile(fullName, { encoding: "utf8" });
    const resp = await JSON.parse(data);
    return resp;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  isFileExist,
  writeFileName,
  readFileName,
};
