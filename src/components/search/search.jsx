import { SearchOutlined } from '@ant-design/icons'
import { useRef, useState } from 'react'
import { Button, Result } from 'antd';
import useStart from '../../hooks/useStart'
import "./search.scss"

function Search() {
    const { port, token } = useStart()
    const [leng, setLeng] = useState(true);
    const [sear, setSear] = useState([]);
    const search = useRef()

    
    const len = () => {
        if (search.current.value.length > 0) {
            fetch(port + "search", {
                method: "GET", 
                headers: {
                    token: token,
                    value: search.current.value
                }
            })
               .then(req => req.json())
               .then(data => setSear(data))
            setLeng(false)
        } else {
            setLeng(true)
        }
    }

    return ( 
        <>
            {leng ?  <SearchOutlined className='searchInput' /> : ""}
           <input ref={search} onChange={len} className={leng ? "" : "pad"} type="text" placeholder='Поиск' />
           {!leng ? <span className='before'></span> : ""}
           {!leng ? <ul className="modal">
               {sear?.data ? sear?.data?.map(e => (
                <li key={e.id}>
                    {e?.storiya ? 
                    <div className='divcha'>
                        <img className='img' width={50} height={50} src={e.image} alt="" />
                    </div>
                        :  <div className='divchas'><img className='image' width={50} height={50} src={e.image} alt="" /></div>}
                    <div className='title'>
                        <h3>{e.name}</h3>
                        <p>{e.bio}</p>
                    </div>
                </li>
               )) :  <Result status="404"/>}
           </ul> : ""}
        </>
     );
}

export default Search;