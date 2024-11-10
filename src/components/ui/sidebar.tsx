import { Home, Clock, Folder, BarChart3} from 'lucide-react'
import { Separator } from './separator'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

export const Sidebar = () => {
  return (
      <div className='flex w-72 h-screen bg-background border-border'>
        <div className='flex flex-col w-72'>
          <div className='flex items-center h-20'>
            <Avatar className='mx-auto'>
              <AvatarImage src='https://avatars.githubusercontent.com/u/782156?v=4' alt='avatar' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <Separator orientation="horizontal" className='bg-primary'/>
          <div className='flex flex-col'>
            <div className='group w-full h-14 flex hover:bg-primary hover:rounded-b-sm hover:border-border'>
              <a href="/" className='flex pl-8 items-center my-auto h-9 gap-2 group-hover:text-primary-foreground text-primary-foreground'><Home size={32}/> <span className='text-2xl'>Home</span></a>
            </div>
            <div className='group w-full h-14 flex hover:bg-primary hover:rounded-sm'>
              <a href="timer" className='flex pl-8 items-center my-auto h-9 gap-2 group-hover:text-primary-foreground text-primary-foreground'><Clock size={32}/> <span className='text-2xl '>Timer</span></a>
            </div>
            <div className='group w-full h-14 flex hover:bg-primary hover:rounded-sm'>
              <a href="resources" className='flex pl-8 items-center my-auto h-9 gap-2 group-hover:text-primary-foreground text-primary-foreground'><Folder size={32}/> <span className='text-2xl '>Resources</span></a>
            </div>
            <div className='group w-full h-14 flex hover:bg-primary hover:rounded-sm'>
              <a href="statistics" className='flex pl-8 items-center my-auto h-9 gap-2 group-hover:text-primary-foreground text-primary-foreground'><BarChart3 size={32}/> <span className='text-2xl '>Statistics</span></a>
            </div>
          </div>
        </div>
        <Separator orientation="vertical" className='bg-primary'/>
      </div>
  )
}
