import React from 'react'
import Toolbar from './Toolbar/Toolbar'

function Layout({children}) {
  return (
    <>
      <Toolbar/>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
