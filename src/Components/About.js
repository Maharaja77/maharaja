import Aboutimg from '../assets/Aboutimg.png'

export default function About(){
    return <section id='about'className='flex flex-col md:flex-row bg-primary px-5 '>
        <div className='md:w-1/2 py-5'>
            <img src={Aboutimg}/>
        </div>
            <div className=' md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl text-white border-b-4 mb-5 w-[170px] font-bold'>About Me </h1>
                <p className='text-white' style={{ textAlign: 'justify'}}>
                ✍Hi Everyone, I am Maharaja 
            from  Tamil Nadu, India.
            <br />
            ✍I am fresher Software developer.
            <br />
            ✍I have completed M.Sc(cs) degree in PKN Arts and Science College.<br/>
                     
            ✍I am proficient in Software developement skills like C, C++, Java, JavaScript, HTML, CSS, React.js, SQL, MONGODB.
            <br />
            
          </p>
          <br/>
          <ul className='textAlign: text-justify'>
          <h1 className='  font-bold'>Apart from coding, some other activities that I love to do!</h1>
            <li >
               ! Playing Games
            </li>
            <li >
              ! Writing Tech Blogs
            </li>
            <li >
               ! Travelling

            </li>
        

            
          </ul>

<br/>
<h1 className=' text-white  mb-5 w-[170px] font-bold'>🔥Never Give up</h1>
                </div>
            </div>
    </section>
}