document.write(`\
<template id="nav-template">\
<header>\
    <div class="container">\
        <div class="col pl-0 pr-0">\
            <img src="./media/blue_background.png" alt="background" width="100%" height="100vh">\
            <ul class="nav justify-content-end bg-primary">\
                <li class="nav-item"><a class="nav-link active text-white " href="index.html">Home</a></li>\
                <li class="nav-item"><a class="nav-link active text-white" href="project.html">Management System</a></li>\
                <li class="nav-item"><a class="nav-link active text-white" href="contact.html">Contact</a></li>\
            </ul>\
        </div>\
    </div>\
</header>\
</template>\
`);


function showNavTemplate() {
    sample1 = document.getElementById('nav-template').content;
    templateNode = document.importNode(sample1, true);
    document.getElementById("template-div").appendChild(templateNode);
}

document.addEventListener('DOMContentLoaded', function(event) {
    showNavTemplate();
    customiseToastr();
    
})


function customiseToastr() {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
}