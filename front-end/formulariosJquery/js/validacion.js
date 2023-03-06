define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    $("input[type='text']").on("change", function () {
        console.log("paso a otro input");
    });
    $("input[type='text']").on("keypress", function () {
        console.log("Cada vez que presiono tecla");
    });
    $("#formulario").on("submit", function (event) {
        $("span").remove();
        $('#formulario input').each(function () {
            var input = $(this);
            if (input.attr('type') == "text" && input.val() == "") {
                $(this).after("<span>Llenar campos</span>");
            }
            if (input.attr('type') == "email" && input.val() == "") {
                $(this).after("<span>Llenar campos</span>");
            }
            if (input.attr('type') == "radio") {
                if ($(this).filter(':checked'))
                    console.log($(this).filter(':checked').val());
            }
        });
        event.preventDefault();
    });
});
