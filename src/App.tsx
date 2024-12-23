import viteLogo from "/vite.svg";

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="header-menu">
        <div className="container mx-auto text-center">
          <h1 className="text-xl font-bold">React 19 POC</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">Welcome User</h2>
          <p className="text-gray-700">
            This is a placeholder for your content. Replace this with your
            components.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Your Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
