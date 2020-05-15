// let users = [
//     {"id": 1, "name": "Irin"},
//     {"id": 2, "name": "Dasha"}
// ];

const {readJsonFromFile, writeJsonFromFile} = require("./fs-utils");

const getUsers = () => {
 return readJsonFromFile("users.json")
};

const addUsers = async (name) => {
    let users = await getUsers();
    users.push({name: name});
  return writeJsonFromFile("users.json", users)
};

exports.getUsers = getUsers;
exports.addUsers = addUsers;

