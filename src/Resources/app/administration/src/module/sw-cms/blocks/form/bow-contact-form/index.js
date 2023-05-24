import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
  name: 'bow-cms-block-contact-form',
  label: 'Bow Contact-Form Block',
  category: 'form',
  component: 'bow-cms-block-contact-form',
  previewComponent: 'bow-cms-preview-contact-form',
  defaultConfig: {
    marginBottom: '20px',
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    sizingMode: 'boxed'
  },
  slots: {
     content: {
       type: 'bow-contact-form',
     },


  }
});
