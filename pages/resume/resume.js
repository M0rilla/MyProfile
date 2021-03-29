import SiteLayout from "../../components/SiteLayout";
import ReactDOM from "react-dom";
import Viewer from "./viewer";

export default function Skills({ skills }) {
  return (
    <SiteLayout>
      {ReactDOM.render(<Viewer />, document.getElementById("root"))}

      <div className="divide-y divide-gray-100"></div>
    </SiteLayout>
  );
}
