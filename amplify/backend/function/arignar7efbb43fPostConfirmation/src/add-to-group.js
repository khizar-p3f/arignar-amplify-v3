const aws = require("aws-sdk");

const cognitoIdentityServiceProvider = new aws.CognitoIdentityServiceProvider({
  apiVersion: "2016-04-18",
});

/**
 * @type {import('@types/aws-lambda').PostConfirmationTriggerHandler}
 */
exports.handler = async (event) => {
  console.log("event", event);
  let profile = event.request.userAttributes.profile;
  let groupName = process.env.GROUP;

  if (profile === "student") {
    groupName = "student";
  }

  const groupParams = {
    GroupName: groupName,
    UserPoolId: event.userPoolId,
  };
  const addUserParams = {
    GroupName: groupName,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };
  /**
   * Check if the group exists; if it doesn't, create it. And then add the user to the group.
   */
  try {
    await cognitoIdentityServiceProvider.getGroup(groupParams).promise();
  } catch (e) {
    await cognitoIdentityServiceProvider.createGroup(groupParams).promise();
  }
  /**
   * Then, add the user to the group.
   */
  await cognitoIdentityServiceProvider
    .adminAddUserToGroup(addUserParams)
    .promise();

  return event;
};
