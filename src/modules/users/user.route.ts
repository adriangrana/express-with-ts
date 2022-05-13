import { logger } from "@typegoose/typegoose/lib/logSettings";
import {UserService} from "./user.service";

module.exports = function (app) {
  app.get("/api/users", async (req, res) => {
    const filter = req.query;
    const userService = new UserService();
    try {
      res.status(200).send(await userService.find(filter));
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  app.post("/api/users", async (req, res) => {
    const user = req.body;
    const userService = new UserService();
    try {
      const response = await userService.create(user);
      res.status(200).send(response);
    } catch (error) {
      logger.error(error);
      res.status(400).send({error: error.message});
    }
  });
};
