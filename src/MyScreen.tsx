import React from 'react'

type Props = {
  index: number
}

function MyScreen(props: Props) {
  return <div>MyScreen {props.index}</div>
}

export default MyScreen
