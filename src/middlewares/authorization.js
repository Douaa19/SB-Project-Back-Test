require("dotenv").config();
const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1].replace(/^"|"$/g, "");

  if (token == null) {
    res.json({ error: "No token found" });
  } else {
    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, user) => {
      if (err) {
        console.log(err);
      } else {
        req.user = {
          id: user.id,
          username: user.username,
          role: user.role,
        };
        next();
      }
    });
  }
};

const authorizationRole = (...role) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      res.status(401).json({ error: "You are not authorized" });
    } else {
      next();
    }
  };
};

module.exports = {
  authorization,
  authorizationRole,
};
