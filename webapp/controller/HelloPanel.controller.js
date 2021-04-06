sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
  //  "sap/ui/core/Fragment"
 ], 
 function (Controller,MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel",
     {
        onShowHello : function () {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);
           }
           ,
           onOpenDialog : function () {
               this.getOwnerComponent().openHelloDialog();
           }
        
/*		onOpenDialog : function () {
			var oView = this.getView();
			if (!this.pDialog) {
				this.pDialog = Fragment.load({
					id: oView.getId(),
					name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    controller: this
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					return oDialog;
				});
			} 
			this.pDialog.then(function(oDialog) {
				oDialog.open();
			});
		},

		onCloseDialog : function () {
					this.byId("helloDialog").close();
		}
    */    }
        )}
)