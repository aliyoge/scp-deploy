const rd = require('rd')
const fs = require('fs-extra')
const path = require('path')
module.exports = {

  statFiles(path) {
    var data = {
      filesCount: 0,
      totalFilesize: 0
    }
    rd.eachSync(path, function(f, s) {
      if (!s.size) return
      var stat = fs.lstatSync(f)
      if (stat.isDirectory()) return
      data[f] = s.size
      data.totalFilesize += s.size
      data.filesCount += 1
    })
    return data
  },

  isDirectory(src){
    return fs.lstatSync(src).isDirectory()
  },

  getFiletype(src){
    var filetype
    if (/\.(\w+)$/.test(src)){
      filetype = RegExp.$1
    }
    return filetype
  },

  pathResolve(src){
    // return path.resolve(src.replace(/\*+\S+$/,''))
    return path.resolve(process.cwd(), src);
  },

  error(opts){
    throw new Error(`[Deploy Error] ${opts.type} illegal: ${opts.param}`)
  },

  isDirectoryExist(src){
    src = path.resolve(src)
    return new Promise((resolve, reject)=>{
      fs.exists(src, function(exists){
        resolve(exists)
      })
    })
  },

  removePath(src) {
    let promise = new Promise((resolve, reject) => {
      fs.remove(src, (err) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
    return promise
  }
}