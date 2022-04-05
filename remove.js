// go to https://m.facebook.com/friends/center/friends 
// open console and paste the code
//then paste the following code

    //retrieving all page html
    ok = this.document

    //finding the remove friend button div, and storing a copy of it
    firstrec = ok.firstChild.nextSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild
    nextrec = firstrec

    // simulation of a click function for all scenarios
    async function clickf(div, entry) {
        if (entry == null) {
            await (div).click()
            return await (div).click()
        }
        if (entry == "0") {
            await (div).click()
            return await (div).click()
        }
    }


    function* removefb() {
        while (true) {
            //might be better to add a key listener to stop whenever you want.
            nextclick = nextrec.firstElementChild.lastChild.lastElementChild.lastElementChild.lastElementChild.lastChild

            
            nextreccopy = nextrec
            nextrec = nextrec.nextSibling
            if (nextrec == null) {
                nextrec = nextreccopy
                nextrec = nextrec.parentElement.nextElementSibling.firstElementChild
            }
            clickf(nextclick)

            remover = nextclick.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling
            console.log(remover)
            clickf(remover, 0)
            yield
        }
    }

    function greet() {
        removefb().next()
    }
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
    // interval set to a large value, so fb doesn't identify you as suspicious
    setInterval(greet, getRandomArbitrary(2000,5500));
        
