<button 
onClick={() =>{
    addToFavorites(
        {
            id: id,
            titleText: titleText.text,
            titleType: titleType.text,
            releaseDate: releaseDate
        })
}}
className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-orange-200 text-orange-700">Add to Favorite</button>