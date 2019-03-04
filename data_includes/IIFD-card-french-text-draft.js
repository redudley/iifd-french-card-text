
var shuffleSequence = seq(  "preload", "item", "sr"

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




    ["item",
          "MyTime", {},
        "FrenchMessage",  {html: {include: 'clue_two.html'}},
          "MyTime", {},
        "FrenchMessage",  {html: {include: 'clue_two.html'}},
          "MyTime", {},
        "FrenchForm",  {html: {include: 'image_choice.html'}},
          "MyTime", {}]



];
