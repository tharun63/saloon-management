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

*    
*    slotObject:
*       type: object
*       properties:
*          slot:
*              type: string
*          saloon_id:
*              type: string
*          isBooked:
*              type: boolean
*          date:
*              type: string
*          day:
*              type: string
*          
*               
*              

* /saloons/{saloon_id}/slots:
     
*   post:
*     summary: add slot
*     consumes:
*       - application/json
*     parameters:
*       - name: Add slot
*         description: Add slot
*         in: body
*         schema:
*           $ref: '#/definitions/slotObject'
*       - name: saloon_id
*         in: path
*         description: saloon_id
*         required: true
*         type: string
*     responses:
*       200:
*         description : slot data of particular saloon 
*         schema:
*           $ref : '#/definitions/slotObject'
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
*     summary: get all slots
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
*         description : slots  data
*         schema:
*           $ref : '#/definitions/sampleObject'
*       422:
*         description: Validation error
*         schema:
*           $ref: '#/definitions/error'
*       500:
*         description: 500 internal server error
*         schema:
*           $ref: '#/definitions/error'
*

* /saloons/{saloon_id}/slots/{slot_id}:
     
*   put:
*     summary: update slot
*     consumes:
*       - application/json
*     parameters:
*       - name: update slot
*         description: Update slot
*         in: body
*         schema:
*           $ref: '#/definitions/slotObject'
*       - name: saloon_id
*         in: path
*         description: saloon_id
*         required: true
*         type: string
*       - name: slot_id
*         in: path
*         description: slot_id
*         required: true
*         type: string
*     responses:
*       200:
*         description : saloon and slot data
*         schema:
*           $ref : '#/definitions/slotObject'
*       422:
*         description: Validation error
*         schema:
*           $ref: '#/definitions/error'
*       500:
*         description: 500 internal server error
*         schema:
*           $ref: '#/definitions/error'

*   get:
*     summary: get specific slot
*     consumes:
*       - application/json
*     parameters:
*       - name: slot_id
*         in: path
*         description: slot_id
*         required: true
*         type: string
*       - name: saloon_id
*         in: path
*         description: saloon_id
*         required: true
*         type: string
*     responses:
*       200:
*         description : getting oneslot data
*         schema:
*           $ref : '#/definitions/slotObject'
*       422:
*         description: Validation error
*         schema:
*           $ref: '#/definitions/error'
*       500:
*         description: 500 internal server error
*         schema:
*           $ref: '#/definitions/error'

*   delete:
*     summary: delete member
*     consumes:
*       - application/json
*     parameters:
*       
*       - name: slot_id
*         in: path
*         description: slot_id
*         required: true
*         type: string
*       - name: saloon_id
*         in: path
*         description: saloon_id
*         required: true
*         type: string
*     responses:
*       200:
*         description : deleted slot data
*         schema:
*           $ref : '#/definitions/slotssObject'
*       422:
*         description: Validation error
*         schema:
*           $ref: '#/definitions/error'
*       500:
*         description: 500 internal server error
*         schema:
*           $ref: '#/definitions/error'
*/
