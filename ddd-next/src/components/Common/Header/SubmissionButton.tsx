import UpdateIcon from './svgs/update.svg'

export default function SubmissionButton() {
  return (
    <a className='ml-2'>
      <div
        style={{
          background: '#fb7299',
          color: '#fff',
          height: '34px',
          width: '90px',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          display: 'flex',
          cursor: 'pointer',
          fontSize: '14px',
          fontFamily:
            'PingFang SC,HarmonyOS_Medium,Helvetica Neue,Microsoft YaHei,sans-serif',
          fontWeight: 500,
        }}
      >
        <UpdateIcon
          style={{
            fontSize: '18px',
            marginRight: '5px',
          }}
        />
        <span>投稿</span>
      </div>
    </a>
  )
}
