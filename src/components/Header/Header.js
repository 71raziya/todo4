import { useState } from "react";

const Header = ({data, setData}) => {
    const [text, setText] = useState('');

    const addTodo = () => {
        if (text.trim()) {
        setData([{
        completed: false,
        important: false,
        deleted: false,
        correct: false,
        id: Math.random(),
        text,
    }, ...data])
    setText(' ')
}else{
    alert('ОШИБКА')
}
};
    return (
        <div className="header">
            <button onClick={addTodo} className="circle-btn">+</button>
            <input value={text} onChange={e => {
                setText(e.target.value)
            }} type="text"/>
            
        </div>
        
    );
}

export default Header;