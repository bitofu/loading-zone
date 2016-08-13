document.addEventListener("DOMContentLoaded", function(e) {
  document.forms['room-namer'].onsubmit = (event) => {
    event.preventDefault;

    var name = document.getElementById('room-name').value;
    window.location.replace(name)
    // fetch(window.location.href + 'create-room/?room=' + name)
    //   .then((res) => {
    //     if (res.status !== 200) {
    //       // do error stuff
    //       console.log('Looks like there was a problem creating a room. Status Code: ' + response.status);
    //       return
    //     };
    //     res.redirect('/' + name)
    //     return
    //   })
    //   .catch((err) => {
    //     console.log('Creating Room Fetch Error :-S', err);
    //   });
    return false;
  };
});