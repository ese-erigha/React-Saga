const exceptionHandler = (error)=>{

    let err = {};

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            //console.log(error.response.status);
            
            err = handleError(error.response.status);
            
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            err = handleError(408);

          } else {
            // Something happened in setting up the request that triggered an Error
            err = handleError(700);
          }
          //console.log(err);
          throw err;
};

const handleError = (statusCode)=>{

    let responseStates = {
        404 : 'API endpoint does not exist',
        400: 'Invalid username and password',
        401: 'Token has expired',
        408: 'The request timed out',
        500: 'A server error occurred while fetching data',
        700: 'An unknown error has occurred'
    };

    return {status: statusCode, message: responseStates[statusCode]};
};

export default exceptionHandler;