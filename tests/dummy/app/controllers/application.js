import Controller from 'ember-controller';
import { A } from 'ember-array/utils';

export default Controller.extend({

  tabItems: A(Array.from(new Array(10).keys())
    .map((id) => ({ label: `Tab ${id}`, content: `Content of ${id}` }))),

  stretchTabsOptions: ['auto', 'never', 'always'],

  alignTabsTop: true,

  noInk: false,

  noInkBar: false,

  centerTabs: false,

  itemTwoDisabled: true,

  stretchTabs: 'auto',

  actions: {

    addTabItem(label, content) {
      this.get('tabItems').pushObject({ label, content });
      this.setProperties({
        newTabContent: '',
        newTabLabel: ''
      });
    },

    removeTabItem(item) {
      this.get('tabItems').removeObject(item);
    }

  }

});
