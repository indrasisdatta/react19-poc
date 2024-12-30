import { FormActionComponent } from "./components/FormActionComponent/FormActionComponent";

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
          <h2 className="text-lg font-semibold mb-4">React 19 Actions</h2>
          <div className="text-gray-700 mb-3">
            Actions - Pending state, optimistic updates, error handling, forms.
            <ul className="list-disc ml-5">
              <li>useActionState</li>
              <li>useFormStatus</li>
              <li>useOptimistic</li>
            </ul>
          </div>
          <FormActionComponent />
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
