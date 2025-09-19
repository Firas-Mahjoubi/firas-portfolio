"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaAngular,
} from "react-icons/fa";

import { 
    SiTailwindcss, 
    SiNextdotjs, 
    SiMysql,
    SiSpring,        // Changed from SiSpringboot
    SiDotnet,        // Changed from SiDotNet
    SiPython,
    SiPostgresql,
    SiDocker,
    SiGit
} from "react-icons/si";

// about data
const about = {
    title: 'About Me',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Firas Mahjoubi"
        },
        {
            fieldName: "Phone",
            fieldValue: "+216 29 369 909"
        },
        {
            fieldName: "Experience",
            fieldValue: "2 Years"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Tunisian"
        },
        {
            fieldName: "Email",
            fieldValue: "mahjoubi.firas@esprit.tn"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "Arabic, French, English"
        }
    ]
};
// experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: 
    "I’ve contributed to multiple real-world projects, including AI-powered web platforms and microservice-based applications.",
    items:[
        {
            company: "Sharing Technologies",
            position: "Full Stack Developer",
            duration: "June 2025 - August 2025",
        },
        {
            company: "University Project",
            position: "Developer – AI-Powered Web Platform for Football Academies",
            duration: "January 2025 - June 2025",
        },
        {
            company: "OMINET",
            position: "Full Stack Developer",
            duration: "July 2024 - August 2024",
        },
        {
            company: "University Project",
            position: "Developer – University Club Management System",
            duration: "January 2024 - June 2024",
        },
        {
            company: "S.E.T.I",
            position: "Intern– Final Year Project (PFE)",
            duration: "February 2023 - July 2023",
        },
    ],
};

//education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description:
    "I’ve built a strong foundation in computer science and software engineering through rigorous academic training. My education has been enriched by real-world development experiences and advanced project work.",
    items: [
        {
            institution: "ESPRIT – Private School of Engineering and Technology",
            degree: "Engineering Degree in Computer Science",
            duration: "2023 - 2026",
        },
        {
            institution: " Faculty of Sciences of Gabès",
            degree: "Bachelor’s Degree in Electrical, Electronic, and Automation",
            duration: "2019 - 2023"
        },

    ],

};
// skills data
const skills = {
    title: 'My Skills',
    description: 
    "I possess a diverse skill set in software development, including expertise in full-stack web technologies, AI integration, and microservices architecture.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <FaAngular />,
            name: "Angular",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <SiSpring />,
            name: "Spring Boot",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <SiDotnet />,
            name: ".NET",
        },
        {
            icon: <SiPython />,
            name: "Python",
        },
        {
            icon: <SiPostgresql />,
            name: "PostgreSQL",
        },
        {
            icon: <SiMysql />,
            name: "MySQL",
        },
        {
            icon: <SiDocker />,
            name: "Docker",
        },
        {
            icon: <SiGit />,
            name: "Git",
        },
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";



const Resume = () => {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                defaultValue="experience"
                className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
                    gap-6 p-1 bg-[#232329]">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    {/* content */ }
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                            <ScrollArea className="h-[400px] w-full pr-4">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-4">
                                    {experience.items.map((item,index) => {
                                        return (
                                            <li key={index} className="bg-[#232329] h-auto py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3">
                                                <span className="text-accent text-sm">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] text-center lg:text-left leading-tight">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        );
                                    } )}
                                </ul>
                            </ScrollArea>
                                </div>
                        </TabsContent>







                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px] w-full pr-4">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-4">
                                        {education.items.map((item,index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-auto py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3">
                                                    <span className="text-accent text-sm">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] text-center lg:text-left leading-tight">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                <ScrollArea className="h-[400px] w-full pr-4">
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-4">
                                        {skills.skillList.map((skill, index) => {
                                            return (
                                                <div key={index} className="flex flex-col items-center gap-2 group">
                                                    <div className="relative w-14 h-14 flex items-center justify-center bg-[#232329] rounded-full
                                                    group-hover:bg-accent/20 transition-all duration-300">
                                                        <div className="text-3xl text-accent">{skill.icon}</div>
                                                    </div>
                                                    <p className="text-center">{skill.name}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* about */}
                        <TabsContent value="about" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <div className="max-w-[800px] mx-auto xl:mx-0">
                                    <p className="text-white/60 mb-8 leading-relaxed">
                                        I'm Firas Mahjoubi, a software engineer with strong expertise in building full-stack web applications and AI-integrated platforms. I have hands-on experience developing microservices, secure APIs, and modern frontend interfaces. My current focus is on intelligent task automation and AI-driven project planning tools designed to enhance team productivity.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 text-left">
                                        <div className="flex justify-between items-center">
                                            <div className="font-medium">Name:</div>
                                            <div className="text-white/60">{about.info[0].fieldValue}</div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="font-medium">Phone:</div>
                                            <div className="text-white/60">{about.info[1].fieldValue}</div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="font-medium">Email:</div>
                                            <div className="text-white/60">{about.info[4].fieldValue}</div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="font-medium">Location:</div>
                                            <div className="text-white/60">{about.info[3].fieldValue}</div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="font-medium">Freelance:</div>
                                            <div className="text-white/60">{about.info[5].fieldValue}</div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="font-medium">Languages:</div>
                                            <div className="text-white/60">{about.info[6].fieldValue}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>


                    </div>



                </Tabs>
                </div>
                </motion.div>
    );
};

export default Resume;