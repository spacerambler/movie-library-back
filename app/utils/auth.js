import jwt from "jsonwebtoken";
import config from "../config.js";

export default {
  generateToken(payload) {
    return jwt.sign(payload, config.jwt.secret, {
      expiresIn: config.jwt.expirationTime,
    });
  },
  verifyToken(token) {
    return jwt.verify(token, config.jwt.secret, {
      maxAge: config.jwt.expirationTime,
    });
  },
 };