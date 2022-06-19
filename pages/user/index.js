import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import withAuth from "../../components/protected/WithAuth";
import { loadUser } from "../../redux/action/Auth.action";
import setAuthToken from "../../utils/setAuthToken";
import { Button, Modal } from 'antd';
import Profile from "../../components/profile/Profile";

const index = () => {
    const { isOtpSend, isAuthenticated, token, user } = useSelector((state => state.authReducer));
    const dispatch = useDispatch();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthToken(token);
            dispatch(loadUser());
        }
    }, [loadUser])

    if (!user) {
        return (
            <div className="d-flex justify-content-center">
                <h2 style={{ color: 'red' }}>Loading...</h2>
            </div>
        )
    }

    console.log(isOtpSend, isAuthenticated, token, user, 'from user');
    return (
        <div className="mt-5">
            <div className="d-flex justify-content-center">
                <h2>Hello {user.user.fullName}</h2>
            </div>
            <div className="d-flex justify-content-center">
                <h6>This is your profile.</h6>
            </div>
            <div className="d-flex justify-content-center">
                <Button type="primary" onClick={showModal}>Click To See Full Information</Button>
            </div>
            <Modal title={user.user.fullName + "'s Information"} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Profile user={user}></Profile>
            </Modal>
        </div>
    );
};

export default withAuth(index);