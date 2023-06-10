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



function makeGrid(){
    x = 16
    y = 2

    const testBox = document.createElement('p')
    testBox.textContent = "whore"
    console.log(testBox)



    for(i = x; i > 0; i--){
        console.log(i)
        const outerDiv = document.createElement('div');
        outerDiv.className = `outerDiv${i}`;
        if (i%2 ==0){
            outerDiv.setAttribute("style",
        'background: red;')
        } else{
            outerDiv.setAttribute("style",
        'background: blue;')
        }
        
        outerDiv.style.border = "thick blue"
        outerDiv.style.width = `${900/16}px`
        outerDiv.style
        mainContainer.appendChild(outerDiv)


        console.log(outerDiv)

        for(j = y; j > 0; i--){
            

        }
    }
}