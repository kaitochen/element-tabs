import ElTabs from "./src/tabs";
import TabPane from './src/tab-pane.vue'
/* istanbul ignore next */
ElTabs.install = function(Vue) {
  Vue.component("ml-tabs", ElTabs);
  Vue.component("ml-tab-pane", TabPane);
};

export default ElTabs;
