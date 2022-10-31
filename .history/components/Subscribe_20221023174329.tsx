import axios from "axios";
import { useRef, useState } from "react";
import { Mail } from "react-feather";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async (e: any) => {
    e.preventDefault();
    setState("Loading");

    try {
      const response = await axios.post("/api/subscribe", { email });
      console.log(response);
      setState("Success");
      setEmail("");
    } catch (e) {
      console.log(e.response.data.error);
      setErrorMsg(e.response.data.error);
      setState("Error");
    }
  };

  return (
    <div className="">
      <form className="mx-2 flex flex-col">
        <div className="col-span-3 sm:col-span-3">
          <div className="mt-3 flex rounded-md shadow-sm">
            <input
              type="text"
              name="new-lient-email"
              id="new-client-email"
              className="block w-full flex-1 rounded-md border-gray-300 bg-white font-ApercuMedium text-lg  focus:border-indigo-500  focus:ring-indigo-500 dark:bg-[#0d1117] dark:text-white"
              placeholder="your@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            value=""
            onClick={subscribe}
            name="subscribe"
            className="inline-flex w-full items-center justify-center space-x-2 rounded-md border border-transparent bg-green-300 px-4 py-2 text-sm font-medium text-green-800 hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:bg-green-400"
          >
            <p className="leading-none">Get Notified</p>
            <span>
              <Mail className="" size={18} />
            </span>
          </button>
        </div>
        {state === "Error" && (
          <p className="error-state flex justify-center text-center text-red-600 ">
            {errorMsg}
          </p>
        )}
        {state === "Success" && (
          <p className="flex justify-center text-center text-sm text-green-600">
            Awesome, you will be notified!
          </p>
        )}
      </form>
    </div>
  );
}
export default Subscribe;
