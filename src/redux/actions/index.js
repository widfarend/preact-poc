import { ADD_ARTICLE, BUILDER_MODE } from "../types";

export const addArticle = article => ({
	type: ADD_ARTICLE,
	payload: article
});

export const builderMode = mode => ({
	type: BUILDER_MODE,
	payload: mode
});