export default async function receiveBitCoinValue(targetElement, blockChainURL) {
  const receiveDonationElement = document.querySelector(targetElement);
  try {
    const uptadedValue = await (await fetch(blockChainURL)).json();
    const donationValue = (15 / uptadedValue.BRL.sell).toFixed(6);
    receiveDonationElement.innerHTML = `Doe <span>${donationValue}</span> bitcoins para nos ajudar`;
  } catch {
    receiveDonationElement.remove();
  }
}
