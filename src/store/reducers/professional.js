import * as actionTypes from '../actions';

const initialState = {
    professionalInfo: {
        firstName:'',
        lastName:'',
        company: '',
        resState: ''
    },
    nextDisabled: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_PROFESSIONAL_DETAILS:
            return {
                ...state,
                professionalInfo: {
                    ...action.newProfessionalInfo
                }
            };
        
        case actionTypes.PROFESSIONAL_DETAILS_NEXT:
            return{
                ...state,
                nextDisabled: action.nextButton
            }

        default: return state;
    }
}

export default reducer;