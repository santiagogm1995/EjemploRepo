/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
  "use strict";

  sap.ui.require([
    "com/santiago/Netflix/test/integration/AllJourneys"
  ], function() {
    QUnit.start();
  });
});
