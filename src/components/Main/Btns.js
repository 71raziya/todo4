

const Btns = ({status, setKey, item}) => {
    return (
        <>
        {
            status === 'cart'
            ? <>
            <button>restore</button>
            <button>remove</button>
            </>
            : <>
            <button>correct</button>
          <button>important</button>
          <button onClick={()=> {
            setKey('deleted', item.id)
        }}>delete</button> 
            </>
        }
         </>
    );
}

export default Btns;
