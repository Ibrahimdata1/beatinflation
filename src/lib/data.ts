// ===== AUSTRIAN ECONOMICS INFLATION DATA =====
// Austrian School: inflation = growth in money supply (M2), NOT CPI
// CPI understates true inflation by design (hedonic adjustments, substitution bias, etc.)

export const moneySupplyData = [
  { year: "2000", m2: 4.9, cpi: 3.4, gold: -5.4, silver: -5.0, sp500: -9.1, btc: 0, eth: 0, xmr: 0, realEstate: 8.2 },
  { year: "2001", m2: 10.3, cpi: 2.8, gold: 2.5, silver: -1.0, sp500: -11.9, btc: 0, eth: 0, xmr: 0, realEstate: 6.5 },
  { year: "2002", m2: 6.9, cpi: 1.6, gold: 24.7, silver: 5.0, sp500: -22.1, btc: 0, eth: 0, xmr: 0, realEstate: 7.8 },
  { year: "2003", m2: 5.2, cpi: 2.3, gold: 19.6, silver: 28.0, sp500: 28.7, btc: 0, eth: 0, xmr: 0, realEstate: 8.4 },
  { year: "2004", m2: 5.5, cpi: 2.7, gold: 5.2, silver: 14.0, sp500: 10.9, btc: 0, eth: 0, xmr: 0, realEstate: 11.2 },
  { year: "2005", m2: 4.0, cpi: 3.4, gold: 18.2, silver: 30.0, sp500: 4.9, btc: 0, eth: 0, xmr: 0, realEstate: 12.4 },
  { year: "2006", m2: 5.3, cpi: 3.2, gold: 23.2, silver: 45.0, sp500: 15.8, btc: 0, eth: 0, xmr: 0, realEstate: 1.1 },
  { year: "2007", m2: 5.9, cpi: 2.8, gold: 31.4, silver: 16.0, sp500: 5.5, btc: 0, eth: 0, xmr: 0, realEstate: -3.4 },
  { year: "2008", m2: 9.6, cpi: 3.8, gold: 5.5, silver: -24.0, sp500: -37.0, btc: 0, eth: 0, xmr: 0, realEstate: -12.3 },
  { year: "2009", m2: 3.5, cpi: -0.4, gold: 24.0, silver: 57.0, sp500: 26.5, btc: 0, eth: 0, xmr: 0, realEstate: -4.1 },
  { year: "2010", m2: 3.2, cpi: 1.6, gold: 29.5, silver: 83.0, sp500: 15.1, btc: 0, eth: 0, xmr: 0, realEstate: -1.8 },
  { year: "2011", m2: 9.6, cpi: 3.2, gold: 10.1, silver: -10.0, sp500: 2.1, btc: 1473, eth: 0, xmr: 0, realEstate: -3.7 },
  { year: "2012", m2: 8.1, cpi: 2.1, gold: 7.1, silver: 9.0, sp500: 16.0, btc: 186, eth: 0, xmr: 0, realEstate: 6.8 },
  { year: "2013", m2: 5.4, cpi: 1.5, gold: -28.3, silver: -36.0, sp500: 32.4, btc: 5507, eth: 0, xmr: 0, realEstate: 10.9 },
  { year: "2014", m2: 5.9, cpi: 1.6, gold: -1.5, silver: -20.0, sp500: 13.7, btc: -56, eth: 0, xmr: -80, realEstate: 4.6 },
  { year: "2015", m2: 5.7, cpi: 0.1, gold: -10.4, silver: -12.0, sp500: 1.4, btc: 36, eth: 0, xmr: -10, realEstate: 5.5 },
  { year: "2016", m2: 7.3, cpi: 1.3, gold: 8.6, silver: 15.0, sp500: 12.0, btc: 125, eth: 750, xmr: 2567, realEstate: 5.7 },
  { year: "2017", m2: 4.1, cpi: 2.1, gold: 13.7, silver: 7.0, sp500: 21.8, btc: 1331, eth: 9300, xmr: 2733, realEstate: 6.2 },
  { year: "2018", m2: 3.4, cpi: 2.4, gold: -1.6, silver: -9.0, sp500: -4.4, btc: -73, eth: -82, xmr: -87, realEstate: 4.8 },
  { year: "2019", m2: 6.7, cpi: 1.8, gold: 18.3, silver: 15.0, sp500: 31.5, btc: 87, eth: -7, xmr: 22, realEstate: 3.8 },
  { year: "2020", m2: 25.2, cpi: 1.2, gold: 25.1, silver: 47.0, sp500: 18.4, btc: 305, eth: 470, xmr: 182, realEstate: 10.4 },
  { year: "2021", m2: 12.8, cpi: 4.7, gold: -3.6, silver: -12.0, sp500: 28.7, btc: 59, eth: 400, xmr: 48, realEstate: 18.9 },
  { year: "2022", m2: -1.3, cpi: 8.0, gold: -0.3, silver: 3.0, sp500: -18.1, btc: -65, eth: -67, xmr: -35, realEstate: -5.1 },
  { year: "2023", m2: 3.5, cpi: 4.1, gold: 13.1, silver: 1.0, sp500: 26.3, btc: 156, eth: 90, xmr: 13, realEstate: 2.8 },
  { year: "2024", m2: 3.9, cpi: 2.9, gold: 27.2, silver: 22.0, sp500: 25.0, btc: 121, eth: 47, xmr: 29, realEstate: 3.1 },
  { year: "2025", m2: 4.2, cpi: 2.6, gold: 12.0, silver: 12.0, sp500: 4.5, btc: 18, eth: -15, xmr: 50, realEstate: 1.2 },
];

// Cumulative purchasing power loss (base year 2000 = 100)
// Austrian method: based on M2 money supply growth
export const purchasingPowerData = moneySupplyData.reduce(
  (acc, d, i) => {
    const prev = i === 0 ? 100 : acc[i - 1].austrian;
    const prevCpi = i === 0 ? 100 : acc[i - 1].govCpi;
    acc.push({
      year: d.year,
      austrian: +(prev / (1 + d.m2 / 100)).toFixed(1),
      govCpi: +(prevCpi / (1 + d.cpi / 100)).toFixed(1),
    });
    return acc;
  },
  [] as { year: string; austrian: number; govCpi: number }[]
);

// ===== ASSET PERFORMANCE COMPARISON =====
export interface AssetComparison {
  name: string;
  nameEn: string;
  annualReturn: number;
  austrianInflation: number;
  realReturn: number;
  volatility: number;
  beatsInflation: boolean;
  verdict: string;
  verdictEn: string;
  icon: string;
}

const AVG_AUSTRIAN_INFLATION = 6.2;

export const assetComparisons: AssetComparison[] = [
  {
    name: "ทองคำ",
    nameEn: "Gold",
    annualReturn: 10.9,
    austrianInflation: AVG_AUSTRIAN_INFLATION,
    realReturn: 4.7,
    volatility: 15.0,
    beatsInflation: true,
    verdict: "ชนะเงินเฟ้อได้ดี ผลตอบแทนสูงกว่า S&P 500 ในช่วง 2000-2025 เพราะเริ่มต้นจากจุดต่ำ + เป็น Safe Haven ยามวิกฤต",
    verdictEn: "Beats inflation well — actually outperformed S&P 500 in 2000-2025 due to low starting point + safe haven during crises",
    icon: "🥇",
  },
  {
    name: "Bitcoin",
    nameEn: "Bitcoin",
    annualReturn: 100.0,
    austrianInflation: AVG_AUSTRIAN_INFLATION,
    realReturn: 93.8,
    volatility: 65.0,
    beatsInflation: true,
    verdict: "ชนะขาดลอย (CAGR ~100% ตั้งแต่ 2011) แต่ volatility สูงมาก ต้องรับ drawdown -70% ได้",
    verdictEn: "Crushes inflation (~100% CAGR since 2011) but extreme volatility — must tolerate -70% drawdowns",
    icon: "₿",
  },
  {
    name: "Ethereum (ETH)",
    nameEn: "Ethereum (ETH)",
    annualReturn: 85.0,
    austrianInflation: AVG_AUSTRIAN_INFLATION,
    realReturn: 78.8,
    volatility: 90.0,
    beatsInflation: true,
    verdict: "ชนะเงินเฟ้อแบบขาดลอย (CAGR ~85% ตั้งแต่ 2016) Smart contract platform หลัก แต่ volatility สูงมาก",
    verdictEn: "Crushes inflation (~85% CAGR since 2016) — leading smart contract platform, but extreme volatility",
    icon: "⟠",
  },
  {
    name: "Monero (XMR)",
    nameEn: "Monero (XMR)",
    annualReturn: 50.0,
    austrianInflation: AVG_AUSTRIAN_INFLATION,
    realReturn: 43.8,
    volatility: 80.0,
    beatsInflation: true,
    verdict: "Privacy coin ชนะเงินเฟ้อแบบขาดลอย (CAGR ~50% ตั้งแต่ 2014) แต่ volatility สูงกว่า BTC และมีความเสี่ยงด้านกฎหมาย",
    verdictEn: "Privacy coin crushes inflation (~50% CAGR since 2014) but higher volatility than BTC with regulatory risk",
    icon: "ɱ",
  },
  {
    name: "เงิน (Silver)",
    nameEn: "Silver",
    annualReturn: 7.2,
    austrianInflation: AVG_AUSTRIAN_INFLATION,
    realReturn: 1.0,
    volatility: 28.0,
    beatsInflation: true,
    verdict: "ชนะเงินเฟ้อได้นิดเดียว (+1%/ปี) แต่ volatility สูงกว่าทองคำ 2 เท่า risk-adjusted แย่กว่าทองคำมาก",
    verdictEn: "Barely beats inflation (+1%/yr) but 2x more volatile than gold — much worse risk-adjusted returns",
    icon: "🥈",
  },
  {
    name: "หุ้น S&P 500",
    nameEn: "S&P 500",
    annualReturn: 7.9,
    austrianInflation: AVG_AUSTRIAN_INFLATION,
    realReturn: 1.7,
    volatility: 15.0,
    beatsInflation: true,
    verdict: "ชนะเงินเฟ้อได้เล็กน้อย (+1.7%/ปี) ช่วง 2000-2025 เริ่มจาก dot-com bubble ทำให้ผลตอบแทนต่ำกว่าค่าเฉลี่ยระยะยาว",
    verdictEn: "Barely beats inflation (+1.7%/yr) — 2000-2025 started from dot-com peak, dragging returns below long-run average",
    icon: "📈",
  },
  {
    name: "อสังหาริมทรัพย์",
    nameEn: "Real Estate",
    annualReturn: 4.7,
    austrianInflation: AVG_AUSTRIAN_INFLATION,
    realReturn: -1.5,
    volatility: 10.0,
    beatsInflation: false,
    verdict: "แพ้เงินเฟ้อ (ราคาบ้านอย่างเดียว) ถ้ารวมค่าเช่า ~4-5% อาจพอสู้ได้",
    verdictEn: "Loses to inflation (price appreciation only). With ~4-5% rental yield, total return may keep up",
    icon: "🏠",
  },
  {
    name: "พันธบัตรรัฐบาล",
    nameEn: "Government Bonds",
    annualReturn: 3.7,
    austrianInflation: AVG_AUSTRIAN_INFLATION,
    realReturn: -2.5,
    volatility: 5.5,
    beatsInflation: false,
    verdict: "แพ้เงินเฟ้อ! รัฐบาลกดดอกเบี้ยให้ต่ำกว่าเงินเฟ้อเสมอ (financial repression)",
    verdictEn: "Loses to inflation! Government keeps rates below inflation by design (financial repression)",
    icon: "📜",
  },
  {
    name: "เงินฝากธนาคาร",
    nameEn: "Savings Account",
    annualReturn: 0.4,
    austrianInflation: AVG_AUSTRIAN_INFLATION,
    realReturn: -5.8,
    volatility: 0.5,
    beatsInflation: false,
    verdict: "แพ้ราบคาบ! ดอกเบี้ยเฉลี่ยแค่ ~0.4%/ปี (2009-2021 แทบเป็น 0%) สูญเสียกำลังซื้อปีละ ~6%",
    verdictEn: "Total loss! Average rate only ~0.4%/yr (near 0% in 2009-2021) — loses ~6% purchasing power per year",
    icon: "🏦",
  },
  {
    name: "เงินสด",
    nameEn: "Cash",
    annualReturn: 0,
    austrianInflation: AVG_AUSTRIAN_INFLATION,
    realReturn: -6.2,
    volatility: 0,
    beatsInflation: false,
    verdict: "เลวร้ายที่สุด! ถือเงินสด = จนลงทุกปี -6.2%",
    verdictEn: "The worst! Holding cash = getting 6.2% poorer every year",
    icon: "💵",
  },
];

// ===== SALARY DATA BY PROFESSION & REGION =====
export interface SalaryData {
  profession: string;
  professionTh: string;
  northAmerica: number;
  europe: number;
  asia: number;
  middleEast: number;
  latinAmerica: number;
  salaryGrowthRate: number;
  beatsInflation: boolean;
  aiRisk: "low" | "medium" | "high";
}

export const salaryData: SalaryData[] = [
  {
    profession: "Software Engineer",
    professionTh: "วิศวกรซอฟต์แวร์",
    northAmerica: 125000,
    europe: 65000,
    asia: 25000,
    middleEast: 45000,
    latinAmerica: 22000,
    salaryGrowthRate: 5.2,
    beatsInflation: false,
    aiRisk: "medium",
  },
  {
    profession: "Doctor",
    professionTh: "แพทย์",
    northAmerica: 250000,
    europe: 90000,
    asia: 35000,
    middleEast: 80000,
    latinAmerica: 28000,
    salaryGrowthRate: 3.8,
    beatsInflation: false,
    aiRisk: "low",
  },
  {
    profession: "Nurse",
    professionTh: "พยาบาล",
    northAmerica: 82000,
    europe: 42000,
    asia: 12000,
    middleEast: 35000,
    latinAmerica: 10000,
    salaryGrowthRate: 3.5,
    beatsInflation: false,
    aiRisk: "low",
  },
  {
    profession: "Accountant",
    professionTh: "นักบัญชี",
    northAmerica: 75000,
    europe: 48000,
    asia: 15000,
    middleEast: 32000,
    latinAmerica: 14000,
    salaryGrowthRate: 2.8,
    beatsInflation: false,
    aiRisk: "high",
  },
  {
    profession: "Teacher",
    professionTh: "ครู/อาจารย์",
    northAmerica: 58000,
    europe: 40000,
    asia: 10000,
    middleEast: 28000,
    latinAmerica: 8000,
    salaryGrowthRate: 2.1,
    beatsInflation: false,
    aiRisk: "medium",
  },
  {
    profession: "Data Scientist",
    professionTh: "นักวิทยาศาสตร์ข้อมูล",
    northAmerica: 135000,
    europe: 70000,
    asia: 28000,
    middleEast: 50000,
    latinAmerica: 24000,
    salaryGrowthRate: 6.8,
    beatsInflation: true,
    aiRisk: "medium",
  },
  {
    profession: "AI/ML Engineer",
    professionTh: "วิศวกร AI/ML",
    northAmerica: 175000,
    europe: 85000,
    asia: 40000,
    middleEast: 65000,
    latinAmerica: 30000,
    salaryGrowthRate: 9.5,
    beatsInflation: true,
    aiRisk: "low",
  },
  {
    profession: "Electrician/Plumber",
    professionTh: "ช่างไฟฟ้า/ช่างประปา",
    northAmerica: 65000,
    europe: 38000,
    asia: 10000,
    middleEast: 22000,
    latinAmerica: 9000,
    salaryGrowthRate: 4.1,
    beatsInflation: false,
    aiRisk: "low",
  },
  {
    profession: "Marketing Manager",
    professionTh: "ผู้จัดการการตลาด",
    northAmerica: 95000,
    europe: 55000,
    asia: 20000,
    middleEast: 40000,
    latinAmerica: 18000,
    salaryGrowthRate: 3.2,
    beatsInflation: false,
    aiRisk: "high",
  },
  {
    profession: "Graphic Designer",
    professionTh: "นักออกแบบกราฟิก",
    northAmerica: 55000,
    europe: 35000,
    asia: 10000,
    middleEast: 22000,
    latinAmerica: 9000,
    salaryGrowthRate: 1.8,
    beatsInflation: false,
    aiRisk: "high",
  },
  {
    profession: "Lawyer",
    professionTh: "ทนายความ",
    northAmerica: 130000,
    europe: 70000,
    asia: 25000,
    middleEast: 55000,
    latinAmerica: 20000,
    salaryGrowthRate: 3.5,
    beatsInflation: false,
    aiRisk: "medium",
  },
  {
    profession: "Customer Service",
    professionTh: "บริการลูกค้า",
    northAmerica: 38000,
    europe: 28000,
    asia: 6000,
    middleEast: 15000,
    latinAmerica: 5000,
    salaryGrowthRate: 1.5,
    beatsInflation: false,
    aiRisk: "high",
  },
  {
    profession: "Chef/Cook",
    professionTh: "เชฟ/พ่อครัว",
    northAmerica: 52000,
    europe: 32000,
    asia: 8000,
    middleEast: 20000,
    latinAmerica: 7000,
    salaryGrowthRate: 2.2,
    beatsInflation: false,
    aiRisk: "low",
  },
  {
    profession: "Cybersecurity",
    professionTh: "ผู้เชี่ยวชาญ Cybersecurity",
    northAmerica: 140000,
    europe: 75000,
    asia: 32000,
    middleEast: 55000,
    latinAmerica: 25000,
    salaryGrowthRate: 8.2,
    beatsInflation: true,
    aiRisk: "low",
  },
  {
    profession: "Content Writer",
    professionTh: "นักเขียนคอนเทนต์",
    northAmerica: 50000,
    europe: 32000,
    asia: 8000,
    middleEast: 18000,
    latinAmerica: 7000,
    salaryGrowthRate: 1.2,
    beatsInflation: false,
    aiRisk: "high",
  },
];

// ===== AI JOB RISK ANALYSIS =====
export interface AIJobRisk {
  category: string;
  categoryEn: string;
  jobs: string;
  jobsEn: string;
  riskLevel: "high" | "medium" | "low";
  riskScore: number;
  timeframe: string;
  timeframeEn: string;
  reason: string;
  reasonEn: string;
  recommendation: string;
  recommendationEn: string;
}

export const aiJobRisks: AIJobRisk[] = [
  {
    category: "งานเอกสาร/ธุรการ",
    categoryEn: "Clerical/Administrative",
    jobs: "Data Entry, เสมียน, พนักงานบัญชี",
    jobsEn: "Data Entry, Clerks, Bookkeepers",
    riskLevel: "high",
    riskScore: 95,
    timeframe: "1-3 ปี",
    timeframeEn: "1-3 years",
    reason: "AI ทำได้เร็วกว่า แม่นกว่า ถูกกว่า 99%",
    reasonEn: "AI is faster, more accurate, and 99% cheaper",
    recommendation: "เปลี่ยนสาย เรียน data analysis หรือ AI operations",
    recommendationEn: "Switch careers — learn data analysis or AI operations",
  },
  {
    category: "บริการลูกค้า/Call Center",
    categoryEn: "Customer Service/Call Center",
    jobs: "Customer Service, พนักงานรับโทรศัพท์",
    jobsEn: "Customer Service, Phone Operators",
    riskLevel: "high",
    riskScore: 90,
    timeframe: "1-3 ปี",
    timeframeEn: "1-3 years",
    reason: "Chatbot/Voice AI แทนที่ได้ 80%+ ของการสนทนา",
    reasonEn: "Chatbot/Voice AI can handle 80%+ of conversations",
    recommendation: "เปลี่ยนไป Customer Success (ต้องใช้ strategic thinking)",
    recommendationEn: "Move to Customer Success (requires strategic thinking)",
  },
  {
    category: "การแปล/ล่าม",
    categoryEn: "Translation/Interpretation",
    jobs: "นักแปลเอกสาร, ล่ามทั่วไป",
    jobsEn: "Document Translators, General Interpreters",
    riskLevel: "high",
    riskScore: 88,
    timeframe: "2-4 ปี",
    timeframeEn: "2-4 years",
    reason: "AI translation แม่นขึ้นเรื่อยๆ โดยเฉพาะ technical docs",
    reasonEn: "AI translation keeps improving, especially for technical docs",
    recommendation: "เน้น localization เชิงวัฒนธรรม หรือเป็นล่ามเฉพาะทาง",
    recommendationEn: "Focus on cultural localization or specialized interpretation",
  },
  {
    category: "นักออกแบบกราฟิก (ระดับต้น)",
    categoryEn: "Graphic Design (Junior)",
    jobs: "Graphic Designer, UI junior, social media designer",
    jobsEn: "Graphic Designer, Junior UI, Social Media Designer",
    riskLevel: "high",
    riskScore: 85,
    timeframe: "2-4 ปี",
    timeframeEn: "2-4 years",
    reason: "Midjourney/DALL-E/Figma AI ทำงานพื้นฐานแทนได้",
    reasonEn: "Midjourney/DALL-E/Figma AI can handle basic design work",
    recommendation: "ยกระดับเป็น UX strategist หรือ brand director",
    recommendationEn: "Level up to UX strategist or brand director",
  },
  {
    category: "เขียนคอนเทนต์พื้นฐาน",
    categoryEn: "Basic Content Writing",
    jobs: "Copywriter, Content Writer, SEO Writer",
    jobsEn: "Copywriter, Content Writer, SEO Writer",
    riskLevel: "high",
    riskScore: 82,
    timeframe: "1-3 ปี",
    timeframeEn: "1-3 years",
    reason: "LLM เขียนบทความ SEO, product descriptions ได้ดี",
    reasonEn: "LLMs can write SEO articles and product descriptions well",
    recommendation: "เน้น thought leadership, storytelling เชิงลึก",
    recommendationEn: "Focus on thought leadership and deep storytelling",
  },
  {
    category: "โปรแกรมเมอร์ (ระดับต้น)",
    categoryEn: "Programming (Junior)",
    jobs: "Junior Developer, QA Tester, WordPress Dev",
    jobsEn: "Junior Developer, QA Tester, WordPress Dev",
    riskLevel: "high",
    riskScore: 78,
    timeframe: "2-5 ปี",
    timeframeEn: "2-5 years",
    reason: "AI Coding Agents ทำงาน routine ได้ แก้ bug เบื้องต้นได้",
    reasonEn: "AI Coding Agents handle routine work and basic bug fixes",
    recommendation: "เปลี่ยนเป็น AI-augmented dev, เน้น system design",
    recommendationEn: "Become an AI-augmented dev, focus on system design",
  },
  {
    category: "นักบัญชี/ผู้ตรวจสอบบัญชี",
    categoryEn: "Accounting/Auditing",
    jobs: "บัญชี, ผู้สอบบัญชี, Tax preparer",
    jobsEn: "Accountants, Auditors, Tax Preparers",
    riskLevel: "medium",
    riskScore: 70,
    timeframe: "3-5 ปี",
    timeframeEn: "3-5 years",
    reason: "AI bookkeeping/audit ทำ routine ได้ แต่ยังต้องมีคนตัดสินใจ",
    reasonEn: "AI handles routine bookkeeping/audit, but decisions still need humans",
    recommendation: "เน้น advisory, tax planning, forensic accounting",
    recommendationEn: "Focus on advisory, tax planning, forensic accounting",
  },
  {
    category: "ทนายความ (ระดับต้น)",
    categoryEn: "Law (Junior)",
    jobs: "Paralegal, ทนาย junior, Legal research",
    jobsEn: "Paralegal, Junior Lawyers, Legal Research",
    riskLevel: "medium",
    riskScore: 65,
    timeframe: "3-5 ปี",
    timeframeEn: "3-5 years",
    reason: "AI ทำ legal research, contract review ได้ แต่ court ยังต้องคน",
    reasonEn: "AI handles legal research and contract review, but courts still need humans",
    recommendation: "เน้น litigation, นโยบาย, ด้านที่ต้อง human judgment",
    recommendationEn: "Focus on litigation, policy, areas requiring human judgment",
  },
  {
    category: "การตลาดดิจิทัล",
    categoryEn: "Digital Marketing",
    jobs: "Digital Marketer, Social Media Manager",
    jobsEn: "Digital Marketer, Social Media Manager",
    riskLevel: "medium",
    riskScore: 60,
    timeframe: "3-5 ปี",
    timeframeEn: "3-5 years",
    reason: "AI ทำ ad optimization, A/B testing ได้ แต่ strategy ยังต้องคน",
    reasonEn: "AI handles ad optimization and A/B testing, but strategy still needs humans",
    recommendation: "เน้น brand strategy, creative direction, CX",
    recommendationEn: "Focus on brand strategy, creative direction, CX",
  },
  {
    category: "แพทย์/พยาบาล",
    categoryEn: "Doctors/Nurses",
    jobs: "หมอ, พยาบาล, กายภาพบำบัด",
    jobsEn: "Doctors, Nurses, Physical Therapists",
    riskLevel: "low",
    riskScore: 15,
    timeframe: "10+ ปี",
    timeframeEn: "10+ years",
    reason: "ต้องสัมผัส วินิจฉัยร่วมกับอารมณ์ ความรับผิดชอบทางกฎหมาย",
    reasonEn: "Requires physical touch, emotional diagnosis, legal responsibility",
    recommendation: "ปลอดภัย แต่ควรเรียนรู้ใช้ AI เป็นเครื่องมือช่วย",
    recommendationEn: "Safe — but learn to use AI as a supporting tool",
  },
  {
    category: "ช่างฝีมือ/ก่อสร้าง",
    categoryEn: "Skilled Trades/Construction",
    jobs: "ช่างไฟ, ช่างประปา, ช่างเชื่อม, ช่างยนต์",
    jobsEn: "Electricians, Plumbers, Welders, Mechanics",
    riskLevel: "low",
    riskScore: 10,
    timeframe: "15+ ปี",
    timeframeEn: "15+ years",
    reason: "ต้องใช้มือ ทำงานในสภาพแวดล้อมที่ไม่แน่นอน robot ยังทำไม่ได้",
    reasonEn: "Requires hands-on work in unpredictable environments — robots can't do this yet",
    recommendation: "ปลอดภัยมาก ขาดแคลนแรงงาน = เงินเดือนจะขึ้นเร็ว",
    recommendationEn: "Very safe — labor shortage means salaries will rise fast",
  },
  {
    category: "AI/ML Engineer",
    categoryEn: "AI/ML Engineer",
    jobs: "วิศวกร AI, ML Researcher, Data Scientist",
    jobsEn: "AI Engineers, ML Researchers, Data Scientists",
    riskLevel: "low",
    riskScore: 8,
    timeframe: "ไม่มีกำหนด",
    timeframeEn: "Indefinite",
    reason: "เป็นคนสร้าง AI เอง ยิ่ง AI เติบโต ยิ่งต้องการคนเหล่านี้",
    reasonEn: "They build AI itself — the more AI grows, the more they're needed",
    recommendation: "ดีที่สุด เป็นอาชีพที่จะเติบโตมากที่สุดในทศวรรษนี้",
    recommendationEn: "The best — will be the fastest-growing career this decade",
  },
  {
    category: "Cybersecurity",
    categoryEn: "Cybersecurity",
    jobs: "Security Engineer, Pentester, SOC Analyst",
    jobsEn: "Security Engineers, Pentesters, SOC Analysts",
    riskLevel: "low",
    riskScore: 12,
    timeframe: "10+ ปี",
    timeframeEn: "10+ years",
    reason: "AI สร้างภัยคุกคามใหม่ ยิ่งต้องการคนป้องกัน",
    reasonEn: "AI creates new threats — even more security professionals are needed",
    recommendation: "เติบโตสวนทาง ยิ่ง AI มากยิ่งต้องการ security มาก",
    recommendationEn: "Counter-cyclical growth — more AI means more security demand",
  },
];

// ===== PORTFOLIO RECOMMENDATIONS =====
export interface PortfolioAllocation {
  name: string;
  nameEn: string;
  riskLevel: string;
  description: string;
  descriptionEn: string;
  allocations: { asset: string; assetEn: string; pct: number; color: string }[];
  expectedReturn: number;
  expectedRealReturn: number;
}

export const portfolios: PortfolioAllocation[] = [
  {
    name: "Conservative (เสี่ยงต่ำ)",
    nameEn: "Conservative (Low Risk)",
    riskLevel: "low",
    description: "สำหรับคนที่ต้องการรักษาทุน ไม่ชอบความเสี่ยง",
    descriptionEn: "For those who want to preserve capital with low risk tolerance",
    allocations: [
      { asset: "ทองคำ", assetEn: "Gold", pct: 40, color: "#E8B878" },
      { asset: "หุ้น S&P 500", assetEn: "S&P 500", pct: 30, color: "#4ade80" },
      { asset: "Bitcoin", assetEn: "Bitcoin", pct: 5, color: "#f7931a" },
      { asset: "อสังหาฯ (REITs)", assetEn: "REITs", pct: 15, color: "#60a5fa" },
      { asset: "เงินสด/Stablecoin", assetEn: "Cash/Stablecoin", pct: 10, color: "#94a3b8" },
    ],
    expectedReturn: 8.5,
    expectedRealReturn: 2.3,
  },
  {
    name: "Balanced (สมดุล)",
    nameEn: "Balanced (Medium Risk)",
    riskLevel: "medium",
    description: "สำหรับคนที่รับความเสี่ยงปานกลางได้ ต้องการเติบโต",
    descriptionEn: "For those with moderate risk tolerance seeking growth",
    allocations: [
      { asset: "หุ้น S&P 500", assetEn: "S&P 500", pct: 35, color: "#4ade80" },
      { asset: "Bitcoin", assetEn: "Bitcoin", pct: 15, color: "#f7931a" },
      { asset: "ทองคำ", assetEn: "Gold", pct: 25, color: "#E8B878" },
      { asset: "หุ้นเติบโต (Tech)", assetEn: "Growth Stocks (Tech)", pct: 15, color: "#a78bfa" },
      { asset: "อสังหาฯ (REITs)", assetEn: "REITs", pct: 10, color: "#60a5fa" },
    ],
    expectedReturn: 14.2,
    expectedRealReturn: 8.0,
  },
  {
    name: "Aggressive (เสี่ยงสูง)",
    nameEn: "Aggressive (High Risk)",
    riskLevel: "high",
    description: "สำหรับคนที่รับ drawdown -50% ได้ ต้องการผลตอบแทนสูงสุด",
    descriptionEn: "For those who can tolerate -50% drawdowns seeking maximum returns",
    allocations: [
      { asset: "Bitcoin", assetEn: "Bitcoin", pct: 30, color: "#f7931a" },
      { asset: "หุ้นเติบโต (Tech)", assetEn: "Growth Stocks (Tech)", pct: 25, color: "#a78bfa" },
      { asset: "หุ้น S&P 500", assetEn: "S&P 500", pct: 20, color: "#4ade80" },
      { asset: "ทองคำ", assetEn: "Gold", pct: 15, color: "#E8B878" },
      { asset: "Altcoins", assetEn: "Altcoins", pct: 10, color: "#f87171" },
    ],
    expectedReturn: 22.5,
    expectedRealReturn: 16.3,
  },
];

// ===== CAREERS THAT BEAT INFLATION =====
export interface CareerAdvice {
  tier: string;
  tierEn: string;
  careers: string[];
  careersEn: string[];
  avgSalaryGrowth: number;
  reason: string;
  reasonEn: string;
}

export const careerAdvice: CareerAdvice[] = [
  {
    tier: "Tier S - ชนะเงินเฟ้อแน่นอน",
    tierEn: "Tier S - Guaranteed to Beat Inflation",
    careers: [
      "AI/ML Engineer (เติบโต 9.5%/ปี)",
      "Cybersecurity Specialist (เติบโต 8.2%/ปี)",
      "เจ้าของธุรกิจ/Entrepreneur (ปรับราคาตามเงินเฟ้อได้)",
      "Freelancer ระดับ expert ที่รับงานเป็น USD/EUR",
    ],
    careersEn: [
      "AI/ML Engineer (9.5%/yr growth)",
      "Cybersecurity Specialist (8.2%/yr growth)",
      "Business Owner/Entrepreneur (can adjust prices with inflation)",
      "Expert Freelancer earning in USD/EUR",
    ],
    avgSalaryGrowth: 9.0,
    reason: "ทักษะหายาก ความต้องการสูง สามารถปรับค่าตอบแทนได้เอง",
    reasonEn: "Rare skills, high demand, can negotiate their own compensation",
  },
  {
    tier: "Tier A - มีโอกาสชนะ",
    tierEn: "Tier A - Good Chance to Beat It",
    careers: [
      "Data Scientist (เติบโต 6.8%/ปี)",
      "DevOps/Cloud Engineer (เติบโต 6.5%/ปี)",
      "Product Manager ด้าน Tech (เติบโต 6.2%/ปี)",
      "ช่างฝีมือเฉพาะทาง (ขาดแคลน = ค่าแรงขึ้น)",
    ],
    careersEn: [
      "Data Scientist (6.8%/yr growth)",
      "DevOps/Cloud Engineer (6.5%/yr growth)",
      "Tech Product Manager (6.2%/yr growth)",
      "Specialized Tradespeople (shortage = rising wages)",
    ],
    avgSalaryGrowth: 6.5,
    reason: "ทักษะมีความต้องการสูง แต่ต้อง upskill ตลอด",
    reasonEn: "High-demand skills, but requires constant upskilling",
  },
  {
    tier: "Tier B - พอสู้ได้",
    tierEn: "Tier B - Can Compete",
    careers: [
      "Software Engineer ระดับ Senior+ (เติบโต 5.2%/ปี)",
      "แพทย์เฉพาะทาง (เติบโต 3.8%/ปี + มีรายได้เสริม)",
      "วิศวกรไฟฟ้า/เครื่องกล (เติบโต 4%/ปี)",
    ],
    careersEn: [
      "Senior+ Software Engineer (5.2%/yr growth)",
      "Specialist Doctor (3.8%/yr + side income)",
      "Electrical/Mechanical Engineer (4%/yr growth)",
    ],
    avgSalaryGrowth: 4.5,
    reason: "เงินเดือนโตช้ากว่าเงินเฟ้อเล็กน้อย แต่มีโอกาสเสริมรายได้จากลงทุน",
    reasonEn: "Salary grows slightly slower than inflation, but investment income can supplement",
  },
  {
    tier: "Tier C - แพ้เงินเฟ้อ",
    tierEn: "Tier C - Loses to Inflation",
    careers: [
      "ครู/อาจารย์ (เติบโต 2.1%/ปี)",
      "พนักงานบริษัททั่วไป (เติบโต 2-3%/ปี)",
      "พยาบาล (เติบโต 3.5%/ปี แต่ workload สูง)",
    ],
    careersEn: [
      "Teachers (2.1%/yr growth)",
      "General Office Workers (2-3%/yr growth)",
      "Nurses (3.5%/yr but heavy workload)",
    ],
    avgSalaryGrowth: 2.5,
    reason: "เงินเดือนโตช้ากว่า M2 มาก ต้องพึ่งการลงทุนเสริม",
    reasonEn: "Salary grows much slower than M2 — must rely on investment income",
  },
  {
    tier: "Tier D - อันตราย! AI กำลังมาแย่ง",
    tierEn: "Tier D - Danger! AI Is Coming",
    careers: [
      "Content Writer/Copywriter (AI ทำแทนได้ 80%)",
      "Graphic Designer ระดับต้น (AI generate ได้)",
      "Data Entry / ธุรการ (หายไปแน่ใน 3 ปี)",
      "Call Center / Customer Service (chatbot แทน)",
      "Junior Developer / QA Tester (AI coding agents)",
      "นักบัญชี / Bookkeeper (AI accounting)",
      "นักแปลเอกสาร (AI translation)",
    ],
    careersEn: [
      "Content Writer/Copywriter (AI replaces 80%)",
      "Junior Graphic Designer (AI can generate)",
      "Data Entry/Clerical (gone within 3 years)",
      "Call Center/Customer Service (chatbots replace)",
      "Junior Developer/QA Tester (AI coding agents)",
      "Accountant/Bookkeeper (AI accounting)",
      "Document Translator (AI translation)",
    ],
    avgSalaryGrowth: -2.0,
    reason: "AI ทำได้ถูกกว่า เร็วกว่า เงินเดือนจะลดลงหรืองานหายไป",
    reasonEn: "AI is cheaper and faster — salaries will drop or jobs will disappear",
  },
];
