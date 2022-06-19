import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import withAuth from "../../components/protected/WithAuth";
import { loadUser, logoutUser } from "../../redux/action/Auth.action";
import setAuthToken from "../../utils/setAuthToken";
import { Button, Modal } from 'antd';
import { useRouter } from 'next/router';
import Profile from "../../components/profile/Profile";
import { Space, Spin } from 'antd';
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

    const router = useRouter();

    if (!user) {
        return (
            <Space size="middle" className="d-flex justify-content-center mt-5">
                <Spin size="large" />
            </Space>
        )
    }

    const handleLogout = () => {
        dispatch(logoutUser());
        router.push('/login')
    }

    return (
        <div className="mt-5">
            <div className="d-flex justify-content-center">
                {
                    <h2>Hello {user.lastName}</h2>
                }
                <Button className="ms-2 mt-2" type="primary" danger onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div className="d-flex justify-content-center">
                <h6>This is your profile.</h6>
            </div>
            <div className="d-flex justify-content-center">
                <Button type="primary" onClick={showModal}>Click To See Full Information</Button>
            </div>
            <Modal title="Your Information" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Profile user={user}></Profile>
            </Modal>
        </div>
    );
};

export default withAuth(index);