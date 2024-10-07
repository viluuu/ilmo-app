const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-green-700 pb-4">
      <div className="flex flex-grow justify-center sm:items-center">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
