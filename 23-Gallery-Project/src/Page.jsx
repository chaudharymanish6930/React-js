import React from 'react';

const Page = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Welcome to My React Page</h1>
      </header>
      <main className="page-content">
        <p>This is a sample React page component.</p>
        <p>You can add more content here as needed.</p>
      </main>
      <footer className="page-footer">
        <p>&copy; 2023 My React App</p>
      </footer>
    </div>
  );
};

export default Page;