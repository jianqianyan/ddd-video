'use client'
import Image from 'next/image'
import './userheaderStyle.css'
import { useState, useRef, useEffect } from 'react'

export default function ImagePage() {
  const [isHovered, setIsHovered] = useState(false)
  const [isPopoverVisible, setIsPopoverVisible] = useState(false)

  const timer = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    setIsPopoverVisible(true)
    setTimeout(() => {
      setIsHovered(true)
    }, 10)
  }

  const handleMouseLeave = () => {
    timer.current = setTimeout(() => {
      setIsHovered(false)
      setTimeout(() => {
        setIsPopoverVisible(false)
      }, 300)
    }, 300)
  }

  useEffect(() => {
    if (isHovered) {
      if (timer.current) {
        clearTimeout(timer.current)
      }
      setIsPopoverVisible(true)
    }
  }, [isHovered])

  return (
    <div
      className={`header-avatar ${
        isHovered ? 'mini-avatar--large' : 'mini-avatar--small'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a className='header-entry-mini'>
        <Image
          className='avatar-img'
          src='/defaultAvatar.jpg'
          alt='头像'
          width={38}
          height={38}
        />
      </a>
      <a className='header-entry-avatar'>
        <Image
          className='avatar-img'
          src='/defaultAvatar.jpg'
          alt='头像'
          width={82}
          height={82}
        />
      </a>
    </div>
  )
}
