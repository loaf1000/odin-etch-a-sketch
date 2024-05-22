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
    const isRanRGB = true;

    for (let i = 0; i < gridLength * gridLength; i++)
        {
            let div = document.createElement("div");
            div.setAttribute("class", "pixel");
            div.setAttribute("id", "pixel_" + i);
            div.setAttribute("style", `height: ${squareLength}; width: ${squareLength}`);

            div.addEventListener("mouseover", () => {
                if (isRanRGB)
                    {
                        div.setAttribute("style", `background-color: ${randomRGB()}; border: 1px solid white; height: ${squareLength}; width: ${squareLength}`);
                    }
                else if(false) {

                }
                else {
                    div.classList.toggle("rabble");
                }

                
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

function randomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
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