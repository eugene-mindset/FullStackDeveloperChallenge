const API_URL = "http://localhost:5000"

/**
 * Handles responses from the api, throwing an error if the request returns 
 * unsuccessfuly.
 * @param response - Response from the api
 * @returns The response from the API as an object, or error
 */
const handleResponseFromAPI = async (response: Response): Promise<any> => {
  if (response.ok) return response.json();
  
  const error = await response.json();
  throw new Error(error.message);
}

/**
 * Send a request from the api and get a response.
 * @param uri - The path endpoint you request from
 * @returns The response
 */
const requestFromAPI = async (uri: string,  init?: RequestInit): Promise<any> => {
  return handleResponseFromAPI(await fetch(`${API_URL}/${uri}`, init));
}

/**
 * Fetch the corpus to view/edit.
 * @returns The corpus text.
 */
export const fetchCorpus = async () => {
  try {
    const response = await requestFromAPI('corpus');
    return response?.text;
  } catch (e: any) {
    throw new Error(`Could not fetch current corpus: ${e?.message}`)
  }
}