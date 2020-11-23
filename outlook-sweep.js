// Thanks stack overflow!
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function sweep() {
  // TODO: why can't I loop over this?
  const emailCount = document.getElementsByClassName('ms-Check-circle').length - 1
  document.getElementsByClassName('ms-Check-circle')[1].click()
  await sleep(300);
  document.getElementsByName('Archive')[0].click()  
}
sweep();
