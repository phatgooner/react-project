import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <h1>Manage Users</h1>
            <div className="users-content">
                <div><button>Add New User</button></div>
            </div>
            <div className="users-table">
                <ModalCreateUser />
            </div>
        </div>
    );
}

export default ManageUser;
