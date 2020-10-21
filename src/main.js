import Vue from 'vue';
import App from './App';
import 'highlight.js/styles/monokai-sublime.css';
import CONSTURL from './config/CONSTURL';
import myRequest from './util/request';
import marked from './util/marked';

Vue.prototype.$myRequest = myRequest;
Vue.prototype.$CONSTURL = CONSTURL;
Vue.prototype.$marked = marked;

Vue.config.productionTip = false
Vue.filter('formatDate', (date)=>{
	const newDate = new Date(date);
	const year = newDate.getFullYear();
	const month = newDate.getMonth().toString().padStart(2, 0);
	const day = newDate.getDay().toString().padStart(2, 0);
	return `${year}:${month}:${day}`;
});
Vue.config.productionTip = false;

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
