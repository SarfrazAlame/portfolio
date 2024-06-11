import React from 'react'

const page = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <div>
                    <div className='flex flex-col justify-center'>
                        <div className='flex items-center gap-x-4 text-primary text-lg mb-4 '>
                            <span className='w-[30px] h-[2px] bg-primary'></span>
                            <div>Say hello</div>
                        </div>
                    </div>
                </div>
                <div>
                    Info text & form
                </div>
            </div>
        </section>
    )
}

export default page
