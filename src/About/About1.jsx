import React from 'react'

export default function About1() {
    return (
        <>
        <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row m-8">
  <div
    class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
      alt="card-image" class="object-cover w-full h-full" />
  </div>
  <div class="p-6">
    <h6
      class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
      startups
    </h6>
    <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Lyft launching cross-platform service this week
    </h4>
    <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Like so many organizations these days, Autodesk is a company in
      transition. It was until recently a traditional boxed software company
      selling licenses. Yet its own business model disruption is only part of
      the story
    </p>
    <a href="#" class="inline-block"><button
        class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        Learn More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg></button></a>
  </div>
</div>  

{/* // card  */}
<div
  class="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
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
    );
}