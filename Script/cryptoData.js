const marketCoins = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    logo: "Assets/th-removebg-preview.png",
    price: 88509,
    change: +2.45
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    logo: "Assets/ethereum-eth-logo-removebg-preview.png",
    price: 3740,
    change: +1.87
  },
  {
    name: "Solana",
    symbol: "SOL",
    logo: "Assets/Solana-Logo-500x281-removebg-preview.png",
    price: 158.2,
    change: -0.92
  },
  {
    name: "Cardano",
    symbol: "ADA",
    logo: "Assets/cardano-ada-logo.svg",
    price: 0.168,
    change: +5.4
  },
  {
    name: "Avalanche",
    symbol: "AVAX",
    logo: "Assets/avalanche-avax-logo.svg",
    price: 38.5,
    change: -1.23
  }
];

const marketContainer = document.getElementById("marketContainer");

marketCoins.forEach(coin => {
  const changeClass = coin.change >= 0 ? "price-up" : "price-down";
  const sign = coin.change >= 0 ? "+" : "";

  const item = document.createElement("div");
  item.className = "market-item";
  item.innerHTML = `
    <div class="market-left">
      <img src="${coin.logo}" alt="${coin.name}">
      <div class="market-name">
        <strong>${coin.symbol}</strong>
        <small>${coin.name}</small>
      </div>
    </div>
    <div class="market-right">
      <strong>${coin.price.toLocaleString()}</strong><br>
      <span class="${changeClass}">${sign}${coin.change}%</span>
    </div>
  `;
  marketContainer.appendChild(item);
});
