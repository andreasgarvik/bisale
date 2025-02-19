const Background = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="parallax-container">
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Background;