import React from 'react'

export default function Dashboard(props) {
  return (
    <div>{props.user?<h1>{props.user.name}</h1>:<></>}</div>
  )
}
