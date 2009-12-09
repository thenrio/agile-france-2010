if (!com_joemarini) var com_joemarini = {};
else if (com_joemarini && typeof (com_joemarini) != "object")
    throw new Error("com_joemarini is not an Object type");

com_joemarini.ADAPTIVE_LAYOUT = {

    gaScrnSizes: new Array(),

    initSizes: function() {
        this.gaScrnSizes.push({ clMinW: 800, clMaxW: -1, cls: 'bodyLarge' });
        this.gaScrnSizes.push({ clMinW: 400, clMaxW: 800, cls: 'bodyMed' });
        this.gaScrnSizes.push({ clMinW: -1, clMaxW: 400, cls: 'bodySmall' });
    },

    setStyleForSize: function() {
        var clientW = document.documentElement.clientWidth;
        for (i = 0; i < this.gaScrnSizes.length; i++) {
            var sizeObj = this.gaScrnSizes[i];
            if (sizeObj.clMinW == -1) {
                if (clientW <= sizeObj.clMaxW) {
                    document.body.className = sizeObj.cls;
                    return;
                }
            }
            if (sizeObj.clMaxW == -1) {
                if (clientW > sizeObj.clMinW) {
                    document.body.className = sizeObj.cls;
                    return;
                }
            }
            if (clientW > sizeObj.clMinW && clientW <= sizeObj.clMaxW) {
                document.body.className = sizeObj.cls;
                return;
            }
        }
    }
};

com_joemarini.EVENTS.addEventHandler(window, "load", function() {
    com_joemarini.ADAPTIVE_LAYOUT.initSizes();
    com_joemarini.ADAPTIVE_LAYOUT.setStyleForSize();
    },false);

com_joemarini.EVENTS.addEventHandler(window, "resize", function() {
    com_joemarini.ADAPTIVE_LAYOUT.setStyleForSize();}, false);
