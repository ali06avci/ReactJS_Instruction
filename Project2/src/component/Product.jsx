import React, { useEffect, useState } from 'react'

function Product() {
    //hook for taking the data from API and finally mapping the data
    const [data, setData] = useState([]);
    //this is the hook that runs exactly after the component will render
    useEffect(() => {
        //registering the API
        fetch('https://jsonplaceholder.typicode.com/photos').then((res) => res.json()).then((data) => {
            //passing the data to useState hook
            setData(data);
            console.log(data);
        }).catch((e) => {
            console.log("Error is fetcing API data");
        })
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center display-3'>List of All Products</h1>
            <table className='table table-bordereds'>
                <tr>
                    <th>Album ID</th>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
                {
                    data.map((finals) => (
                        <tr>
                            <td>{finals.id}</td>
                            <td>{finals.id}</td>
                            <td>{finals.title}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default Product