function execCookies(){
	var scripts=document.getElementsByClassName("cookie");
	for(var i=0;i<scripts.length;i++)
	{
		insertScript(scripts[i].textContent);
	}
}	
function insertScript(content){
	var script=document.createElement("script");
	script.type="text/javascript";
	script.innerHTML=content;
	document.getElementsByTagName("head")[0].appendChild(script);
}
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
		}
	return "";
}
if(getCookie("displayCookieConsent")=="y")
{
	console.log("Consent already accepted");
	execCookies();
}
