let ElasticEmail = require('@elasticemail/elasticemail-client');

let defaultClient = ElasticEmail.ApiClient.instance;

let apikey = defaultClient.authentications['apikey'];
apikey.apiKey = "0BE811BBA27F40CC0C58B6445AE47FB377C92F279703E839A819D85F24818B79A800392CCBADB2CA06FCCED4717859DA"

let api = new ElasticEmail.EmailsApi()

const templatesApi = new ElasticEmail.TemplatesApi();
const templateName = "test";

templatesApi.templatesByNameGet(templateName, (error, templateData, response) => {
  if (error) {
    console.error(error);
  } else {
    let email = ElasticEmail.EmailMessageData.constructFromObject({
      Recipients: [
        new ElasticEmail.EmailRecipient("kennedyduque11@gmail.com")
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




