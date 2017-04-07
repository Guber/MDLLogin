  //random messages container
  var messages = [
    'Hello handsome.',
    'Nice to see you again.',
    'Is that a new haircut?'
  ];

  var random_message = Math.floor(messages.length * Math.random());
  var snackbar_data = {
    message: messages[random_message],
    timeout: 2000
  };

  
  window.onload = function () {
    //display snackbar
    var snackbarContainer = document.getElementById('snackbar');
    snackbarContainer.MaterialSnackbar.showSnackbar(snackbar_data);
  };
