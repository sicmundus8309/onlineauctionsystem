import React, { useState, useEffect } from 'react'
import "./authpage.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies,Cookies } from 'react-cookie';

const AuthPage = () => {
    useEffect(() => {
        const cookies = new Cookies();
        if (cookies.get("accessToken")) {
            navigate("/");
        }
    }, [])
    const [cookies, setCookie] = useCookies(['accessToken']);
    const navigate = useNavigate();
    const [registeredUser, setregisteredUser] = useState(false);
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        cpassword: "",
        name: "",
    })
    const [isLoading, setIsLoading] = useState(false);
    function handleChange(e) {
        const { name, value } = e.target;
        setUserData((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        const lors = registeredUser ? "login" : "signup";
        await axios.post(`https://onlineauctionsystemapi.onrender.com/${lors}`, userData,)
        .then((response)=>{
            console.log(response.data);
            setCookie("accessToken",response.data.accessToken,{path:"/"});
            setIsLoading(false);
            navigate("/");
        }).catch((err)=>{
            console.log(err);
            setIsLoading(false);
            alert("Invalid credentials");
        });
    }
    return (
        <>
            <div className="lsComponent">
                <form onSubmit={handleSubmit} className="formBox">
                    <input type="email" name="email" maxLength={20} required value={userData.email} onChange={handleChange} placeholder="Enter your Email" className="inpbox" />
                    <input type="password" name="password" maxLength={20} required value={userData.password} onChange={handleChange} placeholder="Enter your password" className="inpbox" />
                    {!registeredUser && <input type="password" maxLength={20} required name="cpassword" value={userData.cpassword} onChange={handleChange} placeholder="Confirm Your password" className="inpbox" />}
                    {!registeredUser && <input type="text" maxLength={20} required name="name" value={userData.name} onChange={handleChange} placeholder="Enter your display Name" className="inpbox" />}
                    <button type="button" onClick={(e) => { setregisteredUser(!registeredUser) }} className="newBtn">{!registeredUser ? "Already a user? Login" : "New User? Sign-Up"}</button>
                    {!registeredUser && <button type="button" onClick={(e) => { alert("forgot password") }} className="newBtn">Forgot Password</button>}
                    <button disabled={isLoading} type="submit" class="btn btn-primary submitBtn">{isLoading ? "Loading" : "Submit"}</button>
                </form>
            </div>
        </>
    )
}

export default AuthPage