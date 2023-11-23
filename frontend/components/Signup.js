import { useState, useEffect } from "react";
import Head from "next/head";
import { Modal } from "antd";
import styles from "../styles/Login.module.css";
import { useDispatch, useSelector } from "react-redux";

function Signup() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);

    const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpFirstname, setSignupFirstname] = useState('');

    const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname:signUpFirstname, username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ firstname:signUpFirstname, username: signUpUsername, token: data.token }));
					setSignUpUsername('');
					setSignUpPassword('');
                    setSignupFirstname('');
					setIsModalVisible(false)
				}
			});
	};

    return (
        
            <button className={styles.signUpButton}>
            Sign Up
            </button>
        
    )

}
export default Signup;