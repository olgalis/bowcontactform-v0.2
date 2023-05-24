import template from './bow-cms-element-config.html.twig';
import './bow-cms-element-config.scss';


const { Component } = Shopware;

Component.register('bow-cms-element-config', {
    template,

    addEntry() {
        let maxId = 0;
        this.items.forEach(ele => {
            if (ele.id > maxId) {
                maxId = ele.id;
            }
        });
        this.element.config.content.value.push({ id: ++maxId, txt: 'Eintrag' });
    },

});

