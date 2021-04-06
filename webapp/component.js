sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
	"./controller/HelloDialog"
 //   "sap/ui/model/resource/ResourceModel"
],
function (UIComponent, JSONModel, HelloDialog) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata : { manifest: "json" },
      /* metadata : {
          "rootView": {
             "viewName": "sap.ui.demo.walkthrough.view.App",
             "type": "XML",
             "async": true,
             "id": "app"
          }
       },
*/
       init : function () {
          UIComponent.prototype.init.apply(this, arguments);
          var oData = { recipient : { name : "Nazwa z json" }  };

          var oModel = new JSONModel(oData);
          this.setModel(oModel);
// set dialog
this._helloDialog = new HelloDialog(this.getRootControl());
},

exit : function() {
    this._helloDialog.destroy();
    delete this._helloDialog;
},

openHelloDialog : function () {
    this._helloDialog.open();

/*          var i18nModel = new ResourceModel({
            bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
            supportedLocales: [""],
            fallbackLocale: "" });    
         this.setModel(i18nModel, "i18n");
       */
        }
}); }
)