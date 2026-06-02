import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '20px', backgroundColor: '#222', color: '#fff', textAlign: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p>FoodBazar &copy; {new Date().getFullYear()}</p>
        <p>Made with love for delicious meals.</p>
      </div>
    </footer>
  );
};

export default Footer;
