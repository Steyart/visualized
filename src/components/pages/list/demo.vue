<template>
	<div>
		<div id="sortable">
			<div id="1" class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 1</div>
			<div id="2" class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 2</div>
			<div id="3" class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 3</div>
			<div id="4" class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 4</div>
			<div id="5" class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 5</div>
			<div id="6" class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 6</div>
			<div id="7" class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 7</div>
		</div>
		<div @click="getArray">获取</div>
	</div>
</template>
<script>

import $ from "jquery";
import 'jqueryui';

export default {
	mounted(){
	    $( "#sortable" ).sortable({
	    	update: function(event, ui) {
	            var result = $(this).sortable('toArray');
	            console.log(result);
            }
	    });
	    $( "#sortable" ).disableSelection();
	},
	methods:{
		getArray(){

		},
	},
}

</script>