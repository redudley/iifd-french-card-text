define_ibex_controller({
    name: "FrenchFaceAccept",

    jqueryWidget: {
        _init: function () {
            this.options.transfer = null; // Remove ’click to continue message’.
            this.element.VBox({
                options: this.options,
                triggers: [1],
                children: [
                    "FrenchMessage", this.options,
                    "FrenchPictureAccept", this.options,
                ]
            });
        }
    },

    properties: { }
});


var shuffleSequence = seq(  "item",

                            );

var defaults = [

    "FrenchMessage", {
        hideProgressBar: false,
    },
    "FrenchForm", {
        hideProgressBar: false,
        continueOnReturn: true,
    },
];



var items = [




    [

          //instructions items
      "item",
          "MyTime", {},
        "FrenchMessage",  {html: {include: 'domain.html'}},
          "MyTime", {},
        "FrenchMessage",  {html: {include: 'clue_two.html'}},
          "MyTime", {},
        "FrenchMessage",  {html: {include: 'clue_two.html'}},
          "MyTime", {},
        "FrenchFaceAccept", {html: {include: 'image_choice.html'},
                      as:   [["D","https://imgur.com/wBdDYxX.png"], //4c4s - true
                            ["K","https://imgur.com/hPPmspP.png"]]},}
          "MyTime", {}]

          //finished message w/ code

];
