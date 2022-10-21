import { registerUser, loginUser } from '../../services/auth/authService'

interface registerRequest{
  username: string;
  email: string;
  password: string

}

interface loginRequest{
  username: string;
  password: string

}

const handleRegister = (ctx: any) => {
  const {username, email, password} = <registerRequest>ctx.request.body

  registerUser(username, password, email)

  ctx.body = `New user added: ${username},
  email: ${email},
  password: ${password}`;
};

const handleLogin = (ctx: any) => {
  const {username, password} = <loginRequest>ctx.request.body

  loginUser(username, password)

  ctx.body = `Successful login: ${username}`;
};

export { handleRegister, handleLogin };