import React from 'react';

const driver_insert = () => (
    
  <div>
<h1>Driver Information Form</h1>
      <form onSubmit={handleSubmit}> 
        <input type="text" placeholder='driver_id' id='driver_id' name='driver_id' required/>
        <input type="text" placeholder='name' name='name' required/>
        <input type="number" placeholder='age' name='age' min="18" max="120" required/>
        <input type="text" placeholder='license_no' name='license_no' required/>

        <button type='submit'>Submit</button> 

      </form> 
  </div>
);

export default driver_insert;