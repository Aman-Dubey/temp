export default function Button({children, ...props}) {
    return (
    <button className="text-xl px-2 py-2 md:text-base rounded-md bg-teal-950 text-stone-300 hover:bg-stone-100 hover:text-stone-800 hover:font-semibold" {...props}>
        {children}
    </button>
    )
}