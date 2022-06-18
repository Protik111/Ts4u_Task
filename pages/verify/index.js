import styles from '../../styles/Login.module.scss';
import Head from 'next/head'
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const index = () => {
    const { isOtpSend } = useSelector((state => state.authReducer));
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: isOtpSend.email ? isOtpSend.email : '',
        otp: ''
    });
    console.log(isOtpSend, 'from verify');
    const { email, otp } = formData;
    const handleChange = () => {

    }

    const handleSubmit = () => {

    }
    return (
        <div className={`${styles.container} p-0`}>
            <Head>
                <title>OTP Send</title>
                <meta name="description" content="OTP" />
            </Head>
            <div className={`${styles.loginContainer} mt-5`}>
                <div className="mt-3">
                    <h5 className="d-flex justify-content-center">Please Enter Your OTP That Was Sent To You Email.</h5>
                </div>
                <form className={styles.allInput} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="email" name="email" id="email" placeholder="Enter Email" value={email} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="password">Otp Code</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="text" name="otp" id="text" placeholder="Enter OTP Code" value={otp} onChange={handleChange} />
                    </div>
                    <div className="mt-4 pt-1">
                        <input className={`${styles.loginBtn} justify-content-center`} type="submit" id="otp" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default index;