/** 
* @swagger
*  definitions:
*    error:
*      type: object
*      properties:
*          error:
*              type: string
*          error_description:
*              type: string
*    message:
*      type: object
*      properties:
*          message:
*              type: string
*
* 
*
*    serviceObject:
*       type: object
*       properties:
*          saloon_id:
*              type: string
*         
*          speciality :
*              type: string
*          cost:
*              type: number
*          duration :
*              type: string
*     
* /saloons/{saloon_id}/services:
     
*   post:
*     summary: create service
*     consumes:
*       - application/json
*     parameters:
*       - name: Create service
*         description: Create service
*         in: body
*         schema:
*           $ref: '#/definitions/serviceObject'
*       - name: saloon_id
*         in: path
*         description: saloon_id
*         required: true
*         type: string
*     responses:
*       200:
*         description : service data
*         schema:
*           $ref : '#/definitions/serviceObject'
*       422:
*         description: Validation error
*         schema:
*           $ref: '#/definitions/error'
*       500:
*         description: 500 internal server error
*         schema:
*           $ref: '#/definitions/error'
*
*
*
* 
*   get:
*     summary: get all services
*     consumes:
*       - application/json
*     parameters:
*      
*       - name: saloon_id
*         in: path
*         description: saloon_id
*         required: true
*         type: string
*     responses:
*       200:
*         description : service data
*         schema:
*           $ref : '#/definitions/serviceObject'
*       422:
*         description: Validation error
*         schema:
*           $ref: '#/definitions/error'
*       500:
*         description: 500 internal server error
*         schema:
*           $ref: '#/definitions/error'
*

* /saloons/{saloon_id}/services/{service_id}:
     
*   put:
*     summary: update service
*     consumes:
*       - application/json
*     parameters:
*       - name: update service
*         description: update service
*         in: body
*         schema:
*           $ref: '#/definitions/message'
*       - name: saloon_id
*         in: path
*         description: saloon_id
*         required: true
*         type: string
*       - name: service_id
*         in: path
*         description: service_id
*         required: true
*         type: string
*     responses:
*       200:
*         description : service data
*         schema:
*           $ref : '#/definitions/serviceObject'
*       422:
*         description: Validation error
*         schema:
*           $ref: '#/definitions/error'
*       500:
*         description: 500 internal server error
*         schema:
*           $ref: '#/definitions/error'

*   get:
*     summary: get specific service
*     consumes:
*       - application/json
*     parameters:
*       - name: saloon_id
*         in: path
*         description: saloon_id
*         required: true
*         type: string
*       - name: service_id
*         in: path
*         description: service_id
*         required: true
*         type: string
*     responses:
*       200:
*         description : service data
*         schema:
*           $ref : '#/definitions/serviceObject'
*       422:
*         description: Validation error
*         schema:
*           $ref: '#/definitions/error'
*       500:
*         description: 500 internal server error
*         schema:
*           $ref: '#/definitions/error'

*   delete:
*     summary: delete service
*     consumes:
*       - application/json
*     parameters:
*       - name: saloon_id
*         in: path
*         description: saloon_id
*         required: true
*         type: string
*       - name: service_id
*         in: path
*         description: service_id
*         required: true
*         type: string
*     responses:
*       200:
*         description : service data
*         schema:
*           $ref : '#/definitions/message'
*       422:
*         description: Validation error
*         schema:
*           $ref: '#/definitions/error'
*       500:
*         description: 500 internal server error
*         schema:
*           $ref: '#/definitions/error'
* 
*/
