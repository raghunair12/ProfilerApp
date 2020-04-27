import * as actionTypes from '../actions';

const initialState = {
    personalInfo: {
        gender:'',
        favMovie:'',
        phNumber:'',
        favApp: {
            whatsapp:'',
            facebook:''
        },
        weight:''
    },
    nextDisabled: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_PERSONAL_DETAILS:
            return {
                ...state,
                personalInfo: {
                    ...action.newPersonalInfo
                }
            };
        
        case actionTypes.PERSONAL_DETAILS_NEXT:
            return{
                ...state,
                nextDisabled: action.nextButton
            }

        default: return state;
    }
}

export default reducer;