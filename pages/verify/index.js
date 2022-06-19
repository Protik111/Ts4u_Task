import styles from '../../styles/Login.module.scss';
import Head from 'next/head'
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { sendOtp } from '../../redux/action/Auth.action';
import { useRouter } from 'next/router';
import Alert from '../../components/alert/Alert';
import { setAlert } from '../../redux/action/Alert.action';


const index = () => {
    const { isOtpSend, token, isAuthenticated } = useSelector((state => state.authReducer));
    const dispatch = useDispatch();
    const { email: emailPayload, isOtpSend: otpPayload } = isOtpSend;

    const [formData, setFormData] = useState({
        email: isOtpSend.email ? isOtpSend.email : '',
        otp: ''
    });
    const { email, otp } = formData;
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email && otp) {
            dispatch(sendOtp({ email, otp }))
        }
        if(!otp) {
            dispatch(setAlert('Please Enter OTP'))
        }
    }

    if(isAuthenticated && token) {
        router.push('/user')
    }
    return (
        <div className={`${styles.container} p-0`}>
            <Head>
                <title>OTP Send</title>
                <meta name="description" content="OTP" />
            </Head>
            {emailPayload ? <div className={`${styles.loginContainer} mt-5`}>
                <Alert></Alert>
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
            </div> : <div>
                <h1>There is nothing to do verification</h1>
                </div>}
        </div>
    );
};

export default index;