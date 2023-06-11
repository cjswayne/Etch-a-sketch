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
btnClickMe.addEventListener('click', makeGrid)
const testBox = document.createElement('p')
//testBox.textContent = "whore"
//testBox.style.display = "flex"
//mainContainer.appendChild(testBox)
//console.log(testBox)


function makeGrid(){
    x = 2
    y = 2
    for(i = x; i > 0; i--){
        console.log(i)
        const outerDiv = document.createElement('div');
        outerDiv.setAttribute("style", "display: flex;", 
        "background-color: blue;",
        `width:450`,
        "flex: 1;",
        "flex-direction: column;")
        outerDiv.className = `outerDiv`;
        outerDiv.style.width = `450px`
        outerDiv.setAttribute("style", "flex-direction:column;")
        
        /*if (i%2 ==0){
            outerDiv.setAttribute("style",
        'background: red;')
        } else{
            outerDiv.setAttribute("style",
        'background: blue;')
        }
        */
        
        
        outerDiv.style.flex = "1"

        
        mainContainer.appendChild(outerDiv)


        console.log(outerDiv)

        for(j = y; j > 0; j--){
            const innerDiv = document.createElement('div');
            innerDiv.className = `innerDiv`;
            innerDiv.setAttribute("style", `width: ${900/x}px;`,
             "display: flex;",
             'height: 450px;',
             "border-width:5px;")
            /*
            innerDiv.style.width = `${900/16}px`
            

           
            
            
            innerDiv.setAttribute("style", "background: orange;");*/
            innerDiv.style.height = `${900/y}px`
            outerDiv.appendChild(innerDiv)
            console.log(innerDiv)
            console.log(j)
        

            

        }
    }
    console.log(mainContainer)
}