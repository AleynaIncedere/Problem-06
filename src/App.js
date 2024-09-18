// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin
import { useState } from 'react';

export default function ButtonVariants() {
  const [activeButton, setActiveButton] = useState(null);

  const handleMouseDown = (button) => {
    setActiveButton(button);
  };

  const handleMouseUp = () => {
    setActiveButton(null);
  };
  return (
    <span className='wrapper'>
      <button
        style={{
          backgroundColor: activeButton === 'create' ? '#eea29a' : '#d64161',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '5px',
        }}
        onMouseDown={() => handleMouseDown('create')}
        onMouseUp={handleMouseUp}
      >
        Create
      </button>
      <button
        style={{
          backgroundColor: activeButton === 'update' ? '#eea29a' : '#d64161', 
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '5px',
        }}
        onMouseDown={() => handleMouseDown('update')}
        onMouseUp={handleMouseUp}
      >
        Update
      </button>
      <button
        style={{
          backgroundColor: activeButton === 'delete' ? '#eea29a' : '#d64161', 
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '5px',
        }}
        onMouseDown={() => handleMouseDown('delete')}
        onMouseUp={handleMouseUp}
      >
        Delete
      </button>
    </span>
  );
}
