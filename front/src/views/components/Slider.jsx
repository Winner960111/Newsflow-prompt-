import { useEffect, useState } from "react";
import RangeSlider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import { useSelector } from "react-redux";

const Slider = ({setDensity_error,setValue}) => {
  const [value_slider, setValue_slider] = useState(50);
  const [left, setLeft] = useState(50);
  const isuser = useSelector((state) => state.UserAuth.isAuth);

  const handleChange = (e) => {
    if(isuser===true){
      setValue_slider(e.target.value);
      let data=e.target.value


      if(data==10){
        setValue(2)
      }else if(data==20){
        setValue(4)

      }else if(data==30){
        setValue(6)

      }
      else if(data==40){
        setValue(8)

      }else if(data==50){
        setValue(10)

      }else if(data==60){
        setValue(12)

      }else if(data==70){
        setValue(14)

      }else if(data==80){
        setValue(16)

      }else if(data==90){
        setValue(18)

      }else if(data==100){
        setValue(20)

      }
      setLeft(e.target.value)

      window.gtag('event', 'slider_value_change', {
        event_category: 'Slider',
        event_label: `Slider Value Changed: ${data}`
      });

    }else{
      // setLeft(e.target.value)
    }

  };

  return (
    <div className="slider" style={{cursor:(isuser==true?"pointer":"not-allowed")}}>
      <div className="range-container"  >
        <label
          htmlFor="range"
          style={{
            left: value_slider === 100 ? `${value_slider}%` : `${left-8 }%`,
            marginTop:"1rem"
          }}>
          {value_slider}
          
        </label>
        <input
          defaultValue={50}
          type="range"
          name="range"
          onChange={handleChange}
          id="range"
          min="10"
          max="100"
          step={10}
          onClick={()=>setDensity_error(true)}
          disabled={isuser==true? false:true}
         
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>10%</div>
        <div>100%</div>
      </div>
    </div>
  );
};

export default Slider;
