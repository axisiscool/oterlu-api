export interface OterluReturnType {
	message?: OterluErrorMessages;
	labels?: OterluLabels;
}

export type OterluLabels = {
	label: 'PROFANITY' | 'TOXIC' | 'NSFW' | 'PERSONAL_INFO';
	level: number;
}[];

export type OterluErrorMessages = 'Invalid or missing input' | 'forbidden' | 'Internal server error';

export enum OterluErrors {
	ContentTooLong = 'The content provided is greater than 500 characters.',
	InvalidOrMissingInput = 'There is no content or the string is greater than 500 characters.',
	InternalServerError = 'An internal server error has occurred, please try again later.',
	Forbidden = 'You are blocked from using the API. Make sure the API key provided is valid.'
}
