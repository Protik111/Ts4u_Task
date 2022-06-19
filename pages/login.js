import styles from '../styles/Login.module.scss';
import Link from 'next/link';
import Head from 'next/head'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../redux/action/Auth.action';
import { useRouter } from 'next/router';
import Alert from '../components/alert/Alert';
import { setAlert } from '../redux/action/Alert.action';

const login = () => {
    const { token, isAuthenticated } = useSelector((state => state.authReducer));
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email && password) {
            dispatch(loginUser({ email, password }))
        }
        if(!email || !password) {
            dispatch(setAlert('Please Provide All Information'))
        }
    }

    if (isAuthenticated || token) {
        router.push('/user');
    }

    return (
        <div className={`${styles.container} p-0`}>
            <Head>
                <title>Login User</title>
                <meta name="description" content="Login User" />
            </Head>
            <div className={`${styles.loginContainer} mt-5`}>
                <Alert></Alert>
                <div className="mt-3">
                    <h5 className="d-flex justify-content-center">Login with your email and password.</h5>
                </div>
                <form className={styles.allInput} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="email" name="email" id="email" placeholder="Enter Email" value={email} onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="password">Password</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="password" name="password" id="password" placeholder="Enter Password" value={password} onChange={handleChange} />
                    </div>
                    <div className="mt-4 pt-1">
                        <input className={`${styles.loginBtn} justify-content-center`} type="submit" id="login" value="Login" />
                    </div>
                </form>
                <div className="d-flex justify-content-center mt-2">
                    <h6 className={styles.account}>Do not have an account?</h6>
                    <Link href="/register" passHref><h6 className={`${styles.register} ms-1`}>Register</h6></Link>
                </div>
            </div>
        </div>
    );
};

export default login;