const WhyChooseUs = () => {
  return (
    <section className='w-full h-full bg-white my-10 px-5 md:px-10'>
      <div className='grid grid-cols-12 py-10 w-full h-full'>
        <div className='grid col-span-12 md:col-span-8 px-2 md:px-10 w-full h-full'>
          <span className='text-[#0d99e5]'>Why choose us</span>
          <h1 className='text-[#112164] text-2xl md:text-3xl lg:text-4xl font-bold'>
            All your favorite TV for a better value and no hidden fees.
          </h1>
          <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 gap-3 py-5'>
            <div className='w-full h-full'>
              <p className='py-2 text-[#6c757d] px-2 font-normal font-sans text-sm pb-5'>
                Streaming TV gives you instant access to all your favorite Live
                channels and OnDemand video at a low price. Best of all, there
                are no hidden fees, equipment rentals or contracts. Stream all
                of your favorite shows, surf the web.
              </p>
              <div
                className='w-full h-72'
                style={{
                  background: `url('/tvshow2.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </div>
            <div className='w-full h-full'>
              <p className='py-2 text-[#6c757d] px-2 font-normal font-sans text-sm pb-5'>
                We’ve streamlined our plans to give you the fastest internet
                available at your address for one low monthly price. TV you
                want, when you want it. Enjoy your favorite shows and movies on
                your own schedule.
              </p>
              <div
                className='w-full h-72'
                style={{
                  background: `url('/tvshow.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className='grid col-span-12 md:col-span-4 w-full h-full md:h-48'>
          {/* icon-1  */}
          <section className='flex justify-evenly w-full h-48 mb-2'>
            <div className='flex w-full h-full px-10 items-center gap-5 bg-[#F5F5F5] choose_us border-r-8 hover:border-[#1F3BB1]  transition-all duration-100'>
              <div className='chooseUs_bg px-5 flex justify-center items-center rounded-full w-24 h-24'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  id='Layer_1'
                  height='50'
                  viewBox='0 0 480.156 480.156'
                  width='50'
                  fill='#000000'
                >
                  <path d='m400.737 372.562c-9.445 9.447-2.665 25.606 10.607 25.606 13.41 0 19.969-16.243 10.607-25.606-5.861-5.862-15.35-5.864-21.214 0zm47.377-26.163c3.125 3.124 3.125 8.189 0 11.313-3.124 3.124-8.189 3.124-11.313 0-14.07-14.069-36.841-14.071-50.912 0-1.562 1.562-3.609 2.343-5.657 2.343-7.062 0-10.712-8.602-5.657-13.657 20.321-20.321 53.215-20.324 73.539.001zm29.699-18.385c-3.124 3.124-8.189 3.124-11.313 0-30.483-30.483-79.822-30.487-110.309 0-3.125 3.125-8.189 3.124-11.313 0-3.125-3.124-3.125-8.189 0-11.313 36.736-36.737 96.196-36.74 132.936 0 3.123 3.124 3.123 8.189-.001 11.313zm-150.813 37.564c0 4.418-3.582 8-8 8h-287c-17.645 0-32-14.355-32-32v-281c0-17.645 14.355-32 32-32h416c17.645 0 32 14.355 32 32v195.333c0 4.418-3.582 8-8 8s-8-3.582-8-8v-195.333c0-8.822-7.178-16-16-16h-416c-8.822 0-16 7.178-16 16v241.185h280c4.418 0 8 3.582 8 8s-3.582 8-8 8h-280v23.815c0 8.822 7.178 16 16 16h287c4.418 0 8 3.581 8 8zm-3 78c0 4.418-3.582 8-8 8-99.928 0-74.805 0-152 0-4.418 0-8-3.582-8-8s3.582-8 8-8h23.582l8.975-40.393c.958-4.313 5.231-7.033 9.545-6.074 4.313.958 7.033 5.231 6.074 9.545l-8.204 36.922h72.055l-8.204-36.922c-.958-4.313 1.761-8.586 6.074-9.545 4.317-.958 8.587 1.761 9.545 6.074l8.975 40.393h23.583c4.418 0 8 3.581 8 8z'></path>
                </svg>
              </div>
              <div>
                <h3 className='text-[#112164] font-bold text-2xl md:text-3xl lg:text-4xl'>
                  370+
                </h3>
                <p className='text-[#6c757d]'>Available channels</p>
              </div>
            </div>
          </section>
          {/* icon-2  */}
          <section className='flex justify-evenly w-full h-48 mb-2'>
            <div className='flex w-full h-full px-10 items-center gap-5 bg-[#F5F5F5] choose_us border-r-8 hover:border-[#1F3BB1]  transition-all duration-100'>
              <div className='chooseUs_bg px-5 flex justify-center items-center rounded-full w-24 h-24'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  id='_x31__px'
                  height='512'
                  viewBox='0 0 24 24'
                  width='512'
                >
                  <path d='m.77 15c-.229 0-.435-.158-.487-.39-.188-.832-.283-1.71-.283-2.61 0-6.617 5.383-12 12-12 3.8 0 7.409 1.83 9.653 4.895.163.223.115.536-.108.699-.223.164-.537.114-.699-.108-2.056-2.809-5.364-4.486-8.846-4.486-6.065 0-11 4.935-11 11 0 .827.087 1.631.258 2.39.061.27-.108.537-.378.598-.037.008-.074.012-.11.012z'></path>
                  <path d='m12 24c-3.8 0-7.409-1.83-9.653-4.895-.163-.223-.115-.536.108-.699.222-.165.536-.116.699.108 2.056 2.809 5.364 4.486 8.846 4.486 6.065 0 11-4.935 11-11 0-.838-.089-1.641-.266-2.384-.064-.269.102-.539.371-.602.271-.065.539.102.602.371.194.819.293 1.699.293 2.615 0 6.617-5.383 12-12 12z'></path>
                  <path d='m2.55 22c-.272 0-.495-.218-.5-.492l-.05-3c-.002-.134.049-.263.144-.359.093-.095.222-.149.356-.149h3c.276 0 .5.224.5.5s-.224.5-.5.5h-2.492l.042 2.492c.005.276-.215.503-.491.508-.003 0-.006 0-.009 0z'></path>
                  <path d='m21.5 6h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2.5v-2.5c0-.276.224-.5.5-.5s.5.224.5.5v3c0 .276-.224.5-.5.5z'></path>
                  <path d='m12 19c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-13c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6z'></path>
                  <path d='m6.981 15.043h-.967v-1h.967c.303 0 .59-.118.809-.332.212-.212.333-.498.336-.802.007-.513.181-.993.502-1.389.339-.401.789-.672 1.273-.769.792-.171 1.351-.86 1.351-1.675v-.592c0-.955-.528-1.82-1.379-2.257l.457-.89c1.186.609 1.922 1.815 1.922 3.146v.593c0 1.29-.883 2.381-2.147 2.654-.346.07-.575.272-.708.429-.171.212-.268.479-.272.764-.007.565-.231 1.099-.632 1.5-.41.401-.945.62-1.512.62z'></path>
                  <path d='m12.369 18.769-1.204-1.486c-1.02-1.261-.928-3.083.214-4.238.793-.793 2.048-1.06 3.116-.639l.326.131c.381.149.829.013 1.06-.33.402-.616 1.29-.835 1.964-.448l.874.525-.516.857-.865-.52c-.203-.117-.496-.056-.624.139-.494.733-1.443 1.029-2.263.706l-.327-.131c-.693-.274-1.521-.101-2.037.415-.781.791-.845 2.04-.146 2.904l1.204 1.486z'></path>
                  <path d='m16.171 10.94c-.895 0-1.708-.46-2.174-1.23-.722-1.207-.849-2.652-.351-3.968l.491.121.463.187-.023.057c-.385 1.018-.286 2.147.277 3.087.314.52.898.814 1.503.734l1.828-.222.12.993-1.82.22c-.099.014-.207.021-.314.021z'></path>
                </svg>
              </div>
              <div>
                <h3 className='text-[#112164] font-bold text-2xl md:text-3xl lg:text-4xl'>
                  32
                </h3>
                <p className='text-[#6c757d]'>Covered States</p>
              </div>
            </div>
          </section>

          {/* icon-3  */}
          <section className='flex justify-evenly w-full h-48 mb-2'>
            <div className='flex w-full h-full px-10 items-center gap-5 bg-[#F5F5F5] choose_us border-r-8 hover:border-[#1F3BB1]  transition-all duration-100'>
              <div className='chooseUs_bg px-5 flex justify-center items-center rounded-full w-24 h-24'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  id='_x31dsadsa__px'
                  height='512'
                  viewBox='0 0 24 24'
                  width='512'
                >
                  <path d='m13.5 24h-3c-.276 0-.5-.224-.5-.5v-3c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5zm-2.5-1h2v-2h-2z'></path>
                  <path d='m10.5 22.5h-5c-1.379 0-2.5-1.122-2.5-2.5v-9.5c0-.276.224-.5.5-.5s.5.224.5.5v9.5c0 .827.673 1.5 1.5 1.5h5c.276 0 .5.224.5.5s-.224.5-.5.5z'></path>
                  <path d='m18.5 22.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.827 0 1.5-.673 1.5-1.5v-9.5c0-.276.224-.5.5-.5s.5.224.5.5v9.5c0 1.378-1.121 2.5-2.5 2.5z'></path>
                  <path d='m20 5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.552 0-1 .449-1 1s.448 1 1 1 1-.449 1-1-.448-1-1-1z'></path>
                  <path d='m23.5 10c-.276 0-.5-.224-.5-.5v-1c0-.827-.673-1.5-1.5-1.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3c1.379 0 2.5 1.122 2.5 2.5v1c0 .276-.224.5-.5.5z'></path>
                  <path d='m4 5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.552 0-1 .449-1 1s.448 1 1 1 1-.449 1-1-.448-1-1-1z'></path>
                  <path d='m.5 10c-.276 0-.5-.224-.5-.5v-1c0-1.378 1.121-2.5 2.5-2.5h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.827 0-1.5.673-1.5 1.5v1c0 .276-.224.5-.5.5z'></path>
                  <path d='m12 6c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z'></path>
                  <path d='m17 13c-.276 0-.5-.224-.5-.5v-2c0-.827-.673-1.5-1.5-1.5h-6c-.827 0-1.5.673-1.5 1.5v2c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-2c0-1.378 1.121-2.5 2.5-2.5h6c1.379 0 2.5 1.122 2.5 2.5v2c0 .276-.224.5-.5.5z'></path>
                  <path d='m12 21c-.276 0-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5s.5.224.5.5v7c0 .276-.224.5-.5.5z'></path>
                </svg>
              </div>
              <div>
                <h3 className='text-[#112164] font-bold text-2xl md:text-3xl lg:text-4xl'>
                  140K
                </h3>
                <p className='text-[#6c757d]'>Happy Clients</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
