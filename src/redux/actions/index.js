import * as Types from "../types";

export const addArticle = article => ({
	type: Types.ADD_ARTICLE,
	payload: article
});

export const builderMode = mode => ({
	type: Types.BUILDER_MODE_REQUESTED,
	payload: mode
});

export const EnableTemplateBuilderAction = mode => ({
	type: Types.BUILDER_MODE_SUCCESS,
	payload: mode
});

export const EditModeAction = mode => ({
	type: Types.BUILDER_MODE_SUCCESS,
	payload: mode
});