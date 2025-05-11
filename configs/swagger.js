import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Blog API",
            version: "1.0.0",
            description: "API para un sistema publicaciones y comentarios respecto a las clases tecnicas ",
            contact:{
                name: "Julio Ramos ",
                email: "jramos-2020096@kinal.org.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3001/blog-api/v1"
            }
        ]
    },
    apis:[

    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}