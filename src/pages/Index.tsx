const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Добро пожаловать!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Это простой сайт с гиперссылкой
        </p>
        <a 
          href="https://google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Перейти на Google
        </a>
      </div>
    </div>
  );
};

export default Index;
