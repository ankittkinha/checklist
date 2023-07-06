let checks = document.getElementsByClassName("check");
let texts = document.getElementsByClassName("txt");

for (let i = 0; i < checks.length; i++){
    checks[i].addEventListener("change", function() {
        if(checks[i].checked){
            texts[i].innerHTML = `<del>${texts[i].innerHTML}</del>`;
        }else{
            texts[i].innerHTML = texts[i].innerText;
        }
    });
}