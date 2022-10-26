import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const PlayPause = ({ activeSong, isPlaying, song, onPause, onPlay }) => {
  return (
    isPlaying && activeSong?.title === song.title 
    ? <FaPauseCircle className='text-gray-300' size={35} onClick={onPause}/>
    : <FaPlayCircle className='text-gray-300' size={35} onClick={onPlay}/>
  )
}

export default PlayPause;
