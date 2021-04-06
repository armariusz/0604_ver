sap.ui.define([
	"sap/ui/core/mvc/XMLView"
//"sap/m/Text"
],
 //function (Text) {
	function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "sap.ui.demo.walkthrough.view.App1"
	}).then(function (oView) {
		oView.placeAt("content"); });

	//new Text({ text: "tekst z js" }).placeAt("content");
//alert("moj bootstrap");
	
});