import React, {useState, useEffect, useRef} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const countRef = useRef(count)

    useEffect(() => {
        countRef.current = count       
    })
  return (
    <div>
        <p style={{color: '#fff'}}>Click Cunt is {count}</p>
        <button onClick={() => setCount(count + 1)}>Click1</button>
        <button onClick={() => setCount(count + 2)}>Click2</button>
        <button onClick={() => setCount(count + 3)}>Click3</button>
    </div>
  )
}
