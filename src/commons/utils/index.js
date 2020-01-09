function renderCheck() {
  setTimeout(function () {
    var msg = document.getElementById("no-render-msg");
    if(msg){
      msg.style.display = "block";
    }
  }, 2000);
}

export {
  renderCheck
};