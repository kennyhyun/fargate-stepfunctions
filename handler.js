'use strict';

const pack = json => {
  const str = JSON.stringify(json);
  return Buffer.from(str, 'utf8').toString('base64');
};

module.exports.hello = (event, context, callback) => {
  callback(null, { command: ['tasks/run.sh', pack({ jobId: 101, userGroupId:1001 })] });
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
