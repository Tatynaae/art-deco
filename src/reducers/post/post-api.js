import {postServer} from "./post-server";

export const POST_CONTACT = "POST_CONTACT"
export const POST_MESSAGE = "POST_MESSAGE"
export const POST_CALCUlATOR= "POST_CALCUlATOR"
export const POST_CALCUlATOR_TOTAL= "POST_CALCUlATOR_TOTAL"
export const POST_CALCUlATOR_DETAIL= "POST_CALCUlATOR_DETAIL"

let initialState = {
    contact : "",
    message : "",
    calculator : [],
    calculatorTotal : [],
    calculatorDetail : [],
};

export const postReducer = (state = initialState , action) => {
    switch (action.type) {
        case POST_CONTACT:
            return {
                ...state,
                contact: action.payload
            }
        case POST_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case POST_CALCUlATOR_DETAIL:
            return {
                ...state,
                calculatorDetail: action.payload
            }
        case POST_CALCUlATOR:
            return {
                ...state,
                calculator: action.payload
            }
        case POST_CALCUlATOR_TOTAL:
            return {
                ...state,
                calculatorTotal: action.payload
            }
        default:
            return state
    }
}

export const postActions = {
    postContact: (data) => ({
        type: POST_CONTACT,
        payload: data
    }),
    postMessage: (data) => ({
        type: POST_MESSAGE,
        payload: data
    }),
    postCalculator: (data) => ({
        type: POST_CALCUlATOR,
        payload: data
    }),
    postCalculatorTotal: (data) => ({
        type: POST_CALCUlATOR_TOTAL,
        payload: data
    }),
    postCalculatorDetail: (data) => ({
        type: POST_CALCUlATOR_DETAIL,
        payload: data
    }),
}


export const ContactPost = (data) => async (dispatch) => {
    try{
        const response = await postServer.contact(data)
        dispatch(postActions.postContact(response.data.answer))
    }catch (e){
        console.log(e.error)
    }
}

export const MessagePost = (data) => async (dispatch) => {
    try{
        const response = await postServer.message(data)
        dispatch(postActions.postMessage(response.data.answer))
    }catch (e){
        console.log(e.error)
    }
}
export const CalculatorWindow = (data , id) => async (dispatch) => {
    try{
        const response = await postServer.calculator(data , id)
        dispatch(postActions.postCalculator(response.data.data))
        dispatch(postActions.postCalculatorTotal(response.data.total.total_sum))
        dispatch(postActions.postCalculatorDetail(response.data.data.detail))
    }catch (e){
        console.log(e,"Post calculate")
    }
}



