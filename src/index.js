import component from './vue-number.vue'

const plugin = {
  install: Vue => {
    Vue.component('vue-number', component)
  }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(component);
}

component.install = plugin.install

export default component
export { component, plugin }