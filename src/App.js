
import { useEffect,useState, } from 'react';
import './App.css';
import './css/main.css'

import NavBar from './navBar';
import CardSingle from './card';


function App() {



  const [movies,setMovies] = useState();

  useEffect(() => {
  loadMovie();
  
  

  },[]);



  async function  loadMovie()  {
   
   let dataSync = await fetch('https://www.omdbapi.com/?&apikey=ccf27a16&s=superman');
  
   let resp =await  dataSync.json();
    
  
      setMovies(resp.Search)

      document.getElementById("searchText").addEventListener("input",function (){
        searchMovie(document.getElementById("searchText").value);
      });
 
  }

  async function  searchMovie(e)  {
   
    let dataSync = await fetch(`https://www.omdbapi.com/?&apikey=ccf27a16&s=${e.target.value}`);
   
    let resp =await  dataSync.json();
     
 
 
       setMovies(resp.Search)
  
   
    
   }

   

  
  return (
    <div className="App">
      <NavBar />
      <div className="searchBar">
            <div className="searchBar__input">
            <input id="searchText" type="text" name="searchText" onInput={searchMovie} placeholder='   Search '></input>
            </div>
            
        </div>
      
  
   
    {
      
      movies?.length>0 ? (
      
        <div className='cardList'>
      {
           movies.map( (item)=> (
            <CardSingle key={item.Id} movie = {item} />
          ) )
    }
          </div>
          
      ):(
        <div id="loading-bar-spinner" class="spinner"><div class="spinner-icon"></div></div>
      )
     }
    
    
  
     
      
    </div>
  );
  
}




export default App;
