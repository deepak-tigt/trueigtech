function validateDto(ajvSchema) {
    return (req,res,next) => {
        const valid = ajvSchema(req.body);
        if(!valid){
            // store the error returned by the ajvValidate
            const errors = ajvSchema.errors;
            res.status(400).json(errors)
        }
        next();

    }
}

module.exports = validateDto;