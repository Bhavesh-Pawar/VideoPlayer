import React from 'react'
import { Button } from 'react-bootstrap'
import style from '../css/Control.module.css'
function Controls(props) {
  function pauseVideo() {
    let video = document.getElementById(props.id);
    video.pause();
  }

  function playVideo() {
    let video = document.getElementById(props.id);
    video.play();
  }

  function handleVolume(value) {
    props.volumeVideo(value / 100);
  }

  return (
    <>
      <div className='container mt-3'>
        <Button id={`${props.id}_play_btn`} variant='primary' onClick={() => playVideo()}>Play</Button>
        <Button id={`${props.id}_pause_btn`} variant='warning ms-2' onClick={() => pauseVideo()}>Pause</Button>
        <Button id={`${props.id}_mute_btn`} variant='danger ms-2' onClick={() => props.muteVideo(true)}>Mute</Button>
        <Button id={`${props.id}_unmute_btn`} variant='success ms-2' onClick={() => props.muteVideo(false)}>UnMute</Button>
        <input className={`${style.volume_controller}`} type='range' onChange={(e) => handleVolume(e.target.value)} />
      </div>

    </>
  )
}

export default Controls