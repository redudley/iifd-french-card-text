
var shuffleSequence = seq(  "preload", "item", "sr"
                          
                            );

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Veuillez attendre la phrase suivante.",
        errorMessage: "Faux. Veuillez attendre la phrase suivante."
    },
    "SuivantMessage", {
        hideProgressBar: false,
    },
    "EntrainMessage", {
        hideProgressBar: false,
    },
    "CommencerMessage", {
        hideProgressBar: false,
    },
    "FinirMessage", {
        hideProgressBar: false,
    },
    "FrenchPictureAccept", {
        hideProgressBar: false,
        randomOrder: false,
    },
    "FrenchMessage", {
        hideProgressBar: false,
    },
    "MyTime", {
        hideProgressBar: false,
    },
    "FrenchForm", {
        hideProgressBar: false,
        continueOnReturn: true,
    },
];

var manualSendResults = true;

var IMAGES_TO_PRELOAD = [

    "https://imgur.com/CKEa3Zr.png", // 8-4c0s -   every-circle,                 conj & known conditions
    "https://imgur.com/EhOp8QM.png", // 8-0c3s -   three-square,                 conj & known conditions

];


define_ibex_controller({
    name: "FrenchPreloader",
    jqueryWidget: {
        _init: function () {
            this.element.append("Chargement de fichiers...");

            this.preloadedImages = [ ];
            var numToPreload = IMAGES_TO_PRELOAD.length;
            for (var i = 0; i < IMAGES_TO_PRELOAD.length; ++i) {
                var img = new Image();
                img.src = IMAGES_TO_PRELOAD[i];
                var self = this;
                img.onload = function () {
                    --numToPreload;
                    if (numToPreload == 0) {
                        self.options._finishedCallback([ ]);
                    }
                }
                this.preloadedImages.push(img);
            }
        }
    },
    properties: {
        countsForProgressBar: false

    }
});

var items = [


    ["preload", "FrenchPreloader", { }],

    ["sr", "__SendResults__", { }],

    ["time", "MyTime", { }],

    ["sep", "Separator", { }],

    ["setcounter", "__SetCounter__", { }],



    ["item",
          "MyTime", {},
        "FrenchMessage",  {html: {include: 'clue_two.html'}},
          "MyTime", {},
        "FrenchMessage",  {html: {include: 'clue_two.html'}},
          "MyTime", {},
        "FrenchForm",  {html: {include: 'image_choice.html'}},
          "MyTime", {},



];
