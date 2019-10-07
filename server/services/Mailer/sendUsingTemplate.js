import client from './client';
import getTemplateId from './getTemplateId';

const { MAILER_FROM_EMAIL, MAILER_FROM_NAME } = process.env;

function sendUsingTemplate(templateName, personalizations) {
  const templateId = getTemplateId(templateName);

  return client.post('mail/send', {
    personalizations: Array.isArray(personalizations)
      ? personalizations
      : [personalizations],
    template_id: templateId,
    from: {
      email: MAILER_FROM_EMAIL,
      name: MAILER_FROM_NAME,
    },
  });
}

export default sendUsingTemplate;
