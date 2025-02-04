// GET all dog data from server
    // Create a button in dog bar with each dog's name
    // Add event to button, when clicked displays dog's info 
        // picture, name, good/ bad dog button
    // Add event to bad dog button to toggle between good/ bad
    // Add event to filter good dogs when clicked
        // shows only good dog names in dog bar



// Global variables
const DOGSURL = "http://localhost:3000/pups"
const dogBarDiv = document.querySelector("#dog-bar")
const dogInfoDiv = document.querySelector("#dog-info")
const filterGoodDogBtn = document.querySelector("#good-dog-filter")


// Helper functions
const displayDogDetails = (dogObj) => {
    dogInfoDiv.innerHTML = ""
    console.log(dogObj)
    debugger
    const image = document.createElement("img")
    image.src = dogObj.image
    image.alt = dogObj.name
    const h2 = document.createElement("h2")
    h2.textContent = dogObj.name
    const dogBtn = document.createElement("button")
    dogBtn.textContent = dogObj.isGoodDog ? "GoodDog!" : "Bad Dog!"

    dogBtn.addEventListener("click", e => updateDogStatus(dogObj))

    dogInfoDiv.append(image, h2, dogBtn)
}

const createDogBtn = (dogObj) => {
    const dogSpan = document.createElement("span")
    dogSpan.textContent = dogObj.name

    dogSpan.addEventListener("click", e => displayDogDetails(dogObj))

    dogBarDiv.append(dogSpan)
}


// Fetch requests
const getAllDogs = () => {
    fetch(DOGSURL)
    .then(resp => {
        if(resp.ok) {
            return resp.json()
        } else {
            throw(err)
        }
    })
    .then(dogsData => dogsData.forEach(createDogBtn))
    .catch(err => alert(err))
}
getAllDogs()

function updateDogStatus(dogObj) {
    
}



