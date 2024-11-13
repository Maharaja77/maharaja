import Developer from '../assets/Developer.png'; 
import Typewriter from 'typewriter-effect';
import { AiOutlineGithub,AiOutlineInstagram,AiOutlineYoutube,AiOutlineLinkedin } from "react-icons/ai";

export default function Hero(){
    return <section  className='flex flex-col md:flex-row  px-5 py-32 justify-center'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 >
        <h1 style={{ paddingBottom: 15 }} className=" text-4xl">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className=" text-4xl">
                I'M
                <strong className="text-4xl"> Maharaja R</strong>
              </h1>
<br/>

        <Typewriter className='text-4xl'
      options={{
        strings: [
          "Software Developer",
          "Web Developer",
          "Full Stack Developer",
          "MERN Stack Developer",
          "App Developer",
          "Youtuber",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </h1>
<br/>
    

    <div className='py-10 flex'>
        <a href='https://github.com/Maharaja77' className='pr-5 hover:text-green-500' ><AiOutlineGithub size={40}/></a>
        <a href='https://www.instagram.com/maharaja_17_' className='pr-5 hover:text-green-500'><AiOutlineInstagram size={40}/></a>
        <a href='https://youtube.com/@tech_for_tech_world' className='pr-5 hover:text-green-500'><AiOutlineYoutube size={40}/></a>
        <a href='https://www.linkedin.com/in/maharajaofficial' className='pr-5 hover:text-green-500'><AiOutlineLinkedin size={40}/></a>
    </div>
    </div>

        <img  className='md:w-1/4' src={Developer}/>
        
    </section>
}