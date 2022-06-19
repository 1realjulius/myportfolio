import axios from "axios";
import { useRef, useState } from "react";

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
      <form className="flex flex-col">
        <div className="col-span-3 sm:col-span-3">
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                name="new-lient-email"
                id="new-client-email"
                className="font-ApercuMedium focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-xs text-xs border-gray-300"
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
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-full"
            
          >
            Get it now 
           <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
           </svg>
           </span>
          </button>
        </div>
        {state === 'Error' && (
          <p className="error-state text-sm text-red-600 flex justify-center text-center">{errorMsg}</p>
        )}
        {state === 'Success' && (
          <p className="text-sm text-green-600 flex justify-center text-center">Awesome, yor List will be sent shortly!</p>
        )}
        </form>
    </div>
  );
}
export default Subscribe

function setInputNumber(value: any) {
  throw new Error("Function not implemented.");
}
