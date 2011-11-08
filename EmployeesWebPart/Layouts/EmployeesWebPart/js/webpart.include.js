var jquery_exist = false;

// detect jQuery
try { jquery_exist = $.fn.jquery; }
catch (err) { }

// include js files
if (!jquery_exist) IncludeJavaScript("/_layouts/EmployeesWebPart/js/jquery.min.js");
IncludeJavaScript("/_layouts/EmployeesWebPart/js/jquery.tmpl.min.js");
IncludeJavaScript("/_layouts/EmployeesWebPart/js/jquery.autocomplete.min.js");
IncludeJavaScript("/_layouts/EmployeesWebPart/js/jquery.placeholder.min.js");
IncludeJavaScript("/_layouts/EmployeesWebPart/js/webpart.base.js");

function IncludeJavaScript(jsFile) {
    document.write('<script type="text/javascript" src="' + jsFile + '"></scr' + 'ipt>');
}