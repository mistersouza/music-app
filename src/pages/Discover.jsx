import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components'; 
import { genres } from '../assets/constants'

import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/Services/shazamCore'

function Discover() {
    const dispatch = useDispatch()
    const { activeSong, isPlaying, genreListId } = useSelector(state => state.player); 
    const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP'); 
    
    
    if (isFetching) return <Loader title='Loading tunes...' />
    
    if (error) return <Error />; 
    
    const genreTitle = genres.find(({ value }) => value === genreListId)?.title; 
    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
                <select onChange={({ target }) => dispatch(selectGenreListId(target.value))} value={genreListId || 'POP'} className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
                    {genres.map(genre => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
                </select>
            </div>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((song, index) => (
                    <SongCard 
                        key={song.key} 
                        song={song} 
                        index={index}
                        data={data}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                    ></SongCard>
                ))}
            </div>
        </div>
        );
}

export default Discover;