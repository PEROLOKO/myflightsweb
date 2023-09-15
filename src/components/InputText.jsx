export default function InputText({label, id, ...props}){
    return (
        <div className="flex flex-col gap-1 my-2">
            <label htmlFor={id} className="text-emerald-400">{label}</label>
            <input id={id} type="text" {...props} className="bg-emerald-700 px-1 py-2 rounded outline-none focus:ring-1 focus:ring-emerald-600" />
        </div>
    )
}