const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const TOGGLE_FETCHING = "TOGGLE_FETCHING"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 151,
    currentPage: 1,
    isFetching: false,

}

const userReducer = (state = initialState, action) => {
        switch (action.type) {
            case FOLLOW:
                return {
                    ...state,
                    users: state.users.map(user => {
                        if (user.id === action.userID) {
                            return {...user, followed: true}
                        }
                        return user
                    })
                }
            case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map(user => {
                        if (user.id === action.userID) {
                            return {...user, followed: false}
                        }
                        return user
                    })
                }
            case SET_USERS:
                return {
                    ...state,
                    users: [...action.users]
                }
            case SET_CURRENT_PAGE:
                return {
                    ...state,
                    currentPage : action.currentPage
                }
            case TOGGLE_FETCHING:
                return {
                    ...state,
                    isFetching : action.isFetching
                }
            default:
                return state;
        }
    };

export const follow = (userID) =>
    ({type: 'FOLLOW', userID})
export const unfollow = (userID) =>
    ({type: 'UNFOLLOW', userID})
export const setUsers = (users) =>
    ({type: 'SET_USERS', users})
export const setCurrentPage = (currentPage) =>
    ({type: 'SET_CURRENT_PAGE', currentPage})
export  const toggleFetching = (isFetching) =>
    ({type: 'TOGGLE_FETCHING', isFetching})

export default userReducer