const lambdaHost = 'https://932e4kwwja.execute-api.us-east-1.amazonaws.com/latest';

export const profileUrl = (id) => `${lambdaHost}/profile/${id}`;
export const ratingsUrl = (id, i) => `${profileUrl(id)}/ratings-page/${i}`;
export const queueUrl = (id, i) => `${profileUrl(id)}/queue-page/${i}`;
