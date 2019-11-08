import React, { useState, Suspense } from "react";
const OtherComponent = React.lazy(() => import('../presentational/OtherComponent'));

function ExampleContainer() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count+1)}></button>
      <Suspense fallback={<div>Loading...</div>}>
        {count > 5 && <OtherComponent />}
      </Suspense>
    </div>
  );
}

export default ExampleContainer;