import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
  name: 'bow-contact-form',
  label: 'Olga Contact Form element.label',
  component: 'bow-cms-element-contact-form',
  configComponent: 'bow-cms-element-config',
  previewComponent: 'bow-cms-element-preview-contact-form',
  defaultConfig: {
    content: {
      source: 'static',
      value: {}
    },
  }
});
