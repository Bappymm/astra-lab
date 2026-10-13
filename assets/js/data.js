/* ============================================================================
   ASTRA LAB — WEBSITE CONTENT
   ----------------------------------------------------------------------------
   This is the ONLY file you normally need to edit to update the website.
   Change the text/links below, save, and refresh the page. No coding needed.

   TIPS
   • Keep the quotes "" around every value.
   • Separate items with commas.
   • To add a person / publication / project, copy an existing { ... } block,
     paste it, and edit the values.
   • Photos go in  assets/images/  — then put the file name in "image".
   • Anything marked  TODO  is a placeholder to be confirmed/updated.
   • Counts shown on the home page (publications, awards, courses) are
     calculated from the lists below, so they stay correct automatically.
   ============================================================================ */

window.LAB_DATA = {

  /* ---------------------------------------------------------------------- */
  /*  SITE / LAB IDENTITY  (shown in the sidebar on every page)             */
  /* ---------------------------------------------------------------------- */
  site: {
    labShort: "ASTRA Lab",
    labName: "ASTRA Lab",
    tagline: "AI & Digital Twin for Advanced Manufacturing and Smart Systems",
    department: "Department of Mechanical & Industrial Engineering, Louisiana State University",
    location: "Baton Rouge, Louisiana, USA",
    logo: "assets/images/logo.svg",
    // Google Maps embed query (lab / department address)
    mapQuery: "Louisiana State University, Baton Rouge, LA",
    // Lab / PI contact + social links (leave "" to hide a link)
    email: "mmbappy@lsu.edu",
    scholar: "https://scholar.google.com/citations?user=FRV5XRUAAAAJ&hl=en",
    researchgate: "https://www.researchgate.net/profile/Mahathir-Bappy-2",
    linkedin: "https://www.linkedin.com/in/mahathir-mohammad-bappy-b122a978/",
    github: "" // TODO add lab GitHub org if there is one
  },

  /* ---------------------------------------------------------------------- */
  /*  HOME PAGE                                                             */
  /* ---------------------------------------------------------------------- */
  home: {
    heroTitle: "Welcome to ASTRA Lab",
    heroSubtitle:
      "AI & Digital Twin for Advanced Manufacturing and Smart Systems",

    /* Rotating animated panels under the hero. Each entry pairs a caption with
       one of the built-in animations, chosen by "art":
         "printing"  — additive manufacturing print head laying down layers
         "twin"      — a machine and its synchronized digital twin
         "factory"   — robotic arm and conveyor on a smart factory line
         "ai"        — neural network turning sensor data into decisions
       Reorder or reword freely; drop an entry to remove that panel. */
    showcase: [
      { art: "printing", title: "Advanced Manufacturing",
        text: "In-situ, layer-wise monitoring and certification of additive processes." },
      { art: "twin", title: "Digital Twin",
        text: "Physical assets mirrored by synchronized, physics-informed virtual models." },
      { art: "factory", title: "Smart Systems",
        text: "Robotics, sensing, and automation working together on the factory floor." },
      { art: "ai", title: "Artificial Intelligence",
        text: "Machine learning that turns streaming sensor data into real-time decisions." }
    ],
    image: "assets/images/gal-3d-scanning.webp", // swap for a lab group photo later if desired
    imageCaption: "3D scanning a printed part for in-process quality monitoring",
    aboutLead:
      "ASTRA Lab, led by Dr. Mahathir Mohammad Bappy in the Department of Mechanical & " +
      "Industrial Engineering at Louisiana State University, develops data-driven and " +
      "physics-informed methods to monitor, understand, and control complex engineered systems.",
    aboutBody:
      "Our research focuses on advanced sensing and analytics for systems informatics, " +
      "privacy-preserving modeling, digital twins, physics-informed machine learning, and " +
      "expert human–AI collaboration. Applications span smart manufacturing, additive " +
      "manufacturing, cyber-physical security, robotic systems, energy and water systems " +
      "resilience, sustainability, and engineering education."
  },

  /* ---------------------------------------------------------------------- */
  /*  NEWS  (newest first — shown on the Home page)                         */
  /* ---------------------------------------------------------------------- */
  news: [
    { date: "2026", text: "New paper in The International Journal of Advanced Manufacturing Technology: vision transformers for real-time surface defect detection in FDM." },
    { date: "2026", text: "Published in Applied Water Science: AI-enabled modeling for smart rural wastewater treatment systems — current practices and remaining gaps." },
    { date: "2025", text: "Adaptive thermal history de-identification for privacy-preserving data sharing in directed energy deposition published in the Journal of Computing and Information Science in Engineering." },
    { date: "Aug 2024", text: "Dr. Mahathir Mohammad Bappy joined Louisiana State University as an Assistant Professor and founded ASTRA Lab." },
    { date: "2024", text: "ASTRA Lab is recruiting fully-funded Ph.D. students interested in Machine Learning, Advanced Manufacturing, Privacy-Preserving ML, and Computer Vision. See the Join page." },
    { date: "2024", text: "Dr. Bappy received the NSF Student/Early Career Researcher Travel Award." },
    { date: "2024", text: "Dr. Bappy received the ISE “Outstanding Graduate Student Researcher” Award (2023–2024) at Mississippi State University." }
    // Add newer items at the TOP of this list, following the same pattern.
  ],

  /* ---------------------------------------------------------------------- */
  /*  LAB DIRECTOR — full profile (shown on the Director page)              */
  /* ---------------------------------------------------------------------- */
  director: {
    name: "Dr. Mahathir Mohammad Bappy",
    title: "Assistant Professor of Industrial Engineering",
    role: "Director, ASTRA Lab",
    department: "Department of Mechanical & Industrial Engineering",
    university: "Louisiana State University",
    image: "assets/images/bappy.webp",
    email: "mmbappy@lsu.edu",
    scholar: "https://scholar.google.com/citations?user=FRV5XRUAAAAJ&hl=en",
    researchgate: "https://www.researchgate.net/profile/Mahathir-Bappy-2",
    linkedin: "https://www.linkedin.com/in/mahathir-mohammad-bappy-b122a978/",
    interests: [
      "Systems Informatics", "Additive Manufacturing", "Digital Twins",
      "Privacy-Preserving AI", "Physics-Informed Machine Learning",
      "Condition Monitoring", "Smart Manufacturing", "Supply Chain Sustainability"
    ],
    bio: [
      "Dr. Mahathir Mohammad Bappy is an Assistant Professor of Industrial Engineering in the " +
      "Department of Mechanical and Industrial Engineering at Louisiana State University, where he " +
      "directs ASTRA Lab. His research advances the understanding and control of complex engineered " +
      "systems through advanced sensing, data analytics, and intelligent monitoring — with emphasis on " +
      "privacy-preserving modeling, in-situ process certification for additive manufacturing, digital " +
      "twins, and physics-informed machine learning.",

      "He earned his Ph.D. in Industrial and Systems Engineering from Mississippi State University, " +
      "where his dissertation, “Towards Privacy-Preserving Component Certification for Metal Additive " +
      "Manufacturing,” was carried out in the Intelligent Data-Enabled Analytics (IDEA) Laboratory. His " +
      "doctoral research spanned additive manufacturing analytics, condition monitoring of rotary " +
      "machinery, and bio-manufacturing, supported by the National Science Foundation and the " +
      "Department of Defense. He holds an M.Sc. from Bangladesh University of Engineering and " +
      "Technology (BUET) and a B.Sc. from Shahjalal University of Science and Technology (SUST), both " +
      "in Industrial and Production Engineering.",

      "Before his doctoral studies, he spent nearly four years in industry as an industrial engineer " +
      "with Masco Group, Bata, and Coats, and served as a Lecturer at SUST. His work has been " +
      "recognized with the ISE Outstanding Graduate Student Researcher Award, an NSF Student/Early " +
      "Career Researcher Travel Award, the INFORMS Student Chapter Magna Cum Laude Award, and " +
      "multiple best-poster awards."
    ],

    education: [
      { degree: "Ph.D. in Industrial and Systems Engineering",
        school: "Mississippi State University", place: "Mississippi, USA",
        years: "2020 – 2024",
        thesisLabel: "Dissertation",
        thesis: "Towards Privacy-Preserving Component Certification for Metal Additive Manufacturing" },
      { degree: "M.Sc. in Industrial and Production Engineering",
        school: "Bangladesh University of Engineering and Technology (BUET)", place: "Dhaka, Bangladesh",
        years: "Oct 2015 – Oct 2018",
        thesisLabel: "Thesis",
        thesis: "Assessing Sustainability in Supply Chain using Dempster-Shafer Theory" },
      { degree: "B.Sc. in Industrial and Production Engineering",
        school: "Shahjalal University of Science and Technology (SUST)", place: "Sylhet, Bangladesh",
        years: "Jan 2009 – Jul 2013",
        thesisLabel: "Thesis",
        thesis: "Identification of Significant Factors for Value-in-Use Assessment of Product Service System (PSS) in the Business-to-Business (B2B) Sector" }
    ],

    // Academic appointments, newest first
    academic: [
      { role: "Assistant Professor of Industrial Engineering", org: "Louisiana State University",
        unit: "Department of Mechanical & Industrial Engineering", years: "Aug 2024 – Present",
        note: "Director, ASTRA Lab" },
      { role: "Instructor", org: "Mississippi State University",
        unit: "Department of Industrial and Systems Engineering", years: "Aug 2023 – Dec 2023",
        note: "IE 3323: Manufacturing Processes" },
      { role: "Guest Lecturer", org: "Mississippi State University",
        unit: "Department of Industrial and Systems Engineering", years: "Jan 2023 – Apr 2023",
        note: "IE 3323: Manufacturing Processes" },
      { role: "Graduate Research Assistant", org: "Mississippi State University",
        unit: "Intelligent Data-Enabled Analytics (IDEA) Laboratory, Department of Industrial and Systems Engineering",
        years: "Jan 2020 – 2024" },
      { role: "Lecturer", org: "Shahjalal University of Science and Technology (SUST)",
        unit: "Department of Industrial and Production Engineering", years: "Jan 2018 – Dec 2019" }
    ],

    // Industry positions, newest first
    industry: [
      { role: "Industrial Engineer", org: "Coats", years: "May 2017 – Jan 2018",
        note: "World’s leading industrial thread company, Bangladesh" },
      { role: "Senior Executive, Manufacturing Supply Chain", org: "Bata", years: "Jun 2015 – Apr 2017",
        note: "Multinational footwear and fashion accessories manufacturer, Bangladesh" },
      { role: "Executive Industrial Engineer, Manufacturing", org: "Masco Group", years: "Jun 2014 – May 2015",
        note: "Leading knit composite conglomerate, Bangladesh" }
    ],

    // Doctoral research projects (IDEA Laboratory, Mississippi State University)
    projects: [
      { title: "Data Analytics and Statistical Learning in Additive Manufacturing",
        funding: "National Science Foundation (NSF), CMMI-2046515",
        image: "assets/images/fig-melt-pool-morphology.webp", fit: "contain",
        points: [
          "Investigated the risk of design information disclosure through feature engineering of high-dimensional thermal history data and G-code information.",
          "Developed a novel adaptive thermal history de-identification method for privacy-preserving process–defect modeling on a cloud platform.",
          "Developed a morphological-dynamics-based algorithm for in-situ, layer-wise certification of metal AM components.",
          "Analyzed high-dimensional thermal history data with functional data analysis, optimal mass transport, tensor decomposition, neural networks, image processing, and Gaussian process regression.",
          "Designed and executed laser powder bed fusion (LPBF) experiments with in-process sensing, in close collaboration with domain experts.",
          "Built a motorized linear-guide stage with a 3D scanner for in-process quality monitoring and remanufacturing."
        ] },
      { title: "Condition Monitoring and Diagnosis of Complex Manufacturing Systems",
        funding: "Department of Defense (DoD), Institute of Systems Engineering Research (ISER)",
        image: "assets/images/gal-machine-fault-simulator.webp",
        points: [
          "Conducted experiments on a Machine Fault Simulator (MFS) instrumented with multi-channel vibro-acoustic sensors for condition monitoring.",
          "Developed a sensor-fusion algorithm based on tensor decomposition to diagnose faults in rotary machinery.",
          "Developed a missing-data imputation model using Bayesian CP tensor factorization."
        ] },
      { title: "Bio-Manufacturing for Bone Tissue Engineering",
        funding: "National Science Foundation (NSF)",
        image: "assets/images/gal-bioprinter-lab.webp",
        points: [
          "Designed and executed controlled experiments on a Cellink BIO X 3D bioprinter to fabricate composite bone scaffolds with layer-wise optical image collection.",
          "Used FDM printing (MakerGear, Prusa) for preliminary scaffold fabrication and analysis.",
          "Mentored undergraduate researchers in mechanical and rheology testing of printed scaffolds.",
          "Applied VR-Keyence profilometry and X-ray computed tomography (XCT) for non-destructive analysis of scaffold surfaces and internal structure.",
          "Performed finite element modeling to predict scaffold mechanical performance under varying conditions.",
          "Optimized bioprinting process parameters with image analysis and regression-based minimization for accurate, repeatable fabrication."
        ] }
    ],

    teaching: [
      { org: "Mississippi State University", years: "2023",
        courses: ["IE 3323: Manufacturing Processes"],
        note: "Instructor (Fall 2023) and Guest Lecturer (Spring 2023)." },
      { org: "Shahjalal University of Science and Technology", years: "2018 – 2019",
        courses: [
          "IPE 121: Engineering Mechanics", "IPE 122: Manufacturing Processes-I Sessional",
          "IPE 124: Machine Shop Practice", "IPE 221: Mechanics of Machinery",
          "IPE 315A: Building Services I – Mechanical", "IPE 413: Advanced Manufacturing System",
          "IPE 414: Advanced Manufacturing Sessional", "IPE 416: System Modeling and Simulation Sessional",
          "Optional II: Project Management"
        ],
        note: "Prepared course modules and lectured 50+ students per course; supervised undergraduate theses; wrote project proposals; organized and judged practice contests." }
    ],

    certifications: [
      { title: "Preparing Future Faculty", org: "Center for Teaching and Learning, Mississippi State University", year: "2022–2023" },
      { title: "Science Communication", org: "Mississippi State University & George Mason University", year: "2022" },
      { title: "Online Teaching 101: Best Practices in Online Instruction", org: "Center for Teaching and Learning, Mississippi State University", year: "2022" },
      { title: "Teaching, Learning and Assessment", org: "Institutional Quality Assurance Cell, SUST", year: "2019" },
      { title: "Lean Six Sigma Green Belt", org: "Coats Bangladesh", year: "2017" },
      { title: "Industrial Technology on Mechanical Engineering", org: "Training Institute for Chemical Industries (TICI), Bangladesh", year: "2013" }
    ]
  },

  /* ---------------------------------------------------------------------- */
  /*  TEAM                                                                  */
  /*  category: "director" | "phd" | "ms" | "undergrad" | "alumni"          */
  /* ---------------------------------------------------------------------- */
  team: [

    // ---- Director --------------------------------------------------------
    {
      name: "Dr. Mahathir Mohammad Bappy",
      category: "director",
      position: "Assistant Professor & Lab Director",
      image: "assets/images/bappy.webp",
      education: "Ph.D., Industrial & Systems Engineering, Mississippi State University",
      interests: "Systems Informatics, AI/ML, Smart Manufacturing, Digital Twins, Privacy-Preserving AI, Embodied Intelligence",
      bio:
        "Dr. Bappy is an Assistant Professor of Industrial Engineering in the Department of " +
        "Mechanical and Industrial Engineering at Louisiana State University. He earned his Ph.D. " +
        "in Industrial and Systems Engineering from Mississippi State University, his M.Sc. from " +
        "Bangladesh University of Engineering and Technology, and his B.Sc. from Shahjalal University " +
        "of Science and Technology. Before academia he spent nearly four years as an industrial " +
        "engineer at Masco Group, Bata, and Coats. His research advances the understanding of complex " +
        "engineered systems through advanced sensing, data analytics, and intelligent monitoring frameworks.",
      profile: "director.html", // full profile page
      email: "mmbappy@lsu.edu",
      scholar: "https://scholar.google.com/citations?user=FRV5XRUAAAAJ&hl=en",
      linkedin: "https://www.linkedin.com/in/mahathir-mohammad-bappy-b122a978/",
      researchgate: "https://www.researchgate.net/profile/Mahathir-Bappy-2",
      website: ""
    },

    // ---- Ph.D. Students --------------------------------------------------
    {
      name: "Md Shafikul Islam",
      category: "phd",
      position: "Ph.D. Student | Graduate Research Assistant",
      image: "assets/images/md-shafikul-islam.png",
      education: "M.S. / B.Sc., Mechanical & Industrial Engineering",
      interests: "Physical AI for Manufacturing, Learned Dynamics, Digital Twins, Edge Deployment",
      bio:
        "Md Shafikul Islam is a Ph.D. student in Mechanical and Industrial Engineering working on " +
        "cyber-physical intelligence for additive manufacturing — moving from post-build inspection " +
        "to predictive, safety-aware, and adaptive process autonomy. He works at the intersection of " +
        "physics-based modeling, uncertainty-aware machine learning, and real-time robotic control.",
      email: "", // TODO add LSU email
      linkedin: "https://www.linkedin.com/in/md-shafikul-islam-sohan",
      scholar: "",
      website: "https://shafikul-islam.github.io"
    },
    {
      name: "Saifur Rahman Tushar",
      category: "phd",
      position: "Ph.D. Student | Graduate Research Assistant",
      image: "assets/images/saifur-rahman-tushar.webp",
      education: "M.Sc. in Industrial & Production Engineering", // TODO confirm
      interests: "Industrial Engineering, Sustainable Manufacturing, Supply Chain, Multi-Criteria Decision Making",
      bio:
        "Saifur Rahman Tushar is a Ph.D. student and Graduate Research Assistant in Mechanical and " +
        "Industrial Engineering at LSU. He previously served as an Assistant Professor at Bangladesh " +
        "University of Textiles. His research centers on sustainable manufacturing, supply chain " +
        "resilience, and data-driven decision making for industrial systems.",
      email: "", // TODO add LSU email
      linkedin: "https://www.linkedin.com/in/saifur-rahman-tushar",
      scholar: "",
      website: ""
    }

    // ---- Add more members below by copying a block above and editing it.
    // Example undergraduate:
    // {
    //   name: "Full Name", category: "undergrad",
    //   position: "Undergraduate Researcher",
    //   image: "assets/images/placeholder.svg",
    //   interests: "...", bio: "...",
    //   email: "", linkedin: "", website: ""
    // }
  ],

  /* ---------------------------------------------------------------------- */
  /*  RESEARCH AREAS                                                        */
  /*  fit: "contain" shows a whole figure (diagrams); omit it for photos.   */
  /* ---------------------------------------------------------------------- */
  research: [
    {
      title: "Cyber-Physical Intelligence for Additive Manufacturing",
      image: "assets/images/fig-melt-pool-morphology.webp", fit: "contain",
      description:
        "In-situ, layer-wise process monitoring and certification for metal additive manufacturing " +
        "using thermal imaging, melt-pool morphology dynamics, physics-informed models, and " +
        "uncertainty-aware machine learning.",
      tags: ["Metal AM", "Thermal Imaging", "In-situ Certification"],
      links: [
        { label: "JMSE 2022", url: "https://doi.org/10.1115/1.4054805" },
        { label: "JMP 2022", url: "https://doi.org/10.1016/j.jmapro.2021.12.041" }
      ]
    },
    {
      title: "Privacy-Preserving Modeling for Smart Manufacturing",
      image: "assets/images/fig-amaas-privacy.webp", fit: "contain",
      description:
        "Methods such as thermal-history de-identification and federated learning that let " +
        "manufacturers collaborate and share process data on cloud platforms without exposing " +
        "sensitive design information.",
      tags: ["Data Privacy", "Cloud Manufacturing", "Federated Learning"],
      links: [
        { label: "Manuf. Letters 2023", url: "https://doi.org/10.1016/j.mfglet.2023.03.004" }
      ]
    },
    {
      title: "Real-Time Fault Diagnosis for Rotary Machinery",
      image: "assets/images/fig-sensor-fusion.webp", fit: "contain",
      description:
        "Multi-channel vibro-acoustic sensor fusion, tensor decomposition, and interpretable deep " +
        "learning for real-time bearing fault diagnosis, missing-signal imputation, and predictive maintenance.",
      tags: ["Sensor Fusion", "Tensor Methods", "Predictive Maintenance"],
      links: [
        { label: "IJAMT 2023", url: "https://doi.org/10.1007/s00170-022-10525-4" }
      ]
    },
    {
      title: "Bio-Manufacturing for Bone Tissue Engineering",
      image: "assets/images/gal-bioprinter-lab.webp",
      description:
        "3D bioprinting of polymer–ceramic composite bone scaffolds, with image-based process " +
        "parameter optimization, XCT characterization, and finite element modeling for accurate, " +
        "repeatable fabrication.",
      tags: ["Bioprinting", "Process Optimization", "XCT"],
      links: []
    },
    {
      title: "Sustainable & Resilient Supply Chains",
      image: "assets/images/fig-dempster-shafer.webp", fit: "contain",
      description:
        "Evidential reasoning and data-fusion models that quantify the sustainability, social " +
        "impact, and cyber resilience of manufacturing supply chains.",
      tags: ["Evidential Reasoning", "Sustainability", "Cyber Resilience"],
      links: [
        { label: "JCP 2019", url: "https://doi.org/10.1016/j.jclepro.2019.117771" },
        { label: "CIRP JMST 2021", url: "https://doi.org/10.1016/j.cirpj.2021.09.008" },
        { label: "GJFSM 2022", url: "https://doi.org/10.1007/s40171-021-00295-5" }
      ]
    },
    {
      title: "AI for Water & Energy Systems Resilience",
      image: "assets/images/research-water-energy.svg", fit: "contain",
      description:
        "Foundation-model-based forecasting and data-driven modeling for proactive control of rural " +
        "wastewater treatment and sustainable energy systems.",
      tags: ["Foundation Models", "Forecasting", "Wastewater"],
      links: [
        { label: "Appl. Water Sci. 2026", url: "https://doi.org/10.1007/s13201-025-02386-4" }
      ]
    }
    // Add more research areas by copying a block above.
  ],

  /* ---------------------------------------------------------------------- */
  /*  RESEARCH HIGHLIGHTS — featured papers with their key figure           */
  /* ---------------------------------------------------------------------- */
  highlights: [
    {
      title: "Evaluation of Design Information Disclosure through Thermal Feature Extraction in Metal-Based Additive Manufacturing",
      authors: "Bappy, M. M., Fullington, D., Bian, L., & Tian, W.",
      venue: "Manufacturing Letters", year: 2023,
      image: "assets/images/fig-amaas-privacy.webp",
      summary:
        "Shows that thermal features captured during printing on additive-manufacturing-as-a-service " +
        "platforms can reveal the design of the part being built — quantifying a new privacy risk " +
        "for cloud-based manufacturing.",
      link: "https://doi.org/10.1016/j.mfglet.2023.03.004"
    },
    {
      title: "Morphological Dynamics-Based Anomaly Detection towards In-Situ Layer-Wise Certification for Directed Energy Deposition Processes",
      authors: "Bappy, M. M., Liu, C., Bian, L., & Tian, W.",
      venue: "Journal of Manufacturing Science and Engineering", year: 2022,
      image: "assets/images/fig-melt-pool-morphology.webp",
      summary:
        "Tracks how melt-pool heat-affected zones evolve from layer to layer to detect anomalies and " +
        "certify metal parts while they are being built.",
      link: "https://doi.org/10.1115/1.4054805"
    },
    {
      title: "In-Situ Layer-Wise Certification for Direct Laser Deposition Processes Based on Thermal Image Series Analysis",
      authors: "Esfahani, M. N., Bappy, M. M., Bian, L., & Tian, W.",
      venue: "Journal of Manufacturing Processes", year: 2022,
      image: "assets/images/fig-thermal-image-series.webp",
      summary:
        "Models consecutive thermal images as a dynamic process, separating translational and " +
        "rotational behavior from error components to certify each deposited layer.",
      link: "https://doi.org/10.1016/j.jmapro.2021.12.041"
    },
    {
      title: "Multi-Channel Sensor Fusion for Real-Time Bearing Fault Diagnosis by Frequency-Domain Multilinear Principal Component Analysis",
      authors: "Al Mamun, A., Bappy, M. M., Mudiyanselage, A. S., Li, J., Jiang, Z., Tian, Z., Fuller, S., Falls, T. C., Bian, L., & Tian, W.",
      venue: "The International Journal of Advanced Manufacturing Technology", year: 2023,
      image: "assets/images/fig-sensor-fusion.webp",
      summary:
        "Fuses acoustic and vibration channels into a frequency-domain tensor, compresses it with " +
        "multilinear PCA, and trains a neural network for real-time bearing fault diagnosis.",
      link: "https://doi.org/10.1007/s00170-022-10525-4"
    },
    {
      title: "Supply Chain Sustainability Assessment with Dempster-Shafer Evidence Theory: Implications in Cleaner Production",
      authors: "Bappy, M. M., Ali, S. M., Kabir, G., & Paul, S. K.",
      venue: "Journal of Cleaner Production", year: 2019,
      image: "assets/images/fig-dempster-shafer.webp",
      summary:
        "Builds a hierarchical evidential-reasoning index across economic, environmental, and social " +
        "dimensions to assess supply chain sustainability under uncertainty.",
      link: "https://doi.org/10.1016/j.jclepro.2019.117771"
    }
  ],

  /* ---------------------------------------------------------------------- */
  /*  RESEARCH SUPPORT — sponsors of the director's doctoral research       */
  /* ---------------------------------------------------------------------- */
  funding: [
    { sponsor: "National Science Foundation", short: "NSF", award: "CMMI-2046515",
      project: "Data analytics and statistical learning in additive manufacturing" },
    { sponsor: "Department of Defense", short: "DoD", award: "Institute of Systems Engineering Research (ISER)",
      project: "Condition monitoring and diagnosis of complex manufacturing systems" },
    { sponsor: "National Science Foundation", short: "NSF", award: "",
      project: "Bio-manufacturing for bone tissue engineering" }
  ],

  /* ---------------------------------------------------------------------- */
  /*  PUBLICATIONS                                                          */
  /*  category: "journal" | "conference" | "preprint" | "talk" | "poster"   */
  /*  The lab director's name is highlighted automatically.                 */
  /* ---------------------------------------------------------------------- */
  publications: [
    // ---- Journal Articles ----
    { category: "journal", year: 2026, authors: "Islam, M. D. S., Bappy, M. M., Tushar, S. R., Zamiela, C., & Wasi, A. T.", title: "Beyond local receptive fields: vision transformers for real-time surface defect detection in FDM", venue: "The International Journal of Advanced Manufacturing Technology", link: "" },
    { category: "journal", year: 2026, authors: "De La Hoz, J. M., Islam, M. D. S., Bappy, M. M., & Hayes, M. P.", title: "AI-enabled modeling for smart rural wastewater treatment systems: current practices and remaining gaps", venue: "Applied Water Science, 16(2), 40", link: "https://doi.org/10.1007/s13201-025-02386-4" },
    { category: "journal", year: 2025, authors: "Biswas, S., Al Mamun, A., Islam, M. D. S., & Bappy, M. M.", title: "Interpretable CNN models for computationally efficient bearing fault diagnosis using learnable Gaussian/Sinc filters", venue: "Manufacturing Letters, 44, 110–120", link: "" },
    { category: "journal", year: 2025, authors: "Ahsan, M. N., Islam, M. D. S., & Bappy, M. M.", title: "Generative modeling in smart manufacturing: Applications, challenges, and future directions", venue: "Manufacturing Letters, 44, 1285–1295", link: "" },
    { category: "journal", year: 2025, authors: "Bappy, M. M., Fullington, D., Bian, L., & Tian, W.", title: "Adaptive Thermal History De-Identification for Privacy-Preserving Data Sharing of Directed Energy Deposition Processes", venue: "Journal of Computing and Information Science in Engineering, 25(3)", link: "" },
    { category: "journal", year: 2024, authors: "Fullington, D., Yangue, E., Bappy, M. M., Liu, C., & Tian, W.", title: "Leveraging small-scale datasets for additive manufacturing process modeling and part certification: Current practice and remaining gaps", venue: "Journal of Manufacturing Systems, 75, 306–321", link: "" },
    { category: "journal", year: 2024, authors: "Bappy, M. M., Epps, E. V., Priddy, L. B., & Tian, W.", title: "Parameter optimization for accurate and repeatable strut width in the 3D printing of composite bone scaffolds", venue: "Journal of Manufacturing Processes, 131, 1631–1641", link: "" },
    { category: "journal", year: 2023, authors: "Al Mamun, A., Bappy, M. M., Mudiyanselage, A. S., Li, J., Jiang, Z., Tian, Z., Fuller, S., Falls, T. C., Bian, L., & Tian, W.", title: "Multi-channel sensor fusion for real-time bearing fault diagnosis by frequency-domain multilinear principal component analysis", venue: "The International Journal of Advanced Manufacturing Technology, 124(3–4), 1321–1334", link: "https://doi.org/10.1007/s00170-022-10525-4" },
    { category: "journal", year: 2023, authors: "Al Mamun, A., Bappy, M. M., Bian, L., & Tian, W.", title: "Missing signal imputation for multichannel sensing signals on rotary machinery by tensor factorization", venue: "Manufacturing Letters", link: "" },
    { category: "journal", year: 2023, authors: "Bappy, M. M., Fullington, D., Bian, L., & Tian, W.", title: "Evaluation of design information disclosure through thermal feature extraction in metal-based additive manufacturing", venue: "Manufacturing Letters, 36, 86–90", link: "https://doi.org/10.1016/j.mfglet.2023.03.004" },
    { category: "journal", year: 2022, authors: "Bappy, M. M., Liu, C., Bian, L., & Tian, W.", title: "Morphological dynamics-based anomaly detection towards in-situ layer-wise certification for directed energy deposition processes", venue: "Journal of Manufacturing Science and Engineering, 144(11), 111007", link: "https://doi.org/10.1115/1.4054805" },
    { category: "journal", year: 2022, authors: "Esfahani, M. N., Bappy, M. M., Bian, L., & Tian, W.", title: "In-situ layer-wise certification for direct laser deposition processes based on thermal image series analysis", venue: "Journal of Manufacturing Processes, 75, 895–902", link: "https://doi.org/10.1016/j.jmapro.2021.12.041" },
    { category: "journal", year: 2022, authors: "Bappy, M. M., Key, J., Hossain, N. U. I., & Jaradat, R.", title: "Assessing the social impacts of additive manufacturing using hierarchical evidential reasoning approach", venue: "Global Journal of Flexible Systems Management, 23(2), 201–220", link: "https://doi.org/10.1007/s40171-021-00295-5" },
    { category: "journal", year: 2021, authors: "Rahman, S., Hossain, N. U. I., Govindan, K., Nur, F., & Bappy, M.", title: "Assessing cyber resilience of additive manufacturing supply chain leveraging data fusion technique: A model to generate cyber resilience index of a supply chain", venue: "CIRP Journal of Manufacturing Science and Technology, 35, 911–928", link: "https://doi.org/10.1016/j.cirpj.2021.09.008" },
    { category: "journal", year: 2020, authors: "Bappy, M. M., & Sayed, M. A.", title: "Reducing patients waiting time using the Six Sigma methodology in a radiology department", venue: "Journal of Engineering Research, Innovation and Education, 2(1&2), 32–41", link: "" },
    { category: "journal", year: 2019, authors: "Bappy, M. M., Ali, S. M., Kabir, G., & Paul, S. K.", title: "Supply chain sustainability assessment with Dempster-Shafer evidence theory: Implications in cleaner production", venue: "Journal of Cleaner Production, 237, 117771", link: "https://doi.org/10.1016/j.jclepro.2019.117771" },
    { category: "journal", year: 2019, authors: "Bappy, M. M., Musa, M. A., & Hossain, M. F.", title: "Productivity improvement through line balancing — A case study in an apparel industry", venue: "Global Scientific Journals, 7(2), 893–902", link: "" },
    { category: "journal", year: 2015, authors: "Karim, R., & Bappy, M. M.", title: "Identification of significant factors for value-in-use assessment of product service system in business to business sector", venue: "International Journal of Advanced Multidisciplinary Research, 2(3), 16–27", link: "" },

    // ---- Preprints ----
    { category: "preprint", year: 2024, authors: "Wasi, A. T., Islam, M. D. S., Akib, A. R., & Bappy, M. M.", title: "Graph neural networks in supply chain analytics and optimization: Concepts, perspectives, dataset and benchmarks", venue: "arXiv preprint arXiv:2411.08550", link: "https://arxiv.org/abs/2411.08550" },

    // ---- Conference Proceedings ----
    { category: "conference", year: 2024, authors: "Nguimfack, R. T., Bappy, M. M., Al Mamun, A., & Tian, W.", title: "Domain adaptation between heterogeneous time series data: A case study on real-time rotary machinery fault diagnosis", venue: "52nd SME North American Manufacturing Research Conference (NAMRC 52), Knoxville, TN", link: "" },
    { category: "conference", year: 2021, authors: "Al Mamun, A., Bappy, M. M., Fuller, S., Falls, T. C., Bian, L., & Tian, W.", title: "Heterogeneous sensor fusion for in-situ condition monitoring of rotary machines", venue: "IISE Annual Conference", link: "" },
    { category: "conference", year: 2020, authors: "Sayed, M. A., & Bappy, M. M.", title: "Reducing patients waiting time using the Six Sigma methodology in a radiology department", venue: "ICERIE, Sylhet, Bangladesh", link: "" },
    { category: "conference", year: 2019, authors: "Ahmad, A., Kamruzzaman, M., & Bappy, M. M.", title: "Supply chain optimization in apparel manufacturing", venue: "Proceedings of the IEOM, Toronto, Canada", link: "" },

    // ---- Conference & Symposium Presentations ----
    { category: "talk", year: 2023, authors: "Bappy, M. M., Epps, E. V., Priddy, L. B., & Tian, W.", title: "Optimization of 3D bio-printing process parameters of composite bone scaffold for tissue engineering", venue: "Southern Biomedical Engineering Conference (SBEC), New Orleans, LA", link: "" },
    { category: "talk", year: 2023, authors: "Bappy, M. M., Fullington, D., Bian, L., & Tian, W.", title: "Privacy-preserving and utility-aware data sharing strategy for process-defect modeling in metal-based additive manufacturing", venue: "IISE Annual Conference, New Orleans, LA", link: "" },
    { category: "talk", year: 2023, authors: "Bappy, M. M., & Tian, W.", title: "Sensing and analytics in advanced manufacturing systems", venue: "IISE Annual Conference, New Orleans, LA", link: "" },
    { category: "talk", year: 2023, authors: "Bappy, M. M., Fullington, D., Bian, L., & Tian, W.", title: "Evaluation of design information disclosure through thermal feature extraction in metal-based additive manufacturing", venue: "Graduate Research Symposium, Mississippi State University", link: "" },
    { category: "talk", year: 2022, authors: "Bappy, M. M., Fullington, D., & Tian, W.", title: "Evaluation of design information disclosure through thermal feature extraction in metal-based additive manufacturing", venue: "INFORMS Annual Meeting, Indianapolis, IN", link: "" },
    { category: "talk", year: 2021, authors: "Bappy, M. M., Bian, L., & Tian, W.", title: "In-situ layer-wise certification for direct energy deposition processes based on melt pool morphology dynamics analysis", venue: "Southeastern Additive Manufacturing Processes Symposium, Alabama", link: "" },
    { category: "talk", year: 2021, authors: "Bappy, M. M.", title: "In-situ layer-wise certification for direct energy deposition processes", venue: "Three Minute Thesis (3MT), Mississippi State University", link: "" },

    // ---- Poster Presentations ----
    { category: "poster", year: 2023, authors: "Bappy, M. M., Fullington, D., & Tian, W.", title: "Adaptive thermal history de-identification for privacy-preserving process-defect modeling of metal additive manufacturing", venue: "IISE Annual Conference, New Orleans, LA", link: "" },
    { category: "poster", year: 2023, authors: "Epps, E. V., Bappy, M. M., Tian, W., & Priddy, L. B.", title: "Bioprinting parameter optimization for polymer-ceramic composite scaffolds for bone tissue engineering", venue: "Research That Matters in ISE, Mississippi State University", link: "" },
    { category: "poster", year: 2023, authors: "Bappy, M. M., Fullington, D., & Tian, W.", title: "Adaptive thermal history de-identification for privacy-preserving process-defect modeling of metal additive manufacturing", venue: "Research Week Poster Competition, Mississippi State University", link: "" },
    { category: "poster", year: 2022, authors: "Bappy, M. M., & Tian, W.", title: "Morphological dynamics-based anomaly detection towards in-situ layer-wise certification for directed energy deposition processes", venue: "INFORMS Annual Meeting, Indianapolis, IN", link: "" },
    { category: "poster", year: 2022, authors: "Kailey, C., Bappy, M. M., Epps, E. V., Tian, W., & Priddy, L. B.", title: "Evaluation of the printability of additively manufactured poly(lactic-co-glycolic acid) and nano-hydroxyapatite composite bone scaffolds", venue: "4th Annual Summer Science and Engineering Symposium, Mississippi Academy of Sciences", link: "" },
    { category: "poster", year: 2021, authors: "Bappy, M. M., & Tian, W.", title: "In-situ layer-wise certification for direct energy deposition processes based on melt pool morphology dynamics analysis", venue: "Graduate Research Symposium, Mississippi State University", link: "" }
    // Add more by copying a block above. Order within a year does not matter.
  ],

  /* ---------------------------------------------------------------------- */
  /*  RESOURCES / LAB EQUIPMENT                                             */
  /*  Grouped by "group". Add items by copying a { ... } block.             */
  /* ---------------------------------------------------------------------- */
  resources: [
    // ---- Computing ----
    {
      group: "Computing",
      name: "GPU Workstations",
      image: "", // add a photo file name here if you have one
      description:
        "High-performance workstations equipped with NVIDIA GPUs for deep learning, " +
        "computer vision, physics-informed modeling, and large-scale simulation.",
      specs: "NVIDIA GPUs · high-core-count CPUs · large RAM" // TODO update exact specs
    },

    // ---- 3D Printing ----
    {
      group: "3D Printing",
      name: "Creality Ender-3 V3 Plus",
      image: "assets/images/resource-creality-ender3.webp",
      description: "Large-format FDM printer for rapid prototyping of fixtures, mounts, and functional parts.",
      specs: "FDM · ~300 × 300 × 330 mm build volume"
    },
    {
      group: "3D Printing",
      name: "Bambu Lab A1",
      image: "assets/images/resource-bambu-a1.webp",
      description: "Fast FDM printer with multi-color (AMS) capability for high-quality, multi-material prototypes.",
      specs: "FDM · multi-color (AMS lite)"
    },
    {
      group: "3D Printing",
      name: "Resin Printing & Post-Processing Station",
      image: "assets/images/resource-resin-station.webp",
      description: "Elegoo MSLA resin printer with a dedicated wash-and-cure station for high-detail, high-resolution parts.",
      specs: "MSLA (resin) · wash & UV cure station"
    },

    // ---- Robotics ----
    {
      group: "Robotics",
      name: "Seeed Studio Robotic Arm",
      image: "assets/images/resource-seeed-arm.webp",
      description: "Desktop robotic manipulator on a linear rail used for pick-and-place, manipulation, and human–robot interaction experiments.",
      specs: "Multi-DOF manipulator · linear rail" // TODO confirm exact model
    },
    {
      group: "Robotics",
      name: "Fashion Star Servo Robotic Arm",
      image: "assets/images/resource-fashionstar-arm.webp",
      description: "Custom 3D-printed robotic arm built with Fashion Star serial bus servos for low-cost manipulation and control research.",
      specs: "Serial-bus servo arm · custom build"
    }
    // Add more equipment by copying a block above.
  ],

  /* ---------------------------------------------------------------------- */
  /*  AWARDS & HONORS                                                       */
  /*  group: "research" | "grant" | "scholarship"   (newest first)          */
  /*  person: optional — shown when an award belongs to someone other       */
  /*  than the lab director.                                                */
  /* ---------------------------------------------------------------------- */
  awards: [
    // ---- Research honors ----
    { group: "research", year: "2023–2024", title: "ISE “Outstanding Graduate Student Researcher” Award", org: "Department of Industrial and Systems Engineering, Mississippi State University" },
    { group: "research", year: "2023", title: "Best Poster Award — Research Week Poster Competition", org: "Mississippi State University" },
    { group: "research", year: "2023", title: "Best Poster Award — Research That Matters in ISE", org: "Mississippi State University" },
    { group: "research", year: "2023", title: "First Runner-up, Best Posters — Graduate Research Symposium", org: "Mississippi State University" },
    { group: "research", year: "2023", title: "Selected for the Doctoral Student Colloquium", org: "Institute of Industrial and Systems Engineers (IISE)" },
    { group: "research", year: "2022", title: "INFORMS Student Chapter Magna Cum Laude Award", org: "INFORMS Annual Meeting, Indianapolis" },
    { group: "research", year: "2022", title: "First Runner-up, Best Posters — Graduate Research Symposium", org: "Mississippi State University" },
    { group: "research", year: "2021", title: "First Runner-up, Best Posters — Graduate Research Symposium", org: "Mississippi State University" },

    // ---- Grants & travel awards ----
    { group: "grant", year: "2024", title: "NSF Student/Early Career Researcher Travel Award", org: "National Science Foundation" },
    { group: "grant", year: "2022", title: "Graduate Student Travel Assistance Grant (TAGGS)", org: "The Graduate School, Mississippi State University" },
    { group: "grant", year: "2021", title: "Manufacturing & Design Student Sponsorship Award", org: "Institute of Industrial and Systems Engineers (IISE)" },
    { group: "grant", year: "2019", title: "Research Project Funding Award", org: "Research Centre, Shahjalal University of Science and Technology" },

    // ---- Scholarships ----
    { group: "scholarship", year: "2009–2013", title: "University Merit Scholarship", org: "Shahjalal University of Science and Technology" },
    { group: "scholarship", year: "2008", title: "Education Board Scholarship — Higher Secondary Certificate (HSC)", org: "Bangladesh" },
    { group: "scholarship", year: "2006", title: "Education Board Scholarship — Secondary School Certificate (SSC)", org: "Bangladesh" },
    { group: "scholarship", year: "2003", title: "Merit Scholarship — Junior Secondary School Scholarship Examination", org: "Bangladesh" },
    { group: "scholarship", year: "2000", title: "Merit Scholarship — Primary School Scholarship Examination", org: "Bangladesh" }
    // Add more awards by copying a block above.
  ],

  /* ---------------------------------------------------------------------- */
  /*  GALLERY                                                               */
  /*  category: "talks" | "lab" | "outreach" | "campus"                     */
  /* ---------------------------------------------------------------------- */
  gallery: [
    { image: "assets/images/gal-talk-sensing-analytics.webp", category: "talks",
      caption: "Presenting “Sensing and Analytics in Advanced Manufacturing Systems” at the IISE Annual Conference" },
    { image: "assets/images/gal-poster-iise-2023.webp", category: "talks",
      caption: "Poster on adaptive thermal history de-identification for privacy-preserving process–defect modeling" },
    { image: "assets/images/gal-talk-ded-certification.webp", category: "talks",
      caption: "Talk on in-situ layer-wise certification for directed energy deposition processes" },
    { image: "assets/images/gal-iise-conference.webp", category: "talks",
      caption: "IISE Annual Conference & Expo" },
    { image: "assets/images/gal-informs-2022.webp", category: "talks",
      caption: "INFORMS Annual Meeting 2022, Indianapolis" },
    { image: "assets/images/gal-3d-scanning.webp", category: "lab",
      caption: "3D scanning a printed part for in-process quality monitoring" },
    { image: "assets/images/gal-bioprinter-lab.webp", category: "lab",
      caption: "Fabricating composite bone scaffolds on a BIO X 3D bioprinter" },
    { image: "assets/images/gal-machine-fault-simulator.webp", category: "lab",
      caption: "Machine Fault Simulator instrumented for multi-channel condition monitoring" },
    { image: "assets/images/gal-xct-lab.webp", category: "lab",
      caption: "X-ray computed tomography for non-destructive analysis of printed parts" },
    { image: "assets/images/gal-xct-mentoring.webp", category: "outreach",
      caption: "Mentoring undergraduate researchers in the X-ray CT lab" },
    { image: "assets/images/gal-poster-judging.webp", category: "outreach",
      caption: "Judging student research posters" },
    { image: "assets/images/gal-science-fair-judging.webp", category: "outreach",
      caption: "Judging a student science fair project" },
    { image: "assets/images/gal-outreach-group.webp", category: "outreach",
      caption: "STEM outreach with high-school students" },
    { image: "assets/images/gal-outreach-students.webp", category: "outreach",
      caption: "Hands-on outreach activity with student volunteers" },
    { image: "assets/images/gal-mccain-engineering.webp", category: "campus",
      caption: "McCain Engineering, Bagley College of Engineering, Mississippi State University" },
    { image: "assets/images/gal-drill-field.webp", category: "campus",
      caption: "The Drill Field, Mississippi State University" },
    { image: "assets/images/gal-davis-wade-stadium.webp", category: "campus",
      caption: "Davis Wade Stadium, Mississippi State University" },
    { image: "assets/images/gal-international-fair.webp", category: "campus",
      caption: "Representing Bangladesh at the campus international fair" }
    // Add photos by copying a block above. Put image files in assets/images/.
  ],

  /* ---------------------------------------------------------------------- */
  /*  JOIN PAGE                                                             */
  /* ---------------------------------------------------------------------- */
  join: {
    intro:
      "ASTRA Lab is looking for motivated students who want to work at the intersection of " +
      "data science, machine learning, and engineered physical systems.",
    phd:
      "We have fully-funded Ph.D. openings for students with experience or strong interest in " +
      "Machine Learning, Data Analytics, Advanced Manufacturing, Privacy-Preserving ML " +
      "(e.g., Federated Learning), Computer Vision, or Scientific ML.",
    howToApply:
      "Email Dr. Bappy at mmbappy@lsu.edu with your updated CV and a short description of your " +
      "research experience or future research plans.",
    undergrad:
      "Highly motivated undergraduate students interested in research are also encouraged to reach out."
  }
};
