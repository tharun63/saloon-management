import express from "express";
import SaloonRoute from "./saloon_route";
import BookingRoute from "./booking_route";

const SecureRouter = express.Router();
const OpenRouter = express.Router();
SecureRouter.use("/saloons", SaloonRoute);
SecureRouter.use("/bookings", BookingRoute);
//SecureRouter.use("/", WelcomeRoute);

//SecureRouter.use("/services", ServiceRoute);

export { SecureRouter as SecureRoutes, OpenRouter as OpenRoutes };
