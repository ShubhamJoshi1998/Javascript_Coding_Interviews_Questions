//Create a JavaScript function that calculates the tip for a given bill amount and tip percentage. 
//Bill amount and tip percentage will be input parameters while output will be calculated tip value.

function calculateTip(billAmount, tipPercentage) {
    if (typeof billAmount !== 'number' || typeof tipPercentage !== 'number') {
      throw new Error('Both billAmount and tipPercentage must be numbers');
    }
    
    if (billAmount < 0 || tipPercentage < 0) {
      throw new Error('Values must be positive');
    }
    
    const tipAmount = (billAmount * tipPercentage) / 100;
    return tipAmount;
  }
  
  // Example usage:
  const billAmount = 50; // Example bill amount
  const tipPercentage = 15; // Example tip percentage
  
  const tip = calculateTip(billAmount, tipPercentage);
  console.log(`Tip amount: ${tip.toFixed(0)}`);