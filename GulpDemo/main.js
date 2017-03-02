window.onload = function(){
	
	var name = 'World!';
	(function () {
		console.log(name)
	    console.log(typeof name)
	    if (typeof name === 'undefined') {
	        name = 'Jack';
	        console.log('Goodbye ' + name);
	    } else {
	        console.log('Hello ' + name);
	    }
	})()

	function buildList(list) {
		var result = [];
	    for (var i = 0; i < list.length; i++) {
	        var a_item = 'item' + i;
	        result.push( function() {
	        	console.log(a_item + ' ' + list[i])
	        });
	    }
	    return result;
	}

	function testList() {
	    var fnlist = buildList([1,2,3]);
	    // Using j only to help prevent confusion -- could use i.
	    for (var j = 0; j < fnlist.length; j++) {
	        fnlist[j]();
	    }
	}

	testList() //logs "item2 undefined" 3 times
}
