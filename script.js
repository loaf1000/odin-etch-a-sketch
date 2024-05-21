// Start with 16x16 grid of square divs
// Use flexbox for alignment
// Create hover effect that changes the color of the div on mouseover
//Add button at the top that creates a prompt to prompt the user to input an int to be the length of the square min 2x2 max 100x100
const container = document.querySelector(".container");
// 1024px x 1024px
const containerLength = 1024;
const buttonChanger = document.querySelector("#changer");

function createGrid(gridLength) {
    const squareLength = getPixelDimenions(gridLength);

    for (let i = 0; i < gridLength * gridLength; i++)
        {
            let div = document.createElement("div");
            div.setAttribute("class", "pixel");
            div.setAttribute("id", "pixel_" + i);
            div.setAttribute("style", "height: " + squareLength + "; width: "+ squareLength);

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

function removeGrid () {
    while (container.firstChild)
        {
            container.removeChild(container.firstChild);
        }

};

function getNumberOfSquares () {
    //
   let sign = Number(prompt("Choose a number squares per side for a new grid Min:2 Max:100 Default:16"))

   if (sign < 2 || sign > 100 || isNaN(sign))
    {
        sign = 16;
    }
   return sign;
};

function getPixelDimenions (numberOfSquares) {
    const settingTemplate = "px";
    let estimate = (containerLength / numberOfSquares) - 2;

    return estimate + settingTemplate;
}

buttonChanger.addEventListener("click", () => {
    const numberOfSquares = getNumberOfSquares();
    removeGrid();
    createGrid(numberOfSquares);
});

createGrid(16);