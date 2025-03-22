import { Router } from "express";
import authRoute from "../modules/auth/authRoutes";
// import { IsTokenValid } from "../middleware/isTokenValidMiddleware";

export default class Routes {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  public path() {
    this.router.use("/auth", authRoute);



    return this.router;
  }
}
