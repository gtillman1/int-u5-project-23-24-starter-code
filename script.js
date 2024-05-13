// Declare your arrays here

// Make sure to declare your HTML elements as variables! 

// Submit Button 
let submitButton = document.querySelector("button");
 submitButton.addEventListener("click", function() {

let movieInput = document.querySelector("Input").value;
let comedy= ["Madea.jpg", "Friday.jpg","Rush.jpg"]
let action= ["Madea.jpg", "Friday.jpg","Rush.jpg"]
let drama= ["Madea.jpg", "Friday.jpg","Rush.jpg"]
let results = document.querySelector("div")

    if (
    "comedy" === movieInput)
        for (let e of comedy){
let img = document.createElement("img")
img.src = e
results.appendChild(img)
        }
        if (
            "action" === movieInput)
                for (let e of comedy){
        let img = document.createElement("img")
        img.src = e
        results.appendChild(img)
                }
                if (
                    "drama" === movieInput)
                        for (let e of comedy){
                let img = document.createElement("img")
                img.src = e
                results.appendChild(img)
                        }
         

    });