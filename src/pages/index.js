import React from "react"
import Layout from "../components/layout"
import { injected } from "../web3/connector"
import { useWeb3React } from "@web3-react/core"

export default function Home() {
  const { active, account, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (err) {
      console.log(err)
    }
  }

  async function disconnect() {
    try {
      await deactivate()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Layout>
      <div className="py-52 text-white text-center font-mono">
        <h1 className="mb-4 font-bold text-3xl">Hello Web3!</h1>
        <p>
          This starter sets you up with Gatsby 4, TailwindCSS, Preact, and
          web3.js. All of this together will let you build beautiful,
          accessible, performant, and decentralied websites and applicatons.
          Let's see what you can do!
        </p>
        <button
          onClick={async () => {
            await connect("metamask")
          }}
          className="my-4 px-4 py-2 bg-blue-700"
        >
          Connect Wallet
        </button>
        {active ? (
          <>
            <p>Connected Wallet: {account}</p>
            <button
              className="my-4 px-4 py-2 bg-blue-700"
              onClick={async () => {
                await disconnect()
              }}
            >
              Disconnect
            </button>
          </>
        ) : (
          <p>No wallet connected</p>
        )}
      </div>
    </Layout>
  )
}
