import jwtDecode from 'jwt-decode'

export default class AuthenticationMiddleware {
    parseAuthorizationHeader(request, response, next) {
        if (request.headers.authorization) {
            request.token = request.headers.authorization.split("Bearer ")[1];
            next();
        } else {
            next({ code: 401, name: "unauthorized", message: "no auth header" });
        }
    }

    authenticate(request, response, next) {
        request.decoded_token = jwtDecode(request.token);
        // request.org_id =  request.decoded_token.iss.substring(request.decoded_token.iss.lastIndexOf("/") + 1); // org_id as tenant_id
        next();
    };

};


