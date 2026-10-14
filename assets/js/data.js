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
  /*  SITE / LAB IDENTITY  (shown in the header and footer)             */
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
    heroTitle: "ASTRA Lab",
    heroSubtitle: "AI & Digital Twin for Advanced Manufacturing and Smart Systems",
    heroText:
      "We build trustworthy AI, digital twins, and sensing systems that monitor, certify, and " +
      "control the machines and processes behind modern manufacturing and complex engineering systems.",

    /* Full-screen photos behind the home-page title. They cross-fade in this
       order. Use wide photos where possible; the centre of each is kept. */
    /* Full-screen photos behind the home-page title, cross-fading in order.
       "label" is the large topic tag; "credit" is required for photos that
       are not the lab's own. A photo that fails to load is skipped. */
    heroSlides: [
      { image: "assets/images/hero-digital-twin.webp", label: "Metal Additive Manufacturing",
        caption: "Laser metal printing with in-situ melt-pool and thermal data collection (illustration)" },
      { image: "assets/images/hero-dt-smart-factory.webp", label: "Digital Twins",
        caption: "A robotic production line and its synchronized digital twin (illustration)" },
      { image: "assets/images/hero-laser-deposition.webp", label: "Laser Directed Energy Deposition",
        caption: "Laser-based metal deposition at the melt pool" },
      { image: "assets/images/hero-smart-factory.webp", label: "Smart Systems",
        caption: "Human–robot collaboration in a connected smart factory (illustration)" },
      { image: "assets/images/hero-water-treatment.webp", label: "Cyber-Physical-Social Systems",
        caption: "Freshwater treatment infrastructure, from intake to distribution (illustration)" }
    ],

    /* Rotating animated panels. Each entry pairs a caption with one of the
       built-in animations, chosen by "art":
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

    image: "assets/images/gal-team-graduate-students.webp", // a team photo works best here
    imageCaption: "Dr. Bappy with ASTRA Lab graduate students",

    // Curated photo grid on the home page ("Life at ASTRA Lab"). The first
    // photo is shown large.
    moments: [
      { image: "assets/images/gal-informs-2025-runnerup.webp", label: "Recognition",
        caption: "Runner-up, INFORMS 2025 Stakeholder Engagement Data Challenge" },
      { image: "assets/images/gal-discover-day-quantum-am.webp", label: "Undergraduate Research",
        caption: "Measurement-guided additive manufacturing, LSU Discover Day" },
      { image: "assets/images/gal-industry-visit-rollforming.webp", label: "Industry Engagement",
        caption: "Visiting a metal roll-forming production line" },
      { image: "assets/images/gal-site-visit-lafourche.webp", label: "Field Work",
        caption: "Water treatment site visit with collaborators" },
      { image: "assets/images/gal-msec-2026-pennstate.webp", label: "Conferences",
        caption: "ASME MSEC 2026 / NAMRC 54 at Penn State" }
    ],
    aboutLead:
      "ASTRA Lab, led by Dr. Mahathir Mohammad Bappy in the Department of Mechanical & " +
      "Industrial Engineering at Louisiana State University, develops data-driven and " +
      "physics-informed methods to monitor, understand, and control complex engineered systems.",
    aboutBody:
      "We combine multimodal sensing, machine learning, and digital twins to make manufacturing " +
      "more reliable, secure, and sustainable — from certifying metal parts layer by layer and " +
      "protecting design data on cloud platforms, to diagnosing machine faults in real time and " +
      "forecasting the behavior of water and energy systems."
  },

  /* ---------------------------------------------------------------------- */
  /*  NEWS  (newest first — shown on the Home page)                         */
  /* ---------------------------------------------------------------------- */
  // type: paper | award | grant | talk | milestone | people   (sets the tag colour)
  news: [
    { date: "Aug 2026", type: "milestone", text: "Md Shafikul Islam earned his M.S. in Industrial Engineering (thesis option) at LSU with the thesis “Trustworthy Artificial Intelligence for Real-Time Quality Assurance in Additive Manufacturing.”" },
    { date: "Jun 2026", type: "talk", text: "Entropy-aware model predictive control for transient quality mitigation in metal additive manufacturing presented at the LSU Control Systems Symposium." },
    { date: "Jun 2026", type: "award", text: "Md Shafikul Islam won 2nd Place, Best Track Paper (Health Systems Track), and 3rd Place in the DAIS Student Data Analytics Competition at the IISE Annual Conference 2026." },
    { date: "2026", type: "paper", text: "Paper on feature-aware anisotropic local differential privacy for graph learning in metal additive manufacturing accepted in the ASME Journal of Computing and Information Science in Engineering (preprint arXiv:2604.05077)." },
    { date: "2026", type: "paper", text: "New journal papers in The International Journal of Advanced Manufacturing Technology, Applied Water Science, IISE Transactions on Healthcare Systems Engineering, Polymer Composites, and the International Journal of System Assurance Engineering and Management." },
    { date: "2025", type: "paper", text: "New papers in Water on seasonal water quality dynamics in Louisiana waste stabilization ponds, and in Sustainability on hybrid drone and truck delivery optimization with geospatial analytics." },
    { date: "Nov 2025", type: "paper", text: "Interpretable dissolved-oxygen forecasting with a foundation model for proactive aeration in rural wastewater treatment published in Water Research." },
    { date: "Oct 2025", type: "talk", text: "Md Shafikul Islam presented two works at the INFORMS Annual Meeting 2025, including privacy-aware porosity prediction with hierarchical graph attention networks, and was runner-up in the Stakeholder Engagement Data Challenge." },
    { date: "Jul 2025", type: "grant", text: "NSF LAMDA Seed Grant awarded for physics-informed machine learning for process defect detection and fatigue modeling in wire arc additive manufacturing." },
    { date: "Jun 2025", type: "award", text: "Md Shafikul Islam’s team won the IISE Innovative Design Competition, and he placed 2nd runner-up in the QCRE Data Challenge at the IISE Annual Conference 2025." },
    { date: "Mar 2025", type: "award", text: "Md Shafikul Islam received the Best Graduate Oral Presentation award at the Louisiana Academy of Sciences 99th Annual Meeting for foundation-model-driven modeling of critical materials." },
    { date: "Feb 2025", type: "grant", text: "Selected for the NSF Southwest I-Corps IdeaLaunch program with a privacy-preserving certification framework for additive-manufacturing-as-a-service platforms (Md Shafikul Islam, Entrepreneurial Lead)." },
    { date: "Jan 2025", type: "people", text: "Md Shafikul Islam joined ASTRA Lab as a Ph.D. student in Industrial Engineering." },
    { date: "2025", type: "paper", text: "Three papers published in Manufacturing Letters, and a paper on adaptive thermal history de-identification published in the Journal of Computing and Information Science in Engineering." },
    { date: "Aug 2024", type: "milestone", text: "Dr. Mahathir Mohammad Bappy joined Louisiana State University as an Assistant Professor and founded ASTRA Lab." }
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
    lsuProfile: "https://www.lsu.edu/eng/mie/people/faculty/bappy.php",
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
  /*  TEACHING EXTRAS — shown on the Teaching page                        */
  /*  Courses themselves live in director.teaching above.                 */
  /* ---------------------------------------------------------------------- */
  teachingPage: {
    intro:
      "Dr. Bappy has taught manufacturing processes, engineering mechanics, advanced manufacturing " +
      "systems, and system modeling and simulation at Mississippi State University and Shahjalal " +
      "University of Science and Technology, bringing nearly four years of manufacturing industry " +
      "experience into the classroom.",
    // TODO add current LSU courses here, e.g. { code: "IE 0000", title: "...", term: "Fall 2025" }
    lsuCourses: [],
    // Theses and research projects supervised
    mentoring: [
      { name: "Md Shafikul Islam", level: "M.S. Thesis, Industrial Engineering, LSU", year: "2026",
        title: "Trustworthy Artificial Intelligence for Real-Time Quality Assurance in Additive Manufacturing",
        link: "https://repository.lsu.edu/gradschool_theses/6431/" },
      { name: "Undergraduate researchers", level: "LSU Discover Day poster presentations", year: "",
        title: "Measurement-guided additive manufacturing for quantum technology components; robotic-arm camera monitoring with 3D-printer telemetry to predict and correct printing errors",
        link: "" },
      { name: "Undergraduate researchers", level: "Bio-manufacturing project, Mississippi State University", year: "",
        title: "Mechanical and rheology testing of 3D-printed composite bone scaffolds",
        link: "" },
      { name: "Undergraduate theses", level: "Industrial and Production Engineering, SUST", year: "2018–2019",
        title: "Supervised undergraduate thesis projects as a Lecturer",
        link: "" }
    ],
    // Photos shown on the Teaching page
    photos: [
      { image: "assets/images/gal-discover-day-quantum-am.webp",
        caption: "LSU Discover Day: measurement-guided additive manufacturing for quantum technology components" },
      { image: "assets/images/gal-discover-day-robotic-monitoring.webp",
        caption: "LSU Discover Day: robotic-arm camera and printer telemetry to monitor and correct printing errors" },
      { image: "assets/images/gal-lsu-student-engagement.webp",
        caption: "Meeting students at an LSU College of Engineering event" }
    ],
    // Teaching-development certifications (titles must match director.certifications)
    development: [
      "Preparing Future Faculty",
      "Online Teaching 101: Best Practices in Online Instruction",
      "Teaching, Learning and Assessment",
      "Science Communication"
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
      position: "Ph.D. Student, Industrial Engineering",
      since: "2025",
      image: "assets/images/md-shafikul-islam.png",
      education: "M.S. Industrial Engineering, LSU (2026) · B.Sc. Industrial & Production Engineering, SUST",
      interests: "Physical AI for Manufacturing, Trustworthy & Privacy-Preserving AI, Predictive Control, Edge AI",
      bio:
        "Shafikul works on trustworthy and transferable autonomy for cyber-physical manufacturing " +
        "systems — multimodal in-process sensing, learned process dynamics and digital twins, " +
        "model predictive control, and real-time edge deployment for metal additive manufacturing. " +
        "He earned his M.S. at LSU in 2026 with a thesis on trustworthy AI for real-time quality " +
        "assurance in additive manufacturing.",
      email: "misla79@lsu.edu",
      linkedin: "https://www.linkedin.com/in/md-shafikul-islam-sohan/",
      scholar: "https://scholar.google.com/citations?user=A8KOQBEAAAAJ&hl=en",
      website: "https://shafikul-islam.github.io",
      // Research spotlight on the People page; titles must match entries in "projects".
      spotlight: {
        summary:
          "Physical AI for metal additive manufacturing: multimodal in-process sensing, learned process " +
          "dynamics and digital twins, predictive control, and real-time edge deployment — built to be " +
          "trustworthy, privacy-preserving, and transferable across machines.",
        projects: [
          "Entropy-Aware Model Predictive Control for Transient Quality Mitigation in Wire Arc Additive Manufacturing",
          "Feature-Aware Anisotropic Local Differential Privacy for Graph Learning in Metal AM",
          "Vision Transformers for Real-Time Surface Defect Detection in FDM",
          "Fracture Finder: Real-Time Vertebral Fracture Localization on Thoracic Spine X-Rays"
        ]
      }
    },
    {
      name: "Saifur Rahman Tushar",
      category: "phd",
      position: "Ph.D. Student, Industrial Engineering",
      image: "assets/images/saifur-rahman-tushar.webp",
      education: "M.Sc. in Industrial & Production Engineering", // TODO confirm
      interests: "Structural Integrity, Physics-Informed ML, Fatigue & Corrosion, Digital Twins for Metal AM",
      bio:
        "Saifur Rahman Tushar is a Ph.D. student and Graduate Research Assistant in Mechanical and " +
        "Industrial Engineering at LSU, working at the intersection of structural integrity and " +
        "artificial intelligence. He previously served as an Assistant Professor at Bangladesh " +
        "University of Textiles.",
      email: "", // TODO add LSU email
      linkedin: "https://www.linkedin.com/in/saifur-rahman-tushar",
      scholar: "",
      website: "",
      spotlight: {
        summary:
          "Digital twins that predict failure and fracture of additively manufactured metal parts in extreme " +
          "environments such as corrosive media and elevated temperature. Experimental sensing — infrared " +
          "thermography, electrochemical monitoring and X-ray CT — is coupled with physics-informed models " +
          "that embed thermodynamic quantities such as entropy generation, keeping predictions accurate, " +
          "interpretable and reliable when data are scarce. A parallel multiscale framework links thermal " +
          "history, defects and microstructure to fatigue life for parts made by robotic WAAM, LPBF and FFF.",
        projects: [
          "Thermo-Physics-Informed Transfer Learning for Fatigue-Life Prediction across Metallic Alloys",
          "Entropy-Guided Machine Learning for Corrosion Degradation Prediction",
          "Scan-to-Repair Additive Manufacturing for Fatigue Restoration of Steel Bridge Components"
        ],
        // Further work without a project card
        papers: [
          { title: "Artificial Intelligence Techniques for Fatigue Performance Prediction in Metal Additive Manufacturing: A Systematic Review",
            image: "assets/images/fig-fatigue-ai-review.webp",
            text: "PRISMA screening of 583 records retained 89 studies on AI/ML prediction of fatigue life, strength and crack growth in metal AM; key gaps are data scarcity, physics integration, uncertainty and cross-material generalization." },
          { title: "Deep Learning-Based High-Resolution Spectrogram Reconstruction for Robust Bearing Fault Diagnosis",
            image: "assets/images/fig-spectrogram-bearing.webp",
            text: "A denoising U-Net and multi-resolution convolutional STFT pipeline reconstructs noise-robust time–frequency maps from raw vibration, reaching 99.4% accuracy on CWRU and 99.1% on HUST." }
        ],
        next: "Physics-aware thermal-history reconstruction for accelerated fatigue performance prediction, building on the thermographic datasets above.",
        tools: ["Robotic WAAM", "LPBF", "FFF", "WARDJet waterjet", "Bending fatigue tester", "FLIR A600 IR camera",
                "Gamry potentiostat", "X-ray CT", "SEM / EBSD", "3D laser scanner", "PINNs", "CS-MMD transfer learning",
                "Bayesian Ridge Regression", "SHAP"]
      }
    },
    {
      name: "Mubaraq Olojo",
      category: "phd",
      position: "Ph.D. Student, Mechanical Engineering",
      image: "assets/images/mubaraq-olojo.webp",
      interests: "Computational Mechanics, Fatigue & Fracture, Additive Repair, Data-Driven Materials Modeling, Digital Twins",
      bio:
        "Mubaraq Olojo is a Ph.D. student in Mechanical Engineering at LSU. He combines physics-based " +
        "simulation, reproducible code workflows and machine learning to assess damaged and repaired " +
        "materials under mechanical loading.",
      email: "",
      linkedin: "https://www.linkedin.com/in/mubaraq-olojo-44230a128/",
      scholar: "",
      website: "",
      spotlight: {
        summary:
          "Computational mechanics and data-driven materials modeling for digital manufacturing: " +
          "finite-element modeling of damaged and repaired steel fatigue specimens, WAAM and AFSD repair " +
          "concepts, crack-growth and fracture assessment, creep-life prediction, and AI-enabled digital " +
          "twins for process monitoring, quality prediction and manufacturing decision support.",
        projects: [
          "Finite-Element Screening of Damaged and Repaired Steel Fatigue Specimens",
          "Creep-Life Prediction of 316 Austenitic Stainless Steel"
        ],
        next: "Simulate repaired geometries against the pristine and open-damage baselines, then define the fatigue and crack-growth study. A review of AI-driven digital twins for smart manufacturing is in preparation.",
        tools: ["ANSYS APDL", "Finite element analysis", "Fatigue & fracture mechanics", "WAAM / AFSD repair",
                "Creep modeling", "Physics-informed ML", "Uncertainty quantification", "Digital twins"]
      }
    }

    // ---- Add more members below by copying a block above and editing it.
    // category "ms", "undergrad" or "alumni" sections appear automatically
    // once they have at least one member.
  ],

  /* ---------------------------------------------------------------------- */
  /*  RESEARCH THRUSTS                                                      */
  /*  fit: "contain" shows a whole figure (diagrams); omit it for photos.   */
  /* ---------------------------------------------------------------------- */
  // icon: printer | twin | shield | gear | leaf | pulse   (small symbol on each card)
  research: [
    {
      title: "In-Situ Sensing & Quality Assurance for Additive Manufacturing",
      icon: "printer",
      image: "assets/images/fig-melt-pool-morphology.webp", fit: "contain",
      description:
        "Layer-wise monitoring and certification of metal and polymer additive manufacturing using " +
        "thermal imaging, melt-pool morphology dynamics, laser-scan depth maps, and vision transformers " +
        "that flag defects while the part is still being built.",
      tags: ["Metal AM", "Thermal Imaging", "Vision Transformers"],
      links: [
        { label: "JMSE 2022", url: "https://doi.org/10.1115/1.4054805" },
        { label: "IJAMT 2026", url: "https://doi.org/10.1007/s00170-026-17846-8" }
      ]
    },
    {
      title: "Digital Twins & Predictive Process Control",
      icon: "twin",
      image: "assets/images/fig-entropy-mpc.webp", fit: "contain",
      description:
        "Physics-informed and data-driven process models that link in-process measurements to part " +
        "quality, and model predictive controllers that act on them — such as using the spectral " +
        "entropy of arc sound to correct restart transients in wire arc additive manufacturing.",
      tags: ["Digital Twins", "Model Predictive Control", "Physics-Informed ML"],
      links: [
        { label: "LSU Control Symposium 2026", url: "https://doi.org/10.31390/lsucontrol.26.12" }
      ]
    },
    {
      title: "Physical AI & Embodied Intelligence for Manufacturing",
      icon: "robot",
      image: "assets/images/res-seeed-arm.webp", fit: "contain",
      description:
        "Robots and machines that perceive, reason and act in the physical world: learning-based " +
        "perception and control for robotic manipulation and robotic additive manufacturing, " +
        "simulation-to-real transfer, human–robot collaboration, and real-time edge AI that closes " +
        "the loop between sensing and action on the shop floor.",
      tags: ["Embodied AI", "Robot Learning", "Edge AI"],
      links: [
        { label: "LSU Control Symposium 2026", url: "https://doi.org/10.31390/lsucontrol.26.12" }
      ]
    },
    {
      title: "Trustworthy & Privacy-Preserving Manufacturing AI",
      icon: "shield",
      image: "assets/images/fig-amaas-privacy.webp", fit: "contain",
      description:
        "Methods that let manufacturers share process data on cloud platforms without exposing " +
        "sensitive designs — thermal-history de-identification, federated learning, and local " +
        "differential privacy for graph learning — with interpretable, uncertainty-aware models.",
      tags: ["Data Privacy", "Graph Learning", "Explainable AI"],
      links: [
        { label: "Manuf. Letters 2023", url: "https://doi.org/10.1016/j.mfglet.2023.03.004" },
        { label: "JCISE 2026 (accepted)", url: "https://arxiv.org/abs/2604.05077" }
      ]
    },
    {
      title: "Condition Monitoring & Smart Systems",
      icon: "gear",
      image: "assets/images/fig-sensor-fusion.webp", fit: "contain",
      description:
        "Multi-channel vibro-acoustic sensor fusion, tensor methods, and interpretable deep learning " +
        "for real-time fault diagnosis, missing-signal imputation, and predictive maintenance of " +
        "rotating machinery and robotic systems.",
      tags: ["Sensor Fusion", "Fault Diagnosis", "Robotics"],
      links: [
        { label: "IJAMT 2023", url: "https://doi.org/10.1007/s00170-022-10525-4" },
        { label: "Manuf. Letters 2025", url: "https://doi.org/10.1016/j.mfglet.2025.06.015" }
      ]
    },
    {
      title: "AI for Sustainable & Resilient Systems",
      icon: "leaf",
      image: "assets/images/research-water-energy.svg", fit: "contain",
      description:
        "Foundation-model forecasting and data-driven decision support for cyber-physical-social " +
        "systems — rural wastewater and freshwater infrastructure, energy systems, critical " +
        "materials, and sustainable, resilient supply chains.",
      tags: ["Foundation Models", "Water & Energy", "Supply Chains"],
      links: [
        { label: "Water Research 2025", url: "https://doi.org/10.1016/j.watres.2025.124931" },
        { label: "Water 2025", url: "https://www.mdpi.com/2073-4441/17/20/2936" },
        { label: "Sustainability 2025", url: "https://doi.org/10.3390/su172310775" },
        { label: "Appl. Water Sci. 2026", url: "https://doi.org/10.1007/s13201-025-02698-6" },
        { label: "JCP 2019", url: "https://doi.org/10.1016/j.jclepro.2019.117771" }
      ]
    },
    {
      title: "AI for Healthcare & Bio-Manufacturing",
      icon: "pulse",
      image: "assets/images/gal-bioprinter-lab.webp",
      description:
        "Real-time medical image analysis and 3D bioprinting of composite bone scaffolds, with " +
        "image-based process optimization, XCT characterization, and finite element modeling.",
      tags: ["Medical Imaging", "Bioprinting", "Process Optimization"],
      links: [
        { label: "IISE THSE 2026", url: "https://doi.org/10.1080/24725579.2025.2598578" }
      ]
    }
    // Add more research thrusts by copying a block above.
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
  /*  CURRENT LAB PROJECTS — recent work by ASTRA Lab members             */
  /* ---------------------------------------------------------------------- */
  projects: [
    {
      title: "Entropy-Aware Model Predictive Control for Transient Quality Mitigation in Wire Arc Additive Manufacturing",
      image: "assets/images/fig-entropy-mpc.webp",
      status: "Poster · LSU Control Systems Symposium 2026",
      tags: ["Process Control", "Acoustic Sensing", "WAAM"],
      summary:
        "Restart transients in wire arc additive manufacturing can be invisible in current and " +
        "voltage signals. The spectral entropy of the arc sound serves as a control state, letting a " +
        "model predictive controller apply a front-loaded heat correction that shortens recovery " +
        "(simulation and surrogate-model study).",
      links: [{ label: "DOI", url: "https://doi.org/10.31390/lsucontrol.26.12" }]
    },
    {
      title: "Feature-Aware Anisotropic Local Differential Privacy for Graph Learning in Metal AM",
      image: "assets/images/fig-graph-privacy.webp",
      status: "Accepted · ASME JCISE 2026",
      tags: ["Graph ML", "Privacy", "Additive Manufacturing"],
      summary:
        "Embedding-level local differential privacy with feature-aware, anisotropic noise, combined " +
        "with a layer-wise graph attention network, enables collaborative porosity detection across " +
        "manufacturers while preserving much of the non-private accuracy.",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2604.05077" }]
    },
    {
      title: "Thermo-Physics-Informed Transfer Learning for Fatigue-Life Prediction across Metallic Alloys",
      image: "assets/images/fig-fatigue-transfer.webp",
      status: "Ongoing · Saifur Rahman Tushar",
      tags: ["Physics-Informed ML", "Transfer Learning", "Infrared Thermography"],
      summary:
        "Infrared thermography during fully reversed bending fatigue feeds a monotonic physics-informed " +
        "network trained on CS1018 and transferred to CS1010 and SS321 with condition-stratified MMD — " +
        "reaching R² = 0.954 and 0.934 on the data-scarce target alloys.",
      links: []
    },
    {
      title: "Entropy-Guided Machine Learning for Corrosion Degradation Prediction",
      image: "assets/images/fig-corrosion-entropy.webp",
      status: "Ongoing · Saifur Rahman Tushar",
      tags: ["Degradation Entropy", "Bayesian Learning", "Corrosion"],
      summary:
        "Degradation-entropy generation from electrochemical tests is used as a single physics-based input " +
        "to an uncertainty-aware Bayesian model, predicting material loss on LCS 1018 and Al 6061-T6 with " +
        "R² = 0.986–0.991 and calibrated 95% intervals from only 7–24 samples.",
      links: []
    },
    {
      title: "Scan-to-Repair Additive Manufacturing for Fatigue Restoration of Steel Bridge Components",
      image: "assets/images/fig-scan-to-repair.webp",
      status: "Ongoing · Saifur Rahman Tushar",
      tags: ["Robotic WAAM", "3D Scanning", "Fatigue"],
      summary:
        "Notched CS1018 specimens are 3D-scanned, repaired by robotic WAAM with in-situ melt-pool imaging, " +
        "machined and inspected by X-ray CT. Fatigue testing is under way to measure how much fatigue life " +
        "the repair recovers.",
      links: []
    },
    {
      title: "Finite-Element Screening of Damaged and Repaired Steel Fatigue Specimens",
      image: "assets/images/fig-fe-diamond-notch.webp",
      status: "Ongoing · Mubaraq Olojo",
      tags: ["ANSYS APDL", "Fatigue & Fracture", "Additive Repair"],
      summary:
        "A reproducible ANSYS APDL workflow screens pristine, open-damage and repaired ASTM E466-style " +
        "steel specimens. Open-damage baselines under 1000 lbf axial load rank diamond, circular and " +
        "two-side openings at 7.19×, 3.42× and 3.00× the pristine path stress; repaired geometries " +
        "(AFSD/FSD-style fill, machined WAAM, as-deposited WAAM cap) come next.",
      links: []
    },
    {
      title: "Creep-Life Prediction of 316 Austenitic Stainless Steel",
      image: "assets/images/fig-creep-ml-workflow.webp",
      status: "Ongoing · Mubaraq Olojo",
      tags: ["Creep", "Physics-Informed ML", "Uncertainty"],
      summary:
        "Empirical, machine-learning and physics-informed models are compared for creep rupture-life " +
        "prediction, with protocol-aware validation, uncertainty quantification and checks on " +
        "physical consistency.",
      links: []
    },
    {
      title: "Vision Transformers for Real-Time Surface Defect Detection in FDM",
      image: "assets/images/fig-vit-fdm.webp",
      status: "The International Journal of Advanced Manufacturing Technology · 2026",
      tags: ["Vision Transformers", "Quality Assurance", "Real-Time"],
      summary:
        "An optimized vision transformer on laser-scan depth maps uses global self-attention to " +
        "detect spatially distributed surface anomalies during fused deposition modeling in real time.",
      links: [{ label: "DOI", url: "https://doi.org/10.1007/s00170-026-17846-8" }]
    },
    {
      title: "Interpretable Foundation-Model Forecasting of Dissolved Oxygen for Proactive Aeration",
      image: "assets/images/fig-do-forecasting.webp",
      status: "Water Research · 2025",
      tags: ["Foundation Models", "SHAP", "Rural Wastewater"],
      summary:
        "Seasonal segmentation, foundation-model forecasting and SHAP interpretability deliver transparent " +
        "dissolved-oxygen forecasts that support proactive aeration in a rural wastewater stabilization pond.",
      links: [{ label: "DOI", url: "https://doi.org/10.1016/j.watres.2025.124931" }]
    },
    {
      title: "AI-Enabled Modeling for Smart Rural Wastewater Treatment Systems",
      image: "assets/images/fig-rural-ww-framework.webp",
      status: "Applied Water Science · 2026",
      tags: ["Systematic Review", "Interpretable AI", "Cyber-Physical-Social Systems"],
      summary:
        "A structured review of AI for wastewater treatment finds rural adoption limited by data scarcity, " +
        "infrastructure mismatch and opacity, and proposes a modular, interpretable framework for rural systems.",
      links: [{ label: "DOI", url: "https://doi.org/10.1007/s13201-025-02698-6" }]
    },
    {
      title: "Fracture Finder: Real-Time Vertebral Fracture Localization on Thoracic Spine X-Rays",
      image: "assets/images/fig-fracture-finder.webp",
      status: "IISE Transactions on Healthcare Systems Engineering · 2026",
      tags: ["Medical Imaging", "YOLOv8", "Real-Time"],
      summary:
        "A single-stage YOLOv8 detector with targeted augmentation and weighted box fusion localizes " +
        "suspected vertebral fractures on thoracic spine X-rays in about 126 ms per image.",
      links: [{ label: "DOI", url: "https://doi.org/10.1080/24725579.2025.2598578" }]
    }
  ],

  /* ---------------------------------------------------------------------- */
  /*  RESEARCH SUPPORT — lab funding and the director's doctoral support   */
  /* ---------------------------------------------------------------------- */
  // scope: "lab" (ASTRA Lab projects) | "doctoral" (the director's Ph.D. research at MSU)
  funding: [
    { scope: "lab", sponsor: "National Science Foundation — LAMDA Seed Grant", short: "NSF", award: "2025",
      project: "Physics-informed machine learning for process defect detection and fatigue modeling in wire arc additive manufacturing" },
    { scope: "lab", sponsor: "NSF Southwest I-Corps — IdeaLaunch Program", short: "I-Corps", award: "2025",
      project: "Privacy-preserving certification framework for additive-manufacturing-as-a-service platforms" },
    { scope: "doctoral", sponsor: "National Science Foundation", short: "NSF", award: "CMMI-2046515",
      project: "Data analytics and statistical learning in additive manufacturing" },
    { scope: "doctoral", sponsor: "Department of Defense", short: "DoD", award: "Institute of Systems Engineering Research (ISER)",
      project: "Condition monitoring and diagnosis of complex manufacturing systems" },
    { scope: "doctoral", sponsor: "National Science Foundation", short: "NSF", award: "",
      project: "Bio-manufacturing for bone tissue engineering" }
  ],

  /* ---------------------------------------------------------------------- */
  /*  SPONSORS — the "Research supported by" band on the home page           */
  /* ---------------------------------------------------------------------- */
  sponsors: [
    { short: "NSF",  name: "National Science Foundation", logo: "assets/images/logo-nsf.webp" },
    { short: "BoR",  name: "Louisiana Board of Regents", logo: "assets/images/logo-bor.webp" },
    { short: "LTRC", name: "Louisiana Transportation Research Center & Louisiana DOTD", logo: "assets/images/logo-ltrc.webp" },
    { short: "USGS", name: "U.S. Geological Survey", logo: "assets/images/logo-usgs.webp" },
    { short: "NASA", name: "National Aeronautics and Space Administration", logo: "assets/images/logo-nasa.webp" }
    // Add sponsors by copying a line above; "logo" is optional.
  ],

  /* ---------------------------------------------------------------------- */
  /*  PUBLICATIONS                                                          */
  /*  category: journal | conference | preprint | talk | poster | thesis    */
  /*  The lab director's name is highlighted automatically.                 */
  /* ---------------------------------------------------------------------- */
  publications: [
    // ---- Journal Articles ----
    { category: "journal", year: 2026, authors: "Islam, M. S., Bappy, M. M., Tushar, S. R., & Arifuzzaman, M.", title: "Feature-aware anisotropic local differential privacy for utility-preserving graph representation learning in metal additive manufacturing", venue: "Journal of Computing and Information Science in Engineering (accepted; preprint arXiv:2604.05077)", link: "https://arxiv.org/abs/2604.05077" },
    { category: "journal", year: 2026, authors: "Islam, M. D. S., Bappy, M. M., Tushar, S. R., Zamiela, C., & Wasi, A. T.", title: "Beyond local receptive fields: vision transformers for real-time surface defect detection in FDM", venue: "The International Journal of Advanced Manufacturing Technology, 143(9–10), 5399–5420", link: "https://doi.org/10.1007/s00170-026-17846-8" },
    { category: "journal", year: 2026, authors: "Islam, M. S., Anik, M. A., Wasi, A. T., & Bappy, M. M.", title: "Fracture Finder: Computer-aided real-time diagnosis of vertebral fractures in thoracic spine X-rays using YOLOv8 with weighted box fusion and augmentation strategies", venue: "IISE Transactions on Healthcare Systems Engineering, 1–18", link: "https://doi.org/10.1080/24725579.2025.2598578" },
    { category: "journal", year: 2026, authors: "Martinez De La Hoz, J., Islam, M. D. S., Bappy, M. M., & Hayes, M. P.", title: "AI-enabled modeling for smart rural wastewater treatment systems: current practices and remaining gaps", venue: "Applied Water Science, 16, 40", link: "https://doi.org/10.1007/s13201-025-02698-6" },
    { category: "journal", year: 2026, authors: "Pan, D., Al Mamun, A., Zhou, R., Bappy, M. M., & Islam, M. S.", title: "Comprehensive and comparative characterizations of tensile properties and fracture mechanisms of 3D printed multifunctional carbon-fiber and metal-filled PLA composite parts", venue: "Polymer Composites, 47(3), 2282–2300", link: "https://doi.org/10.1002/pc.70281" },
    { category: "journal", year: 2026, authors: "Hosen, M. I., Mithun, A. C., Tushar, S. R., Alam, M. F. B., Islam, M. D., & Bappy, M. M.", title: "Advancing industry 4.0 and lean-driven ergonomic insights for sustainable textile manufacturing", venue: "International Journal of System Assurance Engineering and Management, 1–31", link: "" },
    { category: "journal", year: 2025, authors: "Quddus, M. A., Rahman, M. F., & Bappy, M. M.", title: "Hybrid drone and truck delivery optimization in remote areas using geospatial analytics", venue: "Sustainability, 17(23), 10775", link: "https://doi.org/10.3390/su172310775" },
    { category: "journal", year: 2025, authors: "Marcantel, M., Bappy, M. M., & Hayes, M. P.", title: "Investigating seasonal water quality dynamics in humid, subtropical Louisiana facultative waste stabilization ponds", venue: "Water, 17(20), 2936", link: "https://www.mdpi.com/2073-4441/17/20/2936" },
    { category: "journal", year: 2025, authors: "De La Hoz, J. L. M., Bappy, M. M., Islam, M. S., Marcantel, M., & Hayes, M. P.", title: "Interpretable forecasting of dissolved oxygen leveraging foundation model for proactive aeration in rural wastewater treatment systems", venue: "Water Research, 124931", link: "https://doi.org/10.1016/j.watres.2025.124931" },
    { category: "journal", year: 2025, authors: "Shakibaei, H., Islam, M. S., & Bappy, M. M.", title: "A fuzzy data-driven framework for enhanced risk management decision-making in manufacturing: A case study", venue: "Manufacturing Letters, 44, 1681–1688", link: "https://doi.org/10.1016/j.mfglet.2025.06.187" },
    { category: "journal", year: 2025, authors: "Biswas, S., Al Mamun, A., Islam, M. D. S., & Bappy, M. M.", title: "Interpretable CNN models for computationally efficient bearing fault diagnosis using learnable Gaussian/Sinc filters", venue: "Manufacturing Letters, 44, 110–120", link: "https://doi.org/10.1016/j.mfglet.2025.06.015" },
    { category: "journal", year: 2025, authors: "Ahsan, M. N., Islam, M. D. S., & Bappy, M. M.", title: "Generative modeling in smart manufacturing: Applications, challenges, and future directions", venue: "Manufacturing Letters, 44, 1285–1295", link: "https://doi.org/10.1016/j.mfglet.2025.06.148" },
    { category: "journal", year: 2025, authors: "Islam, M. S., Tushar, S. R., Bappy, M. M., Ali, M., & Al Nadim, A.", title: "Evaluating challenges to the adoption of smart textiles in readymade garment industries: Implications for sustainable business development", venue: "Green Technologies and Sustainability, 3(3), 100225", link: "https://doi.org/10.1016/j.grets.2025.100225" },
    { category: "journal", year: 2025, authors: "Bappy, M. M., Fullington, D., Bian, L., & Tian, W.", title: "Adaptive thermal history de-identification for privacy-preserving data sharing of directed energy deposition processes", venue: "Journal of Computing and Information Science in Engineering, 25(3)", link: "" },
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
    { category: "preprint", year: 2026, authors: "Monteiro, C., Bappy, M. M., Nahmens, I., & Islam, M. S.", title: "An integrated decision-support framework for energy benchmarking, anomaly detection, and proxy setpoint optimization in data-limited retail portfolios", venue: "SSRN working paper 6410730", link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6410730" },
    { category: "preprint", year: 2024, authors: "Wasi, A. T., Islam, M. D. S., Akib, A. R., & Bappy, M. M.", title: "Graph neural networks in supply chain analytics and optimization: Concepts, perspectives, dataset and benchmarks", venue: "arXiv preprint arXiv:2411.08550", link: "https://arxiv.org/abs/2411.08550" },

    // ---- Conference Papers & Proceedings ----
    { category: "conference", year: 2025, authors: "Islam, M. S., & Bappy, M. M.", title: "Privacy-aware porosity prediction in metal additive manufacturing using hierarchical graph attention networks", venue: "INFORMS Annual Meeting", link: "" },
    { category: "conference", year: 2025, authors: "Islam, M. S., & Bappy, M. M.", title: "Inference-driven strategy design for professional societies: A hybrid machine learning and scenario simulation framework", venue: "INFORMS Annual Meeting", link: "" },
    { category: "conference", year: 2025, authors: "Islam, M. S., & Bappy, M. M.", title: "Explainable vision transformer-based real-time anomaly detection for fused deposition modeling", venue: "IISE Annual Conference and Expo", link: "" },
    { category: "conference", year: 2025, authors: "Islam, M. S., Bappy, M. M., De La Hoz, D., Martinez, J. L., & Chowdhury, S.", title: "Foundation model-driven predictive and interpretable modeling for critical materials in renewable energy applications", venue: "Proceedings of the 99th Annual Meeting of the Louisiana Academy of Sciences (Best Graduate Oral Presentation)", link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5248814" },
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
    { category: "poster", year: 2026, authors: "Islam, M. S., Bappy, M. M., & Tushar, S. R.", title: "Entropy-aware model predictive control for transient quality mitigation in metal additive manufacturing", venue: "LSU Control Systems Symposium", link: "https://doi.org/10.31390/lsucontrol.26.12" },
    { category: "poster", year: 2024, authors: "Anik, M., Hoque, I., Islam, M. S., Wasi, A. T., Bappy, M. M., & Ahsan, M. M.", title: "Sustainable management of rare earth elements for clean energy using prescriptive digital twins", venue: "Digital Twin for Manufacturing Sustainability, Safety, and Resilience, Purdue University", link: "" },
    { category: "poster", year: 2023, authors: "Bappy, M. M., Fullington, D., & Tian, W.", title: "Adaptive thermal history de-identification for privacy-preserving process-defect modeling of metal additive manufacturing", venue: "IISE Annual Conference, New Orleans, LA", link: "" },
    { category: "poster", year: 2023, authors: "Epps, E. V., Bappy, M. M., Tian, W., & Priddy, L. B.", title: "Bioprinting parameter optimization for polymer-ceramic composite scaffolds for bone tissue engineering", venue: "Research That Matters in ISE, Mississippi State University", link: "" },
    { category: "poster", year: 2023, authors: "Bappy, M. M., Fullington, D., & Tian, W.", title: "Adaptive thermal history de-identification for privacy-preserving process-defect modeling of metal additive manufacturing", venue: "Research Week Poster Competition, Mississippi State University", link: "" },
    { category: "poster", year: 2022, authors: "Bappy, M. M., & Tian, W.", title: "Morphological dynamics-based anomaly detection towards in-situ layer-wise certification for directed energy deposition processes", venue: "INFORMS Annual Meeting, Indianapolis, IN", link: "" },
    { category: "poster", year: 2022, authors: "Kailey, C., Bappy, M. M., Epps, E. V., Tian, W., & Priddy, L. B.", title: "Evaluation of the printability of additively manufactured poly(lactic-co-glycolic acid) and nano-hydroxyapatite composite bone scaffolds", venue: "4th Annual Summer Science and Engineering Symposium, Mississippi Academy of Sciences", link: "" },
    { category: "poster", year: 2021, authors: "Bappy, M. M., & Tian, W.", title: "In-situ layer-wise certification for direct energy deposition processes based on melt pool morphology dynamics analysis", venue: "Graduate Research Symposium, Mississippi State University", link: "" },

    // ---- Theses supervised ----
    { category: "thesis", year: 2026, authors: "Islam, M. S. (advisor: Bappy, M. M.)", title: "Trustworthy artificial intelligence for real-time quality assurance in additive manufacturing", venue: "M.S. Thesis, Louisiana State University", link: "https://repository.lsu.edu/gradschool_theses/6431/" }
    // Add more by copying a block above. Order within a year does not matter.
  ],

  /* ---------------------------------------------------------------------- */
  /*  RESOURCES / LAB EQUIPMENT                                             */
  /*  Grouped by "group". Add items by copying a { ... } block.             */
  /* ---------------------------------------------------------------------- */
  resources: [
    // fit: "contain" shows the whole image (renders, labelled diagrams); omit for photos.
    // ---- Robotic Additive Manufacturing ----
    {
      group: "Robotic Additive Manufacturing",
      name: "UR5–Miller Robotic WAAM System",
      image: "assets/images/res-waam-ur5-miller.webp", fit: "contain",
      description: "Wire arc additive manufacturing cell pairing a Universal Robots UR5 arm with a Miller Continuum 350 welding power source, shielding-gas supply, torch assembly, positioner/build platform and process sensing inside a safety enclosure.",
      specs: "UR5 cobot · Miller Continuum 350 · positioner · in-process sensing"
    },
    {
      group: "Robotic Additive Manufacturing",
      name: "FANUC–Fronius Robotic WAAM System",
      image: "assets/images/res-waam-fanuc-fronius.webp", fit: "contain",
      description: "Industrial FANUC robot with a Fronius TPS 400i power source and welding torch over a dedicated WAAM worktable, used for metal deposition and localized repair with in-situ melt-pool imaging.",
      specs: "FANUC robot · Fronius TPS 400i · WAAM worktable · melt-pool camera"
    },
    {
      group: "Robotic Additive Manufacturing",
      name: "Industrial Robot Arm 3D Printer",
      image: "assets/images/res-kuka-am-robot.webp",
      description: "KUKA-style industrial robot arm configured as a large-format 3D printer over an open build platform, for multi-axis deposition beyond the envelope of gantry printers.",
      specs: "6-axis industrial arm · large-format build platform"
    },
    {
      group: "Robotic Additive Manufacturing",
      name: "Diabase H-Series Hybrid 3D Printer",
      image: "assets/images/res-diabase-h-series.webp", fit: "contain",
      description: "Hybrid manufacturing platform combining multi-material additive printing with subtractive machining in one machine, for printing and finishing parts in a single setup.",
      specs: "Hybrid additive–subtractive · multi-material"
    },
    {
      group: "Robotic Additive Manufacturing",
      name: "DexArm Multi-Functional Robot Arm",
      image: "assets/images/res-dexarm.webp", fit: "contain",
      description: "Desktop robot arm with interchangeable tool modules for pick-and-place, laser, and 3D-printing experiments in robotic manufacturing and human–robot collaboration.",
      specs: "Desktop arm · interchangeable tool modules"
    },

    // ---- Sensing & Characterization ----
    {
      group: "Sensing & Characterization",
      name: "In-Situ Laser Profilometry FDM Testbed",
      image: "assets/images/res-laser-profilometry.webp",
      description: "Creality Ender-5 FDM printer integrated with a motorized scanner frame, angle encoder and motion controller for layer-wise surface scanning, used for real-time defect detection with vision transformers.",
      specs: "KEYENCE LJ-V7000 2D laser profiler · 1 µm vertical resolution · ±48 mm range"
    },
    {
      group: "Sensing & Characterization",
      name: "Bending Fatigue Tester with Infrared Thermography",
      image: "assets/images/res-bending-fatigue-ir.webp", fit: "contain",
      description: "Displacement-controlled, fully reversed bending fatigue tester instrumented with an infrared camera to record surface temperature evolution during cyclic loading.",
      specs: "FLIR A600-series · 640 × 480 px · up to 200 frames/s · 50 mK"
    },
    {
      group: "Sensing & Characterization",
      name: "Electrochemical Corrosion Test Station",
      image: "assets/images/res-potentiostat.webp",
      description: "Gamry potentiostat with a three-electrode cell (specimen, graphite counter, Ag/AgCl reference) in 3.5 wt% NaCl for accelerated corrosion testing, with precision weighing of material loss.",
      specs: "Gamry potentiostat · 1 Hz logging · balance ±0.1 mg"
    },
    {
      group: "Sensing & Characterization",
      name: "Handheld 3D Laser Scanner",
      image: "assets/images/res-3d-laser-scan.webp",
      description: "Blue-laser 3D scanner for capturing defect and notch geometry before repair, linking measured geometry to fatigue mechanics in scan-to-repair workflows.",
      specs: "3D laser scanning · defect geometry capture"
    },

    // ---- Computing ----
    {
      group: "Computing",
      name: "GPU Workstations",
      image: "", // add a photo file name here if you have one
      description:
        "High-performance workstations equipped with NVIDIA GPUs for deep learning, " +
        "computer vision, physics-informed modeling, and large-scale simulation.",
      specs: "Includes NVIDIA RTX 4080 (16 GB) for training and real-time inference" // TODO list other workstations
    },

    // ---- 3D Printing ----
    {
      group: "3D Printing",
      name: "Creality Ender-3 V3 Plus",
      image: "assets/images/res-creality-ender3.webp", fit: "contain",
      description: "Large-format FDM printer for rapid prototyping of fixtures, mounts, and functional parts.",
      specs: "FDM · ~300 × 300 × 330 mm build volume"
    },
    {
      group: "3D Printing",
      name: "Bambu Lab A1",
      image: "assets/images/res-bambu-a1.webp", fit: "contain",
      description: "Fast FDM printer with multi-color (AMS) capability for high-quality, multi-material prototypes.",
      specs: "FDM · multi-color (AMS lite)"
    },
    {
      group: "3D Printing",
      name: "Resin Printing & Post-Processing Station",
      image: "assets/images/res-anycubic-wash-cure.webp", fit: "contain",
      description: "MSLA resin printing with an Anycubic Wash & Cure 3 station for washing and UV post-curing high-detail, high-resolution parts.",
      specs: "MSLA (resin) · Anycubic Wash & Cure 3"
    },

    // ---- Robotics ----
    {
      group: "Robotics",
      name: "Seeed Studio Robotic Arm",
      image: "assets/images/res-seeed-arm.webp", fit: "contain",
      description: "Desktop robotic manipulator with a parallel gripper for pick-and-place, manipulation, and human–robot interaction experiments.",
      specs: "Multi-DOF manipulator · parallel gripper" // TODO confirm exact model
    },
    {
      group: "Robotics",
      name: "Fashion Star Servo Robotic Arm",
      image: "assets/images/res-fashionstar-arm.webp", fit: "contain",
      description: "Custom 3D-printed robotic arm built with Fashion Star serial bus servos for low-cost manipulation and control research.",
      specs: "Serial-bus servo arm · custom build"
    }
    // Add more equipment by copying a block above.
  ],

  /* ---------------------------------------------------------------------- */
  /*  AWARDS & HONORS                                                       */
  /*  group: "research" | "student" | "grant" | "scholarship"              */
  /*  person: optional — shown when an award belongs to someone other       */
  /*  than the lab director.                                                */
  /* ---------------------------------------------------------------------- */
  awards: [
    // ---- Lab director: research honors ----
    { group: "research", year: "2023–2024", title: "ISE “Outstanding Graduate Student Researcher” Award", org: "Department of Industrial and Systems Engineering, Mississippi State University" },
    { group: "research", year: "2023", title: "Best Poster Award — Research Week Poster Competition", org: "Mississippi State University" },
    { group: "research", year: "2023", title: "Best Poster Award — Research That Matters in ISE", org: "Mississippi State University" },
    { group: "research", year: "2023", title: "First Runner-up, Best Posters — Graduate Research Symposium", org: "Mississippi State University" },
    { group: "research", year: "2023", title: "Selected for the Doctoral Student Colloquium", org: "Institute of Industrial and Systems Engineers (IISE)" },
    { group: "research", year: "2022", title: "INFORMS Student Chapter Magna Cum Laude Award", org: "INFORMS Annual Meeting, Indianapolis" },
    { group: "research", year: "2022", title: "First Runner-up, Best Posters — Graduate Research Symposium", org: "Mississippi State University" },
    { group: "research", year: "2021", title: "First Runner-up, Best Posters — Graduate Research Symposium", org: "Mississippi State University" },

    // ---- Student honors ----
    { group: "student", year: "2026", title: "2nd Place, Best Track Paper Award (Health Systems Track)", org: "IISE Annual Conference and Expo", person: "Md Shafikul Islam" },
    { group: "student", year: "2026", title: "3rd Place, DAIS Student Data Analytics Competition", org: "IISE Annual Conference and Expo", person: "Md Shafikul Islam" },
    { group: "student", year: "2025", title: "Champion, IISE Innovative Design Competition", org: "IISE Annual Conference and Expo", person: "Md Shafikul Islam" },
    { group: "student", year: "2025", title: "Runner-up, Stakeholder Engagement Data Challenge", org: "INFORMS Annual Meeting", person: "Md Shafikul Islam, Azmine Toushiq Wasi & Dr. Bappy" },
    { group: "student", year: "2025", title: "2nd Runner-up, QCRE Data Challenge", org: "IISE Annual Conference and Expo", person: "Md Shafikul Islam" },
    { group: "student", year: "2025", title: "Best Graduate Oral Presentation", org: "Louisiana Academy of Sciences, 99th Annual Meeting", person: "Md Shafikul Islam" },
    { group: "student", year: "2025", title: "NSF Student Travel Award", org: "North American Manufacturing Research Conference (NAMRC)", person: "Md Shafikul Islam" },
    { group: "student", year: "2025", title: "NSF Student Travel Award", org: "IISE Annual Conference and Expo", person: "Md Shafikul Islam" },

    // ---- Grants & travel awards ----
    { group: "grant", year: "2024", title: "NSF Student/Early Career Researcher Travel Award", org: "National Science Foundation" },
    { group: "grant", year: "2022", title: "Graduate Student Travel Assistance Grant (TAGGS)", org: "The Graduate School, Mississippi State University" },
    { group: "grant", year: "2021", title: "Manufacturing & Design Student Sponsorship Award", org: "Institute of Industrial and Systems Engineers (IISE)" },
    { group: "grant", year: "2019", title: "Research Project Funding Award", org: "Research Centre, Shahjalal University of Science and Technology" },

    // ---- Scholarships ----
    { group: "scholarship", year: "2009–2013", title: "University Merit Scholarship", org: "Shahjalal University of Science and Technology" }
    // Add more awards by copying a block above.
  ],

  /* ---------------------------------------------------------------------- */
  /*  SERVICE & OUTREACH                                                  */
  /* ---------------------------------------------------------------------- */
  service: {
    // Lab director. kind: review | committee | judge | outreach | organizing
    // TODO add journal reviewing, editorial boards, committees and session chairs here.
    director: [
      { kind: "outreach", title: "Engaging prospective and current students at LSU College of Engineering events",
        org: "Louisiana State University", year: "", image: "assets/images/gal-lsu-student-engagement.webp" },
      { kind: "judge", title: "Judge, student research poster competition",
        org: "Mississippi State University", year: "", image: "assets/images/gal-poster-judging.webp" },
      { kind: "judge", title: "Judge, student science fair",
        org: "", year: "", image: "assets/images/gal-science-fair-judging.webp" },
      { kind: "outreach", title: "STEM outreach with high-school students",
        org: "", year: "", image: "assets/images/gal-outreach-group.webp" },
      { kind: "organizing", title: "Organizer, problem setter and judge for onsite practice contests",
        org: "Department of Industrial and Production Engineering, SUST", year: "2018–2019", image: "" }
    ],
    // Lab members
    students: [
      { kind: "judge", title: "Judge, Louisiana Science and Engineering Fair (Senior Division)",
        org: "Md Shafikul Islam", year: "2026" },
      { kind: "talk", title: "Invited talk: “Application of Machine Learning Methods in Grease Manufacturing under Data Scarcity”",
        org: "Md Shafikul Islam · CeRoM, LSU", year: "2025" },
      { kind: "review", title: "Reviewer: Expert Systems with Applications, Heliyon, Digital Twins and Applications, and MSEC 2026",
        org: "Md Shafikul Islam", year: "2025–present" },
      { kind: "committee", title: "Session Chair, IISE Annual Conference and Expo",
        org: "Md Shafikul Islam", year: "2025" }
    ]
  },

  /* ---------------------------------------------------------------------- */
  /*  GALLERY                                                               */
  /*  category: awards | undergrad | talks | lab | field | outreach | life  */
  /* ---------------------------------------------------------------------- */
  gallery: [
    // ---- Awards & milestones ----
    { image: "assets/images/gal-informs-2025-runnerup.webp", category: "awards",
      caption: "Runner-up, Stakeholder Engagement Data Challenge — Md Shafikul Islam and Dr. Bappy at the INFORMS Annual Meeting 2025" },
    { image: "assets/images/gal-iise-award-shafikul.webp", category: "awards",
      caption: "Md Shafikul Islam receiving an award at the IISE Annual Conference" },
    { image: "assets/images/gal-las-best-oral.webp", category: "awards",
      caption: "Best Graduate Oral Presentation award, Louisiana Academy of Sciences 99th Annual Meeting (2025)" },
    { image: "assets/images/gal-iise-design-champion.webp", category: "awards",
      caption: "Champion team presenting at the IISE Innovative Design Competition (2025)" },
    { image: "assets/images/gal-ms-graduation.webp", category: "awards",
      caption: "Md Shafikul Islam earns his M.S. in Industrial Engineering at LSU (2026)" },
    { image: "assets/images/gal-commencement-lsu.webp", category: "awards",
      caption: "Commencement day at the LSU College of Engineering" },

    // ---- Undergraduate research ----
    { image: "assets/images/gal-discover-day-quantum-am.webp", category: "undergrad",
      caption: "LSU Discover Day poster: measurement-guided additive manufacturing for quantum technology components" },
    { image: "assets/images/gal-discover-day-robotic-monitoring.webp", category: "undergrad",
      caption: "LSU Discover Day poster: robotic-arm camera and 3D-printer telemetry to monitor, predict and correct printing errors" },

    // ---- Talks & conferences ----
    { image: "assets/images/gal-msec-2026-pennstate.webp", category: "talks",
      caption: "ASME MSEC 2026 / NAMRC 54 at Penn State" },
    { image: "assets/images/gal-las-2025-lsua.webp", category: "talks",
      caption: "ASTRA Lab members at the Louisiana Academy of Sciences Annual Meeting, LSU Alexandria" },
    { image: "assets/images/gal-poster-entropy-mpc.webp", category: "talks",
      caption: "Entropy-aware model predictive control poster, LSU Control Systems Symposium (2026)" },
    { image: "assets/images/gal-talk-gnn.webp", category: "talks",
      caption: "Presenting graph attention networks for privacy-aware porosity prediction" },
    { image: "assets/images/gal-talk-vit.webp", category: "talks",
      caption: "Presenting vision transformers for real-time defect detection in FDM" },
    { image: "assets/images/gal-iise-2025-shafikul.webp", category: "talks",
      caption: "IISE Annual Conference & Expo 2025" },
    { image: "assets/images/gal-talk-sensing-analytics.webp", category: "talks",
      caption: "Dr. Bappy presenting “Sensing and Analytics in Advanced Manufacturing Systems” at the IISE Annual Conference" },
    { image: "assets/images/gal-poster-iise-2023.webp", category: "talks",
      caption: "Poster on adaptive thermal history de-identification for privacy-preserving process–defect modeling" },
    { image: "assets/images/gal-talk-ded-certification.webp", category: "talks",
      caption: "Talk on in-situ layer-wise certification for directed energy deposition processes" },
    { image: "assets/images/gal-iise-conference.webp", category: "talks",
      caption: "IISE Annual Conference & Expo" },
    { image: "assets/images/gal-informs-2022.webp", category: "talks",
      caption: "INFORMS Annual Meeting 2022, Indianapolis" },

    // ---- In the lab ----
    { image: "assets/images/gal-3d-scanning.webp", category: "lab",
      caption: "3D scanning a printed part for in-process quality monitoring" },
    { image: "assets/images/gal-bioprinter-lab.webp", category: "lab",
      caption: "Fabricating composite bone scaffolds on a BIO X 3D bioprinter" },
    { image: "assets/images/gal-machine-fault-simulator.webp", category: "lab",
      caption: "Machine Fault Simulator instrumented for multi-channel condition monitoring" },
    { image: "assets/images/res-waam-cell.webp", category: "lab",
      caption: "Robotic WAAM cell repairing a notched steel fatigue specimen" },
    { image: "assets/images/gal-waam-repaired.webp", category: "lab",
      caption: "Notched CS1018 specimens after robotic WAAM repair" },
    { image: "assets/images/res-3d-laser-scan.webp", category: "lab",
      caption: "3D laser scanning of notched specimens before repair" },
    { image: "assets/images/gal-xct-lab.webp", category: "lab",
      caption: "X-ray computed tomography for non-destructive analysis of printed parts" },

    // ---- Field & industry visits ----
    { image: "assets/images/gal-industry-visit-rollforming.webp", category: "field",
      caption: "Industry visit: discussing a metal roll-forming production line" },
    { image: "assets/images/gal-site-visit-lafourche.webp", category: "field",
      caption: "Site visit with collaborators at a Lafourche Parish water district treatment plant" },

    // ---- Outreach & service ----
    { image: "assets/images/gal-lsu-student-engagement.webp", category: "outreach",
      caption: "Meeting students at an LSU College of Engineering event" },
    { image: "assets/images/gal-poster-judging.webp", category: "outreach",
      caption: "Judging student research posters" },
    { image: "assets/images/gal-science-fair-judging.webp", category: "outreach",
      caption: "Judging a student science fair project" },
    { image: "assets/images/gal-outreach-group.webp", category: "outreach",
      caption: "STEM outreach with high-school students" },

    // ---- Lab life ----
    { image: "assets/images/gal-team-graduate-students.webp", category: "life",
      caption: "Dr. Bappy with ASTRA Lab graduate students" },
    { image: "assets/images/gal-students-atrium.webp", category: "life",
      caption: "Dr. Bappy with LSU engineering students" },
    { image: "assets/images/gal-lab-dinner.webp", category: "life",
      caption: "ASTRA Lab dinner" }
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
