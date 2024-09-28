import "./style.css";

export function MovieCard({ title, bannerUrl, year }) {
  return (
    <div className="movie-card">
      <img
        src={bannerUrl}
        alt={`Poster do filme ${title}`}
        className="movie-banner"
      />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">Ano de lançamento: {year}</p>
      </div>
    </div>
  );
}
