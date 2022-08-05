import React, { useState } from "react";

import axios from 'axios';
import { setUsernameSession } from "../../utils/common";
import style from "./style.module.scss";

//import Indian from "../../Assets/Images/indian-wedding.svg";



const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
          
    }

    const handleLogin = () => {

        const userData = {
            username: username,
            password: password
        };
        
        axios.post('http://localhost:8080/api/user/add-user', userData).then((response) => {
            console.log(response.status);
            console.log('DATA', response.data);
            setUsernameSession(response.data.token, response.data.username, response.data.password);
            props.history.push('/Journal-Page');
        });
        
    }

    return (
        <div className={style.signPage}>
        <section className={style.signupOne}>
            <h1 className={style.signupH1}>A Better Relationship Just A Few Clicks Away.</h1>
            <img className={style.signupImg} ></img>
        </section>

        <section className={style.signupTwo}>
        <h2 className={style.signupH2}>Sign Up For Rekindle</h2>
            <form className={style.signupForm} onSubmit={handleSubmit}>
                <input className={style.signupText} 
                type="text" placeholder="Username" 
                value={username} 
                onChange={(event) => setUsername(event.target.value)}>
                </input>
                <input className={style.signupText} 
                type="text" 
                placeholder="Password" value={password} 
                onChange={(event) => setPassword(event.target.value)}>
                </input>
                <button className={style.signupSubmit} type="submit" onClick={handleLogin}>Sign Up With Email</button>
            </form>

            <div className={style.signupLine}>OR</div>
            <button className={style.signupFace} type="submit">Sign Up With Facebook</button>
            <button className={style.signupGoogle} type="submit">Sign Up With Google</button>
        </section>
        </div>
    );
}

export default Signup;