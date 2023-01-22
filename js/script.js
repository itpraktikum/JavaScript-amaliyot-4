const btn = document.querySelector(".btn"),
      input = document.querySelector("input"),
      text = document.querySelector(".text");


      btn.addEventListener("click", () => {
        let number = input.value;
        if(number % 2 == 0){
            text.innerHTML = `<p>Juft son</p>`
        }else{
            text.innerHTML = `<p>Toq son</p>`
        }
      })