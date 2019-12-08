import TEMPLATES from './templates';

const { NODE_ENV } = process.env;

function getTemplateId(templateName) {
  if (!TEMPLATES[templateName]) {
    throw new Error('Invalid template name');
  }

  const templateId = TEMPLATES[templateName][NODE_ENV];

  if (!templateId) {
    throw new Error('No template for current environment');
  }

  return templateId;
}

export default getTemplateId;
