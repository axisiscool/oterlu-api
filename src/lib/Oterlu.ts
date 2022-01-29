import fetch from 'petitio';
import { type OterluErrorMessages, type OterluReturnType, OterluErrors } from './OterluTypes';

/**
 * The stored API Key for Oterlu.
 * @since 1.0.0
 */
let apiKey: string;

/**
 * Checks if a string is flagged by one of Oterlu's filters.
 * @remark See https://api-docs.oterlu.com/#section/General for more information.
 * @since 1.0.0
 */
export async function classifyContent(content: string) {
	if (content.length > 500) throw new Error(OterluErrors.ContentTooLong);

	const response = await fetch('https://classify.oterlu.com/v1/text').header('x-api-key', apiKey).body({ text: content }, 'json').send();
	const responseAsJson = response.json<OterluReturnType>();

	if (response.statusCode !== 200) throw new Error(`Oterlu API Error: ${parseApiError(responseAsJson.message)}`);

	return {
		...responseAsJson,
		isFlagged: responseAsJson.labels.some(label => label.level > 0)
	};
}

/**
 * Sets an API key for Oterlu.
 * @remark If you do not have an API key, please get one from https://signup.oterlu.com.
 * @since 1.0.0
 */
export function setApiKey(key: string) {
	apiKey = key;
}

/**
 * Internal function to parse errors.
 * @private
 * @since 1.0.0
 */
function parseApiError(message: OterluErrorMessages) {
	switch (message) {
		case 'Internal server error':
			return OterluErrors.InternalServerError;
		case 'Invalid or missing input':
			return OterluErrors.InvalidOrMissingInput;
		case 'forbidden':
			return OterluErrors.Forbidden;
	}
}
