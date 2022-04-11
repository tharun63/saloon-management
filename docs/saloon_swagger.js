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
*    slotobject:
*      type: object
*      properties:
*          time:
*             type:string
*          isBooked:
*             type:boolean
*          date:
*             type:string
*          day:
*             type:string
*          saloonId:
*             type:string
*          userId:
*             type:string
*    serviceobject:
*      type: object
*      properties:
*          service:
*             type:string
*          duration:
*             type:string
*          cost:
*             type:number
*      
*
*    saloonObject:
*       type: object
*       properties:
*          name:
*              type: string
*          phone:
*              type: number
*         
*          email :
*              type: string
*          location:
*              type: string
*          slots :
*              type: array
*              items:
*                 $ref:'#/definitions/slotobject
*          services :
*              type: array
*              items:
*                 $ref:'#/definitions/serviceobject
*
*
* /saloons:
     
*   post:
*     summary: create saloon
*     consumes:
*       - application/json
*     parameters:
*       - name: Create saloon
*         description: Create saloon
*         in: body
*         schema:
*           $ref: '#/definitions/saloonObject'
*     responses:
*       200:
*         description : saloon data
*         schema:
*           $ref : '#/definitions/saloonObject'
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
*     summary: get all saloon
*     consumes:
*       - application/json
*     responses:
*       200:
*         description : saloon data
*         schema:
*           $ref : '#/definitions/saloonObject'
*       422:
*         description: Validation error
*         schema:
*           $ref: '#/definitions/error'
*       500:
*         description: 500 internal server error
*         schema:
*           $ref: '#/definitions/error'
*

* /saloons/{saloon_id}:
     
*   put:
*     summary: update saloon
*     consumes:
*       - application/json
*     parameters:
*       - name: update saloon
*         description: update saloon
*         in: body
*         schema:
*           $ref: '#/definitions/message'
*       - name: saloon_id
*         in: path
*         description: saloon_id
*         required: true
*         type: string
*     responses:
*       200:
*         description : saloon data
*         schema:
*           $ref : '#/definitions/saloonObject'
*       422:
*         description: Validation error
*         schema:
*           $ref: '#/definitions/error'
*       500:
*         description: 500 internal server error
*         schema:
*           $ref: '#/definitions/error'

*   get:
*     summary: getone saloon
*     consumes:
*       - application/json
*     parameters:
*       - name: saloon_id
*         in: path
*         description: saloon_id
*         required: true
*         type: string
*     responses:
*       200:
*         description : saloon data
*         schema:
*           $ref : '#/definitions/saloonObject'
*       422:
*         description: Validation error
*         schema:
*           $ref: '#/definitions/error'
*       500:
*         description: 500 internal server error
*         schema:
*           $ref: '#/definitions/error'

*   delete:
*     summary: delete saloon
*     consumes:
*       - application/json
*     parameters:
*       - name: saloon_id
*         in: path
*         description: saloon_id
*         required: true
*         type: string
*     responses:
*       200:
*         description : saloon data
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
