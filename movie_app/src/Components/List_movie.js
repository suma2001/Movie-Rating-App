import React, { Component } from 'react';
import movies from './movies';

class List_movie extends Component {
    state = {
        movies,
        rate: [],
    }
    componentDidMount() {
        const { movies } = this.state;
        let rate = movies.map(p => p.avg_rating, t => t.title);
        this.setState({rate})
    }
    sortAscending = () => {
        const {rate} = this.state;
        rate.sort((a, b) => a - b).reverse()
        this.setState({rate})
    }
    render() {
        const {rate} = this.state;
        return (
            <div>
                <ul>
                    {
                        rate.map((p, t) => { return <li>{t} - {p}</li>;
                     })
                    }
                </ul>
                <button onClick = {this.sortAscending} > desc </button>
            </div>
        )
    }
}

export default List_movie
