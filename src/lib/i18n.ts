export type Lang = "th" | "en";

export const translations = {
  // ===== Navbar =====
  "nav.inflation": { th: "เงินเฟ้อจริง", en: "Real Inflation" },
  "nav.assets": { th: "สินทรัพย์", en: "Assets" },
  "nav.salary": { th: "เงินเดือน", en: "Salary" },
  "nav.portfolio": { th: "พอร์ต", en: "Portfolio" },
  "nav.careers": { th: "อาชีพ", en: "Careers" },
  "nav.aiRisk": { th: "AI Risk", en: "AI Risk" },

  // ===== Hero Section =====
  "hero.badge": {
    th: "Austrian Economics · Real Data · No Government BS",
    en: "Austrian Economics · Real Data · No Government BS",
  },
  "hero.title.inflation": { th: "เงินเฟ้อ", en: "Inflation" },
  "hero.title.making": { th: "กำลัง", en: " is" },
  "hero.title.you": { th: "ทำให้คุณ", en: "making you " },
  "hero.title.poorer": { th: "จนลง", en: "poorer" },
  "hero.description": {
    th: "รัฐบาลบอกว่าเงินเฟ้อแค่ 2-3% แต่ปริมาณเงิน (M2) เพิ่มขึ้น 6-25% ต่อปี — นี่คือเงินเฟ้อจริงที่คุณรู้สึกได้",
    en: "The government says inflation is only 2-3%, but money supply (M2) grows 6-25% per year — this is the real inflation you actually feel.",
  },
  "hero.description.highlight": {
    th: "ถือเงินสด = จนลงปีละ 6%+",
    en: "Holding cash = getting 6%+ poorer every year",
  },
  "hero.cta.data": { th: "ดูข้อมูลเงินเฟ้อจริง", en: "See Real Inflation Data" },
  "hero.cta.portfolio": { th: "แนะนำพอร์ตลงทุน", en: "Investment Portfolio" },

  // ===== Hero Quick Stats =====
  "stats.m2.label": { th: "M2 Growth เฉลี่ย", en: "Avg M2 Growth" },
  "stats.m2.value": { th: "6.2%/ปี", en: "6.2%/yr" },
  "stats.m2.sub": { th: "เงินเฟ้อจริง", en: "Real inflation" },
  "stats.cpi.label": { th: "CPI ที่รัฐบาลบอก", en: "Gov. Reported CPI" },
  "stats.cpi.value": { th: "2.5%/ปี", en: "2.5%/yr" },
  "stats.cpi.sub": { th: "ต่ำกว่าจริง 2.5x", en: "2.5x below reality" },
  "stats.purchasing.label": { th: "กำลังซื้อหายไป", en: "Purchasing Power Lost" },
  "stats.purchasing.value": { th: "76%", en: "76%" },
  "stats.purchasing.sub": { th: "ตั้งแต่ 2000 (Austrian)", en: "Since 2000 (Austrian)" },
  "stats.salary.label": { th: "เงินเดือนส่วนใหญ่", en: "Most Salaries" },
  "stats.salary.value": { th: "แพ้", en: "Lose" },
  "stats.salary.sub": { th: "โตแค่ 2-4%/ปี", en: "Only 2-4%/yr growth" },

  // ===== Real Inflation Section =====
  "inflation.title.real": { th: "เงินเฟ้อจริง", en: "Real Inflation" },
  "inflation.title.vs": {
    th: "vs เงินเฟ้อที่รัฐบาลบอก",
    en: "vs Government-Reported Inflation",
  },
  "inflation.description": {
    th: "สำนักเศรษฐศาสตร์ออสเตรียน (Austrian Economics) นิยามเงินเฟ้อว่า = การเพิ่มขึ้นของปริมาณเงิน (M2 Money Supply) ไม่ใช่ CPI ที่รัฐบาลจัดทำ ซึ่งถูกปรับแต่งด้วย hedonic adjustments, substitution bias จนต่ำกว่าความเป็นจริง",
    en: "Austrian Economics defines inflation as the increase in money supply (M2 Money Supply), not the government-produced CPI, which is manipulated through hedonic adjustments and substitution bias to appear lower than reality.",
  },
  "inflation.why.title": {
    th: "ทำไมรัฐบาลถึงรายงานเงินเฟ้อต่ำกว่าจริง?",
    en: "Why does the government under-report inflation?",
  },
  "inflation.why.hedonic.title": { th: "Hedonic Adjustments", en: "Hedonic Adjustments" },
  "inflation.why.hedonic.desc": {
    th: 'คอมพิวเตอร์เร็วขึ้น 2x ราคาเท่าเดิม รัฐบาลนับว่า "ถูกลง 50%"',
    en: 'A computer is 2x faster at the same price — the government counts it as "50% cheaper"',
  },
  "inflation.why.substitution.title": { th: "Substitution Bias", en: "Substitution Bias" },
  "inflation.why.substitution.desc": {
    th: 'เนื้อวัวแพงขึ้น? คนเปลี่ยนไปกินไก่ รัฐบาลนับว่า "ไม่แพงขึ้น"',
    en: 'Beef prices rise? People switch to chicken — the government counts it as "no increase"',
  },
  "inflation.why.geometric.title": {
    th: "Geometric Weighting",
    en: "Geometric Weighting",
  },
  "inflation.why.geometric.desc": {
    th: "ของที่แพงขึ้นเร็วจะถูกลดน้ำหนักใน basket อัตโนมัติ",
    en: "Items that rise quickly in price are automatically given less weight in the basket",
  },
  "inflation.why.assets.title": {
    th: "ไม่นับบ้าน/หุ้น/Crypto",
    en: "Excludes Housing/Stocks/Crypto",
  },
  "inflation.why.assets.desc": {
    th: "Asset inflation ไม่อยู่ใน CPI ทำให้ดูเหมือนเงินเฟ้อต่ำ",
    en: "Asset inflation is excluded from CPI, making inflation appear lower",
  },

  // ===== Inflation Charts =====
  "chart.m2.title": {
    th: "M2 Money Supply Growth vs CPI (รัฐบาล)",
    en: "M2 Money Supply Growth vs CPI (Government)",
  },
  "chart.m2.description": {
    th: "เงินเฟ้อจริง (สำนักออสเตรียน) = การขยายตัวของปริมาณเงิน (M2) ซึ่งสูงกว่า CPI ที่รัฐบาลประกาศเสมอ",
    en: "Real inflation (Austrian School) = expansion of money supply (M2), which is always higher than the government-reported CPI",
  },
  "chart.m2.legendM2": { th: "M2 Growth (เงินเฟ้อจริง)", en: "M2 Growth (Real Inflation)" },
  "chart.m2.legendCpi": { th: "CPI (รัฐบาลประกาศ)", en: "CPI (Gov. Reported)" },
  "chart.m2.tooltipM2": { th: "M2 Growth (เงินเฟ้อจริง)", en: "M2 Growth (Real Inflation)" },
  "chart.m2.tooltipCpi": { th: "CPI (รัฐบาลบอก)", en: "CPI (Gov. Reported)" },

  "chart.purchasing.title": {
    th: "กำลังซื้อที่หายไป ($100 ในปี 2000)",
    en: "Purchasing Power Lost ($100 in Year 2000)",
  },
  "chart.purchasing.description": {
    th: "เมื่อวัดจาก M2 กำลังซื้อหายไปมากกว่าที่รัฐบาลบอกถึง 3-4 เท่า",
    en: "Measured by M2, purchasing power loss is 3-4x more than what the government reports",
  },
  "chart.purchasing.tooltipAustrian": {
    th: "เงินเฟ้อจริง (Austrian)",
    en: "Real Inflation (Austrian)",
  },
  "chart.purchasing.tooltipCpi": { th: "ตามรัฐบาล (CPI)", en: "Per Government (CPI)" },
  "chart.purchasing.legendAustrian": {
    th: "กำลังซื้อจริง (Austrian)",
    en: "Real Purchasing Power (Austrian)",
  },
  "chart.purchasing.legendCpi": {
    th: "กำลังซื้อตามรัฐบาล (CPI)",
    en: "Purchasing Power per Gov. (CPI)",
  },

  "chart.asset.title": {
    th: "สินทรัพย์ $10,000 vs เงินเฟ้อ (M2) ตั้งแต่ปี 2000",
    en: "$10,000 in Assets vs Inflation (M2) Since 2000",
  },
  "chart.asset.description": {
    th: 'ต้อง "อย่างน้อย" เท่าเส้นสีทอง (M2) ถึงจะไม่เสียกำลังซื้อ',
    en: 'Must be "at least" equal to the gold line (M2) to not lose purchasing power',
  },
  "chart.asset.legendM2": { th: "M2 เงินเฟ้อ (baseline)", en: "M2 Inflation (baseline)" },
  "chart.asset.legendGold": { th: "ทองคำ", en: "Gold" },
  "chart.asset.legendSP500": { th: "S&P 500", en: "S&P 500" },
  "chart.asset.legendBitcoin": { th: "Bitcoin", en: "Bitcoin" },
  "chart.asset.legendXMR": { th: "Monero (XMR)", en: "Monero (XMR)" },
  "chart.asset.legendRealEstate": { th: "อสังหาริมทรัพย์", en: "Real Estate" },
  "chart.asset.tooltipM2": { th: "M2 (ต้องชนะเส้นนี้)", en: "M2 (Must beat this line)" },
  "chart.asset.tooltipGold": { th: "ทองคำ", en: "Gold" },
  "chart.asset.tooltipSP500": { th: "S&P 500", en: "S&P 500" },
  "chart.asset.tooltipBitcoin": { th: "Bitcoin", en: "Bitcoin" },
  "chart.asset.tooltipXMR": { th: "Monero (XMR)", en: "Monero (XMR)" },
  "chart.asset.tooltipRealEstate": { th: "อสังหาริมทรัพย์", en: "Real Estate" },

  // ===== Asset Table =====
  "assetTable.title": {
    th: "สินทรัพย์ไหนชนะเงินเฟ้อจริง?",
    en: "Which Assets Actually Beat Inflation?",
  },
  "assetTable.description": {
    th: "วัดจากเงินเฟ้อแบบ Austrian (M2 Growth เฉลี่ย 6.2%/ปี) ไม่ใช่ CPI",
    en: "Measured against Austrian inflation (avg M2 Growth 6.2%/yr), not CPI",
  },
  "assetTable.header.asset": { th: "สินทรัพย์", en: "Asset" },
  "assetTable.header.annualReturn": { th: "ผลตอบแทน/ปี", en: "Annual Return" },
  "assetTable.header.realInflation": { th: "เงินเฟ้อจริง", en: "Real Inflation" },
  "assetTable.header.realReturn": { th: "Real Return", en: "Real Return" },
  "assetTable.header.volatility": { th: "Volatility", en: "Volatility" },
  "assetTable.header.result": { th: "ผลลัพธ์", en: "Result" },
  "assetTable.beats": { th: "ชนะ", en: "Beats" },
  "assetTable.loses": { th: "แพ้", en: "Loses" },

  // ===== Asset Section (page.tsx) =====
  "assets.title.assets": { th: "สินทรัพย์", en: "Assets" },
  "assets.title.suffix": {
    th: "ไหนชนะเงินเฟ้อได้จริง?",
    en: " — Which Ones Actually Beat Inflation?",
  },
  "assets.description": {
    th: "เปรียบเทียบผลตอบแทนสินทรัพย์ต่างๆ กับเงินเฟ้อจริง (M2 Growth) ตั้งแต่ปี 2000-2025",
    en: "Comparing asset returns against real inflation (M2 Growth) from 2000-2025",
  },

  // ===== Salary Section =====
  "salary.title.salary": { th: "เงินเดือน", en: "Your Salary" },
  "salary.title.suffix": {
    th: "ของคุณ ชนะเงินเฟ้อหรือเปล่า?",
    en: " — Does It Beat Inflation?",
  },
  "salary.description": {
    th: "เงินเดือนต้องโตอย่างน้อย 6.2%/ปี (เท่า M2 growth) ถึงจะไม่จนลง — อาชีพส่วนใหญ่ไม่ถึง",
    en: "Salaries must grow at least 6.2%/yr (matching M2 growth) to not get poorer — most professions fall short",
  },

  // ===== Salary Table =====
  "salaryTable.title": {
    th: "เงินเดือนเฉลี่ยตามอาชีพ x ภูมิภาค",
    en: "Average Salary by Profession x Region",
  },
  "salaryTable.description": {
    th: "เงินเดือนต่อปี (USD) — เงินเฟ้อจริง (M2) เฉลี่ย 6.2%/ปี ถ้าเงินเดือนโตช้ากว่านี้ = จนลงทุกปี",
    en: "Annual salary (USD) — Real inflation (M2) avg 6.2%/yr. If salary grows slower = getting poorer every year",
  },
  "salaryTable.sort.salary": { th: "เงินเดือน", en: "Salary" },
  "salaryTable.sort.growth": { th: "อัตราเติบโต", en: "Growth Rate" },
  "salaryTable.sort.risk": { th: "AI Risk", en: "AI Risk" },
  "salaryTable.header.profession": { th: "อาชีพ", en: "Profession" },
  "salaryTable.header.northAmerica": { th: "North America", en: "North America" },
  "salaryTable.header.northAmericaShort": { th: "N.America", en: "N.America" },
  "salaryTable.header.europe": { th: "Europe", en: "Europe" },
  "salaryTable.header.asia": { th: "Asia", en: "Asia" },
  "salaryTable.header.middleEast": { th: "Middle East", en: "Middle East" },
  "salaryTable.header.latinAmerica": { th: "Latin America", en: "Latin America" },
  "salaryTable.header.growthPerYear": { th: "เติบโต/ปี", en: "Growth/yr" },
  "salaryTable.header.vsInflation": { th: "vs เงินเฟ้อ", en: "vs Inflation" },
  "salaryTable.header.aiRisk": { th: "AI Risk", en: "AI Risk" },
  "salaryTable.beats": { th: "ชนะ", en: "Beats" },
  "salaryTable.loses": { th: "แพ้", en: "Loses" },
  "salaryTable.aiRisk.high": { th: "สูง", en: "High" },
  "salaryTable.aiRisk.medium": { th: "กลาง", en: "Medium" },
  "salaryTable.aiRisk.low": { th: "ต่ำ", en: "Low" },

  // ===== Portfolio Section =====
  "portfolio.title.portfolio": { th: "แนะนำพอร์ต", en: "Recommended Portfolio" },
  "portfolio.title.suffix": {
    th: "ลงทุน เพื่อเอาชนะเงินเฟ้อ",
    en: " to Beat Inflation",
  },
  "portfolio.description": {
    th: "ไม่ว่าจะรับความเสี่ยงได้แค่ไหน สิ่งสำคัญคือต้องถือสินทรัพย์ที่ชนะเงินเฟ้อ — อย่าถือเงินสดเฉยๆ",
    en: "No matter your risk tolerance, the key is holding assets that beat inflation — don't just hold cash",
  },
  "portfolio.expectedReturn": { th: "ผลตอบแทนคาดหวัง", en: "Expected Return" },
  "portfolio.realReturn": {
    th: "Real Return (หักเงินเฟ้อ)",
    en: "Real Return (After Inflation)",
  },
  "portfolio.perYear": { th: "/ปี", en: "/yr" },

  // ===== Portfolio Principles =====
  "portfolio.principles.title": { th: "หลักการแบ่งพอร์ต", en: "Portfolio Allocation Principles" },
  "portfolio.principles.gold.title": { th: "ทองคำ 15-40%", en: "Gold 15-40%" },
  "portfolio.principles.gold.desc": {
    th: "Safe haven ชนะเงินเฟ้อมาตลอด 5,000 ปี ไม่มีใครพิมพ์เพิ่มได้",
    en: "Safe haven that has beaten inflation for 5,000 years — no one can print more",
  },
  "portfolio.principles.btc.title": { th: "Bitcoin 5-30%", en: "Bitcoin 5-30%" },
  "portfolio.principles.btc.desc": {
    th: "Digital gold, Supply จำกัด 21 ล้าน, ผลตอบแทนสูงสุดใน 15 ปี แต่ volatility สูง",
    en: "Digital gold, supply capped at 21M, highest returns in 15 years but high volatility",
  },
  "portfolio.principles.stocks.title": { th: "หุ้น 20-45%", en: "Stocks 20-45%" },
  "portfolio.principles.stocks.desc": {
    th: "เป็นเจ้าของธุรกิจที่ปรับราคาตามเงินเฟ้อได้ เน้น index fund ค่า fee ต่ำ",
    en: "Own businesses that can adjust prices with inflation — focus on low-fee index funds",
  },
  "portfolio.principles.cash.title": {
    th: "เงินสดให้น้อยที่สุด",
    en: "Minimize Cash Holdings",
  },
  "portfolio.principles.cash.desc": {
    th: "ถือแค่ 3-6 เดือนค่าใช้จ่าย ที่เหลือลงทุนทั้งหมด",
    en: "Hold only 3-6 months of expenses — invest everything else",
  },

  // ===== Career Section =====
  "careers.title.prefix": { th: "ทำ", en: "Which " },
  "careers.title.career": { th: "อาชีพ", en: "Career" },
  "careers.title.suffix": {
    th: "อะไร ถึงจะชนะเงินเฟ้อ?",
    en: " Can Beat Inflation?",
  },
  "careers.description": {
    th: "ถ้าไม่รวยพอจะลงทุน ทางเดียวคือเลือกอาชีพที่เงินเดือนโตเร็วกว่าเงินเฟ้อ (6.2%/ปี)",
    en: "If you can't invest enough, the only way is to choose a career where salary grows faster than inflation (6.2%/yr)",
  },
  "careers.avgGrowthLabel": {
    th: "เงินเดือนเติบโตเฉลี่ย:",
    en: "Avg salary growth:",
  },
  "careers.inflationRef": { th: "(เงินเฟ้อ 6.2%)", en: "(inflation 6.2%)" },

  // ===== AI Risk Section =====
  "aiRisk.title.ai": { th: "AI", en: "AI" },
  "aiRisk.title.suffix": {
    th: "กำลังมาแย่งงาน — อาชีพไหนรอด?",
    en: " Is Coming for Jobs — Which Careers Survive?",
  },
  "aiRisk.description": {
    th: "เงินเฟ้อก็หนักแล้ว ยังมี AI มาแย่งงานอีก คนที่ทำอาชีพเสี่ยงสูงจะจนลงเร็วเป็น 2 เท่า — ทั้งเงินเดือนไม่ขึ้นและงานหาย",
    en: "Inflation is bad enough, and now AI is taking jobs too. Those in high-risk professions will get poorer 2x faster — stagnant salaries and disappearing jobs",
  },
  "aiRisk.riskLevel.high": { th: "เสี่ยงสูง", en: "High Risk" },
  "aiRisk.riskLevel.medium": { th: "เสี่ยงกลาง", en: "Medium Risk" },
  "aiRisk.riskLevel.low": { th: "ปลอดภัย", en: "Safe" },
  "aiRisk.disappearsIn": { th: "หายไปใน:", en: "Disappears in:" },
  "aiRisk.relatedJobs": { th: "งานที่เกี่ยวข้อง:", en: "Related jobs:" },
  "aiRisk.reason": { th: "เหตุผล:", en: "Reason:" },
  "aiRisk.recommendation": { th: "แนะนำ:", en: "Recommendation:" },

  // ===== AI Risk Strategy Section =====
  "aiRisk.strategy.title": {
    th: "สรุป: กลยุทธ์เอาตัวรอดในยุค AI + เงินเฟ้อ",
    en: "Summary: Survival Strategy in the Age of AI + Inflation",
  },
  "aiRisk.strategy.1.title": {
    th: "เรียนรู้ใช้ AI เป็นเครื่องมือ",
    en: "Learn to Use AI as a Tool",
  },
  "aiRisk.strategy.1.desc": {
    th: "คนที่ใช้ AI เก่ง จะ productive ขึ้น 10x ไม่ถูกแทนที่",
    en: "Those who master AI will be 10x more productive — they won't be replaced",
  },
  "aiRisk.strategy.2.title": {
    th: "ลงทุนในสินทรัพย์ที่ชนะเงินเฟ้อ",
    en: "Invest in Inflation-Beating Assets",
  },
  "aiRisk.strategy.2.desc": {
    th: "ทองคำ + Bitcoin + หุ้น ไม่ใช่เงินฝากหรือพันธบัตร",
    en: "Gold + Bitcoin + Stocks, not savings accounts or bonds",
  },
  "aiRisk.strategy.3.title": {
    th: "เลือกอาชีพที่ AI แทนไม่ได้",
    en: "Choose AI-Proof Careers",
  },
  "aiRisk.strategy.3.desc": {
    th: "งานที่ต้องใช้มือ (ช่าง), งานที่ต้องใช้วิจารณญาณ (แพทย์), หรือเป็นคนสร้าง AI เอง",
    en: "Jobs requiring hands (tradespeople), judgment (doctors), or building AI itself",
  },
  "aiRisk.strategy.4.title": {
    th: "สร้างรายได้หลายทาง",
    en: "Build Multiple Income Streams",
  },
  "aiRisk.strategy.4.desc": {
    th: "อย่าพึ่งเงินเดือนอย่างเดียว มีธุรกิจเสริม/freelance/passive income",
    en: "Don't rely on salary alone — have side businesses/freelance/passive income",
  },

  // ===== Footer =====
  "footer.headline": {
    th: "อย่าให้เงินเฟ้อกินเงินคุณ",
    en: "Don't Let Inflation Eat Your Money",
  },
  "footer.disclaimer": {
    th: "ข้อมูลในเว็บนี้ใช้เพื่อการศึกษาเท่านั้น ไม่ใช่คำแนะนำการลงทุน กรุณาศึกษาเพิ่มเติมและปรึกษาผู้เชี่ยวชาญก่อนตัดสินใจลงทุน",
    en: "Information on this website is for educational purposes only and is not investment advice. Please do further research and consult professionals before making investment decisions.",
  },
  "footer.copyright": {
    th: "© 2025 BeatInflation — Built with Austrian Economics principles",
    en: "© 2025 BeatInflation — Built with Austrian Economics principles",
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key][lang];
}
