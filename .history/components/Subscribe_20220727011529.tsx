import axios from "axios";
import { useRef, useState } from "react";
import { Mail } from "react-feather";

function Subscribe() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)
 
  const subscribe = async (e) => {
    e.preventDefault()
    setState('Loading')

    try {
      const response = await axios.post('/api/subscribe', { email })
      console.log(response)
      setState('Success')
      setEmail('')
    } catch (e) {
      console.log(e.response.data.error)
      setErrorMsg(e.response.data.error)
      setState('Error')
    }
  }

  return (
    <div>
      <form className="flex flex-col mx-2">
        <div className="col-span-3 sm:col-span-3">
            <div className="mt-3 flex rounded-md shadow-sm">
              <input
                type="text"
                name="new-lient-email"
                id="new-client-email"
                className="font-ApercuMedium focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-xs text-xs border-gray-300  bg-white dark:text-white dark:bg-[#0d1117]"
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
            className="items-center space-x-2 inline-flex justify-center active:bg-green-400 rounded-md border border-transparent bg-green-300 px-4 py-2 text-sm font-medium text-green-800 hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-full"
            
          >
            <p className="leading-none">Get Notified</p>
           <span>
            <Mail className='' size={18} />
           </span>
          </button>
        </div>
        {state === 'Error' && (
          <p className="error-state text-sm text-red-600 flex justify-center text-center pt-2">{errorMsg}</p>
        )}
        {state === 'Success' && (
          <p className="text-sm text-green-600 flex justify-center text-center">Awesome, you will be notified!</p>
        )}
        </form>
    </div>
  );
}
export default Subscribe

function setInputNumber(value: any) {
  throw new Error("Function not implemented.");
}
