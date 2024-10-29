import CollapseData from "../Collapse.json"
import Collapse from "./Collapse";

const AboutDisplay = () => {

    return (
            <div className='AboutDisplay'>
            <div className="collapse">
            <div className="collapse__dropdown">
            {CollapseData.map((item) => {
            return (
            <div key={item.id}>
                <Collapse content={item.content} title={item.title} />
            </div>
            );
          })}
        </div>
      </div>
    </div>
      
    )

}

export default AboutDisplay