/*
 * Main file
 */
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
//require('./config/config.init');
import { Config } from 'spring-cloud-config';
import swaggerSpec from "./config/swagger";

import { AuthenticationMiddleware } from "./app/middleware/index";

import { SecureRoutes, OpenRoutes } from "./app/routes/index";

let app = express();

setTimeout(function() {
  let conf= Config.instance();
  console.log("db_url", conf.db.uri);

  /*  DB Connection */
  mongoose.connect(conf.db.uri, {useNewUrlParser: true});

  /* Middlewares */
  app.use(morgan("combined")); //logging
  app.use(bodyParser.json()); //parsing request body
  app.use(bodyParser.urlencoded({extended: true})); //parsing request queries
  app.use(conf.app.base_path, express.static("public"));


  app.use(conf.app.base_path + "/document", swaggerUi.serve, swaggerUi.setup(swaggerSpec(conf.app.base_path)));
  app.use(conf.app.base_path, OpenRoutes);

  app.use(AuthenticationMiddleware.prototype.parseAuthorizationHeader,
      AuthenticationMiddleware.prototype.authenticate);
  app.use(conf.app.base_path, SecureRoutes);

  app.use(function (err, req, res, next) {
    console.log(err, err);
    res.status(err.code || 500).json({error: err.name, error_description: err.message});
  });
  },10000);

export default app;
