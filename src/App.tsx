
export function App() {
  return (
    <div className="w-dvw h-dvh overflow-hidden">
      <div className="w-full h-full m-auto flex items-center justify-center overflow-hidden">
        <div className="overflow-hidden absolute z-10">
          <div className="w-fit h-fit p-20 rounded-full rotate-45 bg-gradient-to-r from-yellow-400 to-orange-600" />
        </div>
        <div className="overflow-hidden absolute animate-spin rotation-timing-1 flex gap-[13rem] ">
          <div className="p-3 rounded-full" />
          <div className="p-3 rounded-full bg-gradient-to-r from-zinc-400 to-gray-600" />
        </div>
        <div className="overflow-hidden absolute animate-spin rotation-timing-2 flex gap-[18rem] ">
          <div className="p-5 rounded-full" />
          <div className="p-5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-900" />
        </div>
        <div className="overflow-hidden absolute animate-spin rotation-timing-3 flex gap-[25.5rem] ">
          <div className="p-7 rounded-full" />
          <div className="p-7 rounded-full bg-gradient-to-r from-green-400 to-blue-600" />
        </div>
        <div className="overflow-hidden absolute animate-spin rotation-timing-4 flex gap-[35.3rem] ">
          <div className="p-6 rounded-full" />
          <div className="p-6 rounded-full bg-gradient-to-r from-orange-500 to-red-600" />
        </div>
        <div className="overflow-hidden absolute animate-spin rotation-timing-5 flex gap-[44.4rem] ">
          <div className="p-12 rounded-full" />
          <div className="p-12 rounded-full bg-gradient-to-r from-orange-200 to-amber-900" />
        </div>
        <div className="overflow-hidden absolute animate-spin rotation-timing-6 flex gap-[59.4rem] ">
          <div className="p-11 rounded-full" />
          <div className="p-11 rounded-full bg-gradient-to-r from-amber-100 to-orange-300" />
        </div>
        <div className="overflow-hidden absolute animate-spin rotation-timing-7 flex gap-[73.5rem] ">
          <div className="p-9 rounded-full" />
          <div className="p-9 rounded-full bg-gradient-to-r from-cyan-500 to-slate-600" />
        </div>
        <div className="overflow-hidden absolute animate-spin rotation-timing-8 flex gap-[85.5rem] ">
          <div className="p-9 rounded-full" />
          <div className="p-9 rounded-full bg-gradient-to-r from-blue-500 to-blue-800" />
        </div>
      </div>
    </div>
  )
}

export default App
