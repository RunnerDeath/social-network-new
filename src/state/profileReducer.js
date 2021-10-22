const UPDATE_POST_TEXT = "UPDATE_POST_TEXT"
const ADD_POST = "ADD_POST"
export const updatePostActionCreator = (postText) =>
    ({type: 'UPDATE_POST_TEXT', postText: postText})
export const addPostActionCreator = () => ({type: 'ADD_POST'})
let initialState = {
    postsData: [
        {id: 1, message: 'Hello every one', likesCount: 12},
        {id: 2, message: 'Lie me', likesCount: 13},
        {id: 3, message: 'Another one adventure is starting here', likesCount: 1},
    ],
    postText: '123',

}
const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST:
            let post = {id: 5,
                message: state.postText,
                likesCount: 0
            }
            return {
                ...state,
                postText : '',
                postsData: [...state.postsData, post]
            }


        case UPDATE_POST_TEXT:
            return {
                ...state,
                postText : action.postText
            }

        default:
            return state;
    }
};
export default profileReducer