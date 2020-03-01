
const fs = require('fs');

exports.fetchData = filename => {
    return new Promise((resolve,reject) => {
        fs.readFile(`./data/${filename}`, (err,data)=>{
            if (err) reject(err);
            return resolve(JSON.parse(data));
        })
    })
}

exports.updateData = data => {
    fs.writeFile('./data/videos.json', JSON.stringify(data), err => {
        return new Promise((resolve,reject) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

module.exports = exports;