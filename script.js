// Start with 16x16 grid of square divs
// Use flexbox for alignment
// Create hover effect that changes the color of the div on mouseover
//Add button at the top that creates a prompt to prompt the user to input an int to be the length of the square min 16x16 max 100x100
const container = document.querySelector(".container");

function createGrid(gridLength) {

    //TODO: handle pixel width and height
    for (let i = 0; i < gridLength * gridLength; i++)
        {
            let div = document.createElement("div");
            div.setAttribute("class", "pixel");
            div.setAttribute("id", "pixel_" + i);
            //div.setAttribute("style", "border: 1px solid black; color: white; height: 64px; width: 64px");

            div.addEventListener("mouseover", () => {
                div.classList.toggle("rabble");
            })
            
            /* Chase the mouse
            div.addEventListener("mouseout", () => {
                div.classList.toggle("rabble");
            })
            */
            container.appendChild(div);

        }
}

createGrid(16);