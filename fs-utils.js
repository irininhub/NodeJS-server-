const fs = require("fs");


exports.readJsonFromFile = (filePath) => {
    let promise = new Promise((resolve, reject) => {
        fs.readFile(filePath, function (err, buf) {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(buf.toString()))
            }
        });
    });
    return promise
};

exports.writeJsonFromFile = (filePath, data) => {
    let promise = new Promise((res, rej) => {
        fs.writeFile("users.json", JSON.stringify(data), (err) => {
            if (err) rej(err);
            res()
        })
    });
    return promise
};
