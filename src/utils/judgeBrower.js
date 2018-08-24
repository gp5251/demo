export default function BrowserType() 
{ 
	const userAgent = navigator.userAgent; //取得浏览器的userAgent字符串 
	const isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器 
	// const isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器 
	const isIE=window.ActiveXObject || "ActiveXObject" in window
	// const isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器 
	const isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
	const isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器 
	const isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器 
	const isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1&&!isEdge; //判断Chrome浏览器 

	if (isIE)  
	{ 
	  const reIE = new RegExp("MSIE (\\d+\\.\\d+);"); 
	  reIE.test(userAgent); 
	  const fIEVersion = parseFloat(RegExp["$1"]); 
	  if(userAgent.indexOf('MSIE 6.0')!=-1){
	    return "IE6";
	  }else if(fIEVersion == 7) 
	    { return "IE7";} 
	  else if(fIEVersion == 8) 
	    { return "IE8";} 
	  else if(fIEVersion == 9) 
	    { return "IE9";} 
	  else if(fIEVersion == 10) 
	    { return "IE10";} 
	  else if(userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)){ 
	        return "IE11";
	    } 
	  else
	    { return "0"}//IE版本过低
	}//isIE end 
	  
	if (isFF) { return "FF";} 
	if (isOpera) { return "Opera";} 
	if (isSafari) { return "Safari";} 
	if (isChrome) { return "Chrome";} 
	if (isEdge) { return "Edge";} 
	return "unknown brower";
}//myBrowser() end 