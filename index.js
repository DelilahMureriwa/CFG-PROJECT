const perfectMatchButton = document.getElementById("perfect-match-button");
const matchedPetDiv = document.querySelector("#matched-pet");

//Display all pets- Delilah Code
function displayPets() {
  const rowDiv = document.querySelector(".row");

  pets.forEach((pet) => {
    const div = document.createElement("div");
    div.classList.add("pets", "col-sm");
    div.innerHTML = `
      <div class="card" style="width: 18rem">
        <img
          src="${pet.image}"
          height="190px"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">${pet.name}</h5>
          <p class="card-text">
            ${pet.description}
          </p>
          <a href="#" class="btn btn-primary match">Match</a>
        </div>
      </div>
    `;

    // Zoom into the div on mouseover and zoom out again on mouseout
    div.onmouseover = function () {
      div.style.transform = "scale(1.15)";
    };
    div.onmouseout = function () {
      div.style.transform = "scale(1)";
    };

    rowDiv.appendChild(div);

    const matchButton = div.querySelector(".match");
    matchButton.addEventListener("click", function () {
      displayMatchedPet(pet); // Call the function to display the matched pet
    });
  });
}

// Zoomin and zoomout function

// function zoomIn(element) {
//   element.querySelector("card").style.transform = "scale(1.5)";
// }

// function zoomOut(element) {
//   element.querySelector("card").style.transform = "scale(1)";
// }

//display match when you click the match button
function displayMatchedPet(pet) {
  // Remove the button and change the h3 text content
  perfectMatchButton.style.display = "none";
  document.getElementById("heading").innerHTML =
    "Congratulations! You have found your pawfect match🐾😻";

  // Display the matched pet
  const rowDiv = document.querySelector(".row");
  rowDiv.innerHTML = ""; // Clear the contents of the .row element

  const matchedPetDiv = document.createElement("div");
  matchedPetDiv.innerHTML = `
    <div class="card" style="width: 25rem; margin: 0 auto; margin-top: -80px">
      <img
        src="${pet.image}"
        height:"25rem"
        class="card-img-top"
      />
      <div class="card-body">
        <h5 class="card-title">${pet.name}</h5>
        <p class="card-text">
          ${pet.description}
        </p>
      </div>
    </div>
  `;
  rowDiv.appendChild(matchedPetDiv);

  const homepageButton = document.createElement("button");
  homepageButton.classList.add("btn", "btn-primary", "match", "m-auto", "mt-3");
  homepageButton.style.width = "180px";
  homepageButton.innerHTML = "Back to Homepage";

  rowDiv.appendChild(homepageButton);

  homepageButton.addEventListener("click", () => {
    rowDiv.innerHTML = "";
    displayPets();
    perfectMatchButton.style.display = "block";
    perfectMatchButton.style.margin = "0 auto";
    document.getElementById("heading").innerHTML =
      "Where you find your perfect pet";
  });
}

displayPets();

function askQuestion(question) {
  while (true) {
    const response = prompt(question).toUpperCase();
    if (response === "YES") {
      return true;
    } else if (response === "NO") {
      return false;
    } else {
      alert("This is not a valid answer.");
    }
  }
}

//On click on button - Display Perfect Match
function displayPerfectMatches() {
  let name = prompt("What is your name");
  let greeting = alert(
    `Welcome ${name}, We are going to find you your perfect pet. To help us help you, we will ask you a series of Yes / No questions`
  );

  let indoors = askQuestion("Are you an indoors person?");
  let parks = askQuestion("Do you like parks?");
  let walks = askQuestion("Do you like going for walks?");
  let naps = askQuestion("Do you love naps?");
  let backyard = askQuestion("Do you have a backyard?");
  let dancing = askQuestion("Do you like dancing?");
  let swimming = askQuestion("Do you enjoy swimming?");

  // The code is checking if the value of the variable "indoors" is equal to the string "true".
  // If it is, then it will set the value of the variable to true.
  // If it is not, then it will set the value of the variable to false.

  const userAnswers = {
    indoors: indoors,
    parks: parks,
    walks: walks,
    naps: naps,
    backyard: backyard,
    dancing: dancing,
    swimming: swimming,
  };

  let perfectMatches = [];

  pets.forEach((pet) => {
    let matchCount = 0;
    for (let key in pet.about) {
      //hasOwnProperty is a method that checks if an object has a specific propert
      if (pet.about.hasOwnProperty(key)) {
        if (
          userAnswers.hasOwnProperty(key) &&
          userAnswers[key] === pet.about[key]
        ) {
          matchCount++;
        }
      }
    }
    if (matchCount >= 4) {
      perfectMatches.push(pet);
    }
  });

  alert("We have found the following perfect matches");

  const rowDiv = document.querySelector(".row");
  document.querySelector(".row").innerHTML = "";

  perfectMatches.forEach((pet) => {
    const div = document.createElement("div");
    div.classList.add("pets", "col-sm");
    div.innerHTML = `
      <div class="card" style="width: 18rem">
        <img
          src="${pet.image}"
          height="190px"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">${pet.name}</h5>
          <p class="card-text">
            ${pet.description}
          </p>
          <a href="#" class="btn btn-primary match">Match</a>
        </div>
      </div>
    `;

    // Zoom into the div on mouseover and zoom out again on mouseout
    div.onmouseover = function () {
      div.style.transform = "scale(1.15)";
    };
    div.onmouseout = function () {
      div.style.transform = "scale(1)";
    };

    rowDiv.appendChild(div);

    const matchButton = div.querySelector(".match");
    matchButton.addEventListener("click", function () {
      displayMatchedPet(pet); // Call the function to display the matched pet
    });
  });
}

perfectMatchButton.addEventListener("click", displayPerfectMatches);
