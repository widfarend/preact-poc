import * as Types from "../types";

const initialState = {
	articles: [],
	builderMode: false
};

const rootReducer = (state = initialState, action) => {
	console.log('Action: ', action);
	switch(action.type) {
		case Types.ADD_ARTICLE:
			return { ...state, articles: [...state.articles, action.payload] };
		case Types.BUILDER_MODE_SUCCESS:
			console.log('SUCKSESHFUL!');
			return { ...state, builderMode: action.payload };
		default:
			if(action.error) {
				console.log(`Error actioning ${action.type}`, action.error);
			}
			return state;
	}
};

export default rootReducer;