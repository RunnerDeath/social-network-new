const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

let initialState = {
    dialogsData: [
        {id: 1, name: 'Леша'},
        {id: 2, name: 'Таня'},
        {id: 3, name: 'Игорь'},
        {id: 4, name: 'Алена'},
        {id: 5, name: 'Вегас'},
        {id: 6, name: 'Линк'},
    ],
    messageData: [
        {id: 1, message: 'How are you'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Наркоман'},
        {id: 4, message: 'Приходи бухать'},
    ],
    messageText: '',
}
const dialogsReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case SEND_MESSAGE:

            let message = state.messageText
            stateCopy = {
                ...state,
                messageText: '',
                messageData: [...state.messageData, {id: 6, message}]
            }
            return stateCopy;
        case UPDATE_MESSAGE_TEXT:
            stateCopy = {
                ...state,
                messageText: action.messageText,
            };
            return stateCopy;
        default:
            return state;


    }
};
export const updateMessageActionCreator = (messageText) =>
    ({type: 'UPDATE_MESSAGE_TEXT', messageText: messageText})
export const sendMessageActionCreator = () => ({type: 'SEND_MESSAGE'})
export default dialogsReducer;