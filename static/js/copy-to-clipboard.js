let timeout;

const info_btns = [...document.querySelectorAll("[data-info]")],
  popup_wrapper = document.querySelector(".copied-popups"),

  html = `<div class="copied-popup">
            <span>Copied</span>
            <img src="./static/assets/svgs/icons/ic_baseline-done.svg" alt="Suret Cargo">
          </div>`,

  copyToClipboard = btn => {
    const info = btn.dataset['info'];

    clearTimeout(timeout)

    navigator.clipboard.writeText(info);

    popup_wrapper.classList.remove("visually-hidden");
    popup_wrapper.insertAdjacentHTML("beforeend", html)

    const popup = [...popup_wrapper.querySelectorAll(".copied-popup")]

    for (let i = 0; i < popup.length; i++) {
      setTimeout(() => {
        popup[i].remove()
      }, 2000)
    }

    popup_wrapper.classList.remove("visually-hidden");
  },

  initCopyToClipboard = () => info_btns.forEach(btn => {
    btn.addEventListener("click", () => copyToClipboard(btn))
  });

initCopyToClipboard()