sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function( UIComponent, JSONModel, ResourceModel) {
    'use strict';
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata : {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },
        init : function () {
            // Call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // Set data model on View 
            const oData = {
                recipient : {
                    name : "Wildan"
                }
            };

            const oModel = new JSONModel(oData);
            this.setModel(oModel);

            // Set i18n model on View
            const i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");

            // create the views based on the url/hash
			this.getRouter().initialize();
        }
    });
});