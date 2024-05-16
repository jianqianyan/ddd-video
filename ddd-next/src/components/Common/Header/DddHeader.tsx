import HeaderItem from "./HeaderItem"
export default function DddHeader() {
  const leftEntryList = [
    {
      title: 'logo'
    },
    {
      title: '番剧'
    },
    {
      title: '直播'
    },
    {
      title: '游戏中心'
    },
    {
      title: '会员购'
    },
    {
      title: '漫画'
    },
    {
      title: '赛事'
    },
    {
      title: 'msi'
    },
    {
      title: '下载客户端'
    },
  ]
  const rightEntryList = [
    {
      title: '大会员'
    },
    {
      title: '消息'
    },
    {
      title: '动态'
    },
    {
      title: '收藏'
    },
    {
      title: '历史'
    },
    {
      title: '创作中心'
    },
  ]
  return (
    <div className="w-100 h-16 flex px-6 items-center">
      <div className="flex justify-start flex-1" >
        {leftEntryList.map((item, index) => (<HeaderItem key={index + 'left-entry'} className="mr-4">{item.title}</HeaderItem>))}
      </div>
      <div className="w-96"></div>
      <div className="flex flex-1 justify-end">
        {rightEntryList.map((item, index) => (<HeaderItem key={index + 'right-entry'}>{item.title}</HeaderItem>))}
      </div>
    </div>
  )
}