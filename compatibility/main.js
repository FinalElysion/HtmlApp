window.onload = function(){
	// test ajax
	/*var options = {
		method:'POST',
		url:'../controller/assetprofile/delete',
		params:{
		   profileGroupKey:'ASP1484042924322YJPH',
		   bmu:'LCK'
		},
		success:function(a,b){
			console.log(this)
		},
		failure:function(){
			console.log('faild')
		}
	}*/
	
	options = {
		method:'GET',
		url:'../controller/eval/getServerHistory',
		params:{
			userId:'demo.web',
			source:'ROCC-Web',
			startDate:'2016-03-02',
			endDate:'2017-03-02',
			performTypes:'ALL',
			bmus:'LCK',
			page:1,
			start:0,
			limit:15
		},
		success:function(responseText,responseXML){
			console.log(this)
		},
		failure:function(status,responseText,responseXML){
			console.log('faild')
		}
	}
	
	//CommonUtils.ajax.request(options,{a:'a'})
}
