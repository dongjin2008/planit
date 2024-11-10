"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import illust from '@/public/Notebook illustration.svg'
import { Play, Pause, RotateCcw, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useStopwatch } from 'react-timer-hook'


const Timer = () => {
  const [savedTime, setSavedTime] = useState({ hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    console.log(savedTime)
  }, [savedTime])
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  const manageToggle = () => {
    if (isRunning) {
      pause()
    } else {
      start()
    }
  }

  const manageSave = () => {
    if (isRunning) {
      pause()
    }

    // Calculate the new saved time by adding current hours, minutes, and seconds
    const newSeconds = savedTime.seconds + seconds;
    const newMinutes = savedTime.minutes + minutes + Math.floor(newSeconds / 60);
    const newHours = savedTime.hours + hours + Math.floor(newMinutes / 60);

    setSavedTime({
      hours: newHours,
      minutes: newMinutes % 60,
      seconds: newSeconds % 60,
    });

    reset(new Date(), false)
  }

  const manageReset = () => {
    reset(new Date(), false)
  }


  return (
    <main className='w-screen h-screen bg-background flex flex-col items-center justify-center  align-middle'>
      <Image alt='illust'  src={illust}/>
      <p className='text-8xl'>
        {String(hours).padStart(2, '0')}:
        {String(minutes).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}
      </p>
      <div className='flex gap-2'>
        <Button onClick={manageSave}><Save /></Button>
        <Button onClick={manageToggle}>{isRunning ? <Pause /> : <Play />}</Button>
        <Button onClick={manageReset}><RotateCcw /></Button>
      </div>
    </main>
  )
}

export default Timer