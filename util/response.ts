class IResponse {

  sendResponse = (response, statusCode, data) => response.status(statusCode).json(data);

}

export const Response = new IResponse();