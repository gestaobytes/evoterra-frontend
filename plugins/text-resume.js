import Vue from 'vue'
Vue.filter('resumeText', value => {
  const stringText = value.replace(/(<([^>]+)>)/gi, "");
  return stringText.slice(0, 80)+'...';
})



