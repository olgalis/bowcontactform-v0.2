import template from './bow-cms-element-contact-form.html.twig';
import './bow-cms-element-contact-form.scss';

const { Component, Mixin } = Shopware;

Component.register('bow-cms-element-contact-form', {
  template,

  mixins: [
    Mixin.getByName('cms-element')
  ],

  data() {
    return {
      salutation: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      submit: '',
    }
  },

  computed: {
    items() {
      return (this.element.config && this.element.config.content && this.element.config.content.value)
        ? this.element.config.content.value
        : [];
    }
  },

  created() {
    this.createdComponent();
  },

  methods: {
    createdComponent() {
      this.initElementConfig('bow-contact-form');
      },
    }
  });
