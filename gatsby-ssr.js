import loadable from "@loadable/component"
import React from "react"
const Web3ReactProvider = loadable(() => import("@web3-react/core"), {
  resolveComponent: components => components.Web3ReactProvider,
})
const Web3 = loadable(() => import("web3"))

function getLibrary(provider) {
  return new Web3(provider)
}

export const wrapRootElement = ({ element }) => (
  <Web3ReactProvider getLibrary={getLibrary}>{element}</Web3ReactProvider>
)
