// Thanks stack overflow!
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function remove() {
    for(var e of document.getElementsByClassName('p-file_card')) {
        e.click();
        await sleep(300);
        document.getElementsByClassName('c-icon--vertical-ellipsis')[1].click();
        await sleep(300);
        document.getElementsByClassName('c-menu_item__button--danger')[0].click();
        await sleep(300);
        document.getElementsByClassName('c-dialog__go')[0].click();
    }
}
remove();
