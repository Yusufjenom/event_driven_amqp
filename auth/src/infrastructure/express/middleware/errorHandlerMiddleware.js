import { ErrorHandler } from "../../../utils/error.js";

export const ErrorHandlerMiddleware = async (error, req, res, next) => {
  if (error instanceof ErrorHandler) {
    return res.status(error.statusCode).json({
      success: false,
      error: error.message,
    });
  }

  return res.status(400).json({
    success: false,
    error: "Something went wrong try again",
  });
};
