import React, { Suspense, useRef } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Scene() {
  const objectToAnimate = useRef<any>();

  function onLoad(Spline: any) {
    const obj = Spline.findObjectByName("Cube");
    // save the object in a ref for later use
    objectToAnimate.current = obj;
  }

  function triggerAnimation() {
    objectToAnimate.current.emitEvent("mouseHover");
  }

  return (
    <div className="w-full h-screen">
      <Suspense fallback={<div className="text-3xl">Loading...</div>}>
        <Spline
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          onLoad={onLoad}
        />
        {/* <Spline scene="https://prod.spline.design/3LgK5sEHoQcG0beS/scene.splinecode" /> */}
      </Suspense>
    </div>
  );
}
