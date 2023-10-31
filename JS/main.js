let css = document.querySelector(".css")
let html = document.querySelector(".html")
let js = document.querySelector(".js")

let cssid = document.querySelector("#css")
let htmlid = document.querySelector("#html")
let jsid = document.querySelector("#js")

css.addEventListener("click", () => {
  css.classList.add("active")
  html.classList.remove("active")
  js.classList.remove("active")
  cssid.style.display = "block"
  htmlid.style.display = "none"
  jsid.style.display = "none"
})
html.addEventListener("click", () => {
  css.classList.remove("active")
  html.classList.add("active")
  js.classList.remove("active")
  cssid.style.display = "none"
  htmlid.style.display = "block"
  jsid.style.display = "none"
})
js.addEventListener("click", () => {
  css.classList.remove("active")
  html.classList.remove("active")
  js.classList.add("active")
  cssid.style.display = "none"
  htmlid.style.display = "none"
  jsid.style.display = "block"
})