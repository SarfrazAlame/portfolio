import React from 'react'
import DevImg from './DevImg'
import { Calendar, HomeIcon, MailIcon, PhoneCall, User2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { RiJavascriptFill } from 'react-icons/ri';
import { BiLogoTypescript, BiLogoPostgresql, BiLogoTailwindCss } from 'react-icons/bi'
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"
import { TbBrandRedux } from "react-icons/tb"
import { SiCss3, SiPrisma, SiMongodb } from "react-icons/si"


const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Sarfraz Ashrafi'
    },
    {
        icon: <PhoneCall size={20} />,
        text: '917858016352'
    },
    {
        icon: <MailIcon size={20} />,
        text: 'sarfrazk7858@gmail.com'
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 12 Mar, 2003'
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Gopalganj, Bihar, India'
    },
]

const skillData = [
    {
        name: 'HTML, CSS, Javascript'
    },
    {
        name: 'Typescript, Reactjs'
    },
    {
        name: 'Node, Express, mongoDb'
    },
    {
        name: 'Nextjs, Recoil, Zustand'
    },
    {
        name: 'Postgresql, PrismaORM'
    },
    {
        name: "Web Socket, Redis"
    },
    {
        name: "WebRTC"
    },
    {
        name: 'Git, Github'
    },
]

const techSkill = [
    {
        icon: <FaHtml5 />
    },
    {
        icon: <SiCss3 />
    },
    {
        icon: <BiLogoTypescript />
    },
    {
        icon: <RiJavascriptFill />
    },
    {
        icon: <FaNodeJs />
    },
    {
        icon: <SiMongodb />
    },
    {
        icon: <FaReact />
    },
    {
        icon: <BiLogoTailwindCss />
    },
    {
        icon: <RiNextjsFill />
    },
    {
        icon: <SiPrisma />
    },
    {
        icon: <TbBrandRedux />
    },
    {
        icon: <BiLogoPostgresql />
    },
]

const About = () => {
    return (
        <section className='xl:h-[840px] pb-12 xl:py-24'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-gray-700  dark:text-gray-100 text-ceter mx-auto text-center text-xl lg:text-2xl font-bold'>About me</h2>
            </div>
            <div className='flex lg:mx-40 mx-0'>
                <div className='hidden xl:flex flex-1 relative'>
                    <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
                        imgSrc='/about/developer.png'
                    />
                </div>

                <div className='flex-1'>
                    <Tabs defaultValue='personal'>
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto dark:text-slate-200' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto dark:text-slate-200' value='qualifications'>Tech Stack</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto dark:text-slate-200' value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        <div className='text-lg mt-12 xl:mt-8 flex items-center justify-center'>
                            <TabsContent value='personal'>
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 text-gray-700 dark:text-slate-300'>Unmatched Service Quality for Over 10 Years</h3>
                                    <p className='text-sm max-w-xl my-2 text-slate-700 dark:text-slate-300'>
                                        I specialize in crafting intuitive websites with cutting-edge
                                        technology, delivering dynamic and engaging user experience
                                    </p>

                                    <div className='grid items-center justify-center xl:grid-cols-2 gap-4 mb-12 mt-4'>
                                        {infoData.map((item, index) => (
                                            <div key={index} className='flex items-center gap-2'>
                                                <div className='text-primary'>{item.icon}</div>
                                                <div className='text-[16px]'>{item.text}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <div className='text-[16px] font-semibold text-gray-700'>Language Skill</div>
                                        <div className='border-b border-border border-orange-200'></div>
                                        <div className=' text-[15px]'>English, Hindi(Native)</div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value='qualifications'>
                                <div>
                                    <h3 className='h3 text-gray-700 '>My Awesome Journey</h3>
                                    <div className='border-b border-border mb-4 mt-2 border-orange-200'></div>
                                    <div className='grid grid-cols-3 gap-y-3'>
                                        {
                                            techSkill.map((item, index) => {
                                                return (
                                                    <div key={index} >
                                                        <p className='lg:text-4xl text-2xl '> {item.icon}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value='skills'>
                                <div className='text-center xl:text-left mb-12'>
                                    <h3 className='h3 text-gray-700 '>Technology i have mastery in</h3>
                                    <div className='border-b border-border mb-4 mt-2 border-orange-200'></div>
                                    <div>
                                        {skillData.map((data, index) => (
                                            <div key={index}>
                                                <p className='text-[16px] my-1'><span className='mr-2 text-orange-400 -mt-1'>*</span>{data.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

export default About