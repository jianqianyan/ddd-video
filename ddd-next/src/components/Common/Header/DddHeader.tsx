import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { leftEntryList, rightEntryList } from "./enrtyList"
export default function DddHeader() {
  return (
    <div className="w-100 h-16 flex px-6 items-center min-w-[1100px]">
      <div className="flex justify-start flex-1" >
        {leftEntryList.map((item, index) => (<HeaderItem key={index + 'left-entry'} className="mr-4">{item.title}</HeaderItem>))}
      </div>
      <div className="max-w-96"></div>
      <div className="flex flex-1 justify-end">
        {rightEntryList.map((item, index) => {
          return (
            <HeaderItem key={index + 'right-entry'} className="flex flex-col justify-center items-center ml-4">
              <Image
                src={item.icon}
                width={20}
                height={20}
                alt={item.title}
              />
              {item.title}
            </HeaderItem>
          )
        })}
        <button>投稿</button>
      </div>
    </div>
  )
}