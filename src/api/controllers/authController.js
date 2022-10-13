const registerUser = (ctx) => {
  ctx.body = "Register route";
};

const loginUser = (ctx) => {
  ctx.body = "Login route";
};

module.exports = {
  registerUser,
  loginUser,
};
