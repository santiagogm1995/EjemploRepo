sap.ui.define([
  "sap/ui/test/Opa5",
  "com/santiago/Netflix/test/integration/arrangements/Startup",
  "com/santiago/Netflix/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
