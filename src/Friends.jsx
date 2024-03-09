import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'
export default function Friends(){

    const [friends, setFeiends ] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setFeiends(data))
    } , [])
   
    return(
        <div className='box'>
            <h3>Friends : {friends.length}</h3>
            {
                friends.map(friend => <Friend
                friend={friend}>
                </Friend>)
            }
        </div>
    )
}



// 1. state declare koro
// 2,use effect
// 3 use fetch
// 4. set loaded data
// 5. display data on the component