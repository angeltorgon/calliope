import React, { useState } from 'react'

export default function User() {
    const [name, setName] = useState('Angel Torres')

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}
