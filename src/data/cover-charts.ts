// Ecommerce: public/data/dashboard.json, products grouped by category.
// Gross revenue in the synthetic dataset; Other combines Vitamins, Energy and Accessories.
export const categoryRevenue = [
  { category: "Nutrition", revenue: 4078653 },
  { category: "Hydration", revenue: 875975 },
  { category: "Wellness", revenue: 499202 },
  { category: "Other", revenue: 466208 + 425488 + 266016 },
];

// Fintech: web/src/data/dashboard.json, product_metrics, overall/all counts.
// Started → submitted → approved → contracted → funded; synthetic applications.
export const applicationStages = [100000, 45692, 22351, 14587, 13065];

// Energy: apps/spike/data/monthly_pulse.csv, official Jan–Dec 2025 snapshot.
// This committed extract does not include 2026; do not present it as a live feed.
export const monthlyOil = [2179998.80217994, 1972456.52119508, 2199084.28102386, 2105994.1580725694, 2207064.169495019, 2270949.5253819707, 2506760.8039908996, 2595176.4573128494, 2607802.4129095874, 2800987.7386068506, 2750778.883023558, 2909815.3252696907];
