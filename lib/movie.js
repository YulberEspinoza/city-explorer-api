function Movies(p) {
  (this.title = p.original_title),
    (this.overview = p.overview),
    (this.average_votes = p.vote_average),
    (this.total_votes = p.vote_count),
    (this.image_url = "https://image.tmdb.org/t/p/w500" + p.poster_path),
    (this.popularity = p.popularity),
    (this.released_on = p.release_date);
}
module.exports = { Movies };
