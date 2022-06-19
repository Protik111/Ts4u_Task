import withAuth from "../../components/WithAuth";

const index = () => {
    return (
        <div>
            <h2>Hello User</h2>
        </div>
    );
};

export default withAuth(index);