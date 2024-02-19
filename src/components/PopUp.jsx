const Popup = ({title, description}) => {
    return ( 
        <div className=" sticky inset-0 right-20 left-20 w-full h-[80vh] bg-slate-100 text-slate-800">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
     );
}
 
export default Popup;