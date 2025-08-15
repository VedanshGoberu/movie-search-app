let api="https://www.omdbapi.com/?apikey=dacba0c6&t="

let title=document.getElementById('title')
let ratings=document.getElementById('ratings')
let director=document.getElementById('director')
let awards=document.getElementById('awards')
let collection=document.getElementById('collection')
let date=document.getElementById('date')
let description=document.getElementById('description')
let genre=document.getElementById('genre')
let poster=document.getElementById('poster')
let actors=document.getElementById('actors')
let writer=document.getElementById('writer')


function searchMovie(){
    let movieName=document.getElementById("movieName")
    let query = api + movieName.value
    fetch(query).then((data)=>{
    return data.json()
    }).then((data)=>{
        title.innerText=data.Title;
        date.innerText=data.Released;
        director.innerText=data.Director;
        awards.innerText=data.Awards;
        actors.innerText=data.Actors;
        genre.innerText=data.Genre;
        collection.innerText=data.BoxOffice;
        description.innerText=data.Plot;
        writer.innerText=data.Writer;
        ratings.innerText=data.Ratings;
        poster.src=data.Poster;





    })
}
