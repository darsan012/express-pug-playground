export const createSuccessMessage = ({
    message = "Success",
    data = {},
    statusCode = 200,
    res
}) => res.status(200).json({ message, statusCode, data })

export const createErrorMessage = ({
    message = "Error",
    data = null,
    statusCode = 500,
    res
}) => res.status(500).json({ message, statusCode, data })