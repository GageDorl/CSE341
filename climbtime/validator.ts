import { body, validationResult } from "express-validator";

export const validateCrag = () => {
    return [
        body('name').notEmpty().withMessage('Name is required'),
        body('location').notEmpty().withMessage('Location is required'),
        body('description').notEmpty().withMessage('Description is required'), 
        body('rockType').notEmpty().withMessage('Rock Type is required'),
        body('approachTime').isNumeric().withMessage('Approach Time must be a number'),
        body('style').notEmpty().withMessage('Style is required'),
        body('gradeRange').notEmpty().withMessage('Grade Range is required')
    ]
}

export const validateRoute = () => {
    return [
        body('name').notEmpty().withMessage('Name is required'),
        body('grade').notEmpty().withMessage('Grade is required'),
        body('type').notEmpty().withMessage('Type is required'),
        body('length').isNumeric().withMessage('Length must be a number'),
        body('cragId').notEmpty().withMessage('Crag ID is required')
    ]
}
    
export const validate = (req: any, res: any, next: any) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors: any[] = [];
    errors.array().map(err => {
        const key = (err as any).param ?? 'error';
        extractedErrors.push({ [key]: err.msg });
    });
    return res.status(422).json({
        errors: extractedErrors,
    });
}