import styles from '../../styles/Profile.module.scss';

const Profile = (user) => {
    const { email, id, phone, role , type, firstName, lastName, fullName } = user.user.user;
    console.log(user.user.user);
    return (
        <div>
            <ul className={styles.list}>
                <li>Email : {email}</li>
                <li>Id : {id}</li>
                <li>Phone : {phone}</li>
                <li>Role : {role}</li>
                <li>Type : {type}</li>
                <li>First Name : {firstName}</li>
                <li>Last Name : {lastName}</li>
                <li>Full Name : {fullName}</li>
            </ul>
        </div>
    );
};

export default Profile;