import Resumei from '../assets/Resumei.png'


export default function Resume(){
    const config = {
        link:'https://drive.google.com/file/d/1SGgtaftKPVgnIZ7wS0-wNT1H1bzg5MK8/view?usp=drivesdk'
    }
    return <section id='resume' className='flex flex-col md:flex-row bg-primary px-5'>
        <div className='md:w-1/2 py-5 flex md:justify-end'>
            <img  className='w-[300px]' src={Resumei}/>
        </div>
            <div className=' md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl text-white border-b-4 mb-5 w-[140px] font-bold'>Resume </h1>
                <p className='pb-5'>You can view my Resume <a className='btn text-white' href={config.link} > Download</a></p>
            </div>
            </div>
    </section>
}