import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>{/* load external scripts/css/fonts here */}</Helmet>
      <div
        style={{
          background: "linear-gradient(180deg, #0e131d, #060a10 30.65%)",
          minHeight: "100vh",
        }}
      >
        <main className="max-w-2xl m-auto">{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
