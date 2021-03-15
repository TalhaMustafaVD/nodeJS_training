const add = (...params) => {
   return params.map(num => Number).reduce((a, b) => a + b, 0)
}

const subtract = (...params) => {
    return params.map(num => Number).reduce((a, b) => a - b, 0)
 }

 module.exports = {
     add,
     subtract
 }