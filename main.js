 const searchEL = document.getElementById('search');
 const formEL = document.getElementById('form');
 const MoviesContainer = document.querySelector(".movies-details");

 //e7875dd1b7178e6bd83214f59d85bca8
 //https://image.tmdb.org/t/p/w1280
 
 const MoviesAPI = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e7875dd1b7178e6bd83214f59d85bca8&page=";
 const imagePath = "https://image.tmdb.org/t/p/w1280";
 const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=e7875dd1b7178e6bd83214f59d85bca8&query="';
 const PaginationsEL = document.querySelectorAll(".paginations ul li");

//  const MoviesAPI = "https://freetestapi.com/api/v1/movies";
//  const imagePath = "https://image.tmdb.org/t/p/w1280";
//  const searchUrl = 'https://freetestapi.com/api/v1/movies?search=[query]';
//  const PaginationsEL = document.querySelectorAll(".paginations ul li");

getMovies(MoviesAPI);

async function getMovies(url){
    try{
        const result = await fetch(url);
        const data =await result.json();
        showMovies(data.results);
    }catch(error){}
}


function showMovies(movies) {
    MoviesContainer.innerHTML ="";
    movies.forEach((movie)=>{
        const {title, poster_path,vote_average,release_date} = movie;
        const MoviesDisplay = document.createElement('div');
        MoviesDisplay.classList.add('movies');
        MoviesDisplay.innerHTML =`<img src="${imagePath+poster_path}" alt=""/>
            <p class="movie-title">${title}</p>
            <div class="short-des">
              <p class="year">Date: ${release_date}</p>
              <p class="rating">Rate: ${vote_average}</p>
            </div>`;

            MoviesContainer.appendChild(MoviesDisplay);
    });
    
}

formEL.addEventListener('submit', (e)=>{
    e.preventDefault();
    const searchTerm = searchEL.value;
    if (searchTerm && searchTerm !==""){
        getMovies(searchUrl + searchTerm);
        searchEL.value ="";
    }else{

    }
})

PaginationsEL.forEach((pages,index)=>{
    pages.addEventListener('click',()=>{
        if(getMovies){
           getMovies(MoviesAPI+index) ;
        
        }
    });
});