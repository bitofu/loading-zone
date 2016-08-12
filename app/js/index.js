document.addEventListener("DOMContentLoaded", function(e) {
  document.forms['room-namer'].onsubmit = (event) => {
    event.preventDefault;

    var name = document.getElementById('room-name').value;
    console.log(name)
    fetch(window.location.href + 'create-room/?room=' + name)
      .then((res) => {

      })
      .catch((err) => {
        console.log('Creating Room Fetch Error :-S', err);
      });
    return false;
  };
});