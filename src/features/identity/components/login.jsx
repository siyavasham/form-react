
import {Link} from "react-router-dom"
const Login = () => {
  return (
    <>
        <div class="login-form-box">
            <h3 class="mb-30">ورود</h3>
            <form className="login-form" action="#">
                <div className="input-box mb--30">
                    <input type="text" placeholder="نام کاربری یا ایمیل"></input>
                </div>
                <div className="input-box mb--30">
                    <input type="password" placeholder="رمز عبور"></input>
                </div>
                <div className="comment-form-consent input-box mb--30">
                    <input id="checkbox-1" type="checkbox"/>
                    <label for="checkbox-1">مرا بخاطر بسپار</label>
                </div>
                <button className="rn-btn edu-btn w-100 mb--30" type="submit">
                    <span>ورود</span>
                </button>
                <div className="input-box">
                    <Link to="/register" class="lost-password">هنوز ثبت نام نکرده‌اید؟</Link>
                </div>
                <div className="input-box">
                    <a href="#" class="lost-password">رمز عبور را فراموش کرده‌اید؟</a>
                </div>
            </form>
        </div>

     </>
  );
}

export default Login;
