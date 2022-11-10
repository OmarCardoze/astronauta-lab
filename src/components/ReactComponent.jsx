import { useState } from 'react'

const ReactComponent = () => {
const [count, setCount] = useState(0)

return (
    <>
        <h1>Count</h1>
        <p 
            style={{ width: '30px', height: '30px', cursor: 'pointer' ,display: 'grid', placeContent: 'center', color: '#fff', backgroundColor: 'blue', padding: '10px', borderRadius: '50%' }}
            onClick={() => setCount(count + 1)}
            >
            {count}
        </p>
    </>

  )
}

export default ReactComponent