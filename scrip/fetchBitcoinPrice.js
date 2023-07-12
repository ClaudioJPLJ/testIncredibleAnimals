export default async function receiveBitCoinValue() {
  const receiveDonationElement = document.querySelector('[data-bitCoinDonation]');
  try {
    const uptadedValue = await (await fetch('https://blockchain.info/ticker')).json();
    const donationValue = (15 / uptadedValue.BRL.sell).toFixed(6);
    receiveDonationElement.innerHTML = `Doe <span>${donationValue}</span> bitcoins para nos ajudar em nossa missão!`;
  } catch (error) {
    console.log('Problemas na API bitcoin...');
    receiveDonationElement.remove();
  }
}
