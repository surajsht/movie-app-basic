let url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=692c747f7b7b3c1f3f0a4303f968a1e4"

let imgLink = "https://image.tmdb.org/t/p/w500/"

let searchMovie =
  "https://api.themoviedb.org/3/search/movie?api_key=692c747f7b7b3c1f3f0a4303f968a1e4&query="

let test = document.querySelector(".test")

fetch(url)
  .then(function (resp) {
    return resp.json()
  })
  .then(function (data) {
    let checking = data.results
      .map(function (item) {
        return `<img src = ${imgLink + item.poster_path} />`
      })
      .join("")
    test.innerHTML = checking
  })

let input = document.querySelector("input")

input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    let inputVal = input.value

    if (inputVal || input.value !== "") {
      let newUrl = searchMovie + inputVal

      fetch(newUrl)
        .then(function (resp) {
          return resp.json()
        })
        .then(function (data) {
          let checking = data.results
            .map(function (item) {
              return `<img src = ${imgLink + item.poster_path} />`
            })
            .join("")
          test.innerHTML = checking
        })
    } else {
      window.location.reload()
    }
  }
})
