import SongBar from './SongBar'

const RelatedSongs = ({ data, artistId, isPlaying, activeSong, onPauseClick, onPlayClick }) => {
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-3xl text-white'>Related Songs:</h1>
      <div className='mt-6 w-full flex flex-col'>
        {data?.map((song, index) => {
          return (
            <SongBar 
              key={`${song.key}-${artistId}`}
              song={song}
              index={index}
              artistId={artistId}
              isPlaying={isPlaying}
              activeSong={activeSong}
              onPauseClick={onPauseClick}
              onPlayClick={onPlayClick}
            />
          )
        })}
      </div>
    </div>
    ); 
};

export default RelatedSongs;
