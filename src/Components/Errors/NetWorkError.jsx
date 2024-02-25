import React, { useEffect, useRef } from "react";
import "./Style.css";
export default function NetWorkError() {
  const bodyRef = useRef(null);
  useEffect(() => {
    const Loading = setTimeout(function () {
      bodyRef.current.classList.remove("loading");
    }, 1000);
    return () => {
      clearTimeout(Loading);
    };
  }, []);
  return (
    <div className="h-screen body">
      <div ref={bodyRef} className="loading">
        <h1 className="text-[10rem] mb-2">500</h1>
        <h2 className="mb-5 text-[2rem] ">يوجد مشكلة بالخادم</h2>
        <div className="gears">
          <div className="gear one">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="gear two">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="gear three">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
