/*
    - Complete the Middleware grantAccessTo to manage access control for userRoutes. 
    - The middleware takes an array of roles as the parameter
    - Access should be granted to all roles in the parameter
    - Throw an error 403(Forbidden), if the role doesnt have access, in the given format: 
    {
        "status": "error",
        "message": "Access Denied"
    }
*/

function grantAccessTo(roles) {
    try {
        // Write your middleware here.
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: "Unable to check access level"
        })
    }
}

// Export the middleware function as a module.
module.exports = { /*...*/ };