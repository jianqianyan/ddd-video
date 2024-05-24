import Image from 'next/image'
import HeaderItem from './HeaderItem'
import { leftEntryList, rightEntryList } from './enrtyList'
import SubmissionButton from './SubmissionButton'
import './headerStyles.css'
export default function DddHeader() {
  return (
    <div className='ddd-header'>
      <div className='flex justify-start flex-1'>
        {leftEntryList.map((item, index) => (
          <HeaderItem
            key={index + 'left-entry'}
            className='mr-4'
          >
            <span>{item.title}</span>
          </HeaderItem>
        ))}
      </div>
      <div className='max-w-96'></div>
      <div className='flex flex-1 justify-end'>
        {rightEntryList.map((item, index) => {
          return (
            <HeaderItem
              key={index + 'right-entry'}
              className='right-entry-item'
            >
              <item.icon className='right-entry-icon' />
              <span className='right-entry-text'>{item.title}</span>
            </HeaderItem>
          )
        })}
        <SubmissionButton />
      </div>
    </div>
  )
}
