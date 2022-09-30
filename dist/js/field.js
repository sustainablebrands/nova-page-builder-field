import Vue from 'vue';
import FormField from "resources/js/components/FormField.vue";

Vue.use(InstantSearch);
window.moment = moment;

$(document).ready(
    function() {
        if ( $( "#editor" ).length ){
            new Vue({
                el: '#editor',
                render: h => h(FormField),
            });
        }
    }
);