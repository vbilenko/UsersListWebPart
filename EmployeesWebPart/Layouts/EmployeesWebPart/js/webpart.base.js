// url
var serviceUrlBase = "/_vti_bin/listdata.svc";
var serviceUrlList = "/UserInformationList";
var serviceUrlFilter = "?$filter=(ContentType eq 'Person')&$orderby=Name";

var url = serviceUrlBase + serviceUrlList + serviceUrlFilter;

//  set default ajax properties
$.ajaxSetup({
    type: "GET",
    dataType: "json",
    timeout: 1000 * 10,
    error: function (jqXHR, textStatus, errorThrown) {
        alert(textStatus + ": " + errorThrown);
    }
});

$(function () {
    $('input[placeholder], textarea[placeholder]').placeholder();

    $("#wpuser_search").attr("disabled", 'disabled').addClass('wpuser_progress');

    //	make first request
    $.ajax({
        'url': url,
        success: function (data) {
            $("#wpuser_search")
				.autocomplete(data['d']['results'], {
				    formatItem: function (item) { return item.Name },
				    matchContains: true
				})
				.result(function (event, data, formatted) { showUserInfo(data); });
            $("#wpuser_search").removeAttr("disabled").removeClass('wpuser_progress');
        }
    });
})

function showUserInfo(data) {
    $.each(data, function (key, value) { if (!value) data[key] = ''; });
    // name
    $("#wpuser_name").text(data.Name);
    // email
    if (data.WorkEMail) {
        $("#wpuser_email a").text(data.WorkEMail).attr('href', 'mailto:' + data.WorkEMail);
        $("#wpuser_email").show();
    } else $("#wpuser_email").hide();
    // phone
    if (data.MobilePhone) {
        $("#wpuser_phone a").text(data.MobilePhone).attr('href', 'callto:' + data.MobilePhone);
        $("#wpuser_phone").show();
    } else $("#wpuser_phone").hide();
    // departament
    $("#wpuser_departament").text(data.Department);
    // picture
    if (data.Picture) {
        $("#wpuser_image img").attr('src', data.Picture.split(", ")[0]);
        $("#wpuser_image").show();
        $('.wpuser_maindata').css({
            'padding-left': '70px',
            'min-height': '73px'
        });
    } else {
        $("#wpuser_image").hide();
        $('.wpuser_maindata').css({
            'padding-left': '0px',
            'min-height': '0px'
        });
    }
    // position
    $("#wpuser_position").text(data.Title);
    // aske me list
    if (data.AskMeAbout) {
        $("#wpuser_asklist").text(data.AskMeAbout);
        $("#wpuser_asklist").show();
        $('.wpuser_askname').show()
    } else {
        $("#wpuser_asklist").hide();
        $('.wpuser_askname').hide()
    }
    $(".wpuser_info").show();
}