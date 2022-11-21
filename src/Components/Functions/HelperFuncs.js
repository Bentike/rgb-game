//Function to generate Random colors
export const generateRandomColors = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };
  
  // function To generate specific number of random colors
export const generateNumberOfColors = (num) => {
    let colors = [];
    for(let i = 0; i < num; i++){
        colors.push(generateRandomColors());
    }
    return colors;
  };
  
  // function to set A TargetColor
export const setATargetColor = (colors) => {
      return colors[Math.floor(Math.random() * colors.length)];
  };
  
  // function to set message
export const sendMessageToUser = ((a, b) => {
      if(a === b) return "Correct";
      return "Incorrect";
  });