// import { RingLoader } from "react-spinners";

import { RingLoader } from "react-spinners";

export const Loadings = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <RingLoader color="#120ee4" size={200} />
    </div>
  );
};