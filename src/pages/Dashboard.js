import React from 'react'
import { useCookies } from 'react-cookie';

const Dashboard = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  function logout() {
    removeCookie('accessToken');
    window.location.reload()
  }
  return (
    <>
        <h1>All Products are visible here</h1>
        <button onClick={logout}>Logout</button>
    </>
  )
}

export default Dashboard