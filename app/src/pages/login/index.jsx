import './style.css';
import password from '../../assets/images/password.png';
import email from '../../assets/images/email.png';
import quizIcon from '../../assets/images/quiz.png';

export default function Login() {
    return (
        <div className="login">
            <div className="content">
                <div className="title">
                    <div>
                        <img src={quizIcon} alt="" />
                        <p>QuizLab</p>
                    </div>
                    <p>Login into your account</p>
                </div>
                <div className="data">
                    <div className='email'>
                        <p>Email address</p>
                        <div>
                            <input type="email" name="" id="" />
                            <div>
                                <img src={email} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='password'>
                        <p>Password</p>
                        <div>
                            <input type="password" name="" id="" />
                            <div>
                                <img src={password} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='login_or_signup'>
                    <button className='login_now'>Login now</button>
                    <div className='or'>
                        <div></div>
                        <p>OR</p>
                        <div></div>
                    </div>
                    <button className='signup'>Signup now</button>
                </div>
            </div>
        </div>
    );
} 