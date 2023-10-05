import { useState } from "react"
import Me from '../../assets/me.jpg'

function App({ title }) {
    const [users, setUsers] = useState([
        {
            name: 'Test user1',
            username: 'testuser1'
        },
        {
            name: 'Test user2',
            username: 'testuser2'
        },
        {
            name: 'test user 3',
            username: 'testuser3'
        }
    ])
    return (
        <div id='users' className='w-full bg-[#16181C] rounded-2xl pt-3' >
            <span className='font-bold text-xl px-4' > {title} </span>

            {
                users.map(({ name, username }, index) => {
                    return (
                        <div key={index} className='flex items-center justify-start gap-2 px-4 py-3 mt-2 w-full cursor-pointer transition-all hover:bg-[#080808] '>

                            <img src={Me} className="!h-[48px] !w-[48px] rounded-full self-start" alt="" />
                            <div className='flex flex-col text-left' >
                                <span className='text-sm font-bold hover:underline' > { name } </span>
                                <span className='text-sm text-[#54595D] ' >@{ username }</span>
                            </div>
                                <div className="ml-auto" >
                                        <button  className='w-[87px] h-[32px] rounded-3xl bg-white flex items-center justify-center transition-all hover:bg-[#EFF3F4] ' >
                                                <span className='text-[#0F1419] text-sm font-semibold ' > Follow </span>
                                        </button>
                                </div>

                        </div >
                    )
                })
            }


            <div className='flex items-start flex-col px-4 py-3 mt-2 w-full cursor-pointer transition-all hover:bg-[#1D1F23] rounded-b-2xl' >
                <span className='text-[#1d9bf0] ' >Show More</span>
            </div>

        </div>
    )
}

export default App