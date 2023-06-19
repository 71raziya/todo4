

const Footer = ({status, setStatus, todoList}) => {
    return (
        <div className="footer">
            <p>{todoList.length} items</p>

            <div className="footer-center">
            <button onClick={() => {
                setStatus('all')
            }}>all</button>

            <button onClick={() => {
                setStatus('active')
            }}>active</button>

            <button onClick={() => {
                setStatus('completed')
            }}>completed</button>

            <button onClick={() => {
                setStatus('cart')
            }}>cart</button>
            
        </div>
        <button>clear completed</button>
        </div>
    );
}

export default Footer;
