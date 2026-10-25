function makeNewsBannerDataUri(tag, title, sub, bgStart, bgEnd, accent, dateLabel) {
      const badgeText = dateLabel || "24–25 OCT 2026 • VERIFIED";
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="645" height="390" viewBox="0 0 645 390">
        <defs>
          <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${bgStart}"/>
            <stop offset="100%" stop-color="${bgEnd}"/>
          </linearGradient>
        </defs>
        <rect width="645" height="390" fill="url(#g)"/>
        <circle cx="580" cy="60" r="130" fill="${accent}" opacity="0.14"/>
        <circle cx="70" cy="340" r="110" fill="${accent}" opacity="0.1"/>
        <rect x="34" y="30" width="577" height="330" rx="14" fill="none" stroke="${accent}" stroke-width="2" opacity="0.35"/>
        <rect x="54" y="52" width="250" height="34" rx="6" fill="${accent}"/>
        <text x="68" y="75" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">${tag}</text>
        <rect x="415" y="52" width="176" height="34" rx="6" fill="#0f172a" fill-opacity="0.65" stroke="${accent}" stroke-width="1.2"/>
        <text x="503" y="74" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#f8fafc">${badgeText}</text>
        <text x="54" y="140" font-family="Arial, sans-serif" font-size="25" font-weight="bold" fill="#ffffff">${title}</text>
        <text x="54" y="182" font-family="Arial, sans-serif" font-size="19" font-weight="bold" fill="${accent}">${sub}</text>
        <line x1="54" y1="215" x2="585" y2="215" stroke="#ffffff" stroke-opacity="0.25" stroke-width="1.5"/>
        <text x="54" y="255" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#e2e8f0">DAILY CURRENT AFFAIRS • BANKING WALLAH</text>
        <text x="54" y="285" font-family="Arial, sans-serif" font-size="14" fill="#cbd5e1">Strictly Verified 24–25 October 2026 Edition • Exam-Ready Pointers</text>
      </svg>`;
      return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
    }

    const CUSTOM_BANNERS_OCT25 = {
      sebi_ai: makeNewsBannerDataUri("SEBI • CAPITAL MARKETS", "TRADING TERMINAL SAFEGUARDS", "MAC/IP Controls, Graded Broker Rules & AI Sandbox", "#0f172a", "#1e3a8a", "#38bdf8", "24–25 OCT 2026"),
      forex_jio: makeNewsBannerDataUri("RBI DATA & IPO RECORD", "FOREX AT $721B • JIO ₹30,213 CR IPO", "Gold Reserves Hit $105.8B • World's 1st IPO >1 Cr Bids", "#1e1b4b", "#312e81", "#fbbf24", "24 OCT 2026"),
      bihar_bank: makeNewsBannerDataUri("NICDC & STATE BANKING", "IMC GAYA & BIHAR BANK INDEX", "12 MoUs at Bodh Gaya • IDFC FIRST Tops 100-Pt Index", "#064e3b", "#0f766e", "#34d399", "24 OCT 2026"),
      parl_plfs: makeNewsBannerDataUri("PARLIAMENT & MoSPI", "46 ECONOMIC SUBJECTS REVIEW", "Finance Panel AI/VDA Study • NSO 2027 PLFS Overhaul", "#3b0764", "#581c87", "#e879f9", "24 OCT 2026"),
      agristack_11cr: makeNewsBannerDataUri("DIGITAL AGRICULTURE", "11 CRORE FARMER IDs CREATED", "AgriStack Target Achieved 5 Months Ahead of Mar 2027", "#14532d", "#166534", "#fde047", "24 OCT 2026"),
      karmayogi_chem: makeNewsBannerDataUri("PIB • NATIONAL GOVERNANCE", "SĀDHANA SHRINKHLA & INDIA CHEM", "CBC Lucknow UNNATI Roadmap • Shram Samvad • Mumbai", "#1e293b", "#334155", "#60a5fa", "24 OCT 2026"),
      navy_swavlamban: makeNewsBannerDataUri("DEFENCE & CAPF • PIB", "INDIAN NAVY SWAVLAMBAN 2026", "Swavlamban 5.0 • 65th ITBP Day • IAF Wings Over Ganges", "#0c4a6e", "#0369a1", "#facc15", "24–25 OCT 2026"),
      appointments_24oct: makeNewsBannerDataUri("APPOINTMENTS & HONOURS", "J&K CHIEF SEC & OSKAR KLEIN MEDAL", "Dr. Sajjan Singh Yadav (IAS) • Prof. Ashoke Sen (ICTS)", "#31102f", "#701a75", "#f472b6", "24 OCT 2026"),
      sports_para_sindhu: makeNewsBannerDataUri("SPORTS • PARA GAMES & BWF", "RECORD 114 MEDALS & FRENCH OPEN", "PM Modi Hails Para Contingent • P.V. Sindhu Enters Final", "#065f46", "#047857", "#fbbf24", "24–25 OCT 2026")
    };

    const IMAGE_GALLERY = [
      { id: "sports_para_sindhu", label: "24–25 Oct: Asian Para Games (114 Medals) & P.V. Sindhu", src: CUSTOM_BANNERS_OCT25.sports_para_sindhu },
      { id: "rbi", label: "RBI Headquarters Emblem (Bhubaneswar Tier-IV / Basel III)", src: ASSETS.art1_rbi },
      { id: "sebi_ai", label: "24–25 Oct: SEBI Trading Terminal & AI Rules Banner", src: CUSTOM_BANNERS_OCT25.sebi_ai },
      { id: "forex_jio", label: "24 Oct: RBI Forex ($721B) & Jio ₹30,213 Cr IPO Banner", src: CUSTOM_BANNERS_OCT25.forex_jio },
      { id: "bihar_bank", label: "24 Oct: NICDC BIMCGL Gaya & Bihar Bank Index Banner", src: CUSTOM_BANNERS_OCT25.bihar_bank },
      { id: "parl_plfs", label: "24 Oct: Standing Committee 46 Subjects & NSO PLFS Banner", src: CUSTOM_BANNERS_OCT25.parl_plfs },
      { id: "agristack_11cr", label: "24 Oct: 11 Crore Digital Farmer IDs (AgriStack) Banner", src: CUSTOM_BANNERS_OCT25.agristack_11cr },
      { id: "karmayogi_chem", label: "24 Oct: CBC Sādhana Shrinkhla & India Chem-2026 Banner", src: CUSTOM_BANNERS_OCT25.karmayogi_chem },
      { id: "navy_swavlamban", label: "24–25 Oct: Navy Swavlamban 2026 & 65th ITBP Day Banner", src: CUSTOM_BANNERS_OCT25.navy_swavlamban },
      { id: "appointments_24oct", label: "24 Oct: Dr. Sajjan Singh Yadav & Prof. Ashoke Sen Banner", src: CUSTOM_BANNERS_OCT25.appointments_24oct },
      { id: "paytm", label: "23 Oct Ref: AU Bank & Paytm RuPay Card", src: ASSETS.art3_paytm },
      { id: "fta", label: "23 Oct Ref: India FTA State Outreach", src: ASSETS.art4_fta },
      { id: "jaipur", label: "23 Oct Ref: Jaipur Hawa Mahal (NatGeo)", src: ASSETS.art5_jaipur },
      { id: "shamonda", label: "23 Oct Ref: WHO / Shamonda Virus Alert", src: ASSETS.art6_shamonda },
      { id: "unesco", label: "23 Oct Ref: UNESCO GEM Gender Report", src: ASSETS.art7_unesco },
      { id: "agrivoltaics", label: "23 Oct Ref: 7th Agrivoltaics Conference", src: ASSETS.art8_agrivoltaics },
      { id: "tvbook", label: "23 Oct Ref: Book Launch: TV News in India", src: ASSETS.art9_tvbook },
      { id: "iccu19", label: "23 Oct Ref: ICC U19 Women's T20 World Cup 2027", src: ASSETS.art10_iccu19 }
    ];

    function getOct25Dataset() {
      return {
        meta: {
          day: "25",
          suffix: "th",
          month: "Oct",
          year: "2026",
          author: "Rajesh Kumar",
          hindiPageOffset: "standard",
          includePage1: true,
          banner1: ASSETS.banner1,
          banner2: ASSETS.banner2,
          ytLink: "https://www.youtube.com/@BankingWallah",
          tgLink: "https://telegram.me/pwbankingwallah",
          facultyTgLink: "https://t.me/CAbySushmitamam"
        },
        articles: [
          {
            id: "oct25_1",
            dateBadge: "24–25 Oct 2026 (PIB & RBI)",
            sourceUrl: "https://www.pib.gov.in/PressReleaseDetail.aspx?PRID=2327861&reg=21&lang=1",
            catEN: "RBI and Banking Infrastructure",
            catHI: "आरबीआई और बैंकिंग अवसंरचना",
            titleEN: "PM Modi Inaugurates RBI's Tier-IV Data Centre & Cybersecurity Training Institute in Bhubaneswar; RBI Finalises Basel III Leverage Ratio 2017 Directions (Effective 1 April 2027)",
            titleHI: "पीएम मोदी ने भुवनेश्वर में आरबीआई के टियर-IV डेटा सेंटर और साइबर सुरक्षा प्रशिक्षण संस्थान का उद्घाटन किया; आरबीआई का बेसल III लीवरेज अनुपात 2017 मानक 1 अप्रैल 2027 से होगा लागू",
            image: ASSETS.art1_rbi,
            bulletsEN: [
              "On October 25, 2026, Prime Minister Narendra Modi inaugurated the Reserve Bank of India's (RBI) newly established Data Centre and Cybersecurity Training Institute in Bhubaneswar, Odisha.",
              "Certified to the Uptime Institute Tier IV standard—the highest global benchmark for operational resilience—its four state-of-the-art data centres will host mission-critical Payment and Settlement systems, making it one of the largest Tier IV BFSI facilities worldwide.",
              "The accompanying Cybersecurity Training Institute in Bhubaneswar will build BFSI sector-wide capability in frontier technologies including Quantum Computing, Artificial Intelligence (AI), and enterprise cybersecurity.",
              "Earlier on the same day (October 25, 2026), PM Modi also inaugurated Arvind Limited's women-led modern garment manufacturing facility in Varanasi, Uttar Pradesh.",
              "Regulatory Update (Effective Date 1 April 2027): Following its late October 23, 2026 notification, the RBI's final 'Reserve Bank of India (Basel III Capital Regulations - Leverage Ratio) Amendment Directions, 2026' implementing the BCBS Leverage Ratio 2017 Standard will officially take effect from April 1, 2027, maintaining the minimum Tier-1 Leverage Ratio at 4.0% for Domestic Systemically Important Banks (D-SIBs) and 3.5% for all other scheduled commercial banks."
            ],
            gkEN: [
              "RBI Headquarters: Mumbai, Maharashtra | 26th Governor: Sanjay Malhotra.",
              "Chief Minister of Odisha: Mohan Charan Majhi | Governor: Hari Babu Kambhampati.",
              "Minimum Leverage Ratio under Basel III in India: 4.0% for D-SIBs (SBI, HDFC Bank, ICICI Bank) and 3.5% for other commercial banks (Revised standard effective: April 1, 2027)."
            ],
            bulletsHI: [
              "25 अक्टूबर 2026 को, प्रधानमंत्री नरेंद्र मोदी ने ओडिशा के भुवनेश्वर में भारतीय रिज़र्व बैंक (RBI) के नव-स्थापित डेटा सेंटर और साइबर सुरक्षा प्रशिक्षण संस्थान का उद्घाटन किया।",
              "अपटाइम इंस्टीट्यूट टियर-IV मानक (परिचालन लचीलेपन के लिए सर्वोच्च वैश्विक मानदंड) से प्रमाणित इसके चार अत्याधुनिक डेटा सेंटर मिशन-क्रिटिकल भुगतान और निपटान प्रणालियों (Payment & Settlement Systems) की मेजबानी करेंगे, जो इसे विश्व स्तर पर BFSI क्षेत्र की सबसे बड़ी टियर-IV सुविधाओं में से एक बनाता है।",
              "भुवनेश्वर स्थित साइबर सुरक्षा प्रशिक्षण संस्थान क्वांटम कंप्यूटिंग, आर्टिफिशियल इंटेलिजेंस (AI) और एंटरप्राइज साइबर सुरक्षा जैसी उभरती प्रौद्योगिकियों में पूरे BFSI क्षेत्र की क्षमता निर्माण को बढ़ावा देगा।",
              "इससे पहले 25 अक्टूबर 2026 को प्रधानमंत्री मोदी ने उत्तर प्रदेश के वाराणसी में अरविंद लिमिटेड की महिला-नेतृत्व वाली आधुनिक परिधान विनिर्माण इकाई का भी उद्घाटन किया।",
              "नियामक अपडेट (प्रभावी तिथि 1 अप्रैल 2027): 23 अक्टूबर 2026 की देर शाम जारी अधिसूचना के अनुसार, बीसीबीएस लीवरेज अनुपात 2017 मानक को लागू करने वाले 'भारतीय रिज़र्व बैंक (बेसल III पूंजी विनियम - लीवरेज अनुपात) संशोधन निदेश, 2026' आधिकारिक रूप से 1 अप्रैल 2027 से प्रभावी होंगे, जिसमें डी-एसआईबी (D-SIBs) के लिए न्यूनतम लीवरेज अनुपात 4.0% और अन्य वाणिज्यिक बैंकों के लिए 3.5% बरकरार रखा गया है।"
            ],
            gkHI: [
              "आरबीआई मुख्यालय: मुंबई, महाराष्ट्र | 26वें गवर्नर: संजय मल्होत्रा।",
              "ओडिशा के मुख्यमंत्री: मोहन चरण माझी | राज्यपाल: हरि बाबू कंभमपति।",
              "भारत में न्यूनतम बेसल III लीवरेज अनुपात: D-SIBs के लिए 4.0% और अन्य वाणिज्यिक बैंकों के लिए 3.5% (संशोधित मानक 1 अप्रैल 2027 से लागू)।"
            ]
          },
          {
            id: "oct25_2",
            dateBadge: "24–25 Oct 2026 (SEBI)",
            sourceUrl: "https://www.kotakneo.com/news/regulations/sebi-trading-terminal-safeguards-broker-compliance-ai-rules/",
            catEN: "Capital Markets and SEBI Regulation",
            catHI: "पूंजी बाजार और सेबी विनियमन",
            titleEN: "SEBI Proposes MAC/IP Trading Terminal Safeguards, Graded Broker Compliance Framework and IOSCO-Aligned AI Rules",
            titleHI: "सेबी ने ट्रेडिंग टर्मिनल MAC/IP सुरक्षा उपाय, श्रेणीबद्ध ब्रोकर अनुपालन ढांचा और AI नियमों की घोषणा की",
            image: CUSTOM_BANNERS_OCT25.sebi_ai,
            bulletsEN: [
              "On October 24–25, 2026, Securities and Exchange Board of India (SEBI) Chairman Tuhin Kanta Pandey announced tighter regulatory safeguards on stockbroker trading terminals to prevent unauthorised sharing of proprietary trading accounts.",
              "Under the proposed mechanism, trading terminals will be linked directly to their Media Access Control (MAC) addresses and static Internet Protocol (IP) addresses to verify the exact physical location and operator of every terminal.",
              "SEBI is introducing a graded compliance framework tailored to a stockbroker's business size, client exposure, and technology dependence, while consolidating multiple inspection portals into a single unified digital workflow.",
              "To boost capital efficiency, SEBI plans to extend the automated 'give-up and take-up' trade confirmation facility in the cash market to custodial clients, including Portfolio Management Services (PMS) and Alternative Investment Funds (AIFs).",
              "Additionally, SEBI is finalising an IOSCO-aligned Artificial Intelligence (AI) governance framework featuring an AI regulatory sandbox, human oversight, and emergency shutdown controls, alongside enabling tokenised corporate bonds in the secondary market under Demat 2.0."
            ],
            gkEN: [
              "SEBI Headquarters: Mumbai, Maharashtra | Chairman: Tuhin Kanta Pandey.",
              "SEBI Statutory Status: Established on April 12, 1988; given statutory powers on January 30, 1992 under the SEBI Act, 1992.",
              "IOSCO Headquarters: Madrid, Spain (International Organization of Securities Commissions)."
            ],
            bulletsHI: [
              "24–25 अक्टूबर 2026 को, भारतीय प्रतिभूति और विनिमय बोर्ड (SEBI) के अध्यक्ष तुहिन कांत पांडे ने प्रॉपराइटरी ट्रेडिंग खातों के अनधिकृत उपयोग को रोकने के लिए स्टॉकब्रोकर ट्रेडिंग टर्मिनलों पर कड़े सुरक्षा उपायों की घोषणा की।",
              "प्रस्तावित व्यवस्था के तहत, प्रत्येक ट्रेडिंग टर्मिनल के सटीक स्थान और ऑपरेटर की पहचान सुनिश्चित करने के लिए टर्मिनलों को उनके मीडिया एक्सेस कंट्रोल (MAC) पते और स्टैटिक इंटरनेट प्रोटोकॉल (IP) पते से जोड़ा जाएगा।",
              "सेबी ब्रोकरों के व्यवसाय के आकार, ग्राहक जोखिम और प्रौद्योगिकी निर्भरता के आधार पर एक श्रेणीबद्ध अनुपालन ढांचा (Graded Compliance Framework) लागू कर रहा है और निरीक्षण पोर्टलों को एक एकल डिजिटल वर्कफ़्लो में एकीकृत कर रहा है।",
              "पूंजी दक्षता बढ़ाने के लिए, सेबी कैश मार्केट में स्वचालित 'गिव-अप और टेक-अप' (Give-up & Take-up) सुविधा को पोर्टफोलियो प्रबंधन सेवाओं (PMS) और वैकल्पिक निवेश कोष (AIFs) सहित कस्टोडियल ग्राहकों तक विस्तारित करेगा।",
              "इसके अतिरिक्त, सेबी IOSCO के दिशानिर्देशों के अनुरूप एक AI गवर्नेंस फ्रेमवर्क (जिसमें AI रेगुलेटरी सैंडबॉक्स, मानवीय निगरानी और आपातकालीन शटडाउन तंत्र शामिल हैं) को अंतिम रूप दे रहा है और 'डीमैट 2.0' (Demat 2.0) के तहत सेकेंडरी मार्केट में टोकनाइज्ड कॉर्पोरेट बॉन्ड शुरू करने की योजना बना रहा है।"
            ],
            gkHI: [
              "सेबी (SEBI) मुख्यालय: मुंबई, महाराष्ट्र | अध्यक्ष: तुहिन कांत पांडे।",
              "सेबी की वैधानिक स्थिति: सेबी अधिनियम, 1992 के तहत 30 जनवरी 1992 को वैधानिक दर्जा प्राप्त हुआ।",
              "IOSCO का मुख्यालय: मैड्रिड, स्पेन।"
            ]
          },
          {
            id: "oct25_3",
            dateBadge: "24 Oct 2026 (RBI & Capital Market)",
            sourceUrl: "https://www.chronicleindia.in/current-affairs/18394-indias-forex-reserves-decline-to-approximately-721-billion",
            catEN: "Banking and Economy",
            catHI: "बैंकिंग और अर्थव्यवस्था",
            titleEN: "RBI Weekly Data: India's Forex Reserves Stand at $721 Billion as Gold Reserves Rise to $105.8 Billion; Jio Platforms Completes Record ₹30,213 Crore IPO",
            titleHI: "आरबीआई साप्ताहिक डेटा: भारत का विदेशी मुद्रा भंडार 721 बिलियन डॉलर रहा, स्वर्ण भंडार बढ़कर 105.8 बिलियन डॉलर हुआ; जियो प्लेटफॉर्म्स का रिकॉर्ड ₹30,213 करोड़ का आईपीओ संपन्न",
            image: CUSTOM_BANNERS_OCT25.forex_jio,
            bulletsEN: [
              "According to weekly statistical data released by the Reserve Bank of India (RBI) and reported on October 24, 2026, India's total Foreign Exchange (Forex) Reserves stood at approximately $721 billion (registering a weekly decline of ~$5 billion).",
              "Foreign Currency Assets (FCA)—the largest component of the reserves—declined by $5.7 billion to $591.8 billion, whereas the value of RBI's Gold Reserves surged by $706 million to reach $105.8 billion.",
              "Special Drawing Rights (SDRs) with the IMF increased by $30 million to $18.5 billion, and India's Reserve Position in the IMF rose by $11 million to $4.79 billion (India's all-time high forex reserves stood at $785.706 billion on September 4, 2026).",
              "Capital Market Milestone (Reported 24 Oct 2026): Jio Platforms Limited (a subsidiary of Reliance Industries) completed India's largest-ever Initial Public Offering (IPO) of ₹30,213 crore, surpassing Hyundai Motor India's ₹27,870 crore IPO in 2024.",
              "Subscribed 22.19 times, the Jio Platforms public issue (comprising ~27 crore fresh shares with no Offer for Sale) became the first IPO in the world to receive over 1 crore applications (~1.39 crore applications, breaking Waaree Energies' 97.33 lakh record), with ₹27,500 crore earmarked for debt repayment of Reliance Jio Infocomm (allotment on Oct 26; listing on Oct 28, 2026)."
            ],
            gkEN: [
              "Four Components of India's Forex Reserves: Foreign Currency Assets (FCA), Gold Reserves, IMF Special Drawing Rights (SDRs), and Reserve Tranche Position (RTP) in the IMF.",
              "Previous Largest IPO in India: Hyundai Motor India (₹27,870 crore in October 2024).",
              "IMF Headquarters: Washington, D.C., USA | Managing Director: Kristalina Georgieva."
            ],
            bulletsHI: [
              "भारतीय रिज़र्व बैंक (RBI) द्वारा जारी और 24 अक्टूबर 2026 को प्रकाशित साप्ताहिक आँकड़ों के अनुसार, भारत का कुल विदेशी मुद्रा भंडार (Forex Reserves) लगभग 5 बिलियन डॉलर घटकर 721 बिलियन डॉलर रहा।",
              "भंडार के सबसे बड़े घटक विदेशी मुद्रा आस्तियों (FCA) में 5.7 बिलियन डॉलर की कमी आई और यह 591.8 बिलियन डॉलर रहा, जबकि आरबीआई का स्वर्ण भंडार (Gold Reserves) 706 मिलियन डॉलर बढ़कर 105.8 बिलियन डॉलर पर पहुँच गया।",
              "अंतरराष्ट्रीय मुद्रा कोष (IMF) के पास विशेष आहरण अधिकार (SDR) 30 मिलियन डॉलर बढ़कर 18.5 बिलियन डॉलर हो गया और आईएमएफ में भारत की आरक्षित स्थिति 11 मिलियन डॉलर बढ़कर 4.79 बिलियन डॉलर हो गई (4 सितंबर 2026 को भारत का विदेशी मुद्रा भंडार 785.706 बिलियन डॉलर के सर्वकालिक उच्च स्तर पर था)।",
              "पूंजी बाजार की ऐतिहासिक उपलब्धि (24 अक्टूबर 2026): रिलायंस इंडस्ट्रीज की सहायक कंपनी जियो प्लेटफॉर्म्स लिमिटेड ने ₹30,213 करोड़ का भारत का अब तक का सबसे बड़ा आईपीओ (IPO) सफलतापूर्वक पूरा किया, जिसने 2024 में ह्युंडई मोटर इंडिया के ₹27,870 करोड़ के रिकॉर्ड को पीछे छोड़ दिया।",
              "22.19 गुना सब्सक्राइब हुआ यह आईपीओ (लगभग 27 करोड़ नए शेयर, कोई OFS नहीं) 1 करोड़ से अधिक आवेदन (~1.39 करोड़ आवेदन) प्राप्त करने वाला दुनिया का पहला आईपीओ बन गया। इससे प्राप्त राशि में से ₹27,500 करोड़ का उपयोग रिलायंस जियो इन्फोकॉम के ऋण चुकाने में किया जाएगा (आवंटन: 26 अक्टूबर; लिस्टिंग: 28 अक्टूबर 2026)।"
            ],
            gkHI: [
              "भारत के विदेशी मुद्रा भंडार के 4 घटक: विदेशी मुद्रा आस्तियाँ (FCA), स्वर्ण भंडार, विशेष आहरण अधिकार (SDR) और आईएमएफ में आरक्षित स्थिति।",
              "भारत का पिछला सबसे बड़ा आईपीओ: ह्युंडई मोटर इंडिया (₹27,870 करोड़, 2024)।",
              "आईएमएफ मुख्यालय: वाशिंगटन डी.सी., अमेरिका | प्रबंध निदेशक: क्रिस्टालिना जॉर्जीवा।"
            ]
          },
          {
            id: "oct25_4",
            dateBadge: "24 Oct 2026 (PIB & Bihar Fin Dept)",
            sourceUrl: "https://www.pib.gov.in/PressReleaseDetail.aspx?PRID=2328067&reg=6&lang=1",
            catEN: "State Banking and Industrial Corridors",
            catHI: "राज्य बैंकिंग और औद्योगिक गलियारा",
            titleEN: "NICDC Launches Bihar Integrated Manufacturing City Gaya Limited (BIMCGL) with 12 MoUs; IDFC FIRST Bank Tops Bihar's First 100-Point Bank Performance Index",
            titleHI: "NICDC ने बोधगया में 'बिहार इंटीग्रेटेड मैन्युफैक्चरिंग सिटी गया लिमिटेड' (BIMCGL) लॉन्च किया; बिहार के पहले 100-अंकीय बैंक प्रदर्शन सूचकांक में IDFC FIRST बैंक शीर्ष पर",
            image: CUSTOM_BANNERS_OCT25.bihar_bank,
            bulletsEN: [
              "On October 24, 2026, the National Industrial Corridor Development Corporation (NICDC) and Bihar Chief Minister Samrat Choudhary formally launched Bihar Integrated Manufacturing City Gaya Limited (BIMCGL) at Bodh Gaya during the curtain raiser for Bihar Business Connect 2027.",
              "During the launch on October 24, 12 new Memoranda of Understanding (MoUs) were signed with investors for ~300 acres at IMC Gaya, adding to earlier MoUs covering 2,586 acres with a total proposed investment of ₹31,750 crore and an employment potential of 52,050 jobs.",
              "Bihar's First 100-Point Bank Performance Index (Reported 24 Oct 2026): The Finance Department of Bihar rolled out a first-of-its-kind 100-point evaluation index classifying banks into Green Zone (50+ points), Yellow Zone (40–49 points), and Red Zone (below 40 points) based on credit disbursement and financial operations.",
              "IDFC FIRST Bank secured the 1st rank with 74 points, followed by Jammu & Kashmir Bank and RBL Bank tied at 2nd place (68 points each), HDFC Bank (65 points), and Bank of Baroda (64 points).",
              "Against Bihar's FY 2026–27 Annual Credit Plan target of ₹4.95 lakh crore, banks disbursed ₹1,89,343.52 crore (38.25% of target) by September 30, 2026, with the state's Credit-Deposit (CD) Ratio standing at 60.17%. (Separately on Oct 24, IDFC FIRST Bank reported Q2 FY27 net profit nearly tripling to ₹1,045 crore, and AU Small Finance Bank reported a 53% Q2 profit jump to ₹858 crore.)"
            ],
            gkEN: [
              "NICDC Headquarters: New Delhi | Parent Ministry: Ministry of Commerce and Industry.",
              "IDFC FIRST Bank Headquarters: Mumbai | MD & CEO: V. Vaidyanathan.",
              "AU Small Finance Bank Headquarters: Jaipur, Rajasthan | MD & CEO: Sanjay Agarwal."
            ],
            bulletsHI: [
              "24 अक्टूबर 2026 को, नेशनल इंडस्ट्रियल कॉरिडोर डेवलपमेंट कॉरपोरेशन (NICDC) और बिहार के मुख्यमंत्री सम्राट चौधरी ने बोधगया में 'बिहार बिजनेस कनेक्ट 2027' के कर्टेन रेज़र के दौरान औपचारिक रूप से 'बिहार इंटीग्रेटेड मैन्युफैक्चरिंग सिटी गया लिमिटेड' (BIMCGL) का शुभारंभ किया।",
              "इस अवसर पर आईएमसी गया (IMC Gaya) में लगभग 300 एकड़ औद्योगिक भूमि के लिए निवेशकों के साथ 12 नए समझौता ज्ञापनों (MoUs) पर हस्ताक्षर किए गए। इससे पूर्व 2,586 एकड़ भूमि के लिए ₹31,750 करोड़ के प्रस्तावित निवेश और 52,050 रोजगार अवसरों के समझौते किए जा चुके हैं।",
              "बिहार का पहला 100-अंकीय बैंक प्रदर्शन सूचकांक (24 अक्टूबर 2026): बिहार के वित्त विभाग ने बैंकों के ऋण वितरण और परिचालन की समीक्षा के लिए पहली बार 100-अंकीय सूचकांक लागू किया है, जो बैंकों को ग्रीन ज़ोन (50+ अंक), येलो ज़ोन (40–49 अंक) और रेड ज़ोन (40 से कम अंक) में वर्गीकृत करता है।",
              "इस सूचकांक में IDFC FIRST बैंक ने 74 अंकों के साथ पहला स्थान हासिल किया, जिसके बाद जम्मू एंड कश्मीर बैंक और RBL बैंक (68-68 अंक) संयुक्त रूप से दूसरे स्थान पर रहे, जबकि HDFC बैंक को 65 अंक और बैंक ऑफ बड़ौदा को 64 अंक मिले।",
              "वित्त वर्ष 2026-27 के लिए बिहार के ₹4.95 लाख करोड़ के वार्षिक ऋण योजना (Annual Credit Plan) लक्ष्य के मुकाबले 30 सितंबर 2026 तक ₹1,89,343.52 करोड़ (38.25%) का ऋण वितरित किया गया और राज्य का ऋण-जमा अनुपात (Credit-Deposit Ratio) 60.17% रहा। (इसके अलावा 24 अक्टूबर को IDFC FIRST बैंक ने Q2 FY27 में ₹1,045 करोड़ और AU स्मॉल फाइनेंस बैंक ने ₹858 करोड़ का शुद्ध लाभ दर्ज किया।)"
            ],
            gkHI: [
              "NICDC का मुख्यालय: नई दिल्ली | नोडल मंत्रालय: वाणिज्य और उद्योग मंत्रालय।",
              "IDFC FIRST बैंक मुख्यालय: मुंबई | एमडी और सीईओ: वी. वैद्यनाथन।",
              "AU स्मॉल फाइनेंस बैंक मुख्यालय: जयपुर, राजस्थान | एमडी और सीईओ: संजय अग्रवाल।"
            ]
          },
          {
            id: "oct25_5",
            dateBadge: "24 Oct 2026 (Parliament & MoSPI)",
            sourceUrl: "https://www.chronicleindia.in/current-affairs/18398-standing-committee-to-review-46-economic-subjects",
            catEN: "Economic Policy and Parliamentary Affairs",
            catHI: "आर्थिक नीति और संसदीय कार्य",
            titleEN: "Parliamentary Standing Committee on Finance Selects 46 Economic Subjects Including AI in BFSI & VDAs for FY27 Review; NSO Proposes PLFS Changes from Jan 2027",
            titleHI: "वित्त संबंधी संसदीय स्थायी समिति ने FY27 की समीक्षा के लिए वित्तीय सेवाओं में AI और VDA सहित 46 आर्थिक विषयों का चयन किया; NSO ने जनवरी 2027 से PLFS में बदलाव का प्रस्ताव रखा",
            image: CUSTOM_BANNERS_OCT25.parl_plfs,
            bulletsEN: [
              "Reported on October 24, 2026, the reconstituted 31-member Parliamentary Standing Committee on Finance (comprising 21 Lok Sabha MPs and 10 Rajya Sabha MPs), chaired by BJP MP Bhartruhari Mahtab, finalized 46 key economic and financial subjects for examination during FY 2026–27.",
              "In the financial technology and regulatory sphere, the committee will examine the deployment of Artificial Intelligence (AI) in financial services, emerging cyber challenges, and the regulatory architecture for Virtual Digital Assets (VDAs).",
              "For monetary and BFSI oversight, the panel will review price and currency stability, the role of the Reserve Bank of India (RBI), and regulatory frameworks governing banks, NBFCs, insurance, pensions, and SEBI's overall market performance.",
              "Other priority areas include evaluating the National Company Law Tribunal (NCLT), Corporate Social Responsibility (CSR) norms, auditor accountability, GST and direct tax reforms, public asset monetization, small savings schemes, and NITI Aayog's Aspirational Districts Programme.",
              "NSO Labour Survey Reform (Reported 24 Oct 2026): Concurrently, the National Statistical Office (NSO) under the Ministry of Statistics and Programme Implementation (MoSPI) proposed structural changes to the Periodic Labour Force Survey (PLFS) starting January 2027 to improve high-frequency rural and urban employment tracking."
            ],
            gkEN: [
              "Chairman of Parliamentary Standing Committee on Finance: Bhartruhari Mahtab (31 Members: 21 Lok Sabha + 10 Rajya Sabha).",
              "Periodic Labour Force Survey (PLFS): Launched by NSO (MoSPI) in April 2017.",
              "NITI Aayog Vice Chairman: Suman Bery | CEO: B.V.R. Subrahmanyam."
            ],
            bulletsHI: [
              "24 अक्टूबर 2026 को प्रकाशित रिपोर्ट के अनुसार, भाजपा सांसद भर्तृहरि महताब की अध्यक्षता वाली 31-सदस्यीय पुनर्गठित वित्त संबंधी संसदीय स्थायी समिति (21 लोकसभा + 10 राज्यसभा सांसद) ने वित्त वर्ष 2026-27 के दौरान समीक्षा के लिए 46 प्रमुख आर्थिक और वित्तीय विषयों का चयन किया है।",
              "वित्तीय प्रौद्योगिकी (Fintech) क्षेत्र में, समिति वित्तीय सेवाओं में आर्टिफिशियल इंटेलिजेंस (AI) के उपयोग, उभरती चुनौतियों और वर्चुअल डिजिटल एसेट्स (VDAs) के लिए नियामक ढांचे का अध्ययन करेगी।",
              "मौद्रिक और वित्तीय निगरानी के तहत, समिति मूल्य और मुद्रा स्थिरता, भारतीय रिज़र्व बैंक (RBI) की भूमिका तथा बैंकिंग, बीमा, पेंशन, NBFC और सेबी (SEBI) के समग्र प्रदर्शन को नियंत्रित करने वाले नियमों की समीक्षा करेगी।",
              "अन्य प्रमुख विषयों में राष्ट्रीय कंपनी विधि अधिकरण (NCLT) का प्रदर्शन, कॉर्पोरेट सामाजिक उत्तरदायित्व (CSR), ऑडिटर जवाबदेही, जीएसटी एवं प्रत्यक्ष कर सुधार, सार्वजनिक संपत्ति मुद्रीकरण, लघु बचत योजनाएँ और नीति आयोग के आकांक्षी जिला कार्यक्रम का मूल्यांकन शामिल है।",
              "NSO श्रम सर्वेक्षण सुधार (24 अक्टूबर 2026): इसके साथ ही, राष्ट्रीय सांख्यिकी कार्यालय (NSO) ने ग्रामीण और शहरी रोजगार के आँकड़ों को अधिक सटीक बनाने के लिए जनवरी 2027 से आवधिक श्रम बल सर्वेक्षण (PLFS) में संरचनात्मक बदलावों का प्रस्ताव रखा है।"
            ],
            gkHI: [
              "वित्त संबंधी संसदीय स्थायी समिति के अध्यक्ष: भर्तृहरि महताब (31 सदस्य: 21 लोकसभा + 10 राज्यसभा)।",
              "आवधिक श्रम बल सर्वेक्षण (PLFS) की शुरुआत: अप्रैल 2017 (NSO, सांख्यिकी और कार्यक्रम कार्यान्वयन मंत्रालय द्वारा)।",
              "नीति आयोग के उपाध्यक्ष: सुमन बेरी | सीईओ: बी.वी.आर. सुब्रह्मण्यम।"
            ]
          },
          {
            id: "oct25_6",
            dateBadge: "24 Oct 2026 (MoAFW / AgriStack)",
            sourceUrl: "https://m.economictimes.com/news/economy/agriculture/centre-beats-march-2027-target-issues-11-crore-unique-farmer-ids-under-agristack/articleshow/135165033.cms",
            catEN: "Agriculture and Digital Governance",
            catHI: "कृषि और डिजिटल शासन",
            titleEN: "Agriculture Ministry Announces Milestone of 11 Crore Unique Digital Farmer IDs Created Under AgriStack Five Months Ahead of March 2027 Deadline",
            titleHI: "कृषि मंत्रालय ने मार्च 2027 की समय-सीमा से पाँच महीने पहले एग्रीस्टैक के तहत 11 करोड़ विशिष्ट डिजिटल किसान आईडी बनने की घोषणा की",
            image: CUSTOM_BANNERS_OCT25.agristack_11cr,
            bulletsEN: [
              "On October 24, 2026, Union Minister of Agriculture and Farmers Welfare Shivraj Singh Chouhan officially announced that India achieved the milestone of creating 11 crore unique digital Farmer IDs ('Kisan Pehchan Patra') on the night of October 23—five months ahead of the March 31, 2027 deadline.",
              "Built under the AgriStack framework of the ₹2,817-crore Digital Agriculture Mission, the Farmer ID serves as an Aadhaar-like trusted digital identity dynamically linked to a farmer's state land records, livestock ownership, and seasonal crop-sown registries.",
              "According to the Ministry's October 24 announcement, more than 6 crore farmers have already received direct benefits under various government schemes through Farmer ID-based service delivery.",
              "The unified digital registry eliminates repetitive physical KYC verification and paperwork, enabling faster, paperless sanctioning of Kisan Credit Card (KCC) agricultural loans, PM-KISAN instalments, and Pradhan Mantri Fasal Bima Yojana (PMFBY) crop insurance claims.",
              "States including Uttar Pradesh, Maharashtra, Madhya Pradesh, Gujarat, and Rajasthan led the nationwide camp-mode registration drive to cross the 11-crore mark ahead of schedule."
            ],
            gkEN: [
              "Union Minister of Agriculture & Farmers Welfare and Rural Development: Shivraj Singh Chouhan.",
              "Digital Agriculture Mission Total Outlay: ₹2,817 crore (including ₹1,940 crore Central share).",
              "Three Core Pillars of Digital Public Infrastructure (DPI) in Agriculture: AgriStack (Farmer Registry), Krishi Decision Support System (DSS), and Soil Profile Mapping."
            ],
            bulletsHI: [
              "24 अक्टूबर 2026 को, केंद्रीय कृषि एवं किसान कल्याण मंत्री शिवराज सिंह चौहान ने आधिकारिक तौर पर घोषणा की कि भारत ने 31 मार्च 2027 की निर्धारित समय-सीमा से पाँच महीने पहले (23 अक्टूबर की रात तक) 11 करोड़ विशिष्ट डिजिटल किसान आईडी ('किसान पहचान पत्र') बनाने का लक्ष्य हासिल कर लिया है।",
              "₹2,817 करोड़ के डिजिटल कृषि मिशन (Digital Agriculture Mission) के एग्रीस्टैक (AgriStack) ढांचे के तहत निर्मित यह किसान आईडी आधार (Aadhaar) जैसी एक विश्वसनीय डिजिटल पहचान है, जो राज्य के भूमि रिकॉर्ड, पशुधन स्वामित्व और बोई गई फसलों के विवरण से गतिशील रूप से जुड़ी है।",
              "मंत्रालय की 24 अक्टूबर की घोषणा के अनुसार, 6 करोड़ से अधिक किसानों को पहले ही फार्मर आईडी-आधारित सेवा वितरण के माध्यम से विभिन्न सरकारी योजनाओं का सीधा लाभ मिल चुका है।",
              "यह एकीकृत डिजिटल रजिस्ट्री बार-बार भौतिक केवाईसी (KYC) सत्यापन और कागजी कार्रवाई को समाप्त करती है, जिससे किसान क्रेडिट कार्ड (KCC) कृषि ऋण, पीएम-किसान (PM-KISAN) किस्तों और प्रधानमंत्री फसल बीमा योजना (PMFBY) दावों की कागज-रहित और त्वरित स्वीकृति संभव होती है।",
              "उत्तर प्रदेश, महाराष्ट्र, मध्य प्रदेश, गुजरात और राजस्थान जैसे राज्यों ने समय-सीमा से पहले 11 करोड़ का आंकड़ा पार करने के लिए राष्ट्रव्यापी पंजीकरण अभियान का नेतृत्व किया।"
            ],
            gkHI: [
              "केंद्रीय कृषि एवं किसान कल्याण तथा ग्रामीण विकास मंत्री: शिवराज सिंह चौहान।",
              "डिजिटल कृषि मिशन का कुल परिव्यय: ₹2,817 करोड़ (₹1,940 करोड़ के केंद्रीय हिस्से सहित)।",
              "कृषि में डिजिटल पब्लिक इंफ्रास्ट्रक्चर (DPI) के तीन स्तंभ: एग्रीस्टैक (किसान रजिस्ट्री), कृषि निर्णय सहायता प्रणाली (Krishi DSS), और मृदा प्रोफ़ाइल मानचित्रण।"
            ]
          },
          {
            id: "oct25_7",
            dateBadge: "24 Oct 2026 (PIB Governance & Industry)",
            sourceUrl: "https://pib.gov.in/PressReleasePage.aspx?PRID=2327997",
            catEN: "National Governance and Summits",
            catHI: "राष्ट्रीय शासन और सम्मेलन",
            titleEN: "CBC Organises 3rd 'Sādhana Shrinkhla 2026' Consultation in Lucknow Under Mission Karmayogi; 3-Day 'India Chem-2026' Concludes in Mumbai",
            titleHI: "क्षमता निर्माण आयोग ने मिशन कर्मयोगी के तहत लखनऊ में तीसरी 'साधना श्रृंखला 2026' कार्यशाला आयोजित की; मुंबई में तीन दिवसीय 'इंडिया केम-2026' संपन्न",
            image: CUSTOM_BANNERS_OCT25.karmayogi_chem,
            bulletsEN: [
              "On October 24, 2026, the Capacity Building Commission (CBC) under Mission Karmayogi organised the third regional consultation workshop of 'Sādhana Shrinkhla 2026' (Strengthening Adaptive Development and Humane Aptitude for National Advancement) in Lucknow, Uttar Pradesh (following earlier chapters in Vijayawada and Guwahati).",
              "Addressing officials from 8 northern states (Bihar, Haryana, HP, Jharkhand, Punjab, Rajasthan, Uttarakhand, UP) and 4 UTs (Chandigarh, Delhi, J&K, Ladakh), CBC Secretary Jagdeep Gupta highlighted that the training roadmaps will be integrated onto the UNNATI (Unified New-Age National Training Initiatives) platform.",
              "Two-Day 'Shram Samvad' Announced (PIB, 24 Oct 2026): The Ministry of Labour & Employment and the UP Government announced a two-day state-level 'Shram Samvad' programme in Lucknow (October 26–27) under the 90-day outreach across 316 districts covering all four Labour Codes, ESIC, EPFO, and PM Viksit Bharat Rozgar Yojana.",
              "'India Chem-2026' Concludes in Mumbai (PIB, 24 Oct 2026): Jointly organised by the Department of Chemicals & Petrochemicals and FICCI, the three-day 'India Chem-2026' international exhibition concluded in Mumbai on October 24 with over 5,000 visitors and partner states Maharashtra, MP, Odisha, UP, Gujarat, AP, and Bihar.",
              "At the India Chem-2026 chemical industry problem-solving jury challenge, Soumya Bhole and Sarthak Kale of ICT Mumbai clinched First Prize, followed by teams from VNIT Nagpur (2nd) and IIT Gandhinagar (3rd)."
            ],
            gkEN: [
              "Sādhana Full Form: Strengthening Adaptive Development and Humane Aptitude for National Advancement | UNNATI: Unified New-Age National Training Initiatives.",
              "Four Labour Codes of India: Code on Wages (2019), Industrial Relations Code (2020), Code on Social Security (2020), and OSHWC Code (2020).",
              "19th Urban Mobility India (UMI) Conference 2026 (Concluded 24 Oct 2026): Held in Bhubaneswar, Odisha under the theme 'Urban Accessibility and Liveability in Digital Age'."
            ],
            bulletsHI: [
              "24 अक्टूबर 2026 को, मिशन कर्मयोगी के अंतर्गत क्षमता निर्माण आयोग (Capacity Building Commission - CBC) ने उत्तर प्रदेश के लखनऊ में 'साधना श्रृंखला 2026' (Strengthening Adaptive Development and Humane Aptitude for National Advancement) की तीसरी क्षेत्रीय परामर्श कार्यशाला का आयोजन किया (विजयवाड़ा और गुवाहाटी के बाद)।",
              "8 उत्तरी राज्यों और 4 केंद्र शासित प्रदेशों के वरिष्ठ अधिकारियों को संबोधित करते हुए सीबीसी सचिव जगदीप गुप्ता ने बताया कि विकसित किए गए प्रशिक्षण रोडमैप को 'उन्नति' (UNNATI - Unified New-Age National Training Initiatives) प्लेटफॉर्म पर एकीकृत किया जाएगा।",
              "दो दिवसीय 'श्रम संवाद' की घोषणा (PIB, 24 अक्टूबर 2026): केंद्रीय श्रम एवं रोजगार मंत्रालय और उत्तर प्रदेश सरकार ने 316 जिलों में चल रहे 90-दिवसीय अभियान के तहत लखनऊ में चारों श्रम संहिताओं, ESIC, EPFO और पीएम विकसित भारत रोजगार योजना पर दो दिवसीय राज्य-स्तरीय 'श्रम संवाद' (26-27 अक्टूबर) की घोषणा की।",
              "मुंबई में 'इंडिया केम-2026' का समापन (PIB, 24 अक्टूबर 2026): रसायन और पेट्रोरसायन विभाग तथा फिक्की (FICCI) द्वारा संयुक्त रूप से आयोजित तीन दिवसीय 'इंडिया केम-2026' प्रदर्शनी 24 अक्टूबर को मुंबई में संपन्न हुई, जिसमें महाराष्ट्र, मध्य प्रदेश, ओडिशा, यूपी, गुजरात, आंध्र प्रदेश और बिहार भागीदार राज्य रहे।",
              "इंडिया केम-2026 की उद्योग समस्या-समाधान प्रतियोगिता में आईसीटी (ICT) मुंबई के सौम्या भोले और सार्थक काले ने प्रथम पुरस्कार जीता, जबकि VNIT नागपुर को दूसरा और IIT गांधीनगर को तीसरा पुरस्कार मिला।"
            ],
            gkHI: [
              "UNNATI का पूर्ण रूप: Unified New-Age National Training Initiatives (मिशन कर्मयोगी के अंतर्गत)।",
              "भारत की चार श्रम संहिताएँ: वेतन संहिता (2019), औद्योगिक संबंध संहिता (2020), सामाजिक सुरक्षा संहिता (2020) और व्यावसायिक सुरक्षा, स्वास्थ्य एवं कार्यदशा संहिता (2020)।",
              "19वां अर्बन मोबिलिटी इंडिया (UMI) सम्मेलन 2026 (24 अक्टूबर 2026 को संपन्न): भुवनेश्वर, ओडिशा में 'डिजिटल युग में शहरी सुगम्यता और जीवन-योग्यता' विषय के तहत संपन्न हुआ।"
            ]
          },
          {
            id: "oct25_8",
            dateBadge: "24–25 Oct 2026 (PIB Defence & MHA)",
            sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2328089",
            catEN: "Defence and National Security",
            catHI: "रक्षा और राष्ट्रीय सुरक्षा",
            titleEN: "Indian Navy Announces Flagship Innovation Seminar 'Swavlamban 2026' in New Delhi; ITBP Celebrates 65th Raising Day & IAF Stages 'Wings Over Ganges' in Varanasi",
            titleHI: "भारतीय नौसेना ने नई दिल्ली में प्रमुख नवाचार संगोष्ठी 'स्वावलंबन 2026' की घोषणा की; ITBP ने 65वां स्थापना दिवस मनाया और वायुसेना ने वाराणसी में 'विंग्स ओवर गंगेज' का प्रदर्शन किया",
            image: CUSTOM_BANNERS_OCT25.navy_swavlamban,
            bulletsEN: [
              "According to a Press Information Bureau (PIB) Defence release issued on October 24–25, 2026, the Indian Navy will host its flagship Naval Innovation and Indigenisation Seminar—'Swavlamban 2026'—at the Manekshaw Centre in New Delhi on October 26–27, 2026.",
              "Organised by the Indian Navy in collaboration with the Defence Innovation Organisation (DIO) and the Society of Indian Defence Manufacturers (SIDM), the seminar carries the theme 'Strength and Power through Innovation and Indigenisation'.",
              "During the plenary session, Defence Minister Rajnath Singh will felicitate indigenous defence innovators and release two landmark policy references: the 'Swavlamban 5.0' document and the 'Compendium on Technology Imperatives' to guide startups and MSMEs under the iDEX ecosystem.",
              "65th Raising Day of ITBP (24 October 2026): Prime Minister Narendra Modi extended official greetings to Indo-Tibetan Border Police (ITBP) personnel ('Himveers') on their 65th Raising Day on October 24, 2026 (ITBP was raised on October 24, 1962 following the Sino-Indian War to guard the 3,488-km India-China LAC).",
              "IAF 'Wings over Ganges' Aerial Display (25 October 2026): On October 25, 2026, PM Modi witnessed the Indian Air Force Day Aerial Display-2026 at Namo Ghat in Varanasi (commemorating the 94th anniversary of the IAF under the theme 'Wings over Ganges'), featuring Tejas, LCH Prachand, SU-30MKI, Rafale, Surya Kiran, and Sarang teams."
            ],
            gkEN: [
              "Chief of the Naval Staff (CNS): Admiral Dinesh K. Tripathi | Chief of the Air Staff (CAS): Air Chief Marshal Amar Preet Singh.",
              "ITBP Raising Date: October 24, 1962 | Motto: 'Shaurya – Dridhata – Karma Nishtha' (Valour – Determination – Devotion to Duty).",
              "iDEX Full Form: Innovations for Defence Excellence (operated under Defence Innovation Organisation - DIO)."
            ],
            bulletsHI: [
              "24–25 अक्टूबर 2026 को जारी पत्र सूचना कार्यालय (PIB) की रक्षा विज्ञप्ति के अनुसार, भारतीय नौसेना 26-27 अक्टूबर 2026 को नई दिल्ली के मानेकशॉ सेंटर में अपनी प्रमुख नौसैनिक नवाचार और स्वदेशीकरण संगोष्ठी—'स्वावलंबन 2026'—का आयोजन करेगी।",
              "भारतीय नौसेना द्वारा रक्षा नवाचार संगठन (DIO) और भारतीय रक्षा विनिर्माता सोसाइटी (SIDM) के सहयोग से आयोजित इस संगोष्ठी का मुख्य विषय 'नवाचार और स्वदेशीकरण के माध्यम से शक्ति और सामर्थ्य' (Strength and Power through Innovation and Indigenisation) है।",
              "पूर्ण सत्र के दौरान, रक्षा मंत्री राजनाथ सिंह रक्षा नवाचार में योगदान देने वाले उद्योग भागीदारों को सम्मानित करेंगे और 'स्वावलंबन 5.0' दस्तावेज़ तथा 'टेक्नोलॉजी इम्पेरेटिव्स' (तकनीकी आवश्यकताओं) पर आधारित संग्रह (कम्पेंडियम) जारी करेंगे।",
              "ITBP का 65वां स्थापना दिवस (24 अक्टूबर 2026): प्रधानमंत्री नरेंद्र मोदी ने 24 अक्टूबर 2026 को भारत-तिब्बत सीमा पुलिस (ITBP) के कर्मियों ('हिमवीरों') को उनके 65वें स्थापना दिवस पर शुभकामनाएँ दीं (3,488 किमी लंबी भारत-चीन वास्तविक नियंत्रण रेखा की सुरक्षा के लिए 24 अक्टूबर 1962 को ITBP की स्थापना हुई थी)।",
              "वायुसेना का 'विंग्स ओवर गंगेज' एयर शो (25 अक्टूबर 2026): 25 अक्टूबर 2026 को प्रधानमंत्री मोदी ने वाराणसी के नमो घाट पर भारतीय वायुसेना की 94वीं वर्षगांठ के उपलक्ष्य में 'विंग्स ओवर गंगेज' विषय के तहत आयोजित एयर फोर्स डे एरियल डिस्प्ले-2026 देखा, जिसमें तेजस, एलसीएच प्रचंड, सुखोई-30MKI, राफेल, सूर्य किरण और सारंग टीमों ने भाग लिया।"
            ],
            gkHI: [
              "नौसेना प्रमुख (CNS): एडमिरल दिनेश के. त्रिपाठी | वायुसेना प्रमुख (CAS): एयर चीफ मार्शल अमर प्रीत सिंह।",
              "ITBP की स्थापना: 24 अक्टूबर 1962 | आदर्श वाक्य: 'शौर्य – दृढ़ता – कर्म निष्ठा'।",
              "iDEX का पूर्ण रूप: Innovations for Defence Excellence (रक्षा नवाचार संगठन - DIO के तहत संचालित)।"
            ]
          },
          {
            id: "oct25_9",
            dateBadge: "24 Oct 2026 (MHA & ICTS-TIFR)",
            sourceUrl: "https://www.hindustantimes.com/india-news/sajjan-singh-yadav-appointed-chief-secretary-of-jammu-and-kashmir-101792864816023.html",
            catEN: "Appointments and Global Honours",
            catHI: "नियुक्तियाँ और वैश्विक सम्मान",
            titleEN: "MHA Appoints Dr. Sajjan Singh Yadav as Chief Secretary of Jammu & Kashmir (24 Oct Order); ICTS Announces 2026 Oskar Klein Medal for String Theorist Prof. Ashoke Sen",
            titleHI: "गृह मंत्रालय ने डॉ. सज्जन सिंह यादव को जम्मू-कश्मीर का मुख्य सचिव नियुक्त किया (24 अक्टूबर का आदेश); ICTS ने प्रो. अशोक सेन को 2026 ऑस्कर क्लेन पदक मिलने की घोषणा की",
            image: CUSTOM_BANNERS_OCT25.appointments_24oct,
            bulletsEN: [
              "By an official order issued by the Ministry of Home Affairs (MHA) on Saturday, October 24, 2026, senior 1995-batch AGMUT-cadre IAS officer Dr. Sajjan Singh Yadav has been appointed as the new Chief Secretary of the Union Territory of Jammu and Kashmir.",
              "Dr. Sajjan Singh Yadav (currently serving as Additional Secretary in the Department of Expenditure, Ministry of Finance) will assume charge on November 1, 2026, succeeding incumbent Chief Secretary Atal Dulloo upon his superannuation on October 31, 2026.",
              "Holders of a Doctorate in Public Health from the London School of Hygiene & Tropical Medicine, Dr. Yadav is also the author of eight books on public policy, vaccine implementation, and financial governance.",
              "Oskar Klein Medal 2026 Announced by ICTS (24 October 2026): On October 24, 2026, the International Centre for Theoretical Sciences (ICTS-TIFR), Bengaluru officially announced that renowned Indian theoretical physicist Prof. Ashoke Sen was awarded the prestigious 2026 Oskar Klein Medal in Stockholm.",
              "Jointly conferred by Stockholm University and the Nobel Committee of the Royal Swedish Academy of Sciences (where Prof. Sen delivered the Oskar Klein Memorial Lecture on Oct 22), the medal honours his pioneering contributions to String Theory, S-duality (Sen Conjecture), and black hole entropy (Prof. Sen is also an Inaugural Fundamental Physics Prize laureate and Padma Bhushan awardee)."
            ],
            gkEN: [
              "Lieutenant Governor of Jammu & Kashmir: Manoj Sinha | Chief Minister of J&K: Omar Abdullah.",
              "Oskar Klein Memorial Lecture & Medal: Instituted in 1988 by Stockholm University and the Nobel Committee for Physics (Royal Swedish Academy of Sciences).",
              "ICTS-TIFR Location: Bengaluru, Karnataka (International Centre for Theoretical Sciences, under Tata Institute of Fundamental Research)."
            ],
            bulletsHI: [
              "शनिवार, 24 अक्टूबर 2026 को केंद्रीय गृह मंत्रालय (MHA) द्वारा जारी आधिकारिक आदेश के अनुसार, AGMUT कैडर के 1995 बैच के वरिष्ठ आईएएस अधिकारी डॉ. सज्जन सिंह यादव को केंद्र शासित प्रदेश जम्मू और कश्मीर का नया मुख्य सचिव (Chief Secretary) नियुक्त किया गया है।",
              "डॉ. सज्जन सिंह यादव (जो वर्तमान में वित्त मंत्रालय के व्यय विभाग में अतिरिक्त सचिव के रूप में कार्यरत हैं) 1 नवंबर 2026 को पदभार ग्रहण करेंगे। वे वर्तमान मुख्य सचिव अटल डुल्लू का स्थान लेंगे, जो 31 अक्टूबर 2026 को सेवानिवृत्त हो रहे हैं।",
              "लंदन स्कूल ऑफ हाइजीन एंड ट्रॉपिकल मेडिसिन से पब्लिक हेल्थ में डॉक्टरेट की उपाधि प्राप्त डॉ. यादव ने लोक नीति और वित्तीय प्रशासन पर आठ पुस्तकें भी लिखी हैं।",
              "प्रो. अशोक सेन को 2026 ऑस्कर क्लेन पदक (ICTS द्वारा 24 अक्टूबर 2026 को घोषणा): 24 अक्टूबर 2026 को इंटरनेशनल सेंटर फॉर थ्योरेटिकल साइंसेज (ICTS-TIFR), बेंगलुरु ने आधिकारिक तौर पर घोषणा की कि प्रख्यात भारतीय सैद्धांतिक भौतिक विज्ञानी प्रो. अशोक सेन को स्टॉकहोम में प्रतिष्ठित '2026 ऑस्कर क्लेन मेडल' से सम्मानित किया गया है।",
              "स्टॉकहोम विश्वविद्यालय और रॉयल स्वीडिश एकेडमी ऑफ साइंसेज की नोबेल समिति द्वारा संयुक्त रूप से प्रदान किया जाने वाला यह पदक प्रो. सेन को स्ट्रिंग थ्योरी (String Theory), एस-द्वैत (Sen Conjecture) और ब्लैक होल एंट्रॉपी में उनके अग्रणी योगदान के लिए दिया गया है।"
            ],
            gkHI: [
              "जम्मू और कश्मीर के उपराज्यपाल: मनोज सिन्हा | मुख्यमंत्री: उमर अब्दुल्ला।",
              "ऑस्कर क्लेन मेमोरियल लेक्चर और मेडल: 1988 में स्टॉकहोम विश्वविद्यालय और रॉयल स्वीडिश एकेडमी ऑफ साइंसेज की नोबेल समिति द्वारा स्थापित।",
              "ICTS-TIFR का स्थान: बेंगलुरु, कर्नाटक।"
            ]
          },
          {
            id: "oct25_10",
            dateBadge: "24–25 Oct 2026 (PIB Sports & BWF)",
            sourceUrl: "https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2328126&reg=3&lang=1",
            catEN: "Sports Affairs",
            catHI: "खेल संबंधी परिदृश्य",
            titleEN: "PM Modi Hails India's Historic Best-Ever 114-Medal Tally at Concluded Asian Para Games 2026; P.V. Sindhu Defeats Hina Akechi to Enter Maiden French Open Final",
            titleHI: "पीएम मोदी ने एशियाई पैरा खेलों 2026 में भारत के अब तक के सर्वश्रेष्ठ 114 पदकों के रिकॉर्ड की सराहना की; पी.वी. सिंधु ने हिना अकेची को हराकर पहली बार फ्रेंच ओपन फाइनल में प्रवेश किया",
            image: CUSTOM_BANNERS_OCT25.sports_para_sindhu,
            bulletsEN: [
              "On October 25, 2026, Prime Minister Narendra Modi officially lauded India's para-athletes on concluding the 5th Asian Para Games 2026 (held in Aichi-Nagoya, Japan) with a historic, record-breaking tally of 114 medals—marking India's best-ever performance at the Games.",
              "India's 114-medal haul at the 2026 Asian Para Games surpassed its previous record of 111 medals (29 Gold, 31 Silver, 51 Bronze) set at the Hangzhou 2022 Asian Para Games.",
              "A standout highlight of the closing stages was India's historic 1-2-3 podium sweep in the Men's Javelin Throw F46 event, where Rinku Hooda won Gold, Sundar Singh Gurjar clinched Silver, and Ajeet Singh secured Bronze.",
              "BWF French Open Super 750 Semifinal (Saturday, 24 October 2026): Two-time Olympic medallist P.V. Sindhu defeated Japan's Hina Akechi 21-10, 20-22, 21-16 in a thrilling 73-minute semifinal clash in Paris on October 24, 2026 to storm into her maiden Women's Singles Final at the French Open.",
              "In the French Open 2026 title clash on October 25, 2026, P.V. Sindhu faces reigning Olympic champion and World No. 1 An Se-young of South Korea."
            ],
            gkEN: [
              "5th Asian Para Games 2026 Host City: Aichi-Nagoya, Japan | India's Best-Ever Tally: 114 Medals (surpassing 111 in Hangzhou 2022).",
              "President of Paralympic Committee of India (PCI): Devendra Jhajharia.",
              "Badminton World Federation (BWF) Headquarters: Kuala Lumpur, Malaysia | French Open 2026 Tier: BWF World Tour Super 750."
            ],
            bulletsHI: [
              "25 अक्टूबर 2026 को, प्रधानमंत्री नरेंद्र मोदी ने जापान के आइची-नागोया में संपन्न हुए 5वें एशियाई पैरा खेलों 2026 (Asian Para Games 2026) में 114 पदकों के ऐतिहासिक और रिकॉर्ड-तोड़ प्रदर्शन के लिए भारतीय पैरा-एथलीटों की आधिकारिक सराहना की, जो इन खेलों में भारत का अब तक का सर्वश्रेष्ठ प्रदर्शन है।",
              "एशियाई पैरा खेलों 2026 में भारत के 114 पदकों ने हांगझोऊ 2022 एशियाई पैरा खेलों में बनाए गए 111 पदकों (29 स्वर्ण, 31 रजत, 51 कांस्य) के पिछले सर्वश्रेष्ठ रिकॉर्ड को पीछे छोड़ दिया।",
              "प्रतियोगिता के अंतिम चरण का एक प्रमुख आकर्षण पुरुषों की भाला फेंक (Javelin Throw F46) स्पर्धा में भारत का ऐतिहासिक 1-2-3 पोडियम क्लीन स्वीप रहा, जहाँ रिंकू हुड्डा ने स्वर्ण, सुंदर सिंह गुर्जर ने रजत और अजीत सिंह ने कांस्य पदक जीता।",
              "BWF फ्रेंच ओपन सुपर 750 सेमीफाइनल (शनिवार, 24 अक्टूबर 2026): दो बार की ओलंपिक पदक विजेता पी.वी. सिंधु ने 24 अक्टूबर 2026 को पेरिस में खेले गए 73 मिनट के रोमांचक सेमीफाइनल मुकाबले में जापान की हिना अकेची को 21-10, 20-22, 21-16 से हराकर अपने करियर में पहली बार फ्रेंच ओपन महिला एकल फाइनल में प्रवेश किया।",
              "25 अक्टूबर 2026 को होने वाले फ्रेंच ओपन 2026 के खिताबी मुकाबले में पी.वी. सिंधु का सामना दक्षिण कोरिया की विश्व नंबर 1 और ओलंपिक चैंपियन आन से-यंग (An Se-young) से है।"
            ],
            gkHI: [
              "5वें एशियाई पैरा खेल 2026 का मेजबान शहर: आइची-नागोया, जापान | भारत का सर्वश्रेष्ठ प्रदर्शन: 114 पदक (हांगझोऊ 2022 के 111 पदकों से अधिक)।",
              "भारतीय पैरालंपिक समिति (PCI) के अध्यक्ष: देवेंद्र झाझरिया।",
              "बैडमिंटन विश्व महासंघ (BWF) मुख्यालय: कुआलालंपुर, मलेशिया | फ्रेंच ओपन 2026 श्रेणी: BWF वर्ल्ड टूर सुपर 750।"
            ]
          }
        ]
      };
    }

    function getOct23Dataset() {
      return {
        meta: {
          day: "23",
          suffix: "rd",
          month: "Oct",
          year: "2026",
          author: "Rajesh Kumar",
          hindiPageOffset: "attached",
          includePage1: true,
          banner1: ASSETS.banner1,
          banner2: ASSETS.banner2,
          ytLink: "https://www.youtube.com/@BankingWallah",
          tgLink: "https://telegram.me/pwbankingwallah",
          facultyTgLink: "https://t.me/CAbySushmitamam"
        },
        articles: [
          {
            id: "oct23_1",
            catEN: "RBI in News",
            catHI: "समाचारों में आरबीआई",
            titleEN: "RBI Caps Withdrawals and Restricts Business Operations of Puducherry Co-operative Urban Bank",
            titleHI: "आरबीआई ने पुडुचेरी सहकारी शहरी बैंक से निकासी पर सीमा लगाई और व्यावसायिक गतिविधियों पर प्रतिबंध लगाया",
            image: ASSETS.art1_rbi,
            bulletsEN: [
              "The Reserve Bank of India (RBI) imposed operational restrictions on Puducherry Co-operative Urban Bank under the Banking Regulation Act, 1949, due to its deteriorating financial health and lack of concrete corrective measures.",
              "A withdrawal cap of ₹5,000 per depositor has been instituted across savings, current, or other deposit accounts for a period of six months.",
              "The bank is prohibited from granting loans, making fresh investments, incurring liabilities, or disposing of assets without prior RBI approval, though depositors can set off existing loans against their deposits.",
              "Eligible depositors are entitled to receive deposit insurance claims up to ₹5 lakh from the Deposit Insurance and Credit Guarantee Corporation (DICGC)."
            ],
            gkEN: [
              "DICGC Maximum Coverage Limit: ₹5 lakh per depositor per bank.",
              "Banking Regulation Act: Enacted in 1949 to regulate banking firms in India."
            ],
            bulletsHI: [
              "भारतीय रिज़र्व बैंक (RBI) ने पुडुचेरी सहकारी शहरी बैंक की बिगड़ती वित्तीय स्थिति और ठोस सुधारात्मक उपायों की कमी के कारण बैंकिंग विनियमन अधिनियम, 1949 के तहत उस पर परिचालन संबंधी प्रतिबंध लगाए।",
              "छह महीने की अवधि के लिए बचत, चालू या अन्य जमा खातों में प्रत्येक जमाकर्ता द्वारा निकासी की सीमा ₹5,000 निर्धारित की गई है।",
              "बैंक को आरबीआई की पूर्व अनुमति के बिना ऋण देने, नए निवेश करने, देनदारियाँ लेने या परिसंपत्तियों का निपटान करने से प्रतिबंधित किया गया है। हालाँकि, जमाकर्ता अपनी मौजूदा जमा राशि के विरुद्ध मौजूदा ऋणों का समायोजन कर सकते हैं।",
              "पात्र जमाकर्ता जमा बीमा और ऋण गारंटी निगम (DICGC) से ₹5 लाख तक की जमा बीमा राशि प्राप्त करने के हकदार हैं।"
            ],
            gkHI: [
              "DICGC की अधिकतम बीमा कवरेज सीमा: प्रति बैंक, प्रति जमाकर्ता ₹5 लाख।",
              "बैंकिंग विनियमन अधिनियम: भारत में बैंकिंग कंपनियों को विनियमित करने के लिए वर्ष 1949 में अधिनियमित किया गया।"
            ]
          },
          {
            id: "oct23_2",
            catEN: "RBI in News",
            catHI: "समाचारों में आरबीआई",
            titleEN: "Reserve Bank of India Cancels Entire Treasury Bill Auction Following Sharp Surge in Short-Term Yields",
            titleHI: "भारतीय रिज़र्व बैंक ने अल्पकालिक प्रतिफल में तेज़ वृद्धि के बाद ट्रेजरी बिलों की पूरी नीलामी रद्द की",
            image: ASSETS.art1_rbi,
            bulletsEN: [
              "The Reserve Bank of India rejected all bids at a major treasury bill auction due to aggressive bidding demands and a sharp surge in short-term yields.",
              "The cancelled auction involved short-term government debt instruments comprising 91-day, 182-day, and 364-day tenors.",
              "Market participants demanded significantly higher cut-off yields and priced in tighter liquidity conditions driven by recent central bank bond sales and foreign exchange swaps.",
              "The central bank holds the authority to reject auction bids when requested interest rates misalign with monetary policy objectives or debt management strategy.",
              "Treasury bills are zero-coupon money market instruments issued by the central government to finance short-term cash flow mismatches."
            ],
            gkEN: [
              "Treasury bills are issued by the central government.",
              "RBI manages public debt for the central government.",
              "Money market instruments mature within one year."
            ],
            bulletsHI: [
              "भारतीय रिज़र्व बैंक ने आक्रामक बोली मांगों और अल्पकालिक प्रतिफल में तेज़ वृद्धि के कारण ट्रेजरी बिलों की एक प्रमुख नीलामी में सभी बोलियों को अस्वीकार कर दिया।",
              "रद्द की गई नीलामी में 91-दिवसीय, 182-दिवसीय और 364-दिवसीय अवधि वाले अल्पकालिक सरकारी ऋण लिखत शामिल थे।",
              "बाज़ार सहभागियों ने हाल ही में केंद्रीय बैंक द्वारा की गई बॉन्ड बिक्री और विदेशी मुद्रा स्वैप के कारण तरलता की सख्त परिस्थितियों को ध्यान में रखते हुए काफी अधिक कट-ऑफ प्रतिफल की मांग की।",
              "जब मांगी गई ब्याज दरें मौद्रिक नीति के उद्देश्यों या ऋण प्रबंधन रणनीति के अनुरूप नहीं होती हैं, तो केंद्रीय बैंक को नीलामी की बोलियाँ अस्वीकार करने का अधिकार होता है।",
              "ट्रेजरी बिल शून्य-कूपन मुद्रा बाज़ार लिखत हैं, जिन्हें केंद्र सरकार अल्पकालिक नकदी प्रवाह के अंतर को पूरा करने के लिए जारी करती है।"
            ],
            gkHI: [
              "ट्रेजरी बिल केंद्र सरकार द्वारा जारी किए जाते हैं।",
              "भारतीय रिज़र्व बैंक केंद्र सरकार के सार्वजनिक ऋण का प्रबंधन करता है।",
              "मुद्रा बाज़ार के लिखतों की परिपक्वता अवधि एक वर्ष के भीतर होती है।"
            ]
          },
          {
            id: "oct23_3",
            catEN: "Banking and Finance",
            catHI: "बैंकिंग और वित्त",
            titleEN: "AU Small Finance Bank and Paytm Launch India's First Family Lounge Access RuPay Credit Card",
            titleHI: "एयू स्मॉल फाइनेंस बैंक और पेटीएम ने भारत का पहला फैमिली लाउंज एक्सेस रुपे क्रेडिट कार्ड लॉन्च किया",
            image: ASSETS.art3_paytm,
            bulletsEN: [
              "AU Small Finance Bank partnered with Paytm to launch a lifetime-free co-branded RuPay credit card integrated with unique family airport lounge access benefits.",
              "The credit card offers up to 12 complimentary annual airport lounge visits which can be shared by up to four family members traveling together on eligible round-trip flights booked through Paytm.",
              "The card operates on the RuPay network, enabling seamless linkage with Unified Payments Interface (UPI) applications for everyday merchant transactions.",
              "Cardholders earn tiered reward points, including up to 2% rewards on eligible Paytm UPI transactions, 5% rewards on travel and gold purchases, and 1% on utility bill payments.",
              "Airport lounge entry is facilitated through a streamlined QR-based access mechanism directly linked to qualifying flight reservations made via the digital platform."
            ],
            gkEN: [
              "AU Small Finance Bank Headquarters: Jaipur, Rajasthan.",
              "Paytm Parent Company: One 97 Communications.",
              "RuPay Card Network Developed by: National Payments Corporation of India."
            ],
            bulletsHI: [
              "एयू स्मॉल फाइनेंस बैंक ने पेटीएम के साथ साझेदारी करके एक आजीवन निःशुल्क सह-ब्रांडेड रुपे क्रेडिट कार्ड लॉन्च किया, जिसमें परिवार के सदस्यों के लिए विशेष हवाई अड्डा लाउंज सुविधा उपलब्ध है।",
              "यह क्रेडिट कार्ड प्रतिवर्ष अधिकतम 12 निःशुल्क हवाई अड्डा लाउंज विज़िट की सुविधा प्रदान करता है। पात्र राउंड-ट्रिप उड़ानों के लिए पेटीएम के माध्यम से बुकिंग करने पर एक साथ यात्रा करने वाले अधिकतम चार परिवार के सदस्य इस सुविधा को साझा कर सकते हैं।",
              "यह कार्ड रुपे नेटवर्क पर काम करता है, जिससे दैनिक व्यापारी लेनदेन के लिए इसे यूनिफाइड पेमेंट्स इंटरफेस (UPI) अनुप्रयोगों से आसानी से जोड़ा जा सकता है।",
              "कार्डधारकों को विभिन्न श्रेणियों में रिवॉर्ड पॉइंट मिलते हैं। इनमें पात्र पेटीएम UPI लेनदेन पर अधिकतम 2%, यात्रा और सोने की खरीद पर 5% तथा उपयोगिता बिलों के भुगतान पर 1% तक रिवॉर्ड शामिल हैं।",
              "डिजिटल प्लेटफॉर्म के माध्यम से की गई पात्र उड़ान बुकिंग से सीधे जुड़े क्यूआर-कोड आधारित सरल तंत्र द्वारा हवाई अड्डे के लाउंज में प्रवेश की सुविधा प्रदान की जाती है।"
            ],
            gkHI: [
              "एयू स्मॉल फाइनेंस बैंक का मुख्यालय: जयपुर, राजस्थान।",
              "पेटीएम की मूल कंपनी: वन 97 कम्युनिकेशंस।",
              "रुपे कार्ड नेटवर्क का विकास: भारतीय राष्ट्रीय भुगतान निगम (NPCI) द्वारा किया गया।"
            ]
          },
          {
            id: "oct23_4",
            catEN: "Business and Economy",
            catHI: "व्यापार और अर्थव्यवस्था",
            titleEN: "Ministry of Commerce Launches Nationwide State-Level Outreach to Boost Exports Through Free Trade Agreements",
            titleHI: "वाणिज्य मंत्रालय ने मुक्त व्यापार समझौतों के माध्यम से निर्यात को बढ़ावा देने के लिए देशव्यापी राज्य-स्तरीय संपर्क अभियान शुरू किया",
            image: ASSETS.art4_fta,
            bulletsEN: [
              "The Department of Commerce under the Ministry of Commerce and Industry initiated a comprehensive state-level outreach campaign to empower farmers, women, youth, MSMEs, and small business owners to leverage international trade opportunities.",
              "Union Minister Piyush Goyal announced that these collaborative initiatives with state administrations are designed to translate bilateral trade pacts into tangible export gains for regional producers.",
              "The nationwide awareness program specifically focuses on informing domestic enterprises about tariff reductions, duty-free market access, and compliance procedures under active trade accords.",
              "India currently maintains active economic partnerships and Free Trade Agreements spanning 38 countries across global markets.",
              "Recent international agreements include trade pacts with the European Free Trade Association nations, the United Kingdom, Oman, and New Zealand, providing expanding export corridors."
            ],
            gkEN: [
              "Union Minister of Commerce and Industry: Piyush Goyal.",
              "Total active Free Trade Agreement network covers 38 countries.",
              "EFTA member nations: Iceland, Liechtenstein, Norway, Switzerland."
            ],
            bulletsHI: [
              "वाणिज्य एवं उद्योग मंत्रालय के अंतर्गत वाणिज्य विभाग ने किसानों, महिलाओं, युवाओं, सूक्ष्म, लघु एवं मध्यम उद्यमों (MSMEs) और छोटे व्यवसायों के मालिकों को अंतरराष्ट्रीय व्यापार के अवसरों का लाभ उठाने में सक्षम बनाने के लिए एक व्यापक राज्य-स्तरीय संपर्क अभियान शुरू किया।",
              "केंद्रीय मंत्री पीयूष गोयल ने घोषणा की कि राज्य प्रशासन के साथ ये सहयोगात्मक पहल द्विपक्षीय व्यापार समझौतों को क्षेत्रीय उत्पादकों के लिए ठोस निर्यात लाभ में बदलने के उद्देश्य से शुरू की गई हैं।",
              "यह राष्ट्रव्यापी जागरूकता कार्यक्रम घरेलू उद्यमों को लागू व्यापार समझौतों के अंतर्गत शुल्क में कटौती, शुल्क-मुक्त बाज़ार तक पहुँच और अनुपालन प्रक्रियाओं की जानकारी देने पर विशेष रूप से केंद्रित है।",
              "भारत वर्तमान में वैश्विक बाज़ारों में 38 देशों के साथ सक्रिय आर्थिक साझेदारी और मुक्त व्यापार समझौते बनाए हुए है।",
              "हाल के अंतरराष्ट्रीय समझौतों में यूरोपीय मुक्त व्यापार संघ (EFTA) के सदस्य देशों, यूनाइटेड किंगडम, ओमान और न्यूज़ीलैंड के साथ व्यापार समझौते शामिल हैं, जो निर्यात के लिए विस्तारित मार्ग उपलब्ध कराते हैं।"
            ],
            gkHI: [
              "केंद्रीय वाणिज्य एवं उद्योग मंत्री: पीयूष गोयल।",
              "सक्रिय मुक्त व्यापार समझौतों का कुल दायरा: 38 देश।",
              "EFTA के सदस्य देश: आइसलैंड, लिकटेंस्टीन, नॉर्वे और स्विट्ज़रलैंड।"
            ]
          },
          {
            id: "oct23_5",
            catEN: "National Affairs",
            catHI: "राष्ट्रीय परिदृश्य",
            titleEN: "National Geographic Selects Jaipur for Best of the World 2027 List on Tricentennial Milestone",
            titleHI: "नेशनल जियोग्राफिक ने जयपुर को 300वीं वर्षगाँठ के ऐतिहासिक अवसर पर ‘बेस्ट ऑफ द वर्ल्ड 2027’ सूची में शामिल किया",
            image: ASSETS.art5_jaipur,
            bulletsEN: [
              "National Geographic has featured Jaipur, the capital city of Rajasthan, in its prestigious Best of the World 2027 list spanning twenty-five global destinations.",
              "The Pink City has earned this international recognition as it prepares to celebrate the 300th anniversary of its founding in 2027.",
              "Founded in 1727 by Maharaja Sawai Jai Singh II, the city is internationally celebrated for its distinctive pink-hued architecture and royal heritage.",
              "Key historic landmarks highlighted in the global feature include the Amer Fort, Hawa Mahal, City Palace, Jal Mahal, and the Jantar Mantar astronomical observatory."
            ],
            gkEN: [
              "Capital of Rajasthan: Jaipur.",
              "UNESCO World Heritage Site in Jaipur: Jantar Mantar.",
              "Current Chief Minister of Rajasthan: Bhajan Lal Sharma."
            ],
            bulletsHI: [
              "नेशनल जियोग्राफिक ने राजस्थान की राजधानी जयपुर को अपनी प्रतिष्ठित ‘बेस्ट ऑफ द वर्ल्ड 2027’ सूची में शामिल किया है, जिसमें दुनिया भर के 25 पर्यटन स्थल शामिल हैं।",
              "गुलाबी नगरी को यह अंतरराष्ट्रीय पहचान ऐसे समय मिली है, जब यह वर्ष 2027 में अपनी स्थापना की 300वीं वर्षगाँठ मनाने की तैयारी कर रही है।",
              "महाराजा सवाई जय सिंह द्वितीय द्वारा वर्ष 1727 में स्थापित यह शहर अपनी विशिष्ट गुलाबी रंग की वास्तुकला और शाही विरासत के लिए अंतरराष्ट्रीय स्तर पर प्रसिद्ध है।",
              "इस वैश्विक सूची में प्रमुख ऐतिहासिक स्थलों के रूप में आमेर किला, हवा महल, सिटी पैलेस, जल महल और जंतर मंतर खगोलीय वेधशाला को शामिल किया गया है।"
            ],
            gkHI: [
              "राजस्थान की राजधानी: जयपुर।",
              "जयपुर का यूनेस्को विश्व धरोहर स्थल: जंतर मंतर।",
              "राजस्थान के वर्तमान मुख्यमंत्री: भजन लाल शर्मा।"
            ]
          },
          {
            id: "oct23_6",
            catEN: "International Affairs",
            catHI: "अंतरराष्ट्रीय परिदृश्य",
            titleEN: "World Health Organization Confirms Global First Human Infection of Shamonda Virus in France",
            titleHI: "विश्व स्वास्थ्य संगठन ने फ्रांस में शमोंडा वायरस से मानव संक्रमण के दुनिया के पहले परिदृश्य की पुष्टि की",
            image: ASSETS.art6_shamonda,
            bulletsEN: [
              "France confirmed the world's first documented human case of the livestock-borne Shamonda virus in an immunocompromised patient who subsequently died at a hospital in Lyon in October 2026.",
              "The Shamonda virus is primarily an arthropod-borne pathogen traditionally found in animals, with transmission occurring through vector bites such as midges.",
              "Global health authorities including the World Health Organization are monitoring the situation following the detection of the livestock virus in a human host.",
              "The patient possessed a severely weakened immune system and a serious pre-existing illness which amplified vulnerability to the viral infection."
            ],
            gkEN: [
              "World Health Organization Headquarters: Geneva, Switzerland.",
              "Capital of France: Paris.",
              "Currency of France: Euro."
            ],
            bulletsHI: [
              "फ्रांस ने अक्टूबर 2026 में पशुधन से संबंधित शमोंडा वायरस से मानव संक्रमण के दुनिया के पहले दर्ज परिदृश्य की पुष्टि की। संक्रमित व्यक्ति की प्रतिरक्षा प्रणाली कमजोर थी और बाद में ल्योन के एक अस्पताल में उसकी मृत्यु हो गई।",
              "शमोंडा वायरस मुख्य रूप से संधिपाद वाहकों से फैलने वाला रोगजनक है, जो पारंपरिक रूप से जानवरों में पाया जाता है। इसका प्रसार मिज जैसे वाहकों के काटने से होता है।",
              "मानव शरीर में पशुधन से संबंधित इस वायरस का पता चलने के बाद विश्व स्वास्थ्य संगठन सहित वैश्विक स्वास्थ्य प्राधिकरण स्थिति पर निगरानी रख रहे हैं।",
              "संक्रमित व्यक्ति की प्रतिरक्षा प्रणाली गंभीर रूप से कमजोर थी और उसे पहले से ही एक गंभीर बीमारी थी, जिससे उसके इस वायरल संक्रमण की चपेट में आने की आशंका बढ़ गई।"
            ],
            gkHI: [
              "विश्व स्वास्थ्य संगठन का मुख्यालय: जिनेवा, स्विट्ज़रलैंड।",
              "फ्रांस की राजधानी: पेरिस।",
              "फ्रांस की मुद्रा: यूरो।"
            ]
          },
          {
            id: "oct23_7",
            catEN: "Reports and Index",
            catHI: "रिपोर्ट और सूचकांक",
            titleEN: "UNESCO Releases 2026 Global Education Monitoring Report on Access and Equity",
            titleHI: "यूनेस्को ने पहुँच और समानता पर 2026 की वैश्विक शिक्षा निगरानी रिपोर्ट जारी की",
            image: ASSETS.art7_unesco,
            bulletsEN: [
              "The UNESCO 2026 Global Education Monitoring Report highlights that global gender disparities in education are gradually narrowing, though deep systemic hurdles continue to affect completion rates.",
              "The report reveals that 58% of nations legally guarantee the right to education without sex or gender discrimination, while only 35% extend protections to pregnant and parenting girls.",
              "Disadvantaged regions, particularly sub-Saharan Africa and parts of South Asia, continue to face severe obstacles related to child marriage and early motherhood keeping young women out of school.",
              "Intersecting vulnerabilities, such as poverty combined with rural isolation, drastically reduce upper secondary school completion rates for young girls in developing regions."
            ],
            gkEN: [
              "UNESCO Headquarters: Paris, France.",
              "UNESCO Head: Audrey Azoulay.",
              "Year of UNESCO Foundation: 1945."
            ],
            bulletsHI: [
              "यूनेस्को की 2026 की वैश्विक शिक्षा निगरानी रिपोर्ट इस बात पर प्रकाश डालती है कि शिक्षा में वैश्विक लैंगिक असमानताएँ धीरे-धीरे कम हो रही हैं, हालाँकि शिक्षा पूरी करने की दरों को प्रभावित करने वाली गंभीर व्यवस्थागत बाधाएँ अभी भी बनी हुई हैं।",
              "रिपोर्ट के अनुसार, 58% देश कानूनी रूप से लिंग के आधार पर भेदभाव के बिना शिक्षा के अधिकार की गारंटी देते हैं, जबकि केवल 35% देश गर्भवती लड़कियों और माता-पिता बन चुकी लड़कियों को संरक्षण प्रदान करते हैं।",
              "वंचित क्षेत्रों, विशेषकर उप-सहारा अफ्रीका और दक्षिण एशिया के कुछ हिस्सों में, बाल विवाह और कम उम्र में मातृत्व से संबंधित गंभीर बाधाएँ बनी हुई हैं, जिनके कारण युवा महिलाएँ शिक्षा से वंचित रह जाती हैं।",
              "गरीबी और ग्रामीण क्षेत्रों में अलग-थलग रहने जैसी परस्पर जुड़ी कमजोरियाँ विकासशील क्षेत्रों में किशोरियों के लिए उच्चतर माध्यमिक शिक्षा पूरी करने की दर को काफी कम कर देती हैं।"
            ],
            gkHI: [
              "यूनेस्को का मुख्यालय: पेरिस, फ्रांस।",
              "यूनेस्को की प्रमुख: ऑड्रे अज़ूले।",
              "यूनेस्को की स्थापना का वर्ष: 1945।"
            ]
          },
          {
            id: "oct23_8",
            catEN: "Summits and Conferences",
            catHI: "शिखर सम्मेलन और सम्मेलन",
            titleEN: "India Hosts 7th Agrivoltaics World Conference 2026 in New Delhi",
            titleHI: "भारत ने नई दिल्ली में 7वें एग्रीवोल्टाइक्स विश्व सम्मेलन 2026 की मेजबानी की",
            image: ASSETS.art8_agrivoltaics,
            bulletsEN: [
              "India is hosting the 7th Agrivoltaics World Conference for the first time in the Global South at Bharat Mandapam in New Delhi.",
              "The three-day international event commenced on October 21, 2026, and runs through October 23, 2026.",
              "The conference focuses on integrating agriculture with solar photovoltaic electricity generation to enhance smallholder farmer incomes and promote clean energy.",
              "Over 1,200 global delegates are participating to discuss dual land-use frameworks and address climate challenges faced by agrarian economies.",
              "Discussions heavily feature scaling initiatives under supportive national frameworks like the PM-KUSUM scheme to advance rural solar power adoption."
            ],
            gkEN: [
              "Union Agriculture Minister of India: Shivraj Singh Chouhan.",
              "Bharat Mandapam Location: Pragati Maidan, New Delhi."
            ],
            bulletsHI: [
              "भारत पहली बार ग्लोबल साउथ में 7वें एग्रीवोल्टाइक्स विश्व सम्मेलन की मेजबानी नई दिल्ली के भारत मंडपम में कर रहा है।",
              "यह तीन दिवसीय अंतरराष्ट्रीय कार्यक्रम 21 अक्टूबर 2026 को शुरू हुआ और 23 अक्टूबर 2026 तक चलेगा।",
              "यह सम्मेलन छोटे किसानों की आय बढ़ाने और स्वच्छ ऊर्जा को बढ़ावा देने के लिए कृषि को सौर फोटोवोल्टिक विद्युत उत्पादन के साथ एकीकृत करने पर केंद्रित है।",
              "1,200 से अधिक वैश्विक प्रतिनिधि दोहरे भूमि-उपयोग की रूपरेखाओं पर चर्चा करने और कृषि-आधारित अर्थव्यवस्थाओं के सामने आने वाली जलवायु संबंधी चुनौतियों का समाधान करने के लिए भाग ले रहे हैं।",
              "चर्चाओं में ग्रामीण क्षेत्रों में सौर ऊर्जा को अपनाने को बढ़ावा देने के लिए पीएम-कुसुम योजना जैसी सहायक राष्ट्रीय रूपरेखाओं के अंतर्गत पहलों का विस्तार करने पर विशेष जोर दिया जा रहा है।"
            ],
            gkHI: [
              "भारत के केंद्रीय कृषि मंत्री: शिवराज सिंह चौहान।",
              "भारत मंडपम का स्थान: प्रगति मैदान, नई दिल्ली।"
            ]
          },
          {
            id: "oct23_9",
            catEN: "Books and Authors",
            catHI: "पुस्तकें और लेखक",
            titleEN: "Former Prasar Bharati Chairman Surya Prakash Unveils Book Chronicling Five Decades of Indian Television Journalism",
            titleHI: "प्रसार भारती के पूर्व अध्यक्ष सूर्य प्रकाश ने भारतीय टेलीविजन पत्रकारिता के पाँच दशकों का विवरण देने वाली पुस्तक का अनावरण किया",
            image: ASSETS.art9_tvbook,
            bulletsEN: [
              "Former Prasar Bharati Chairman Surya Prakash launched veteran broadcaster and former Doordarshan producer Harsaran Bir Kaur Pandey's book titled The Evolution of TV News in India: From Doordarshan to Digital Disruption – An Insider's Account in New Delhi.",
              "The newly released publication documents nearly five decades of Indian broadcasting history, tracing its transformation from early state-controlled television to modern satellite channels and digital media networks.",
              "The book captures pivotal moments in Indian journalism, including newsroom challenges during the Emergency, historical political coverages, and landmark global state visits.",
              "The author draws extensively from her 14-year tenure at Doordarshan and subsequent international civil service career with global health and development organizations.",
              "The book is published by Om Books International and was unveiled at a high-profile ceremony attended by veteran media professionals, anchors, and broadcasting experts."
            ],
            gkEN: [
              "Prasar Bharati established year: 1997.",
              "Doordarshan was founded year: 1959.",
              "Current Prasar Bharati CEO: Gaurav Dwivedi."
            ],
            bulletsHI: [
              "प्रसार भारती के पूर्व अध्यक्ष सूर्य प्रकाश ने नई दिल्ली में अनुभवी प्रसारक और दूरदर्शन की पूर्व निर्माता हरसरन बीर कौर पांडे की पुस्तक द इवोल्यूशन ऑफ टीवी न्यूज़ इन इंडिया: फ्रॉम दूरदर्शन टू डिजिटल डिसरप्शन – एन इनसाइडर्स अकाउंट का विमोचन किया।",
              "यह नई पुस्तक भारतीय प्रसारण इतिहास के लगभग पाँच दशकों का दस्तावेज़ प्रस्तुत करती है और शुरुआती राज्य-नियंत्रित टेलीविजन से लेकर आधुनिक उपग्रह चैनलों तथा डिजिटल मीडिया नेटवर्क तक के इसके परिवर्तन का वर्णन करती है।",
              "पुस्तक में भारतीय पत्रकारिता के महत्वपूर्ण घटनाक्रमों को शामिल किया गया है, जिनमें आपातकाल के दौरान न्यूज़रूम की चुनौतियाँ, ऐतिहासिक राजनीतिक कवरेज और विश्व के प्रमुख नेताओं की महत्वपूर्ण राजकीय यात्राएँ शामिल हैं।",
              "लेखिका ने दूरदर्शन में अपने 14 वर्षों के कार्यकाल और उसके बाद वैश्विक स्वास्थ्य एवं विकास संगठनों के साथ अंतरराष्ट्रीय सिविल सेवा में अपने करियर के अनुभवों का व्यापक उपयोग किया है।",
              "इस पुस्तक का प्रकाशन ओम बुक्स इंटरनेशनल ने किया है। इसका विमोचन एक भव्य समारोह में किया गया, जिसमें अनुभवी मीडिया पेशेवरों, समाचार प्रस्तुतकर्ताओं और प्रसारण विशेषज्ञों ने भाग लिया।"
            ],
            gkHI: [
              "प्रसार भारती की स्थापना का वर्ष: 1997।",
              "दूरदर्शन की स्थापना का वर्ष: 1959।",
              "प्रसार भारती के वर्तमान सीईओ: गौरव द्विवेदी।"
            ]
          },
          {
            id: "oct23_10",
            catEN: "Sports Affairs",
            catHI: "खेल संबंधी परिदृश्य",
            titleEN: "Bangladesh and Nepal to Jointly Host 2027 ICC Under-19 Women's T20 World Cup",
            titleHI: "बांग्लादेश और नेपाल संयुक्त रूप से 2027 आईसीसी अंडर-19 महिला टी20 विश्व कप की मेजबानी करेंगे",
            image: ASSETS.art10_iccu19,
            bulletsEN: [
              "Bangladesh and Nepal will officially co-host the third edition of the ICC Under-19 Women's T20 World Cup scheduled from January 21 to February 6, 2027.",
              "A total of 16 national teams will compete across multiple venues in the two co-hosting South Asian nations during the tournament.",
              "The marquee international cricket event marks a historic multi-nation hosting arrangement for a women's global youth tournament in the region.",
              "The tournament structure includes a total of 41 matches, with Nepal hosting specific fixtures to promote grassroots women's cricket.",
              "Defending and past champions alongside top global contenders will participate in this multi-week T20 competition."
            ],
            gkEN: [
              "ICC Headquarters: Dubai, United Arab Emirates.",
              "Current ICC Chairman: Greg Barclay.",
              "Currency of Bangladesh: Bangladeshi Taka."
            ],
            bulletsHI: [
              "बांग्लादेश और नेपाल आधिकारिक रूप से आईसीसी अंडर-19 महिला टी20 विश्व कप के तीसरे संस्करण की संयुक्त मेजबानी करेंगे, जिसका आयोजन 21 जनवरी से 6 फरवरी 2027 तक निर्धारित है।",
              "इस टूर्नामेंट में दोनों मेजबान दक्षिण एशियाई देशों के विभिन्न स्थलों पर कुल 16 राष्ट्रीय टीमें प्रतिस्पर्धा करेंगी।",
              "यह प्रमुख अंतरराष्ट्रीय क्रिकेट प्रतियोगिता इस क्षेत्र में महिला युवा वैश्विक टूर्नामेंट की बहुराष्ट्रीय मेजबानी की एक ऐतिहासिक पहल है।",
              "इस टूर्नामेंट में कुल 41 मैच खेले जाएंगे। जमीनी स्तर पर महिला क्रिकेट को बढ़ावा देने के लिए नेपाल कुछ निर्धारित मैचों की मेजबानी करेगा।",
              "इस कई सप्ताह तक चलने वाली टी20 प्रतियोगिता में मौजूदा और पूर्व चैंपियन टीमों के साथ-साथ दुनिया की प्रमुख दावेदार टीमें भी भाग लेंगी।"
            ],
            gkHI: [
              "आईसीसी का मुख्यालय: दुबई, संयुक्त अरब अमीरात।",
              "आईसीसी के वर्तमान अध्यक्ष: ग्रेग बार्कले।",
              "बांग्लादेश की मुद्रा: बांग्लादेशी टका।"
            ]
          }
        ]
      };
    }

    let currentDatasetKey = "oct25";
    let state = getOct25Dataset();
    let activeArticleIndex = 0;
    let editLangMode = "both";
    let previewLang = "en";
    let currentZoom = 0.75;

    function showToast(msg) {
      const t = document.getElementById("appToast");
      const txt = document.getElementById("appToastText");
      if (!t || !txt) return;
      txt.textContent = msg;
      t.classList.remove("hidden");
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => {
        t.classList.add("hidden");
      }, 2600);
    }

    function switchDataset(key) {
      currentDatasetKey = key;
      state = key === "oct23" ? getOct23Dataset() : getOct25Dataset();
      activeArticleIndex = 0;

      const btn25 = document.getElementById("btnLoadOct25");
      const btn23 = document.getElementById("btnLoadOct23");
      if (key === "oct25") {
        btn25.className = "px-2.5 py-1.5 rounded-md text-xs font-semibold transition bg-sky-600 text-white";
        btn23.className = "px-2.5 py-1.5 rounded-md text-xs font-semibold transition text-slate-300 hover:text-white";
      } else {
        btn23.className = "px-2.5 py-1.5 rounded-md text-xs font-semibold transition bg-sky-600 text-white";
        btn25.className = "px-2.5 py-1.5 rounded-md text-xs font-semibold transition text-slate-300 hover:text-white";
      }

      syncMetaInputsFromState();
      renderAll();
      showToast(key === "oct25" ? "Loaded 25th Oct 2026 Fetched Current Affairs" : "Loaded 23rd Oct 2026 Attached Reference Edition");
    }

    function syncMetaInputsFromState() {
      document.getElementById("inpDocDay").value = state.meta.day;
      document.getElementById("inpDocSuffix").value = state.meta.suffix;
      document.getElementById("inpDocMonth").value = state.meta.month;
      document.getElementById("inpDocYear").value = state.meta.year;
      document.getElementById("inpAuthorName").value = state.meta.author;
      document.getElementById("selHindiPageOffset").value = state.meta.hindiPageOffset;
      document.getElementById("chkIncludePage1").checked = state.meta.includePage1;
      document.getElementById("inpLinkYT").value = state.meta.ytLink;
      document.getElementById("inpLinkTG").value = state.meta.tgLink;
      document.getElementById("inpLinkFacultyTG").value = state.meta.facultyTgLink;
      document.getElementById("topAppBarLogo").src = ASSETS.bwLogo;
      document.getElementById("previewBanner1Img").src = state.meta.banner1;
      document.getElementById("previewBanner2Img").src = state.meta.banner2;
    }

    function updateDocMeta() {
      state.meta.day = document.getElementById("inpDocDay").value.trim() || "25";
      state.meta.suffix = document.getElementById("inpDocSuffix").value.trim() || "th";
      state.meta.month = document.getElementById("inpDocMonth").value.trim() || "Oct";
      state.meta.year = document.getElementById("inpDocYear").value.trim() || "2026";
      state.meta.author = document.getElementById("inpAuthorName").value.trim() || "Rajesh Kumar";
      state.meta.hindiPageOffset = document.getElementById("selHindiPageOffset").value;
      state.meta.ytLink = document.getElementById("inpLinkYT").value.trim();
      state.meta.tgLink = document.getElementById("inpLinkTG").value.trim();
      state.meta.facultyTgLink = document.getElementById("inpLinkFacultyTG").value.trim();
      renderPDFPreview();
    }

    function setEditorTab(tab) {
      const panels = {
        articles: document.getElementById("editorPanelArticles"),
        banners: document.getElementById("editorPanelBanners"),
        settings: document.getElementById("editorPanelSettings")
      };
      const btns = {
        articles: document.getElementById("tabBtnArticles"),
        banners: document.getElementById("tabBtnBanners"),
        settings: document.getElementById("tabBtnSettings")
      };
      Object.keys(panels).forEach(k => {
        if (k === tab) {
          panels[k].classList.remove("hidden");
          btns[k].className = "px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-600 text-white transition";
        } else {
          panels[k].classList.add("hidden");
          btns[k].className = "px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-800 transition";
        }
      });
    }

    function setEditLangMode(mode) {
      editLangMode = mode;
      const modes = { both: "langEditBoth", en: "langEditEN", hi: "langEditHI" };
      Object.keys(modes).forEach(k => {
        const el = document.getElementById(modes[k]);
        el.className = k === mode
          ? "px-2 py-0.5 rounded text-[11px] font-semibold bg-sky-600 text-white"
          : "px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-slate-300";
      });
      renderArticleEditor();
    }

    function setPreviewLanguage(lang) {
      previewLang = lang;
      const btnEN = document.getElementById("previewLangEN");
      const btnHI = document.getElementById("previewLangHI");
      if (lang === "en") {
        btnEN.className = "px-3 py-1 rounded-md text-xs font-bold bg-emerald-600 text-white transition";
        btnHI.className = "px-3 py-1 rounded-md text-xs font-bold text-slate-300 hover:text-white transition";
      } else {
        btnHI.className = "px-3 py-1 rounded-md text-xs font-bold bg-amber-600 text-white transition";
        btnEN.className = "px-3 py-1 rounded-md text-xs font-bold text-slate-300 hover:text-white transition";
      }
      renderPDFPreview();
    }

    function adjustZoom(delta) {
      currentZoom = Math.min(1.15, Math.max(0.45, Math.round((currentZoom + delta) * 100) / 100));
      applyZoom();
    }

    function resetZoom() {
      currentZoom = 0.75;
      applyZoom();
    }

    function applyZoom() {
      const wrapper = document.getElementById("pdfPreviewScaleWrapper");
      const badge = document.getElementById("zoomValueBadge");
      if (wrapper) {
        wrapper.style.transform = `scale(${currentZoom})`;
        wrapper.style.marginBottom = `${Math.round((currentZoom - 1) * 1123)}px`;
      }
      if (badge) {
        badge.textContent = `${Math.round(currentZoom * 100)}%`;
      }
    }

    function renderArticlePills() {
      const container = document.getElementById("articlePillsContainer");
      const countBadge = document.getElementById("articleCountBadge");
      if (countBadge) countBadge.textContent = String(state.articles.length);
      if (!container) return;

      container.innerHTML = state.articles.map((art, idx) => {
        const isActive = idx === activeArticleIndex;
        const shortCat = (art.catEN || "News").split(" ")[0];
        return `<button onclick="selectArticle(${idx})" class="px-2.5 py-1 rounded-lg text-xs font-semibold border transition flex items-center gap-1 ${
          isActive
            ? "bg-sky-600 border-sky-400 text-white shadow"
            : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
        }">
          <span>#${idx + 1}</span>
          <span class="text-[10px] opacity-80 truncate max-w-[68px]">${escapeHtml(shortCat)}</span>
        </button>`;
      }).join("");
    }

    function selectArticle(idx) {
      activeArticleIndex = idx;
      renderArticlePills();
      renderArticleEditor();
    }

    function renderArticleEditor() {
      const card = document.getElementById("activeArticleEditorCard");
      if (!card) return;
      const art = state.articles[activeArticleIndex];
      if (!art) {
        card.innerHTML = `<div class="text-center py-8 text-slate-400 text-xs">No articles present. Click "+ Add News Item" to create one.</div>`;
        return;
      }

      const showEN = editLangMode === "both" || editLangMode === "en";
      const showHI = editLangMode === "both" || editLangMode === "hi";
      const gridCols = editLangMode === "both" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1";

      card.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-md bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-bold">
              Article #${activeArticleIndex + 1} of ${state.articles.length}
            </span>
            ${art.dateBadge ? `<span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-semibold">📅 ${escapeHtml(art.dateBadge)}</span>` : ""}
            ${art.sourceUrl ? `<a href="${escapeAttr(art.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="text-[11px] text-sky-400 hover:underline">🔗 Verified Source</a>` : ""}
            <span class="text-xs text-slate-400 truncate max-w-[180px]">${escapeHtml(art.catEN)}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <button onclick="moveArticle(-1)" ${activeArticleIndex === 0 ? "disabled" : ""} class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs text-slate-200 border border-slate-700" title="Move Up">↑</button>
            <button onclick="moveArticle(1)" ${activeArticleIndex === state.articles.length - 1 ? "disabled" : ""} class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs text-slate-200 border border-slate-700" title="Move Down">↓</button>
            <button onclick="deleteActiveArticle()" class="px-2.5 py-1 rounded bg-rose-950/80 hover:bg-rose-900 text-rose-300 text-xs font-semibold border border-rose-800/60">Delete Item</button>
          </div>
        </div>

        <div class="bg-slate-800/60 border border-slate-700/80 rounded-xl p-3 flex flex-col sm:flex-row items-center gap-3">
          <div class="w-full sm:w-36 h-24 rounded-lg bg-slate-950 border border-slate-700 overflow-hidden flex items-center justify-center flex-shrink-0">
            ${
              art.image
                ? `<img src="${art.image}" alt="Article visual" class="w-full h-full object-cover" />`
                : `<span class="text-[11px] text-slate-500">No Image (Text Only)</span>`
            }
          </div>
          <div class="flex-1 flex flex-col gap-2 w-full">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-white">Article Image Slot (Appears under blue headline bar)</span>
              ${
                art.image
                  ? `<button onclick="removeArticleImage()" class="text-[11px] text-rose-400 hover:underline">Remove Image</button>`
                  : ""
              }
            </div>
            <p class="text-[11px] text-slate-400">Upload your own photo (PNG/JPG/WebP) or pick from the extracted PDF gallery.</p>
            <div class="flex flex-wrap items-center gap-2">
              <label for="articleImgFileInput" class="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold cursor-pointer transition">
                📤 Upload Custom Image
              </label>
              <input id="articleImgFileInput" type="file" accept="image/*" class="hidden" onchange="handleArticleImageUpload(this)" />
              <button onclick="openImageLibraryModal()" class="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold transition">
                🖼 Choose from PDF Gallery
              </button>
            </div>
          </div>
        </div>

        <div class="grid ${gridCols} gap-3">
          ${showEN ? `
          <div class="bg-slate-800/40 border border-slate-800 rounded-lg p-2.5 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold uppercase text-emerald-400">English Category &amp; Headline</span>
            </div>
            <div>
              <label class="block text-[10px] text-slate-400 mb-0.5">Category Tag (Black Bar)</label>
              <input type="text" value="${escapeAttr(art.catEN)}" oninput="updateArticleField('catEN', this.value)" class="w-full px-2.5 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs text-white font-semibold" />
            </div>
            <div>
              <label class="block text-[10px] text-slate-400 mb-0.5">Headline #${activeArticleIndex + 1} (Blue Bar)</label>
              <textarea rows="2" oninput="updateArticleField('titleEN', this.value)" class="w-full p-2 rounded bg-slate-900 border border-slate-700 text-xs text-white font-semibold">${escapeHtml(art.titleEN)}</textarea>
            </div>
          </div>
          ` : ""}

          ${showHI ? `
          <div class="bg-slate-800/40 border border-slate-800 rounded-lg p-2.5 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold uppercase text-amber-400">Hindi Category &amp; Headline (हिंदी)</span>
            </div>
            <div>
              <label class="block text-[10px] text-slate-400 mb-0.5">श्रेणी टैग (Black Bar)</label>
              <input type="text" value="${escapeAttr(art.catHI)}" oninput="updateArticleField('catHI', this.value)" class="w-full px-2.5 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs text-white font-semibold" />
            </div>
            <div>
              <label class="block text-[10px] text-slate-400 mb-0.5">शीर्षक #${activeArticleIndex + 1} (Blue Bar)</label>
              <textarea rows="2" oninput="updateArticleField('titleHI', this.value)" class="w-full p-2 rounded bg-slate-900 border border-slate-700 text-xs text-white font-semibold">${escapeHtml(art.titleHI)}</textarea>
            </div>
          </div>
          ` : ""}
        </div>

        <div class="grid ${gridCols} gap-3">
          ${showEN ? `
          <div class="bg-slate-800/40 border border-slate-800 rounded-lg p-2.5 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-emerald-400">❖ English News Pointers (${art.bulletsEN.length})</span>
              <button onclick="addBullet('bulletsEN')" class="px-2 py-0.5 rounded bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold">+ Add Pointer</button>
            </div>
            <div class="flex flex-col gap-2">
              ${art.bulletsEN.map((b, bIdx) => `
                <div class="flex items-start gap-1.5">
                  <span class="text-sky-400 text-xs mt-1.5">❖</span>
                  <textarea rows="3" oninput="updateBullet('bulletsEN', ${bIdx}, this.value)" class="flex-1 p-2 rounded bg-slate-900 border border-slate-700 text-xs text-slate-100 leading-relaxed">${escapeHtml(b)}</textarea>
                  <button onclick="removeBullet('bulletsEN', ${bIdx})" class="text-slate-500 hover:text-rose-400 text-xs px-1 mt-1" title="Remove pointer">✕</button>
                </div>
              `).join("")}
            </div>
          </div>
          ` : ""}

          ${showHI ? `
          <div class="bg-slate-800/40 border border-slate-800 rounded-lg p-2.5 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-amber-400">❖ हिंदी समाचार बिंदु (${art.bulletsHI.length})</span>
              <button onclick="addBullet('bulletsHI')" class="px-2 py-0.5 rounded bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border border-amber-500/30 text-[11px] font-semibold">+ बिंदु जोड़ें</button>
            </div>
            <div class="flex flex-col gap-2">
              ${art.bulletsHI.map((b, bIdx) => `
                <div class="flex items-start gap-1.5">
                  <span class="text-amber-400 text-xs mt-1.5">❖</span>
                  <textarea rows="3" oninput="updateBullet('bulletsHI', ${bIdx}, this.value)" class="flex-1 p-2 rounded bg-slate-900 border border-slate-700 text-xs text-slate-100 leading-relaxed">${escapeHtml(b)}</textarea>
                  <button onclick="removeBullet('bulletsHI', ${bIdx})" class="text-slate-500 hover:text-rose-400 text-xs px-1 mt-1" title="Remove pointer">✕</button>
                </div>
              `).join("")}
            </div>
          </div>
          ` : ""}
        </div>

        <div class="grid ${gridCols} gap-3">
          ${showEN ? `
          <div class="bg-slate-800/40 border border-slate-800 rounded-lg p-2.5 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-sky-300">Static GK Facts (${art.gkEN.length})</span>
              <button onclick="addBullet('gkEN')" class="px-2 py-0.5 rounded bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 border border-sky-500/30 text-[11px] font-semibold">+ Add GK Fact</button>
            </div>
            <div class="flex flex-col gap-1.5">
              ${art.gkEN.map((g, gIdx) => `
                <div class="flex items-start gap-1.5">
                  <span class="text-slate-400 text-xs mt-1.5">❖</span>
                  <input type="text" value="${escapeAttr(g)}" oninput="updateBullet('gkEN', ${gIdx}, this.value)" class="flex-1 px-2 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs text-slate-100" />
                  <button onclick="removeBullet('gkEN', ${gIdx})" class="text-slate-500 hover:text-rose-400 text-xs px-1 mt-1">✕</button>
                </div>
              `).join("")}
            </div>
          </div>
          ` : ""}

          ${showHI ? `
          <div class="bg-slate-800/40 border border-slate-800 rounded-lg p-2.5 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-sky-300">स्थिर सामान्य ज्ञान बिंदु (${art.gkHI.length})</span>
              <button onclick="addBullet('gkHI')" class="px-2 py-0.5 rounded bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 border border-sky-500/30 text-[11px] font-semibold">+ GK जोड़ें</button>
            </div>
            <div class="flex flex-col gap-1.5">
              ${art.gkHI.map((g, gIdx) => `
                <div class="flex items-start gap-1.5">
                  <span class="text-slate-400 text-xs mt-1.5">❖</span>
                  <input type="text" value="${escapeAttr(g)}" oninput="updateBullet('gkHI', ${gIdx}, this.value)" class="flex-1 px-2 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs text-slate-100" />
                  <button onclick="removeBullet('gkHI', ${gIdx})" class="text-slate-500 hover:text-rose-400 text-xs px-1 mt-1">✕</button>
                </div>
              `).join("")}
            </div>
          </div>
          ` : ""}
        </div>
      `;
    }

    function updateArticleField(field, val) {
      const art = state.articles[activeArticleIndex];
      if (!art) return;
      art[field] = val;
      if (field === "catEN") renderArticlePills();
      schedulePreviewRender();
    }

    function updateBullet(listKey, idx, val) {
      const art = state.articles[activeArticleIndex];
      if (!art || !art[listKey]) return;
      art[listKey][idx] = val;
      schedulePreviewRender();
    }

    function addBullet(listKey) {
      const art = state.articles[activeArticleIndex];
      if (!art || !art[listKey]) return;
      art[listKey].push(listKey.endsWith("HI") ? "नया बिंदु यहाँ दर्ज करें..." : "Enter new pointer details here...");
      renderArticleEditor();
      renderPDFPreview();
    }

    function removeBullet(listKey, idx) {
      const art = state.articles[activeArticleIndex];
      if (!art || !art[listKey]) return;
      art[listKey].splice(idx, 1);
      renderArticleEditor();
      renderPDFPreview();
    }

    function moveArticle(dir) {
      const target = activeArticleIndex + dir;
      if (target < 0 || target >= state.articles.length) return;
      const temp = state.articles[activeArticleIndex];
      state.articles[activeArticleIndex] = state.articles[target];
      state.articles[target] = temp;
      activeArticleIndex = target;
      renderAll();
      showToast(`Moved article to #${activeArticleIndex + 1}`);
    }

    function deleteActiveArticle() {
      if (state.articles.length <= 1) {
        showToast("At least one article is required in the document.");
        return;
      }
      state.articles.splice(activeArticleIndex, 1);
      if (activeArticleIndex >= state.articles.length) {
        activeArticleIndex = state.articles.length - 1;
      }
      renderAll();
      showToast("Deleted news item");
    }

    function addNewArticle() {
      const newNum = state.articles.length + 1;
      state.articles.push({
        id: "custom_" + Date.now(),
        catEN: "Banking and Finance",
        catHI: "बैंकिंग और वित्त",
        titleEN: `New Current Affairs Headline #${newNum}`,
        titleHI: `नया समसामयिकी शीर्षक #${newNum}`,
        image: ASSETS.art1_rbi,
        bulletsEN: [
          "Enter the primary news event details and official announcement highlights here.",
          "Include key figures, financial outlays, or regulatory provisions relevant for banking exams."
        ],
        gkEN: [
          "Headquarters / Static Fact: Enter static GK linkage here."
        ],
        bulletsHI: [
          "यहाँ प्रमुख समाचार घटना का विवरण और आधिकारिक घोषणा के मुख्य बिंदु दर्ज करें।",
          "बैंकिंग परीक्षाओं के लिए उपयोगी प्रमुख आँकड़े, वित्तीय परिव्यय या नियामक प्रावधान शामिल करें।"
        ],
        gkHI: [
          "मुख्यालय / स्थिर सामान्य ज्ञान: यहाँ स्थिर सामान्य ज्ञान तथ्य दर्ज करें।"
        ]
      });
      activeArticleIndex = state.articles.length - 1;
      setEditorTab("articles");
      renderAll();
      showToast(`Added Article #${newNum}`);
    }

    function handleArticleImageUpload(inputEl) {
      const file = inputEl && inputEl.files && inputEl.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(evt) {
        const art = state.articles[activeArticleIndex];
        if (art && evt.target && evt.target.result) {
          art.image = evt.target.result;
          renderArticleEditor();
          renderPDFPreview();
          showToast("Uploaded custom image for Article #" + (activeArticleIndex + 1));
        }
      };
      reader.readAsDataURL(file);
    }

    function removeArticleImage() {
      const art = state.articles[activeArticleIndex];
      if (!art) return;
      art.image = "";
      renderArticleEditor();
      renderPDFPreview();
      showToast("Removed image from Article #" + (activeArticleIndex + 1));
    }

    function toggleIncludePage1(checked) {
      state.meta.includePage1 = checked;
      renderPDFPreview();
    }

    function handleBannerUpload(slot, inputEl) {
      const file = inputEl && inputEl.files && inputEl.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(evt) {
        if (!evt.target || !evt.target.result) return;
        if (slot === 1) {
          state.meta.banner1 = evt.target.result;
          document.getElementById("previewBanner1Img").src = evt.target.result;
        } else {
          state.meta.banner2 = evt.target.result;
          document.getElementById("previewBanner2Img").src = evt.target.result;
        }
        renderPDFPreview();
        showToast(`Updated Page 1 Banner #${slot}`);
      };
      reader.readAsDataURL(file);
    }

    function resetBannerToDefault(slot) {
      if (slot === 1) {
        state.meta.banner1 = ASSETS.banner1;
        document.getElementById("previewBanner1Img").src = ASSETS.banner1;
      } else {
        state.meta.banner2 = ASSETS.banner2;
        document.getElementById("previewBanner2Img").src = ASSETS.banner2;
      }
      renderPDFPreview();
      showToast(`Restored original Page 1 Banner #${slot}`);
    }

    function openImageLibraryModal() {
      const modal = document.getElementById("imageLibraryModal");
      const grid = document.getElementById("imageLibraryGrid");
      if (!modal || !grid) return;
      grid.innerHTML = IMAGE_GALLERY.map(item => `
        <button onclick="selectGalleryImage('${item.id}')" class="bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500 rounded-xl p-2 flex flex-col gap-1.5 text-left transition group">
          <img src="${item.src}" alt="${escapeAttr(item.label)}" class="w-full h-24 object-cover rounded-lg bg-slate-950" />
          <span class="text-[11px] font-semibold text-slate-200 group-hover:text-sky-300 truncate w-full">${escapeHtml(item.label)}</span>
        </button>
      `).join("");
      modal.classList.remove("hidden");
    }

    function closeImageLibraryModal() {
      document.getElementById("imageLibraryModal").classList.add("hidden");
    }

    function selectGalleryImage(id) {
      const found = IMAGE_GALLERY.find(x => x.id === id);
      const art = state.articles[activeArticleIndex];
      if (found && art) {
        art.image = found.src;
        closeImageLibraryModal();
        renderArticleEditor();
        renderPDFPreview();
        showToast(`Selected "${found.label}"`);
      }
    }

    function openQuickImportModal() {
      document.getElementById("quickImportModal").classList.remove("hidden");
    }

    function closeQuickImportModal() {
      document.getElementById("quickImportModal").classList.add("hidden");
    }

    function submitQuickImport() {
      const catEN = document.getElementById("impCatEN").value.trim() || "Banking and Finance";
      const catHI = document.getElementById("impCatHI").value.trim() || "बैंकिंग और वित्त";
      const titleEN = document.getElementById("impTitleEN").value.trim() || "New Fetched Current Affairs Update";
      const titleHI = document.getElementById("impTitleHI").value.trim() || "नया समसामयिकी अपडेट";

      const cleanLines = (raw) =>
        raw.split(/\r?\n/)
           .map(s => s.replace(/^[❖•\-\*\d\.\)\s]+/, "").trim())
           .filter(Boolean);

      const bulletsEN = cleanLines(document.getElementById("impBulletsEN").value);
      const bulletsHI = cleanLines(document.getElementById("impBulletsHI").value);
      const gkEN = cleanLines(document.getElementById("impGkEN").value);
      const gkHI = cleanLines(document.getElementById("impGkHI").value);

      state.articles.push({
        id: "imp_" + Date.now(),
        catEN,
        catHI,
        titleEN,
        titleHI,
        image: ASSETS.art1_rbi,
        bulletsEN: bulletsEN.length ? bulletsEN : ["Add English news pointers here."],
        gkEN: gkEN.length ? gkEN : ["Static GK fact here."],
        bulletsHI: bulletsHI.length ? bulletsHI : ["यहाँ हिंदी समाचार बिंदु जोड़ें।"],
        gkHI: gkHI.length ? gkHI : ["स्थिर सामान्य ज्ञान बिंदु।"]
      });

      activeArticleIndex = state.articles.length - 1;
      closeQuickImportModal();
      renderAll();
      showToast("Imported new bilingual current affairs item!");
    }

    function buildFlowBlocksForLang(lang) {
      const isHI = lang === "hi";
      const blocks = [];

      state.articles.forEach((art, idx) => {
        const num = idx + 1;
        const cat = isHI ? art.catHI : art.catEN;
        const title = isHI ? art.titleHI : art.titleEN;
        const bullets = isHI ? art.bulletsHI : art.bulletsEN;
        const gks = isHI ? art.gkHI : art.gkEN;

        blocks.push({
          type: "header_and_image",
          articleIdx: idx,
          num,
          cat,
          title,
          image: art.image || ""
        });

        bullets.forEach((bText) => {
          if (bText && bText.trim()) {
            blocks.push({
              type: "bullet",
              articleIdx: idx,
              text: bText.trim()
            });
          }
        });

        if (gks && gks.length > 0) {
          blocks.push({
            type: "static_gk_header",
            articleIdx: idx,
            label: isHI ? "स्थिर सामान्य ज्ञान बिंदु" : "Static GK Facts",
            firstGk: gks[0]
          });
          for (let i = 1; i < gks.length; i++) {
            if (gks[i] && gks[i].trim()) {
              blocks.push({
                type: "gk_bullet",
                articleIdx: idx,
                text: gks[i].trim()
              });
            }
          }
        }
      });

      return blocks;
    }

    function renderBlockHTML(block) {
      if (block.type === "header_and_image") {
        return `
          <div class="pdf-block-unit" data-art="${block.articleIdx}">
            <div class="pdf-cat-bar">${escapeHtml(block.cat)}</div>
            <div class="pdf-title-bar">
              <span class="pdf-title-num">${block.num}.</span>
              <span class="pdf-title-text">${escapeHtml(block.title)}</span>
            </div>
            ${
              block.image
                ? `<div class="pdf-article-img-wrap"><img src="${block.image}" alt="" class="pdf-article-img" /></div>`
                : ""
            }
          </div>
        `;
      }
      if (block.type === "bullet" || block.type === "gk_bullet") {
        return `
          <div class="pdf-block-unit pdf-bullet-row">
            <span class="pdf-diamond">❖</span>
            <span class="pdf-bullet-text">${escapeHtml(block.text)}</span>
          </div>
        `;
      }
      if (block.type === "static_gk_header") {
        return `
          <div class="pdf-block-unit">
            <div class="pdf-static-header">${escapeHtml(block.label)}</div>
            <div class="pdf-bullet-row">
              <span class="pdf-diamond">❖</span>
              <span class="pdf-bullet-text">${escapeHtml(block.firstGk)}</span>
            </div>
          </div>
        `;
      }
      return "";
    }

    function estimateBlockHeightPx(block, lang) {
      const isHI = lang === "hi";
      const charsPerLine = isHI ? 42 : 47;
      const lineHeight = isHI ? 19.5 : 18.0;

      if (block.type === "header_and_image") {
        const catH = 26;
        const titleLines = Math.max(1, Math.ceil((block.title || "").length / (isHI ? 38 : 42)));
        const titleH = titleLines * (isHI ? 19 : 18) + 12;
        const imgH = block.image ? 192 : 4;
        return catH + titleH + imgH + 8;
      }
      if (block.type === "bullet" || block.type === "gk_bullet") {
        const lines = Math.max(1, Math.ceil((block.text || "").length / charsPerLine));
        return lines * lineHeight + (isHI ? 5.5 : 4.2);
      }
      if (block.type === "static_gk_header") {
        const lines = Math.max(1, Math.ceil((block.firstGk || "").length / charsPerLine));
        return 24 + lines * lineHeight + 6;
      }
      return 24;
    }

    function paginateBlocksForLang(lang) {
      const blocks = buildFlowBlocksForLang(lang);
      const MAX_COL_HEIGHT = 965;
      const pages = [];

      let curPage = { left: [], right: [], leftH: 0, rightH: 0 };
      let inRightCol = false;

      blocks.forEach((blk) => {
        const h = estimateBlockHeightPx(blk, lang);
        if (!inRightCol) {
          if (curPage.leftH + h <= MAX_COL_HEIGHT || curPage.left.length === 0) {
            curPage.left.push(blk);
            curPage.leftH += h;
          } else {
            inRightCol = true;
            curPage.right.push(blk);
            curPage.rightH += h;
          }
        } else {
          if (curPage.rightH + h <= MAX_COL_HEIGHT || curPage.right.length === 0) {
            curPage.right.push(blk);
            curPage.rightH += h;
          } else {
            pages.push(curPage);
            curPage = { left: [blk], right: [], leftH: h, rightH: 0 };
            inRightCol = false;
          }
        }
      });

      if (curPage.left.length > 0 || curPage.right.length > 0) {
        pages.push(curPage);
      }

      return pages;
    }

    function buildCompletePagesHTMLForLang(lang) {
      const isHI = lang === "hi";
      const langClass = isHI ? "pdf-lang-hi" : "pdf-lang-en";
      const contentPages = paginateBlocksForLang(lang);
      const htmlPages = [];

      if (state.meta.includePage1) {
        htmlPages.push(`
          <div class="pdf-page-sheet ${langClass}" data-page-type="banners">
            <div style="padding: 46px 68px; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; align-items: center;">
              <div style="width: 100%; height: 445px; display: flex; align-items: center; justify-content: center;">
                <img src="${state.meta.banner1}" alt="Banking Test Pass Banner" style="width: 100%; height: 100%; object-fit: fill;" />
              </div>
              <div style="width: 100%; height: 420px; display: flex; align-items: center; justify-content: center; margin-bottom: 18px;">
                <img src="${state.meta.banner2}" alt="Govt Exams Test Pass Banner" style="width: 100%; height: 100%; object-fit: fill;" />
              </div>
            </div>
          </div>
        `);
      }

      const headerHTML = `
        <div class="pdf-header-bar">
          <img src="${ASSETS.bwLogo}" alt="BW" class="pdf-header-logo" />
          <div class="pdf-header-title">
            DAILY CURRENT AFFAIRS ${escapeHtml(state.meta.year)} (<span class="pdf-header-date">${escapeHtml(state.meta.day)}<sup style="font-size:18px;">${escapeHtml(state.meta.suffix)}</sup> ${escapeHtml(state.meta.month)}</span>)
          </div>
        </div>
      `;

      const socialFooterBlockHTML = `
        <div class="pdf-social-block">
          <div class="pdf-social-mascot-wrap">
            <img src="${ASSETS.mascot}" alt="Mascot" style="width: 74px; height: 86px; object-fit: contain;" />
            <img src="${ASSETS.badge}" alt="Support" style="width: 34px; height: 34px; object-fit: contain;" />
          </div>
          <div class="pdf-social-links">
            <div>YT link: <a href="${escapeAttr(state.meta.ytLink)}" target="_blank" rel="noopener noreferrer">${escapeHtml(state.meta.ytLink)}</a></div>
            <div>Telegram link: – <a href="${escapeAttr(state.meta.tgLink)}" target="_blank" rel="noopener noreferrer">${escapeHtml(state.meta.tgLink)}</a></div>
            <div>Faculty Telegram link: – <a href="${escapeAttr(state.meta.facultyTgLink)}" target="_blank" rel="noopener noreferrer">${escapeHtml(state.meta.facultyTgLink)}</a></div>
          </div>
        </div>
      `;

      const getFooterPageNum = (contentIdx, isStandaloneSocialPage) => {
        const physicalPageNum = (state.meta.includePage1 ? 2 : 1) + contentIdx;
        if (isHI && state.meta.hindiPageOffset === "attached") {
          if (isStandaloneSocialPage) return 7;
          return 6 + contentIdx;
        }
        return physicalPageNum;
      };

      const lastIdx = contentPages.length - 1;
      const lastPage = contentPages[lastIdx];
      const maxUsedOnLast = lastPage ? Math.max(lastPage.leftH, lastPage.rightH) : 0;
      const canFitSocialOnLastPage = lastPage && maxUsedOnLast <= 360;

      contentPages.forEach((pg, cIdx) => {
        const isLast = cIdx === lastIdx;
        const pageNumLabel = getFooterPageNum(cIdx, false);

        if (isLast && canFitSocialOnLastPage) {
          const colHeightPx = Math.max(180, Math.ceil(maxUsedOnLast) + 24);
          htmlPages.push(`
            <div class="pdf-page-sheet ${langClass}" data-page-type="content-final" data-has-links="true">
              ${headerHTML}
              <img src="${ASSETS.pwWatermark}" alt="" class="pdf-watermark" style="top: 64%;" />
              <div class="pdf-columns-wrap" style="height: ${colHeightPx}px;">
                <div class="pdf-col-divider"></div>
                <div class="pdf-col">${pg.left.map(renderBlockHTML).join("")}</div>
                <div class="pdf-col">${pg.right.map(renderBlockHTML).join("")}</div>
              </div>
              ${socialFooterBlockHTML}
              <div class="pdf-page-footer">Page | ${pageNumLabel}</div>
            </div>
          `);
        } else {
          htmlPages.push(`
            <div class="pdf-page-sheet ${langClass}" data-page-type="content">
              ${headerHTML}
              <img src="${ASSETS.pwWatermark}" alt="" class="pdf-watermark" />
              <div class="pdf-columns-wrap">
                <div class="pdf-col-divider"></div>
                <div class="pdf-col">${pg.left.map(renderBlockHTML).join("")}</div>
                <div class="pdf-col">${pg.right.map(renderBlockHTML).join("")}</div>
              </div>
              <div class="pdf-page-footer">Page | ${pageNumLabel}</div>
            </div>
          `);
        }
      });

      if (!canFitSocialOnLastPage) {
        const extraPageNum = getFooterPageNum(contentPages.length, true);
        htmlPages.push(`
          <div class="pdf-page-sheet ${langClass}" data-page-type="social-only" data-has-links="true">
            ${headerHTML}
            <div style="margin-top: 28px;">
              ${socialFooterBlockHTML}
            </div>
            <img src="${ASSETS.pwWatermark}" alt="" class="pdf-watermark" style="top: 56%; width: 370px; height: 370px;" />
            <div class="pdf-page-footer">Page | ${extraPageNum}</div>
          </div>
        `);
      }

      return htmlPages;
    }

    let __previewTimer = null;
    function schedulePreviewRender() {
      clearTimeout(__previewTimer);
      __previewTimer = setTimeout(renderPDFPreview, 120);
    }

    function renderPDFPreview() {
      const container = document.getElementById("pdfVisiblePagesContainer");
      if (!container) return;

      const enPages = buildCompletePagesHTMLForLang("en");
      const hiPages = buildCompletePagesHTMLForLang("hi");

      const enCountEl = document.getElementById("enPageCountLabel");
      const hiCountEl = document.getElementById("hiPageCountLabel");
      if (enCountEl) enCountEl.textContent = String(enPages.length);
      if (hiCountEl) hiCountEl.textContent = String(hiPages.length);

      const activePages = previewLang === "hi" ? hiPages : enPages;
      container.innerHTML = activePages.join("");
      applyZoom();
    }

    function renderAll() {
      renderArticlePills();
      renderArticleEditor();
      renderPDFPreview();
    }

    function getExportFilename(lang) {
      const langLabel = lang === "hi" ? "Hindi" : "English";
      const d = `${state.meta.day}${state.meta.suffix} ${state.meta.month}`;
      const author = state.meta.author || "Rajesh Kumar";
      return `${d}_News Article_Banking_(${langLabel})_${author}.pdf`;
    }

    async function generatePDFForLang(lang, progressPrefix) {
      const modal = document.getElementById("exportProgressModal");
      const titleEl = document.getElementById("exportModalTitle");
      const statusEl = document.getElementById("exportModalStatus");
      const barEl = document.getElementById("exportProgressBar");
      const stage = document.getElementById("pdfOffscreenStage");

      modal.classList.remove("hidden");
      const langTitle = lang === "hi" ? "Hindi (हिंदी)" : "English";
      titleEl.textContent = `${progressPrefix || "Exporting"} ${langTitle} PDF...`;

      const pagesHTML = buildCompletePagesHTMLForLang(lang);
      stage.innerHTML = pagesHTML.join("");

      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
      await new Promise(r => setTimeout(r, 150));

      const sheetEls = stage.querySelectorAll(".pdf-page-sheet");
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true
      });

      const pageW = 210;
      const pageH = 297;

      for (let i = 0; i < sheetEls.length; i++) {
        const sheet = sheetEls[i];
        const pct = Math.round(((i + 0.5) / sheetEls.length) * 100);
        statusEl.textContent = `Rendering ${langTitle} — Page ${i + 1} of ${sheetEls.length}...`;
        barEl.style.width = `${pct}%`;

        await new Promise(r => setTimeout(r, 40));

        const canvas = await window.html2canvas(sheet, {
          scale: 2.0,
          useCORS: true,
          backgroundColor: "#ffffff",
          logging: false,
          width: 794,
          height: 1123
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.90);
        if (i > 0) {
          pdf.addPage("a4", "portrait");
        }
        pdf.addImage(imgData, "JPEG", 0, 0, pageW, pageH, undefined, "FAST");

        if (sheet.getAttribute("data-has-links") === "true") {
          const sheetRect = sheet.getBoundingClientRect();
          const anchors = sheet.querySelectorAll("a[href]");
          anchors.forEach(a => {
            const r = a.getBoundingClientRect();
            const xMm = ((r.left - sheetRect.left) / 794) * pageW;
            const yMm = ((r.top - sheetRect.top) / 1123) * pageH;
            const wMm = (r.width / 794) * pageW;
            const hMm = (r.height / 1123) * pageH;
            const href = a.getAttribute("href");
            if (href && wMm > 0 && hMm > 0) {
              pdf.link(xMm, yMm, wMm, hMm, { url: href });
            }
          });
        }
      }

      barEl.style.width = "100%";
      const outName = getExportFilename(lang);
      pdf.save(outName);
      stage.innerHTML = "";
      return outName;
    }

    async function exportSinglePDF(lang) {
      try {
        const fname = await generatePDFForLang(lang, "Generating");
        document.getElementById("exportProgressModal").classList.add("hidden");
        showToast(`Downloaded ${fname}`);
      } catch (err) {
        document.getElementById("exportProgressModal").classList.add("hidden");
        showToast("PDF export encountered an error: " + (err && err.message ? err.message : String(err)));
      }
    }

    async function exportBothPDFs() {
      try {
        const enName = await generatePDFForLang("en", "[1/2] Generating");
        await new Promise(r => setTimeout(r, 350));
        const hiName = await generatePDFForLang("hi", "[2/2] Generating");
        document.getElementById("exportProgressModal").classList.add("hidden");
        showToast(`Exported both PDFs: ${enName} & ${hiName}`);
      } catch (err) {
        document.getElementById("exportProgressModal").classList.add("hidden");
        showToast("Dual PDF export error: " + (err && err.message ? err.message : String(err)));
      }
    }

    function escapeHtml(str) {
      return String(str == null ? "" : str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }

    function escapeAttr(str) {
      return escapeHtml(str).replace(/"/g, "&quot;");
    }

    function initStudioApp() {
      if (window.__studioInitialized) return;
      window.__studioInitialized = true;
      try {
        const saved = localStorage.getItem("dca_pdf_studio_state_v2");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed && Array.isArray(parsed.articles) && parsed.articles.length > 0) {
            Object.assign(state, parsed);
          }
        }
      } catch (e) {
        console.warn("Could not restore saved state:", e);
      }
      syncMetaInputsFromState();
      renderAll();
    }

    // Auto-save state to localStorage whenever renderAll runs
    const _origRenderAll = renderAll;
    renderAll = function() {
      _origRenderAll();
      try {
        localStorage.setItem("dca_pdf_studio_state_v2", JSON.stringify(state));
      } catch (e) {}
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initStudioApp);
    } else {
      initStudioApp();
    }
