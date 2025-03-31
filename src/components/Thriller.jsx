import {ThrillerData}  from "../Homepagedata/Thriller"
import './C.css'
export default function Thriller(){
    return(
    <div>
        <div className="Catogry">Thriller</div>
            <div className="hello">
            {
                ThrillerData.map((elem)=>(
                    <div key={elem.id}>


                      <img src={elem.image}  className=" image "  alt={`${elem.title} Image`} />
                      <div className="title">  {elem.title}</div>
                    </div>
                ))
            }
        </div>
    </div>
    )
}