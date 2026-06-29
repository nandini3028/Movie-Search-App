const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-500 rounded-lg overflow-hidden w-44">
      <img
        className="h-60 w-full object-cover"
        src={movie.Poster}
        alt={movie.Title}
      />

      <div className="p-2">
        <h3 className="text-white text-sm">MOVIE</h3>
        <h2 className="font-bold text-blue-300">
          {movie.Title}
        </h2>
      </div>
    </div>
  );
};

export default MovieCard;