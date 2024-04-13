const ElasticEmail = require('@elasticemail/elasticemail-client');
const constant = require('./constant');

const defaultClient = ElasticEmail.ApiClient.instance;

const apikey = defaultClient.authentications['apikey'];
apikey.apiKey = process.env.KEY_API || ""

const api = new ElasticEmail.EmailsApi()

const templatesApi = new ElasticEmail.TemplatesApi();
const templateName = constant.templatesName.test;

templatesApi.templatesByNameGet(templateName, (error, templateData, response) => {
  if (error) {
    console.error(error);
  } else {
    const email = ElasticEmail.EmailMessageData.constructFromObject({
      Recipients: [
        new ElasticEmail.EmailRecipient("jhon.1701720506@ucaldas.edu.co")
      ],
      Content: {
        Body: templateData.Body,
        Subject: "JS EE lib test",
        From: "jhon.1701720506@ucaldas.edu.co"
      }
    });

    const callback = function (error, data, response) {
      if (error) {
        console.error(error);
      } else {
        console.log('API called successfully.');
      }
    };
    api.emailsPost(email, callback);

  }
});
console.log('API called successfully.', templatesApi);




