import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy';
import context_video from '../assets/context-video-1.mp4';

import  style  from '../css/VideoPlayer.module.css'
import Controls from './Controls';

function VideoPlayer() {
    const [mute , setMute] = useState(false);
    const [volumeValue , setVolumeValue ] = useState(0.5);

    useEffect(()=>{
        const videoUrl = 'http://localhost:3000/static/media/context-video-1.26ac643905a4c6611db7.mp4';

        // Fetch the video file
        fetch(videoUrl)
          .then(response => response.blob())
          .then(blob => {
            const blobUrl = URL.createObjectURL(blob);
        
            console.log(blobUrl); 
            
            URL.revokeObjectURL(blobUrl);
          })
          .catch(error => {
            console.error('Error fetching the video:', error);
          });
    },[]);
    return (
        <>
            <div className={`${style.video_player}`}>
                <ReactPlayer         
                    url={context_video}
                    muted={mute}
                    volume={volumeValue}
                    config={{
                        file: {
                            attributes: {
                                controlsList: 'nodownload',
                                id : 'video_1'
                            }
                        }
                    }} />
            </div>
            <Controls id='video_1' muteVideo={setMute} volumeVideo={setVolumeValue}  />
        </>
    )
}

export default VideoPlayer