import { CustomPlaceholder } from 'react-placeholder-image';
export default function MovieCard ({titleText,titleType, url, releaseDate,width, height }){
    const {day, month ,year} = releaseDate;
    const {isSeries, isEpisode,} = titleType
    const imageStyle = {
        width,
        height
    }
    return (

<div className="flex flex-wrap flex--movie">
    
  <div className="rounded overflow-hidden shadow-lg m-4  flex-1 justify-between">
    <div className="md:flex-shrink-0">
      
    </div>
    <div className="flex flex-col flex-grow px-8 py-4 bg-purple-600">
      <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">{titleText.text}</h3>
      <h6 className="font-bold text-lg md:text-lg lg:text-lg  text-orange-900  ">
        {titleType.text} 
      </h6>
      <span className="movie--year text-xl lg:text-sm lg:mb-4">{day}/{month}/{year}</span>
      <div className="flex-grow">
      </div>
      <div className="button-container flex justify-between mb-2">
      <button class="text-lg mr-4 lg:text-sm text-gray-200">More Info</button>
        <button className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-orange-200 text-orange-700">Add to Favorite</button>
      </div>
    </div>
  </div>
  </div>
    );
}