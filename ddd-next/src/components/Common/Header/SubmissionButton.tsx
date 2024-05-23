'use client'
import UpdateIcon from './svgs/update.svg'
import './style.css'
import React, { useState, useRef, useEffect } from 'react'
import { submissionList } from './submissionList'

export default function SubmissionButton() {
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
    <div className='ml-2 relative'>
      <a>
        <div
          className='submission-button'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <UpdateIcon className='update-icon' />
          <span>投稿</span>
        </div>
      </a>
      {isPopoverVisible && (
        <div
          className={`popover-box ${isHovered ? 'show' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className='popover-content'>
            <div className='popover-content-innner'>
              {submissionList.map((item, index) => (
                <a
                  key={index}
                  className='upload-item'
                >
                  <item.icon className='item-icon'></item.icon>
                  <div className='item-title'>{item.title}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
