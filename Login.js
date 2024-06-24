const Login = () => {
    return ( 
        <div className="my-form">
            <h2>SIGN IN</h2>
            <form className="form" >
                <div>
                <input type="text" className="input-box" placeholder="Username"></input>
                </div>
                <div>
                <input type="password" className="input-box" placeholder="Password"></input>
                </div>
                <button type="submit" className="btn">Login</button>
                
                <div className="register-link">
                    <p >Don't have an account?
                    <a href="/create" className="signup">Register Now</a>
                    </p>
                </div>
            </form>
        </div>
     );
}
 
export default Login;