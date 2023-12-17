import { useState, useEffect } from 'react';
import axios from 'axios';
import Games from './Games'

const Library = () => {
    const [games, setGames] = useState([]);

    const domain = 'http://localhost:3000';

    useEffect(() => {
        const fetchLibrary = async () => {
            try {
                const res = await axios.get(`${domain}/games`);
                setGames(res.data);
                console.log(res.data)
            } catch (error) {
                // Handle fetch error here
                console.error('Error fetching library:', error);
            }
        };

        fetchLibrary();
    }, []);

    return (
        <div id="library-container">
            <div id="library-display">
                {games.map((game) => (
                    <Games key={game.game_id} game={game} />
                ))}
            </div>
        </div>
    );
};

export default Library;

// const Posts = ({posts, getSinglePost}) => {
//     return posts.map((post) => (
//         <PostItem post={post}
//          key={post.id}
//          getSinglePost={getSinglePost}
//          />
//     ))
// }