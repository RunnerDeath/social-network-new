import React from 'react'
import Users from "./Users";
import * as axios from "axios";
import Loader from "../Loader/Loader";
import {connect} from "react-redux";
import {follow, setCurrentPage, setUsers, toggleFetching, unfollow} from "../../state/usersReducer";


class UsersAPIComponent extends React.Component {

    constructor(props) {
        super(props);

                        }

    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggleFetching(false)
            });

                        }

    onPageChange = (currentPage) => {
        this.props.toggleFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleFetching(false)
        });
                                    }

    render() {

        return <> {this.props.isFetching ? <Loader/> :
            <Users
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onPageChange={this.onPageChange}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
                }
        </>
            }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
};


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, toggleFetching
})(UsersAPIComponent);


