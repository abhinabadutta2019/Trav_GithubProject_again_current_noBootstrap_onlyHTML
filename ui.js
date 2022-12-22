class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  //show Profile
  showProfile(user) {
    // console.log(user);
    this.profile.innerHTML = `
    <div class='container'>
     <div >
      <div >
       <img class='img' src='${user.avatar_url}'> 
       <br>
       <a href='${user.html_url}' target='_blank' class='btn'>View Profile</a>
      </div>

      <div >

      <span>Public Gists:${user.public_repos}</span>
      <span>Public Repos:${user.public_gists}</span>

      <br>
      <br>

      <ui class='list'>
      <li >Company:${user.url}</li>
      <li >Blog:${user.html_url}</li>
      </ui>

      </div>
     </div>
    </div>
    <h3 class="page-heading">Latest Repos</h3>
    <div id='repos'></div>
    `;
  }

  //show repos
  showRepos(repos) {
    let output = "";

    repos.forEach(function (repo) {
      output += `
      <div>
       <div>

        <div>
         <a href='${repo.html_url}' target='_blank'>${repo.name}</a>
        </div>

        <div>
        <span>Stars:${repo.stargazers_count}</span>
        <span>watchers:${repos.watchers_count}</span>
        </div>

       </div>
      </div>
      `;
    });
    //
    document.getElementById("repos").innerHTML = output;
  }

  //Show alert message
  showAlert(message, className) {
    //clear any remaining alert
    this.clearAlert();

    //Created div
    const div = document.createElement("div");
    //Add className
    div.className = className;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector(".searchContainer");
    //Get search box
    const search = document.querySelector("#searchUser");
    //Insert alert
    container.insertBefore(div, search);

    //Timeout after alert--
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }
  //Clear profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
