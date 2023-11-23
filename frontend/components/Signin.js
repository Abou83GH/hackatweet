import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect} from 'react'
import { login } from '../reducers/user';
import { Modal } from "antd";
import styles from "../styles/Login.module.css";

function Signin() {
    const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');


    const handleConnection = () => {

		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: signInUsername, token: data.token }));
					setSignInUsername('');
					setSignInPassword('');
					setIsModalVisible(false)
				}
			});
	};


    return (
        <div >
			<button className={styles.signInButton}>
				Sign in
			</button>
		</div>
    )

}
export default Signin;
