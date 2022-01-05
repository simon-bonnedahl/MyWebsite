
let inputFields = document.querySelectorAll(".js-input")
for(field of inputFields){
    field.addEventListener("keyup", lol)
}

function lol() {
    if( this.value.length != 0) {
       this.className = "input-text js-input not-empty";
    } else {
       this.className = "input-text js-input";
    }
  };

