import { HelloWorld } from "@my-monorepo/shared";

function App() {
  return (
    <main className="min-h-svh bg-white p-8 flex flex-col items-center ">
      <HelloWorld />
      <p className="text-xl text-gray-600">
        Desktop Application with TailwindCSS 4.1
      </p>
    </main>
  );
}

export default App;
