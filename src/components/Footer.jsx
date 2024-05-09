import React from 'react'

function Footer() {
  return (
    <div>
    <div className="flex-col flex-wrap h-[500px] space-y-1">
        <div className="w-full h-[400px] flex-wrap md:flex space-y-10 md:space-y-0 justify-between p-10 md:p-24">
            <div  className="flex-col space-y-5 md:w-[25%] mb-10">
                <a href="#" className="flex items-center">
                    <span className="self-center text-2xl font-bold font-mono">Speed Coder <span className="text-blue-600">Parth</span></span>
                </a>
    
                <div>
                    <p className="text-lg md:text-xl text-left font-mono font-light">
                        On a Mission to Build India's biggest Coding Community!
                    </p>
                </div>
            </div>
    
            <div className="px-md:w-[25%] flex-col space-y-5">
                <h1 className="self-center text-xl font-bold font-mono">Helpful Links</h1>
                <ul className="flex-col space-y-2 pt-5 list-outside">
                    <li>
                        <a href="courses.html" className="self-center text-lg font-light font-mono flex space-x-2">
                            <svg className="flex-shrink-0 mt-1 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Courses</span></a>
                    </li>
    
                    <li>
                        <a href="courses.html" className="self-center text-lg font-light font-mono flex space-x-2">
                            <svg className="flex-shrink-0 mt-1 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Privacy Policy</span></a>
                    </li>
    
                    <li>
                        <a href="courses.html" className="self-center text-lg font-light font-mono flex space-x-2">
                            <svg className="flex-shrink-0 mt-1 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Terms & Conditions</span></a>
                    </li>
    
                </ul>
            </div>
    
            <div className="px-md:w-[25%] flex-col space-y-5 mb-32">
                <h1 className="self-center text-xl font-bold font-mono">Reach out!</h1>
                <p className="text-lg font-light font-mono">&#x2709; parthasdeyofficial@gmail.com</p>
            </div>
    
            <div className="px-md:w-[25%] flex-col space-y-5 mb-32">
                <h1 className="self-center text-xl font-bold font-mono">Connections</h1>
                <div>
                    <ul>
                        <li>
                            <a href="https://instagram.com/speedcoderparth?igshid=ZGUzMzM3NWJiOQ==" className="text-lg font-light font-mono">Instagram</a>
                        </li>
    
                        <li>
                            <a href="https://www.youtube.com/@speedcoderparth" className="text-lg font-light font-mono">YouTube</a>
                        </li>
    
                        <li>
                            <a href="#" className="text-lg font-light font-mono">LinkedIn</a>
                        </li>
    
                        <li>
                            <a href="#" className="text-lg font-light font-mono">GitHub</a>
                        </li>
    
                        <li>
                            <a href="https://t.me/speedcoderparth" className="text-lg font-light font-mono">Telegram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
        <div className="w-full mt-[200px] h-[100px] flex justify-center">
            <h1 className="text-lg text-transparent md:text-gray-800 font-light font-mono">Copyright &copy 2023. All Rights Reserved.</h1>
        </div>
    </div>
    </div>
  )
}

export default Footer