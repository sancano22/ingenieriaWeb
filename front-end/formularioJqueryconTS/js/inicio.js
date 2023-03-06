define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    (function () {
        var forms = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    console.log("abrio");
                    event.preventDefault();
                    var myModal = document.getElementById('myModal');
                    $("#myModal").show();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
});
