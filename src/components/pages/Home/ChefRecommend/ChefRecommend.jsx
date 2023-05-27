import { useEffect, useState } from "react";
import SectionHeading from "../../../ReuseCompo/SectionHeading/SectionHeading";
import RecommendItems from "../RecommendItems/RecommendItems";

const ChefRecommend = () => {
    const [recommends, setRecommends] = useState([]);
    useEffect(() => {
        fetch('/public/menu.json')
            .then(res => res.json())
            .then(data => {
                setRecommends(data)
            })
    }, [])
    return (
        <section>
            <div className="text-center">
                <SectionHeading
                    subHeading={"Should Try"}
                    heading={"CHEF RECOMMENDS"}
                />
            </div>
            <div className="grid md:grid-cols-3 gap-3">
                {
                    recommends.map(recommend => <RecommendItems
                        key={recommend._id}
                        recommend={recommend}
                    ></RecommendItems>)
                }
            </div>
        </section>
    );
};

export default ChefRecommend;