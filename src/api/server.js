import { createServer } from "miragejs";
import jwt from "jsonwebtoken";

createServer({
  routes() {
    this.namespace = "api";

    this.post("/login", (_, request) => {
      const attrs = JSON.parse(request.requestBody);
      const encodedToken = jwt.sign({ ...attrs }, "secret");

      localStorage.setItem("jwt", encodedToken);

      return { encodedToken: encodedToken };
    });
  },
});
