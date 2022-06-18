import styles from '../styles/Login.module.scss';
import Link from 'next/link';
import Head from 'next/head'

const login = () => {
    return (
        <div className={`${styles.container} p-0`}>
            <Head>
                <title>Login User</title>
                <meta name="description" content="Online shop for fresh foods" />
            </Head>
            <div className={`${styles.loginContainer} mt-5`}>
                <div className="mt-3">
                    <h5 className="d-flex justify-content-center">Login with your email and password.</h5>
                </div>
                <form className={styles.allInput}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="email" name="email" id="email" placeholder="Enter Email" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="password">Password</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="password" name="password" id="password" placeholder="Enter Password" />
                    </div>
                    <div className="mt-4 pt-1">
                        <input className={`${styles.loginBtn} justify-content-center`} type="submit" id="login" value="Login"/>
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