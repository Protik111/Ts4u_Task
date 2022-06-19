import styles from '../styles/Login.module.scss';
import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { registerUser } from '../redux/action/Auth.action';
import Alert from '../components/alert/Alert';
import { setAlert } from '../redux/action/Alert.action';

const register = () => {
    const { isOtpSend, isAuthenticated, token } = useSelector((state => state.authReducer));
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
    });
    
    const { firstName, lastName, email, phone, password } = formData;

    const router = useRouter();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (firstName && lastName && email && phone && password) {
            dispatch(registerUser({ firstName, lastName, email, phone, password }))
        }

        if (!firstName || !lastName || !email || !phone || !password) {
            dispatch(setAlert('Please Provide All Information'))
        }
    }

    if(isOtpSend.email && isOtpSend.isOtpSend) {
        router.push('/verify');
    }

    if(isAuthenticated || token) {
        router.push('/user');
    }
    return (
        <div className={`${styles.container} p-0`}>
            <Head>
                <title>Register User</title>
                <meta name="description" content="Register User" />
            </Head>
            <div className={`${styles.loginContainer} mt-5`}>
                <Alert></Alert>
                <div className="mt-3">
                    <h5 className="d-flex justify-content-center">Register Now.</h5>
                </div>
                <form className={styles.allInput} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="text" name="firstName" id="firstName" placeholder="Enter First Name" value={firstName} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="text" name="lastName" id="lastName" placeholder="Enter Last Name" value={lastName} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="email" name="email" id="email" placeholder="Enter Email" value={email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="text" name="phone" id="phone" placeholder="Enter Phone Number" value={phone} onChange={handleChange}/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="password">Password</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="password" name="password" id="password" placeholder="Enter Password" value={password} onChange={handleChange}/>
                    </div>
                    <div className="mt-4 pt-1">
                        <input className={`${styles.loginBtn} justify-content-center`} type="submit" id="register" value="Register"/>
                    </div>
                </form>
                <div className="d-flex justify-content-center mt-2">
                    <h6 className={styles.account}>Already Registered?</h6>
                    <Link href="/login" passHref><h6 className={`${styles.register} ms-1`}>Login</h6></Link>
                </div>
            </div>
        </div>
    );
};

export default register;