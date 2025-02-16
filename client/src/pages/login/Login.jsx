import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Alanya Social</h3>
          <span className="loginDesc">
            Alanya Social'da Dünyanın her tarafından arkadaşlarınla iletişim kur
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Emai" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Creat a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
