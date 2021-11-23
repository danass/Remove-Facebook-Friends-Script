// from https://m.facebook.com/friends/center/friends 
// first copy paste: https://code.jquery.com/jquery-3.6.0.min.js


let ok = this.document
let firstrec = ok.firstChild.nextSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild
nextrec = firstrec

// simulate click function
async function clickf(div, entry) {
    if (entry == null) {
        await $(div).click()
        return await $(div).click()
    }
    if (entry == "0") {
        console.log("ehhe")
        await $(div)[0].click()browse
        return await $(div)[0].click()
    }
}


function* removefb() {
    while (true) {
        nextclick = nextrec.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild
        nextreccopy = nextrec
        nextrec = nextrec.nextSibling
        if (nextrec == null) {
            nextrec = nextreccopy
            nextrec = nextrec.parentElement.nextElementSibling.firstElementChild
        }
        clickf(nextclick)

        remover = nextclick.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling
        clickf(remover, 0)
        yield
    }
}

function greet() {
    removefb().next()
}

setInterval(greet, 200);
