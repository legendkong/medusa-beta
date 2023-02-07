export function Card() {
  return (
    <div className='min-h-screen bg-inherit flex relative overflow-hidden sm:py-12 justify-center mt-20'>
      <div className='max-w-7xl mx-auto '>
        <div className='relative group'>
          <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-500 group-hover:duration-200'></div>
          <div className='relative px-10 py-10 bg-white ring-1 ring-gray-900/5 rounded-md leading-none flex items-top justify-start space-x-6 bg-white bg-opacity-70 backdrop-blur-xl rounded drop-shadow-lg'>
            {/* <svg
              className='w-8 h-8 text-purple-600'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='1.5'
                d='M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z'
              ></path>
            </svg> */}
            <div className='space-y-2'>
              <p className='text-slate-900 font-extrabold'>REST API</p>
              {/* <a
                href='https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background'
                className='block text-indigo-400 group-hover:text-slate-800 transition duration-200'
                target='_blank'
              >
                Read Article →
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
