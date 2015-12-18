
function $$quaintNavFunctionality() {
    var ham = document.querySelector(".hamburger");
    var nm = document.querySelector(".nav-main");

    function toggleActive(elem) {
        if (elem.className.indexOf(" active") !== -1)
            elem.className = elem.className.replace(" active", "");
        else
            elem.className = elem.className + " active"
    }

    ham.click = ham.ontouchend = function (e) {
        e.stopPropagation();
        e.preventDefault();
        toggleActive(ham);
        toggleActive(nm);
    }

    var dropdowns = document.querySelectorAll(".dropdown");

    for (var i = 0; i < dropdowns.length; i++) {
        (function (elem) {
            ham.click = elem.ontouchend = function (e) {
                e.stopPropagation();
                e.preventDefault();
                toggleActive(elem);
            }
        })(dropdowns[i]);
    }
}

