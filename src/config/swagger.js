import swaggerJSDoc from 'swagger-jsdoc';
export default (base_path)=> {
    const swaggerDefinition = {
        info: {
            title: 'Sample  API\'S',
            version: '1.0.0',
            description: 'Chase',
        },
        basePath: base_path,
        securityDefinitions: {
            "Bearer": {
                "type": "apiKey",
                "in": "header",
                "name": "Authorization"
            }
        },
        security: [
            {
                "Bearer": []
            }
        ]
    };

    const options = {
        swaggerDefinition,
        apis: ['docs/*_swagger.js'], // <-- not in the definition, but in the options
        // apis: ['docs/*_swagger.js','docs/reports/*_swagger.js','docs/downloads/*_swagger.js'], // <-- not in the definition, but in the options
    };

    return  swaggerJSDoc(options);
}
