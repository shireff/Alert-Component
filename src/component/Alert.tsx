import "./alert.scss";
import { ReactNode } from "react";
import {  X } from "lucide-react";

interface Iprops {
    classname: string,
    title: string,
    icone: ReactNode,
    description:string
}

// eslint-disable-next-line no-empty-pattern
const Alert = ({classname,icone,title,description }: Iprops) => {
  return (
    <div className={classname}>
      <div className="alert-header">
        <div className="title">
          {icone}
          <h4>{title}</h4>
        </div>
        <X className="close" size={25}/>
      </div>
      <p>
        {description}
      </p>
    </div>
  );
};

export default Alert;
