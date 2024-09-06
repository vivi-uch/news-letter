import Nav from "./Nav";
import Body from "./Body";
import Footcard from "./Footcard";

export default function App() {
  return (
    <div className="flex flex-col justify-center pt-3 pb-16 px-3 lg:p-10">
      <Nav />
      <Body />
      <Footcard />
    </div>
  );
}
