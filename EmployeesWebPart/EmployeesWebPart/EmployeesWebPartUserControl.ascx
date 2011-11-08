<%@ Assembly Name="EmployeesWebPart, Version=1.0.0.0, Culture=neutral, PublicKeyToken=9fdacb1ee0270277" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="EmployeesWebPartUserControl.ascx.cs" Inherits="EmployeesWebPart.EmployeesWebPart.EmployeesWebPartUserControl" %>

<SharePoint:CssRegistration ID="jquery_autocomplete" Name="/_layouts/EmployeesWebPart/css/jquery.autocomplete.css" After="corev4.css" runat="server" />
<SharePoint:CssRegistration ID="webpart_base" Name="/_layouts/EmployeesWebPart/css/webpart.css" After="corev4.css" runat="server" />

<div class="wpuser_container">
    <div class="wpuser_search"><input type="search" name="wpuser_search" id="wpuser_search" placeholder="Search users as you type..." /></div>
    <div class="wpuser_info">
        <div class="wpuser_info_main">
            <div class="wpuser_image" id="wpuser_image"><img src="" /></div>
            <div class="wpuser_maindata">
                <div class="wpuser_name" id="wpuser_name"></div>
                <div class="wpuser_position" id="wpuser_position"></div>
                <div class="wpuser_departament" id="wpuser_departament"></div>
			    <div class="wpuser_status" id="wpuser_status"></div>
            </div>
        </div>
        <div class="wpuser_info_details">
            <div class="wpuser_askname">Ask me about:</div>
            <div class="wpuser_asklist" id="wpuser_asklist"></div>
		    <ul class="wpuser_contacts">
			    <li class="wpuser_phone" id="wpuser_phone"><span>Mobile:</span> <a href=""></a></li>
			    <li class="wpuser_email" id="wpuser_email"><span>Email:</span> <a href=""></a></li>
		    </ul>
        </div>
    </div>
</div>

<script src="/_layouts/EmployeesWebPart/js/webpart.include.js" type="text/javascript"></script>
