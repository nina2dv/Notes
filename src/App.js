import './App.css';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  const [state, setState] = useState({
    title: '',
    note: '',
    id: Math.random() * 10,
  });
  const handleChange = (e) => {
    setState({
    ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([...notes, state]);
    setState({
      title: '',
      note: '',
    });
  };
  const handleDelete = (id) => {
    const leftNotes = notes.filter((note) => note.id !== id);
    setNotes(leftNotes);
  }

  return (
    <div className="App bg-orange-50 h-screen">
      <h1 className='text-center text-5xl p-5'>Notes</h1>
      <div className="create_note w-[400px] mx-auto">
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='Title' 
            name='title'
            className='border-2 border-orange-200 p-2 mb-2'
            onChange={handleChange}
            value={state.title}
            required
          />
          <textarea 
            name="note" 
            id="" cols="30" 
            rows="10" 
            placeholder="Note" 
            className='border-2 border-orange-200 p-2'
            onChange={handleChange}
            value={state.note}
            required
          ></textarea>
          <button type='submit' className='bg-orange-500 px-5 py-3 text-white mt-4'>Add note</button>
        </form>
      </div>

    <div className='notes-container border-t-2 border-orange-300 m-10 flex flex-wrap'>
        {
          notes.length > 0? notes.map((note, i) => 
          {
            return(
              <div className='note bg-white mt-5 mr-5 w-[300px] p-4 py-10 relative' key={i}>
              <button className='delete_note absolute right-2 top-0 font-bold text-2xl text-red-500' onClick={() => handleDelete(note.id)}>x</button>
              <h3 className='font-bold text-1xl pb-2 break-words'>{note.title}</h3>
              <p className='break-words'>{note.note}</p>
              </div>
            );}) : <p>No Notes avaliable</p>
        }
    </div>
    </div>

   
  );
}

export default App;
