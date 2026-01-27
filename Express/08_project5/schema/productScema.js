const ajvInstance = require("./ajv-instance")

const schema = {
    type:'object',
    properties:{
        name:{type:'string'},
        price:{type:"number"}
    },
    required:['name','price'],
    additionalProperties:false
}


module.exports = ajvInstance.compile(schema);