import { Helmet } from "react-helmet";
import "../../styles/IguruWidget.css";

function IguruWidget() {
  return (
    <>
      <iguru data-associateid=""></iguru>

      <Helmet>
        <script src="https://8f9p2muuv3.execute-api.ap-southeast-1.amazonaws.com/stage/iguru/redirect"></script>
      </Helmet>
    </>
  );
}

export default IguruWidget;
