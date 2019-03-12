


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
    "FrenchFaceAccept", {
        hideProgressBar: true,
        randomOrder: false,
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
                            ["K","https://imgur.com/hPPmspP.png"]]},
          "MyTime", {}]

          //finished message w/ code

];
