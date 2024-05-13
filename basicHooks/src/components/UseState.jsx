import React, { useContext, useState } from 'react';
const ThemeContext = React.createContext();
function ToggleButton() {
  const [theme, setTheme] = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === "black" ? "grey" : "black");
  };
  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
function ContentBox() {
  const [theme] = useContext(ThemeContext);
  const [likeCount, setLikeCount] = useState(0);
  const [showContent, setShowContent] = useState(false); 
  const handleContentClick = () => {
    alert("Content button clicked");
    setShowContent(true);
  };
  const handleLikeClick = () => {
    setLikeCount(prevCount => prevCount + 1);
  };
  const backgroundColor = theme === "black" ? "black" : "grey";
  return (
    <div style={{ backgroundColor, padding: "20px", width: "1200px" }}>
      {showContent && (
        <div>
          <p style={{ color: "white" }}>useState is a React Hook that allows functional components to manage state. useEffect is a React Hook that allows you to perform side effects in functional components. useContext is a React Hook that allows functional components to consume values from the nearest Context provider. </p>
        </div>
      )}
      <div style={{ marginBottom: "10px" }}>
        <button onClick={handleContentClick}>Content</button>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <span>{likeCount}</span>
      </div>
      <div>
        <button onClick={handleLikeClick}>Like</button>
      </div>
    </div>
  );
}
function App() {
  const [theme, setTheme] = useState("black");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div>
        <ToggleButton />
        <ContentBox />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;