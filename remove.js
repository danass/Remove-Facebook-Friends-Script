// Go to https://m.facebook.com/friends/center/friends 
// Open the console and type "allow pasting" enter, and paste the code enter.

function getRandomArbitrary(min, max) { return Math.random() * (max - min) + min; }
function stop() { clearInterval(interval); }
function start() { removeFriend().next(); }

function startInterval() {
    // Set interval to a large value to avoid suspicion from Facebook
    interval = setInterval(start, getRandomArbitrary(2000, 5500));
    return interval;
}
async function clickElement(element, entry) {
    if (entry == null || entry == "0") {
        await element.click();
        return await element.click();
    }
}

let intervalId = startInterval();

function* removeFriend() {
    while (true) {
        nextClick = nextRecord.lastElementChild.firstChild.firstChild.lastChild.firstChild;
        nextRecordCopy = nextRecord;
        nextRecord = nextRecord.nextSibling;

        if (nextRecord == null) {
            nextRecord = nextRecordCopy;
            nextRecord = nextRecord?.parentElement?.nextElementSibling?.firstElementChild;

            if (nextRecord == undefined) {
                stop(intervalId);
            }
        }
        
        clickElement(nextClick);
        remover = nextClick.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling;
        clickElement(remover, 0);
        yield;
    }
}

currentPage = this.document;
firstRecord = currentPage.firstChild.nextSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild;
nextRecord = firstRecord;
