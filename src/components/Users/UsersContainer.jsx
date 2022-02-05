import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import {follow, setCurrentPage, setUsers, unfollow, toggleFetching} from "../../state/usersReducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
};


export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, toggleFetching
})(UsersAPIComponent);



