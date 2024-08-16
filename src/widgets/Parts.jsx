import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

export default function Parts() {
  return (
    <main>
      <div className="w-10/12 flex justify-between m-auto gap-3">
        <LeftBar />
        <RightBar />
      </div>
    </main>
  );
}
