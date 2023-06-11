/*

-Need to make a 16x16 grid of divs 

-user input asks for x&y # of boxes
    containerWidth is fixed
    EG:
        x = 6 & y = 9, width = 900, height = 900
        900/6 = 150
        900/9 = 100 
        create (6*9) boxes with:
         boxWidth = containerWidth/x
         boxHeight = containerHeight/y

    make x divs that then contain y divs inside each      

*/

const btnClickMe = document.querySelector('#btnClickMe')
const mainContainer = document.querySelector('.container')
makeGrid(16)

btnClickMe.addEventListener('click', wipe)


function makeGrid(t){
    x = t
    for(i = x; i > 0; i--){
        console.log(i)
        const outerDiv = document.createElement('div');
        outerDiv.setAttribute("style", "display: flex;", 
        "background-color: blue;",
        "flex: 1;",
        "flex-direction: column;")

        outerDiv.className = `outerDiv`;
        outerDiv.style.width = `${900/x}px`
        outerDiv.setAttribute("style", "flex-direction:column;")
        
        
      

        
        mainContainer.appendChild(outerDiv)


        console.log(outerDiv)

        for(j = x; j > 0; j--){
            const innerDiv = document.createElement('div');
            innerDiv.className = `innerDiv`;
            innerDiv.setAttribute("style", `width: ${900/x}px;`,
             "display: flex;",
             'height: 450px;',
             "border-width:5px;")
            
            innerDiv.style.height = `${900/x}px`
            innerDiv.style.borderWidth = "5px"
            innerDiv.style.borderColor = "orange"
            innerDiv.addEventListener("mouseover", () =>{innerDiv.style.backgroundColor = "blue"})
            outerDiv.appendChild(innerDiv)
            console.log(innerDiv)
            console.log(j)
        

            

        }
    }
    console.log(mainContainer)
}

function wipe(){
    let n = document.getElementsByClassName("innerDiv")
    length = n.length
    


    for(i = length,i > 0; i--;){
        let node = document.getElementsByClassName("innerDiv")[i]
        node.parentNode.removeChild(node);
    }
    makeGrid(prompt("how big"))
}

function changeColor(){
    innerDiv.style.backgroundColor = "blue"

}