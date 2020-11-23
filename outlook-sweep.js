
// Thanks stack overflow!
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function sweep() {
    for(var e of document.getElementsByClassName('ms-Check-circle')) {
        e.click();
        await sleep(300);
        document.getElementsByName('Archive')[0].click()
    }
}
sweep();
