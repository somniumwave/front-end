/* import React from 'react';

import { useWeb3React } from "@web3-react/core"
import { injected } from "./MMConnector"

export default function MMButton() {

    const {active, account, library, connector, activate, deactivate } = useWeb3React();

    async function connect() {
        try {
          await activate(injected)
        } catch (ex) {
          console.log(ex)
        }
      }
    
      async function disconnect() {
        try {
          deactivate()
        } catch (ex) {
          console.log(ex)
        }
      }

    return (
        <div className="flex flex-col m-auto z-40 drop-shadow-md">

            {active ?
                <div className="flex flex-col">
                    <div className="text-center bg-green-300 p-4">
                        <span>Connected with <b>{account}</b></span>
                    </div>

                    <div className="m-auto p-4">
                        <div className="p-2">
                            <button className="w-48 md:w-96 text-white font-bold md:text-4xl wow ease-linear transition-all duration-300 p-4 rounded-2xl z-20">
                                MINT
                            </button> 
                        </div>
                
                        <div className="p-2">
                            <button onClick={disconnect} className="w-48 md:w-96 bg-black text-white font-bold md:text-4xl incbtn ease-linear transition-all duration-300 p-4 rounded-2xl z-20">
                                DISCONNECT
                            </button>
                        </div>
                    </div>
                </div>
            :
            <button
            onClick={connect}
            className="connect text-white w-48 md:w-96 stext-white font-bold md:text-4xl wow ease-linear transition-all duration-300 p-4 rounded-2xl z-20">
                CONNECT
            </button>}


        </div>
  )
}
*/

