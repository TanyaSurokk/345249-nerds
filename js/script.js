      var link = document.querySelector(".contacts .btn-red");

      var popup = document.querySelector(".popup");
      var overlay = document.querySelector(".modal-overlay");
      var close = popup.querySelector(".close");

      var form = popup.querySelector("form");
      var yourname = popup.querySelector("[name=your-name]");
      var youremail = popup.querySelector("[name=email]");
      var yourtext = popup.querySelector("textarea");

      var storage = localStorage.getItem("yourname");


      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("popup-show");
        overlay.classList.add("modal-overlay-show");

        if (storage) {
          yourname.value = storage;
          youremail.focus();
        } else {
          yourname.focus();
        }
        
      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("popup-show");
        overlay.classList.remove("modal-overlay-show");
        popup.classList.remove("popup-error");
      });

      overlay.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("popup-show");
        overlay.classList.remove("modal-overlay-show");
      });

      form.addEventListener("submit", function(event) {
        if (!yourname.value || !youremail.value || !yourtext.value) {
          event.preventDefault();
          popup.classList.remove("popup-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("popup-error");
          console.log("Нужно ввести имя, пароль, текст");
        } else {
          localStorage.setItem("yourname", yourname.value);
        }
      });

      window.addEventListener("keydown", function (event)
         {
        if (event.keyCode === 27) {
          if (popup.classList.contains ("popup-show")) {
            popup.classList.remove("popup-show");
          }
          if (overlay.classList.contains ("modal-overlay-show")) {
            overlay.classList.remove("modal-overlay-show");
            popup.classList.remove("popup-error");
          }
        }
      });
