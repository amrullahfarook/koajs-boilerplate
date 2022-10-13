const KoaRouter = require("koa-router");
const router = new KoaRouter();
const { registerUser, loginUser } = require("../controllers/authController");

router.post("/register", registerUser);

router.post("/login", loginUser);

module.exports = router;
