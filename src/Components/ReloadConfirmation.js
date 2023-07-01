import React, { useEffect } from 'react';
// import PropTypes from 'prop-types'


export default function ReloadConfirmation(props) {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
      const confirmationMessage = "Are you sure you want to leave?";
      event.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
      return confirmationMessage; // Gecko, WebKit, Chrome <34
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        // props.showAlert( "You have Refreshed the page " , "danger" );
    };
        // props.showAlert( "You have Refreshed the page " , "danger" );
},  );

return (
    <div>
   
    </div>
  );
}
