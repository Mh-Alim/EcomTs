import { useEffect, useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";

const StopWatch = () => {
    const [time, setTime] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleClick = () => {
        setIsActive((prev) => !prev);
  }
  
  useEffect(() => {
    let intervalId:number;
    if (isActive) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      },1000)
    }
    return () => {
      clearInterval(intervalId)
    }
  }, [isActive])
  

  const formatTime = (time: number) => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    let hoursInString = hours.toString().padStart(2, "0");
    let minutesInString = minutes.toString().padStart(2, "0");
    let secondsInString = seconds.toString().padStart(2, "0");


    return `${hoursInString}: ${minutesInString}: ${secondsInString}`;
  }

  return (
    <div className="flex gap-5 h-[100vh] ">
      <AdminSidebar />
      <main className=" w-full p-5 overflow-y-scroll  bg-slate-100  ">
        <h1 className=" text-2xl font-medium ">Stop Watch</h1>
        <div className=" w-full h-[90vh] p-5  flex justify-center items-center flex-col ">
          <p className=" text-3xl " > {formatTime(time)} </p>
          <div className="  mt-10  flex justify-between items-center w-72  " >
            <button onClick={handleClick}  className=" py-2 px-5 rounded-md bg-blue-500 text-white " > {isActive ? "Stop" : "Start"} </button>
            <button onClick={() => { setTime(0);  setIsActive(false)}} className=" py-2 px-5 rounded-md bg-red-500 text-white " >Reset</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StopWatch;
