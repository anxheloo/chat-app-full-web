import React, { Suspense, lazy } from "react";

const Cat = lazy(() => import("../../components/cat"));

const GeneralApp = () => {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <Cat />
      </Suspense>
    </>
  );
};

export default GeneralApp;
