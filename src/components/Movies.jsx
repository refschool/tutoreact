import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService.js';

class Movies extends Component {

    state = {
        movies: getMovies()
    }

    handleDelete = (id) => {
        console.log('delete movie ', id)
        let movies = this.state.movies
        movies = movies.filter(movie => {
            if (movie._id !== id) {
                return movie
            }
        })

        this.setState({ movies: movies })
    }

    render() {
        if (this.state.movies.length === 0) {
            return <p>No more movies !</p>
        }
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.movies.map(movie => {
                                return (
                                    <tr key={movie._id}>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.numberInStock}</td>
                                        <td>{movie.dailyRentalRate}</td>
                                        <td>
                                            <button className="btn btn-warning" onClick={() => { this.handleDelete(movie._id) }} >Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}

export default Movies