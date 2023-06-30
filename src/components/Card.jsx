export function Card(props) {
  return (
    <div className={`${props.active ? 'bg-zinc-100' : 'bg-zinc-900'} w-64 h-80 flex items-center justify-center rounded sm:w-50 hover:bg-zinc-100 cursor-pointer ease-in duration-300`}>
      <span className="text-blue-400 font-bold">{props.title}</span>
    </div>
  )
}