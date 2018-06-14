// Code here handles what happens when a user submits a new item.
// var firebaseConfig = require("/assets/js/firebase_config.js");


// firebase.initializeApp(firebaseConfig);



// var selectedFile;
// //input an event when a file is uploaded.
// $("#inputPhoto").on("change", function (event) {
//   // setting selectedFile to be the file being uploaded.
//   selectedFile = event.target.files[0];

//   $("#photoLabel").text(selectedFile.name);
// });


// when user clicks add-btn
$("#add-item").on("click", function (event) {
  event.preventDefault();
  console.log("Testing in add item button")
  // var userImgURL = "";
  // var fileName = selectedFile.name;
  // var storageRef = firebase.storage().ref('item_images/' + fileName);
  // var uploadTask = storageRef.put(selectedFile);

  // uploadTask.on('state_changed', function (snapshot) {
  //   console.log("Testing in upload task")
  //   // Observe state change events such as progress, pause, and resume
  //   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //   var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //   console.log('Upload is ' + progress + '% done');
  //   switch (snapshot.state) {
  //     case firebase.storage.TaskState.PAUSED: // or 'paused'
  //       console.log('Upload is paused');
  //       break;
  //     case firebase.storage.TaskState.RUNNING: // or 'running'
  //       console.log('Upload is running');
  //       break;
  //   }
  // }, function (error) {
  //   // Handle unsuccessful uploads
  // }, function () {
  //   uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
  //     userImgURL = downloadURL;
  //     addItem();
  //   });
  // });
  addItem()
  function addItem() {
    var account_id = $("#inputAccount").val().trim();
    var account_key = $("#inputPassword").val().trim();

    // make a newAccount obj
    var newItem = {
      item_name: $("#inputItemName").val().trim(),
      description: $("#inputDescription").val().trim(),
      start_date: $("#inputStart").val().trim(),
      end_date: $("#inputEnd").val().trim(),
      price: $("#inputPrice").val().trim(),
      // picture_link: userImgURL,
      picture_link: $("#inputPhoto").val().trim(),
      owner_id: account_id
    };

    // send an AJAX POST-request with jQuery
    $.post("/post-items/" + account_id + "/" + account_key, newItem)
      .then(function (data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a  with an alert window
        alert("Adding Item...");
      });

    // empty each input box by replacing the value with an empty string

    $("#inputItemName").val("")
    $("#inputItemName").val("")
    $("#inputDescription").val("")
    $("inputStart").val("")
    $("#inputEnd").val("")
    $("#inputPrice").val("")
    $("#inputPhoto").val("")
  };
});

