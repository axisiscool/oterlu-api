export interface OterluReturnType {
	/**
	 * The message sent back from the API.
	 * @remark This is only defined when there's an error.
	 */
	message?: OterluErrorMessages;

	/**
	 * The labels sent back by the API.
	 * @remark This is only defined when the request was sent without error.
	 */
	labels?: OterluLabels;
}

export type OterluLabels = {
	/**
	 * The possible labels provided by the model.
	 */
	label: 'PROFANITY' | 'TOXIC' | 'NSFW' | 'PERSONAL_INFO';

	/**
	 * How confident the model is of the label ranging 0-3.
	 */
	level: number;
}[];

export type OterluErrorMessages = 'Invalid or missing input' | 'forbidden' | 'Internal server error';

export enum OterluErrors {
	ContentTooLong = 'The content provided is greater than 500 characters.',
	InvalidOrMissingInput = 'There is no content or the string is greater than 500 characters.',
	InternalServerError = 'An internal server error has occurred, please try again later.',
	Forbidden = 'You are blocked from using the API. Make sure the API key provided is valid.'
}
