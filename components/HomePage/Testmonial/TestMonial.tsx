import React from 'react'
import { Carousel } from 'antd'

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

const Testimonial: React.FC = () => (
  <Carousel autoplay>
    <section style={contentStyle} className='testimonial-area relative'>
      <div className='container_slider'>
        <div className='sec-title white-title'>
          <h2 className='text-center text-xl md:text-2xl lg:text-3xl py-3'>
            What Our Client’s Say
          </h2>
          <p className='text-sm font-sans text-center'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form by injected
            humour
          </p>
        </div>
        <div className='testimonial-content owl-carousel'>
          {/* Single Testimonial */}
          <div className='single-testimonial'>
            <div className='round-1 round'></div>
            <div className='round-2 round'></div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <div className='client-info'>
              <div className='client-video'>
                <a href='#'>
                  <img src='https://i.ibb.co/DWhSr6S/play-button2.png' alt='' />
                </a>
              </div>
              <div className='client-details'>
                <h6>Yeasin Arafat</h6>
                <span>Designer, LLCG Team</span>
              </div>
            </div>
          </div>
          {/* Add more testimonials */}
        </div>
      </div>
      <div
        style={{
          background: `url('/plants.svg')`,
          backgroundSize: 'contain',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
        }}
        className='absolute w-full h-full -bottom-16 -left-10 hidden lg:block'
      ></div>
      <div
        style={{
          background: `url('/plants2.svg')`,
          backgroundSize: 'contain',
          backgroundPosition: 'top right',
          backgroundRepeat: 'no-repeat',
        }}
        className='absolute w-full h-full -top-64 -right-72 hidden lg:block'
      ></div>
    </section>
  </Carousel>
)

export default Testimonial
