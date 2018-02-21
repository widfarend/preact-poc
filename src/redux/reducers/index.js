import { ADD_ARTICLE, BUILDER_MODE } from "../types";

const initialState = {
	articles: [],
	builderMode: false
};

const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_ARTICLE:
			return { ...state, articles: [...state.articles, action.payload] };
		case BUILDER_MODE:
			return { ...state, builderMode: action.payload };
		default:
			return state;
	}
};

export default rootReducer;