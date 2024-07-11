import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};
const Spinner = ({ loading }) => {
  return <ClipLoader color="#50C878" loading={loading} size={50} cssOverride={override} />;
};

export default Spinner;
