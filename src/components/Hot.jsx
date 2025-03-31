import { Hotsdata } from "../Homepagedata/Hots";
import './C.css'
export default function Hot(){
    return(
    <div>
        <div className="Catogry">Hot 🔥</div>
            <div className="hello">
            {
                Hotsdata.map((elem)=>(
                    <div key={elem.id}>
                      
                        <img src={elem.image} className=" image"  alt={`${elem.title} Image`} />
                        <div className="title">{elem.title}</div>
                    </div>
                ))
            }
        </div>
    </div>
    )
}