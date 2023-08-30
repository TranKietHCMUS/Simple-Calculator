var input = document.querySelector("#display");
var items = Array.from(document.querySelectorAll(".item"));

items.forEach(function(par) {
    par.addEventListener("click", function() {
        if (input.innerHTML == '0') input.innerHTML = "";
        if (par.innerHTML == "AC") input.innerHTML = '0';
        else if (par.innerHTML == "DEL") {
            var arrtext = input.innerHTML;
            arrtext = arrtext.substring(0, arrtext.length - 1);
            if(arrtext[arrtext.length - 1] == '.') arrtext = arrtext.substring(0, arrtext.length - 1);
            if(arrtext.length != 0) input.innerHTML = arrtext;
            else input.innerHTML = '0';
        }
        else if (par.innerHTML == '=') input.innerHTML = eval(input.innerHTML);
        else input.innerHTML += par.innerHTML;
    })
})