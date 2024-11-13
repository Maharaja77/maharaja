import eco from '../assets/eco.png';
import silent from '../assets/silent.png';
import pro from '../assets/pro.png';


export default function Project(){

    const config ={
        projects:[
            {
                image: eco,
                description:'simple ecommerce website using MERN STACK.',
                link:'https://github.com/Maharaja77',
            },
            {
                image: silent,
                description:'silent mobile location using GPS.',
                link:'https://github.com/Maharaja77',
            },
            {
                image: pro,
                description:'I can develop many project go the github pages.',
                link:'https://github.com/Maharaja77',
            },
            
        ]
    }

    return <section id='project' className="flex flex-col py-5 px-5 justify-center">
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
            <h1 className='text-4xl  text-green-700 border-5 mb-5 w-[170px] font-bold'>Projects</h1>
            <p>These are some of my best projects. I have build the React, MERN, JAVA, PHP, PYTHON</p>
        </div>
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            {config.projects.map((project)=>(
                <a href={project.link}>
                <div className='relative'>
            <img className='h-[200px] w-[500px]' src={project.image}/>
            <div  className='project-desc'>
            <p className='text-center px-5 py-5'>{project.description}</p>
            </div>
            </div>
            </a>
        ))}
            
          
        </div>
        </div>
    </section>
}