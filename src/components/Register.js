import React from "react";
import {useRef, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

// validasi dengan regex
/*  nama hanya dapat menampung huruf besar dan kecil, minimal 4 karakter maksimal 100 karakter
    username dapat menampung semua karakter, minimal 3 karakter maksimal 10 karakter 
    nomor telpon dapat menapung +62, 0, dan 62 
    password minimum 8 karakter, terdiri dari satu huruf dan satu angka
*/
const NAME_REGEX = /^[a-zA-Z\s'-]{4,100}$/
const USERNAME_REGEX = /^[a-z0-9_-]{3,10}$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

const Register = () => {
    const userReff = useRef();
    let navigate = useNavigate();

    // useState name
    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    // useState username
    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    // useState email
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    // useState password
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    // useEffect saat componen load
    useEffect(() => {
        userReff.current.focus();
    }, []);

    // useEffect saat name, username, email, password berubah

    useEffect(() => {
        const nameValid = NAME_REGEX.test(name);
        setValidName(nameValid);
        const userValid = USERNAME_REGEX.test(user);
        console.log(user);
        console.log(userValid);
        setValidUser(userValid);
        const emailValid = EMAIL_REGEX.test(email);
        setValidEmail(emailValid);
        const passwordValid = PASSWORD_REGEX.test(password);
        setValidPassword(passwordValid);
    }, [name, user, email, password]);

    
    // handle untuk submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const v1 = NAME_REGEX.test(name);
        const v2 = USERNAME_REGEX.test(user);
        const v3 = EMAIL_REGEX.test(email);
        const v4 = PASSWORD_REGEX.test(password);
        console.log(v1, v2, v3, v4);

        if (!v1 || !v2 || !v3 || !v4) {
            alert('Form tidak valid');
        }

        try {
            await axios.post('http://localhost:8080/api/register', {
                name: name,
                email: email,
                password: password,
                username: user,
                asal: '-',
                phone_number: '-'
            })
            console.log('berhasil');
            // ganti halaman
            navigate('/login');

            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h4>Register To Create Your Account</h4>
            <form className="registrasiForm" onSubmit={handleSubmit}>
                {/* Fullname */}
                <label htmlFor="name">
                    Fullname
                </label>
                <input 
                    type="text"
                    id="name"
                    ref={userReff}
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
                    required
                    aria-invalid={validName ? 'false' : 'true'}
                    aria-describedby="nameError"
                    placeholder="Enter Fullname"
                    onFocus={() => setNameFocus(true)}
                    onBlur={() => setNameFocus(false)} 
                />
                <p id="nameError" className={nameFocus && name && !validName ? "instruction" : "offscreen"}>
                    nama hanya dapat menampung huruf besar dan kecil, minimal 4 karakter maksimal 100 karakter
                </p>
                {/* Username */}
                <label htmlFor="username">
                    Username
                </label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    id="username"
                    ref={userReff}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    required
                    aria-invalid={validUser ? 'false' : 'true'}
                    aria-describedby="usernameError"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <p id="usernameError" className={userFocus && user && !validUser ? "instruction" : "offscreen"}>
                    username dapat menampung semua karakter kecuali huruf besar, minimal 3 karakter maksimal 10 karakter
                </p>
                {/* email */}
                <label htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    id="email"
                    ref={userReff}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={validEmail ? 'false' : 'true'}
                    aria-describedby="emailError"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                />
                <p id="emailError" className={emailFocus && email && !validEmail ? "instruction" : "offscreen"}>
                    Email tidak valid. Cek kembali Email yang anda masukan
                </p>
                {/* password */}
                <label>
                    Password
                </label>
                <input 
                    type="password"
                    placeholder="Enter Password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    aria-invalid={validPassword ? 'false' : 'true'}
                    aria-describedby="passwordError"
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                />
                <p id="passwordError" className={passwordFocus && password && !validPassword ? "instruction" : "offscreen"}>
                    password minimum 8 karakter, terdiri dari satu huruf dan satu angka
                </p>
                {/* button onSubmit */}
                <button type="submit">Register</button>
                <p>
                    Already have an account ?
                    <span className="line">
                        <a href="/login">Sign In</a>
                    </span>
                </p>
            </form>
        </div>
    );
}

export default Register;