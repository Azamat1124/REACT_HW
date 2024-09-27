import React, { useState } from "react";
import "./Movies.css";

const Movies = () => {
  const [currentMovieId, setCurrentMovieId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Avatar",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/d102db69-5dea-482a-a7d5-8ac38ec3e706/avatar3.jpg?format=500w",
      rating: 4,
    },
    {
      id: 2,
      title: "Naruto",
      imageUrl: "https://roppongi.fr/wp-content/uploads/Naruto-de-Masashi-Kishimoto.jpg",
      rating: 5,
    },
    {
      id: 3,
      title: "BEN 10",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6C87cqgQOlQQPwx1APPtLA8o2uFGrSTMtYA&s",
      rating: 3,
    },
  ]);

  const [newMovie, setNewMovie] = useState({
    title: "",
    imageUrl: "",
    rating: 0,
  });

  const handleEdit = (movie) => {
    setNewMovie(movie);
    setCurrentMovieId(movie.id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewMovie({ title: "", imageUrl: "", rating: 0 });
    setCurrentMovieId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleAddOrUpdateMovie = () => {
    if (
      newMovie.title &&
      newMovie.imageUrl &&
      newMovie.rating >= 0 &&
      newMovie.rating <= 5
    ) {
      if (currentMovieId) {
        setMovies(
          movies.map((movie) =>
            movie.id === currentMovieId
              ? { ...newMovie, id: currentMovieId }
              : movie
          )
        );
      } else {
        setMovies([...movies, { id: movies.length + 1, ...newMovie }]);
      }
      closeModal();
    }
  };

  return (
    <div className="movie-card">
      {movies.map((item) => (
        <div key={item.id}>
          <img src={item.imageUrl} alt={item.title} />
          <h3>{item.title}</h3>
          <p>Рейтинг: {item.rating}</p>
          <div className="buttons">
            <button
              className="delete"
              type="button"
              onClick={() =>
                setMovies(movies.filter((movie) => movie.id !== item.id))
              }
            >
              Удалить
            </button>
            <button className="edit" onClick={() => handleEdit(item)}>
              Edit
            </button>
          </div>
        </div>
      ))}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{currentMovieId ? "EDIT MOVIE" : "ADD MOVIE"}</h2>
            <div className="card-films">
              <input
                type="text"
                name="title"
                placeholder="Movie Title"
                value={newMovie.title}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                value={newMovie.imageUrl}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="rating"
                placeholder="Rating (0-5)"
                min="0"
                max="5"
                value={newMovie.rating}
                onChange={handleInputChange}
              />
            </div>
            <button onClick={handleAddOrUpdateMovie}>
              {currentMovieId ? "Обновить" : "Добавить"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
