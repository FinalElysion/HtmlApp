var CommonUtils = {};

(function(CommonUtils){
	//---- Ajax module ---- 
	CommonUtils.ajax = {};
	/**
		@description Create XMLHttpRequest
		@return XMLHttpRequest Instance
	*/
	CommonUtils.ajax._createXHR =function createXmlHttpRequest(){  
	    var xmlHttp ;  
	    if(window.XMLHttpRequest){
	        xmlHttp = new XMLHttpRequest();  
	    }
	   	else if(window.ActiveXObject){
	   		var versions = [
	   			'Microsoft.XMLHTTP',
	   			'MSXML.XMLHTTP',
	            'Msxml2.XMLHTTP.7.0',
	            'Msxml2.XMLHTTP.6.0',
	            'Msxml2.XMLHTTP.5.0', 
	            'Msxml2.XMLHTTP.4.0', 
	            'MSXML2.XMLHTTP.3.0', 
	            'MSXML2.XMLHTTP'
	        ];
	        //try to create xhr
			for(var i=0; i<versions.length; i++){
			    try{
			        xmlHttp = new ActiveXObject(versions[i]);
			        if(xmlHttp){
			           return xmlHttp;
			       }
			    }catch(e){
			        xmlHttp = false;
			    }
			}
	   	}
	    return xmlHttp;  
	},
	/**
	 * @description Ajax request
	 * @param  
	 * 		options{method,url,success,failure,params}
			scope
	*/
	CommonUtils.ajax.request = function(options,scope){
		if(!options.method||!options.success||!options.failure){
			console.log('Parameters is not correct');
			return false;
		}
		
		var method = options.method.toUpperCase(),
			url = options.url,
			successFn = options.success,
			failureFn = options.failure,
			params = options.params,
			callFn = null,
			jsonData = null;
		var xhr = CommonUtils.ajax._createXHR();
		
		if(!xhr){
			console.log("Create xhr failed");
			return false;
		}
		if("GET" == method && params){
 			for(var property in params){
				var p = property + '=' + params[property];
				url = url + ((url.indexOf('?') >-1)?'&':'?') + p;
			}
		}else if("POST" == method && params){
			jsonData = JSON.stringify(params);
		}
		
        xhr.open(method,url,true);//第三个参数 为 异步 或 同步）
        xhr.onreadystatechange=function(){
            if (xhr.readyState == 4) {
				var status = xhr.status;
				
				if (status >= 200 && status < 300) {
					callFn = successFn;
				} else {
					callFn = failureFn;
				}
				if(scope){
					callFn.call(scope?scope:this,status,xhr.responseText,xhr.responseXML);
				}
        	};
		}
		
		if('POST' == method){
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		}
        	
    	xhr.send(jsonData);
	}

}(CommonUtils));
