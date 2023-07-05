import { DotSpinner } from "@uiball/loaders";

export const Loader = () => {
  return (
    <>
      <div>
        <h1>Loading...</h1>
      </div>
      <div className="container-loader">
        <DotSpinner size={80} speed={0.9} color="black" />
      </div>
    </>
  );
};
