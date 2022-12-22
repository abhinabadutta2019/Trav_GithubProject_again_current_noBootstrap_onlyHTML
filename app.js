//Instantiate github class
const github = new GitHub();

//Init UI
const ui = new UI();

//Search input
const searchUser = document.getElementById("searchUser");
//search input event listener
searchUser.addEventListener("keyup", function (e) {
  //Get input text
  const userText = e.target.value;
  //If condition --Input field epty rakhle hobena
  if (userText !== "") {
    // console.log(userText);
    //make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //UI show alert
        ui.showAlert("User not found", "alert");
      } else {
        //UI show profile
        ui.showProfile(data.profile);
        //show repos
        ui.showRepos(data.repos);
      }
    });
  } else {
    //UI clear profile--
    //input field empty thakle - tokhon -- kono profile show korbe naa
    ui.clearProfile();
  }
});
