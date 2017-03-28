window.onload = function(){
	function test(){
		var a = 1;
		setTimeout(function(){
			console.log(a);
			a = 3;
		},1000);
		a = 2;
		setTimeout(function(){
			console.log(a);
		},3000);
	}
	test();
	var more  = document.getElementsByClassName("more")[0];
	
	more.onmouseover = function(e){
		console.log('aa')
		var moreMenu  = document.getElementsByClassName("more-menu")[0];
		var more  = document.getElementsByClassName("more")[0];
		moreMenu.style.left = more.offsetLeft + 'px';
		moreMenu.style.top  = more.offsetTop + 40 + 'px';
		moreMenu.style.display = "block";
		e.stopPropagation();
	};
	
	var moreMenu  = document.getElementsByClassName("more-menu")[0];

	moreMenu.onmouseover = function(e){
		e.stopPropagation();
	};
	// more.onmouseout = function(e){
	// 	if(e.currentTarget.className == "more") return;
	// 	var moreMenu  = document.getElementsByClassName("more-menu")[0];
	// 	moreMenu.style.display = "none";
	// };

	document.onmouseover = function(e){
		var moreMenu  = document.getElementsByClassName("more-menu")[0];
		moreMenu.style.display = "none";
		e.stopPropagation()
	};
};