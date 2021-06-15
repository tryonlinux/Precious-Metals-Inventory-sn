import groupBy from './GroupBy';

function addUpPurchasePrice(inventory) {
  let value = 0.0;
  if (inventory !== undefined && inventory.length > 0) {
    inventory.forEach((item) => {
      value += parseFloat(item.purchasedAmount);
    });
  }
  return value;
}

function addUpCurrentSpotPrice(inventory, spotPrice) {
  let value = 0.0;
  if (inventory !== undefined && inventory.length > 0) {
    inventory.forEach((item) => {
      value += parseFloat(
        parseFloat(item.purity) *
          parseFloat(item.ounces) *
          parseFloat(spotPrice)
      );
    });
  }
  return value;
}

export function adddUpPortfolioSpotPrice(
  inventory,
  silverSpotPrice,
  goldSpotPrice,
  platinumSpotPrice,
  palladiumSpotPrice
) {
  if (inventory !== undefined && inventory.length > 0) {
    let metals = groupBy(inventory, 'metal');
    let gold = metals.Gold;
    let silver = metals.Silver;
    let platinum = metals.Platinum;
    let palladium = metals.Palladium;
    return (
      Math.round(
        (addUpCurrentSpotPrice(silver, silverSpotPrice) +
          addUpCurrentSpotPrice(gold, goldSpotPrice) +
          addUpCurrentSpotPrice(platinum, platinumSpotPrice) +
          addUpCurrentSpotPrice(palladium, palladiumSpotPrice)) *
          100
      ) / 100
    ).toLocaleString();
  } else {
    return 0;
  }
}
export function buildSpotPricesDoughnut(
  inventory,
  silverSpotPrice,
  goldSpotPrice,
  platinumSpotPrice,
  palladiumSpotPrice
) {
  if (inventory !== undefined && inventory.length > 0) {
    let metals = groupBy(inventory, 'metal');
    let gold = metals.Gold;
    let silver = metals.Silver;
    let platinum = metals.Platinum;
    let palladium = metals.Palladium;

    let doughnut = {
      labels: ['Silver', 'Gold', 'Platinum', 'Palladium'],
      datasets: [
        {
          label: 'Metal',
          backgroundColor: ['#B3B6B7', '#F7DC6F', '#F4F6F6', '#D6EAF8'],
          hoverBackgroundColor: ['#7B7D7D', '#B7950B', '#AAB7B8', '#5DADE2'],
          data: [
            addUpCurrentSpotPrice(silver, silverSpotPrice),
            addUpCurrentSpotPrice(gold, goldSpotPrice),
            addUpCurrentSpotPrice(platinum, platinumSpotPrice),
            addUpCurrentSpotPrice(palladium, palladiumSpotPrice),
          ],
        },
      ],
    };
    return doughnut;
  }
}
export function buildPurchasePriceDoughnut(inventory) {
  let metals = groupBy(inventory, 'metal');
  let gold = metals.Gold;
  let silver = metals.Silver;
  let platinum = metals.Platinum;
  let palladium = metals.Palladium;

  let doughnut = {
    labels: ['Silver', 'Gold', 'Platinum', 'Palladium'],
    datasets: [
      {
        label: 'Metal',
        backgroundColor: ['#B3B6B7', '#F7DC6F', '#F4F6F6', '#D6EAF8'],
        hoverBackgroundColor: ['#7B7D7D', '#B7950B', '#AAB7B8', '#5DADE2'],
        data: [
          addUpPurchasePrice(silver),
          addUpPurchasePrice(gold),
          addUpPurchasePrice(platinum),
          addUpPurchasePrice(palladium),
        ],
      },
    ],
  };

  return doughnut;
}

export default {
  buildSpotPricesDoughnut,
  buildPurchasePriceDoughnut,
  adddUpPortfolioSpotPrice,
};
