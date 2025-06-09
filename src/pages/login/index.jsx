const LoginPage = () => {
  const onSubmit = () => {
    console.log("Logged in");
  };

  return (
    <div className="login-wrapper h-[100dvh] bg-light-gray">
      <div className="login-form-wrapper h-full flex justify-center items-center lg:w-max-[400px]">
        <form className="flex flex-col gap-2">
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
