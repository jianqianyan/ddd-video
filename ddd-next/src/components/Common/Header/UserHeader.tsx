'use client'
import Image from 'next/image'
import './userheaderStyle.css'
import { useState, useRef, useEffect } from 'react'

export default function ImagePage() {
  const [isHovered, setIsHovered] = useState(false)
  const [isPopoverVisible, setIsPopoverVisible] = useState(false)

  const timer = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timer) {
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
    <div>
      <Image
        className='avatar-img'
        src='/defaultAvatar.jpg'
        alt='头像'
        width={38}
        height={38}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  )
}
