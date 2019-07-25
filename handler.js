'use strict';

module.exports.hello = (event, context, callback) => {
  callback(null, { jobId: 101, userGroupId:1001 });
};

module.exports.ciao = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'ciao world!'
    }),
  };

  callback(null, response);
};
