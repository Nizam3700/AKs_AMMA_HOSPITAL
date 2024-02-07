import React from 'react'

function CardDoctor() {
  return (
    <>
    <div
  class="relative grid h-[25rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 mx-3 my-2 p-2">
  <div
    class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://www.diginerve.com/wp-content/uploads/2023/03/Important-Topics-of-Surgery-in-MBBS.webp')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div class="relative p-6 px-6 py-14 md:px-12">
    <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
      Neurosurgeon Specialist Doctor
    </h2>
    <h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
      Dr.Ramesh Babu,MBBS MD
    </h5>
    <img alt="Tania Andrew"
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
      class="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" />
  </div>
</div>  
    </>
  )
}

export default CardDoctor