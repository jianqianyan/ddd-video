import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { leftEntryList, rightEntryList } from "./enrtyList"
export default function DddHeader() {
  return (
    <div className="w-100 h-16 flex px-6 items-center">
      <div className="flex justify-start flex-1" >
        {leftEntryList.map((item, index) => (<HeaderItem key={index + 'left-entry'} className="mr-4">{item.title}</HeaderItem>))}
      </div>
      <div className="w-96"></div>
      <div className="flex flex-1 justify-end">
        {rightEntryList.map((item, index) => {
          return (<HeaderItem key={index + 'right-entry'}>
            <Image
              src={item.icon} // 确保这里的路径正确
              width={20} // 根据实际需要设置
              height={20} // 根据实际需要设置
              alt={item.title} // 为图像提供替代文本
            />
            {item.title}
          </HeaderItem>)
        })}

      </div>
    </div>
  )
}