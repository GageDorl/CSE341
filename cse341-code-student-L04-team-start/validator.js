const { body, validationResult } = require('express-validator');
const validateTemple = () => {
    return [
        body('temple_id').notEmpty().withMessage('temple_id is required').isInt().withMessage('temple_id must be an integer'),
        body('name').notEmpty().withMessage('name is required').isString().withMessage('name must be a string'),
        body('location').notEmpty().withMessage('location is required').isString().withMessage('location must be a string'),
        body('dedicated').notEmpty().withMessage('dedication date is required').isString().withMessage('dedicated must be a string'),
        body('additionalInfo').notEmpty().withMessage('additionalInfo is required').isBoolean().withMessage('additionalInfo must be a boolean'),
    ];
}

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
    return res.status(422).json({
        errors: extractedErrors,
    });
}

module.exports = {
    validateTemple,
    validate,
};