import { useState } from "react";
import { apiClient } from "../../service/api";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    apiClient.post("/auth", { email, password }).then((res) => {
      window.localStorage.setItem("token", res.data.token);
      navigate("/");
    });
  };

  return (
    <div className="login-wrapper h-[100dvh] bg-light-gray">
      <div className="login-form-wrapper h-full flex justify-center items-center lg:w-max-[400px]">
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              className="input"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
