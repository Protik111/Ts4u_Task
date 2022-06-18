import styles from '../styles/Login.module.scss';
import Head from 'next/head'
import Link from 'next/link';

const register = () => {
    return (
        <div className={`${styles.container} p-0`}>
            <Head>
                <title>Login User</title>
                <meta name="description" content="Online shop for fresh foods" />
            </Head>
            <div className={`${styles.loginContainer} mt-5`}>
                <div className="mt-3">
                    <h5 className="d-flex justify-content-center">Register Now.</h5>
                </div>
                <form className={styles.allInput}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="text" name="firstName" id="firstName" placeholder="Enter First Name" />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="text" name="lastName" id="lastName" placeholder="Enter Last Name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="email" name="email" id="email" placeholder="Enter Email" />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="text" name="phone" id="phone" placeholder="Enter Phone Number" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="password">Password</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="password" name="password" id="password" placeholder="Enter Password" />
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