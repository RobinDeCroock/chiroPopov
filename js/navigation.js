function goToSection(sectionName) {
    document.getElementById(sectionName).scrollIntoView();
}
function navigate(url, id = null)
{
    var baseUrl = window.location.origin;   
    window.location  = baseUrl + url;

    if (id != null) {
        // set class active
        var element = document.getElementById(id);
        var elements = document.getElementsByClassName('nav-link');
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('active');
        }
        element.classList.add('active');
    }
}

if (document.getElementById('flyerModal')) {
var flyerModal = document.getElementById('flyerModal')
flyerModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  var source = button.getAttribute('data-bs-source')
  var dataTitle = button.getAttribute('data-bs-title')
  var img = flyerModal.querySelector('.modal-body img')
  var title = flyerModal.querySelector('.modal-title')
  img.src = source
  title.innerHTML = dataTitle
})
}