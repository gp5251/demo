import component from './component'
import './style.css'


var toast = {};

toast.install = (Vue) => {

	Vue.prototype.$toast = Vue.Toast = (message, options={duration:2000}) => {

		const toastClass =  Vue.extend(component);
		
		const vm = new toastClass().$mount();

		if(vm.isExist) {
			return;
		}

		vm.isExist = true;

		vm.message = message;

		vm.isShow = true;

		const el = vm.$el;

		document.body.appendChild(el);
		
		if (options.position) {
			setPos(vm, options.position[0], options.position[1]);
		}

		setTimeout(() => {
			vm.isShow = false;
			vm.isExist = false;
			init(el);
		},options.duration);

	}

	function init(el) {
		el.addEventListener('transitionend',() => document.body.removeChild(el))
	}

	function setPos(vm,x,y) {
		const clazz = x + y.slice(0,1).toUpperCase() + y.slice(1);
		vm.changeClass = clazz;

	}
}

export default toast;