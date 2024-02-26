
export function App() {
  return (
    <div className="w-dvw h-dvh overflow-hidden">
      <div className="md:rotate-180 w-[100%] h-[100%] m-auto flex items-center justify-center overflow-hidden">
        <div className="overflow-hidden absolute z-10">
          <div className="w-fit h-fit md:p-20 p-10 rounded-full rotate-45 bg-gradient-to-r from-yellow-400 to-orange-600" />
        </div>
        <div className="overflow-hidden absolute animate-spin rotation-timing-1 flex md:gap-[13rem] gap-[6.5rem]">
          <div className="md:p-3 p-1.5 rounded-full" />
          <div className="md:p-3 p-1.5 rounded-full bg-gradient-to-r from-zinc-400 to-gray-600" />
        </div>
        <div className="overflow-hidden absolute animate-spin rotation-timing-2 flex md:gap-[18rem] gap-[8rem]">
          <div className="md:p-5 p-2.5 rounded-full" />
          <div className="md:p-5 p-2.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-900" />
        </div>
        <div className="overflow-hidden absolute animate-spin rotation-timing-3 flex md:gap-[25.5rem] gap-[12.7rem]">
          <div className="md:p-7 p-3.5 rounded-full" />
          <div className="md:p-7 p-3.5 rounded-full bg-gradient-to-r from-green-400 to-blue-600" />
        </div>
        <div className="overflow-hidden absolute animate-spin rotation-timing-4 flex md:gap-[35.3rem] gap-[17.6rem]">
          <div className="md:p-6 p-4 rounded-full" />
          <div className="md:p-6 p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600" />
        </div>
        <div className="overflow-hidden absolute animate-spin rotation-timing-5 flex md:gap-[44.4rem] gap-[22.2rem]">
          <div className="md:p-12 p-6 rounded-full" />
          <div className="md:p-12 p-6 rounded-full bg-gradient-to-r from-orange-200 to-amber-900" />
        </div>
        <div className="overflow-hidden absolute animate-spin rotation-timing-6 flex md:gap-[59.4rem] gap-[29.7rem]">
          <div className="md:p-11 p-7 rounded-full" />
          <div className="md:p-11 p-7 rounded-full bg-gradient-to-r from-amber-100 to-orange-300" />
        </div>
        <div className="overflow-hidden absolute animate-spin rotation-timing-7 flex md:gap-[73.5rem] gap-[36.75]">
          <div className="md:p-9 p-4 rounded-full" />
          <div className="md:p-9 p-4 rounded-full bg-gradient-to-r from-cyan-500 to-slate-600" />
        </div>
        <div className="overflow-hidden absolute animate-spin rotation-timing-8 flex md:gap-[85.5rem] gap-[42.75rem]">
          <div className="md:p-9 p-5 rounded-full" />
          <div className="md:p-9 p-5 rounded-full bg-gradient-to-r from-blue-500 to-blue-800" />
        </div>
      </div>
    </div>
  )
}

export default App
