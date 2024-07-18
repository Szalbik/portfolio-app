import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about Damian',
}

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">About Me</h1>
        </div>
      </div>
      <hr className="my-8"/>
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex-col gap-2">
          <Avatar className='h-48 w-48'>
            <AvatarImage src="/avatar_right.png" alt={siteConfig.author} />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
          <h2 className='text-2xl font-bold text-center break-words'>{siteConfig.author}</h2>
          <p className='text-muted-foreground text-center break-words'>Software Engineer</p>
        </div>
        <p className='text-muted-foreground text-lg py-4'>
          I'm Damian, a passionate web developer with extensive experience in Ruby on Rails and React. In my free time, I enjoy staying active by riding my bike, going to the gym, and snowboarding in the winter. I also love sightseeing and exploring new places.

          With over five years of experience in web development, I've worked on a variety of projects ranging from small applications to large-scale, modular microservice architectures. Each project has taught me something new and has allowed me to continually expand my knowledge and skills.

          Which I'd like to share with you. I'm always looking for new challenges and opportunities to grow as a developer.

          In addition to my professional work, I am also developing my own applications with the aspiration of turning one into a startup.

          I consider myself a software engineer dedicated to helping clients build beautiful and functional software, rather than just delivering code.
        </p>
      </div>
    </div>
  )
}
