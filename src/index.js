import Vue from 'vue';
import './assets/css/form_builder.css';
import FormBuilder from './views/FormBuilder.vue';
import TextInput from './components/TextInput.vue';
import TextareaInput from './components/TextareaInput.vue';
import CheckBox from './components/CheckBox.vue';
import SelectInput from './components/SelectInput.vue';
import MultipleSelectInput from './components/MultipleSelectInput.vue';
import DateInput from './components/DateInput.vue';
import NumberInput from './components/NumberInput.vue';
import FileInput from './components/FileInput.vue';
import TimeInput from './components/TimeInput.vue';
import YearInput from './components/YearInput.vue';

Vue.component('text-input',TextInput);
Vue.component('textarea-input',TextareaInput);
Vue.component('checkbox',CheckBox);
Vue.component('select-input',SelectInput);
Vue.component('multiple-select-input',MultipleSelectInput);
Vue.component('date-input',DateInput);
Vue.component('number-input',NumberInput);
Vue.component('file-input',FileInput);
Vue.component('time-input',TimeInput);
Vue.component('year-input',YearInput);
Vue.component('form-builder', FormBuilder);

export default FormBuilder;