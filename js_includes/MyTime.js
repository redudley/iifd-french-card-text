define_ibex_controller({
    name: "MyTime",
    jqueryWidget: {
        _init: function() {
            this.options._finishedCallback([
                [["time", new Date().toISOString()]]
            ]);
        }
    },
    properties: {
        obligatory: [ ],
        htmlDescription: function (opts) { return ""; }
    }
});
