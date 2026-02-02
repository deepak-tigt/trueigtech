import ajvInstance from "./ajvInstance.schema.js";

const schema = {
    type:"object",
    properties:{
        firstName:{
            type:"string",
            minLength:3,
        },
        lastName:{
            type:"string",
            minLength:3,
        },
        email:{
            type:"string",
            format:"email",
        },
        password:{
            type:"string",
            minLength:6,
        },
        isEmailVerified: {
            type: "boolean",
            default: false
        }
    }
}


export default ajvInstance.compile(schema);