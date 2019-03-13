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
    "FrenchPictureAccept", {
        hideProgressBar: false,
        randomOrder: false,
    },
];



var items = [




    [

          //instructions items
      "item",
//        "FrenchMessage",  {html: {include: 'domain.html'}},
//        "FrenchMessage",  {html: {include: 'clue_two.html'}},
//        "FrenchMessage",  {html: {include: 'clue_two.html'}},
        "FrenchPictureAccept", {s: 'image_choice.html',
                      as:   [["D","https://imgur.com/wBdDYxX.png"], //4c4s - true
                            ["K","https://imgur.com/hPPmspP.png"]]},]

          //finished message w/ code

];
