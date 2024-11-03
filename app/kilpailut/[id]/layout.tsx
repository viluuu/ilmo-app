const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container mx-auto p-4 ">
      <div>{children}</div>
    </div>
  );
};

export default Layout;
