
import { RxUpdate } from "react-icons/rx";
import { BiSupport } from "react-icons/bi";
import { FaRegSmileBeam } from "react-icons/fa";
import Feature from "./Feature";
import "./FeatureList.css";
import { useSelector } from "react-redux";

const featureList = [
  {
    id: 1,
    title: "پشتیبانی قوی",
    icon: <BiSupport />,
    desc: "",
  },
  {
    id: 2,
    title: "رضایت دانشجوها",
    icon: <FaRegSmileBeam />,
    desc: "",
  },
  {
    id: 3,
    title: "بروزرسانی",
    icon: <RxUpdate />,
    desc: "",
  },
];

function FeatureList() {
 
    const {theme}=useSelector(store=>store.global)

  return (
    <div className={`featureListContainer${theme}`}>
      <div className="container">
        <h2>چرا اینورس</h2>
        <div className="featureList">
          {featureList.map((feature) => (
            <Feature key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureList;
