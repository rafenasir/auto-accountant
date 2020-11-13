document.write(`\
<template id="nav-template">\
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" >\
  <a class="navbar-brand" href="home.html">Auto Accountant</a>\
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">\
    <span class="navbar-toggler-icon"></span>\
  </button>\

  <div class="collapse navbar-collapse" id="navbarsExampleDefault">\
    <ul class="navbar-nav mr-auto">\
      <li class="nav-item">\
        <a class="nav-link" href="home.html">Management System</a>\
      </li>\
      <li class="nav-item">\
        <a class="nav-link" href="contact.html">Contact</a>\
      </li>\
    </ul>\
  </div>\
</nav>\
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