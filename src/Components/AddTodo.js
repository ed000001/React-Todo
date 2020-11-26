import React, { useContext } from 'react';
import { Context } from '../contexts/context';
import TextField from '@material-ui/core/TextField';

const AddTodo = ({ title, setTitle }) => {
    const { dispatch } = useContext(Context);

    const addTodo = e => {
        if (e.key === 'Enter') {
            dispatch({
                type: 'add',
                payload: title
            });

            setTitle('');
        }
    };

    return (
        <div className="add-todo-container">
            <TextField 
                id="standard-basic" 
                label="Title" 
                style={{width: '100%'}}
                value={title}
                onChange={e => setTitle(e.target.value)}
                onKeyPress={addTodo}   
            />
        </div>
    );
};

export default AddTodo;