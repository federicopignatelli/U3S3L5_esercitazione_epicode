import { GET_MUSIC } from "../actions";

const initialState = {
    music: [],
};

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MUSIC:
            return {
                ...state,
                music: action.payload,
            };

        default:
            return state;
    }
};

export default musicReducer;