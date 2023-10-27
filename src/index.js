import { render } from "react-dom";
import InputForm from "./page/inputForm";

const App = () => (
  <div>
    <InputForm />
    {/* <style jsx>{`
      .boxed {
        border: 1px solid grey;
        border-radius: 8px;
        padding: 0 12px;
      }
      @media (max-width: 600px) {
        .boxed {
          background: lightblue;
        }
      }
    `}</style> */}
  </div>
);

render(<App />, document.getElementById("root"));
