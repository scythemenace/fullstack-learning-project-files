import "./App.css";
import { RevenueCard } from "./components/RevenueCard";

function App() {
  return (
    <>
      {/*
      <div style={{ display: "flex", justifyContent: "space-around" }}></div>
      <div style={{ backgroundColor: "red" }}>hi</div>
      <div style={{ backgroundColor: "green" }}>hi</div>
      <div style={{ backgroundColor: "yellow" }}>hi</div>
      <div style={{ backgroundColor: "yellow" }}>hi</div>
      <div style={{ backgroundColor: "yellow" }}>hi</div>
*/}

      {/*flexbox using tailwind*/}
      {/*<div className="flex justify-center">
        <div className="bg-red-500">hi</div>
        <div className="bg-green-500">hi</div>
        <div className="bg-yellow-500">hi</div>
        <div className="bg-yellow-500">hi</div>
        <div className="bg-yellow-500">hi</div>
      </div>*/}

      {/*grids using tailwind - when you have to create unequal widths*/}
      {/*
      <div className="grid grid-cols-4">
        <div className="bg-red-500 col-span-4">hi</div>
        <div className="bg-yellow-500 col-span-4">hi</div>
        <div className="bg-green-500 col-span-4">hi</div>
      </div>*/}

      {/*Responsiveness - according to breakpoints*/}
      {/*<div className="bg-red-500 md:bg-blue-500">hi there</div>*/}
      <div className="grid grid-3">
        <RevenueCard
          title={"Amount Pending"}
          amount={"92,312.20"}
          orderCount={13}
        />
      </div>
    </>
  );
}

export default App;
