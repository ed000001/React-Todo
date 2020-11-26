import React, { useContext, useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import { Context } from '../contexts/context';
import { EditOutlined, CloseOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  li: {
    backgroundColor: '#d3d3d373',
    marginBottom: '6px',
    width: '100%',
    padding: '8px',
    borderRadius: '10px',
    display: 'flex',
    listStyle: 'none'
  },
  label: {
    width: '100%',
  }
});

export const TodoItem = ({ todo }) => {
    const [title, setTitle] = useState(todo.title);
    const [edit, setEdit] = useState(false);
    const { dispatch } = useContext(Context);
    const classes = useStyles();

    const update = () => {
        dispatch({
                type: 'update',
                payload: { title, id: todo.id }
            });

        setEdit(false);
    };

    const updateTodo = e => {
        if (e.key === 'Enter') {
            update();
        }
    };

    return (
        <li className={`todo-item ${classes.li}`}>
            <FormControlLabel
                className={classes.label}
                control={
                    <Checkbox
                        checked={todo.completed}
                        onChange={(e) => {
                            dispatch({type: 'complete', payload: { id: todo.id, value: e.target.checked} });
                        }}
                        color="primary"
                    />
                }
                label={
                    <div className="todo-title-icon">
                        {
                            !edit ? (
                                <span>{todo.title}</span>
                            )
                            : (
                                <TextField 
                                    id="standard-basic" 
                                    label="Title" 
                                    style={{width: '80%'}}
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    onKeyPress={updateTodo}   
                                />
                            )
                        }
                    </div>
                }
            />

            <div className="icons-container">
                {
                    edit ? (
                        <>
                            <IconButton 
                                children={
                                    <CheckIcon />
                                }
                                onClick={update}
                            />
                            <IconButton 
                                children={
                                    <CloseOutlined />
                                }
                                onClick={() => setEdit(prev => !prev)}
                            />
                        </>
                    )
                    : (
                        <IconButton 
                            children={
                                <EditOutlined />
                            }
                            onClick={() => setEdit(prev => !prev)}
                        />
                    )
                }
                
                <IconButton 
                    children={
                        <DeleteOutlinedIcon />
                    }
                    onClick={() => dispatch({type: 'delete', payload: todo.id})}
                />
            </div>
        </li>
    );
};