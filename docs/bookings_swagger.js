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
*    bookingObject:
*       type: object
*       properties:
*          saloonid:
*              type: string
*          servicetype:
*              type: string
*          cost:
*              type: number
*          location :
*              type: string
*          starttime:
*              type: string
*          endtime :
*              type: string   
*
*
* /bookings:
     
*   post:
*     summary: create booking
*     consumes:
*       - application/json
*     parameters:
*       - name: Create booking
*         description: Create booking
*         in: body
*         schema:
*           $ref: '#/definitions/bookingObject'
*     responses:
*       200:
*         description : booking data
*         schema:
*           $ref : '#/definitions/bookingObject'
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
*     summary: get all bookings
*     consumes:
*       - application/json
*     responses:
*       200:
*         description : bookings data
*         schema:
*           $ref : '#/definitions/bookingObject'
*       422:
*         description: Validation error
*         schema:
*           $ref: '#/definitions/error'
*       500:
*         description: 500 internal server error
*         schema:
*           $ref: '#/definitions/error'
*

* /bookings/{booking_id}:
     
*   put:
*     summary: update booking
*     consumes:
*       - application/json
*     parameters:
*       - name: update booking
*         description: update booking
*         in: body
*         schema:
*           $ref: '#/definitions/message'
*       - name: booking_id
*         in: path
*         description: booking_id
*         required: true
*         type: string
*     responses:
*       200:
*         description : booking data
*         schema:
*           $ref : '#/definitions/bookingObject'
*       422:
*         description: Validation error
*         schema:
*           $ref: '#/definitions/error'
*       500:
*         description: 500 internal server error
*         schema:
*           $ref: '#/definitions/error'

*   get:
*     summary: get booking
*     consumes:
*       - application/json
*     parameters:
*       - name: booking_id
*         in: path
*         description: booking_id
*         required: true
*         type: string
*     responses:
*       200:
*         description : booking data
*         schema:
*           $ref : '#/definitions/bookingObject'
*       422:
*         description: Validation error
*         schema:
*           $ref: '#/definitions/error'
*       500:
*         description: 500 internal server error
*         schema:
*           $ref: '#/definitions/error'

*   delete:
*     summary: delete booking
*     consumes:
*       - application/json
*     parameters:
*       - name: booking_id
*         in: path
*         description: booking_id
*         required: true
*         type: string
*     responses:
*       200:
*         description : booking data
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
