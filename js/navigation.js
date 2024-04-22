function goToSection(sectionName) {
    document.getElementById(sectionName).scrollIntoView();
}

function navigate(url, id = null)
{
    var baseUrl = window.location.origin;   
    window.location  = baseUrl + url;
}


var flyerModal = document.getElementById('flyerModal')
flyerModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var source = button.getAttribute('data-bs-source')
  var dataTitle = button.getAttribute('data-bs-title')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  var img = flyerModal.querySelector('.modal-body img')
  var title = flyerModal.querySelector('.modal-title')
  img.src = source
  title.innerHTML = dataTitle
})