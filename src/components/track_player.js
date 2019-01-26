import React from 'react'
import AudioPlayer from 'react-modular-audio-player';
import play_arrow from '../images/icons/play_arrow.png'
import pause from '../images/icons/pause.png'
import forward from '../images/icons/forward.png'
import rewind from '../images/icons/rewind.png'

  const tracks = [
      {
          src: 'http://nebula.wsimg.com/788d768a30ec760f31e1cdc18418d0d8?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio',
          title: 'In The City'
      },
      {
          src: 'http://nebula.wsimg.com/ebddcff358e271a11c11063583e84812?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio',
          title: 'Rufus'
      }
  ]

  const rearrangePlayer = [
    {
        className: "audio-container",
        style: { fontFamily: 'Montserrat', fontSize: '0.9rem', alignItems: 'center', justifyContent: 'space-between'},
        innerComponents: [
            {
                type: 'name',
                style: {width: "100px"}
             },
            { 
                type: 'rewind',
                style: {width: "fit-content"}
            },
            { 
                type: 'play',
                style: {width: "fit-content"}
             },
            { 
                type: 'forward',
                style: {width: "fit-content"}
             },
            { 
                type: 'time',
                style: {width: "100px"}
             }
        ]
    }
  ]

export default () => {
    return (
        <div className='audio-container'>
            <AudioPlayer 
                audioFiles={tracks}
                fontColor={'white'}
                fontSize={'1em'}
                iconSize={'2em'}
                playIcon={play_arrow}
                playHoverIcon={play_arrow}
                pauseIcon={pause}
                pauseHoverIcon={pause}
                forwardIcon={forward}
                forwardHoverIcon={forward}
                rewindIcon={rewind}
                rewindHoverIcon={rewind}
                hideSeeking
                hideLoop
                rearrange={rearrangePlayer}
            />
        </div>
    )
}
