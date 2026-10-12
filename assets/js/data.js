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
   ============================================================================ */

window.LAB_DATA = {

  /* ---------------------------------------------------------------------- */
  /*  SITE / LAB IDENTITY  (shown in the sidebar on every page)             */
  /* ---------------------------------------------------------------------- */
  site: {
    labShort: "ASTRA Lab",
    labName: "ASTRA Lab",
    tagline: "AI and Digital Twin For Advanced Manufacturing and Smart Systems",
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
      "Advanced sensing, analytics, and embodied intelligence for resilient cyber-physical systems.",
    image: "assets/images/bappy.webp", // Dr. Bappy — swap for a lab group photo later if desired
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
    { date: "Aug 2024", text: "Dr. Mahathir Mohammad Bappy joined Louisiana State University as an Assistant Professor and founded ASTRA Lab." },
    { date: "2024", text: "ASTRA Lab is recruiting fully-funded Ph.D. students interested in Machine Learning, Advanced Manufacturing, Privacy-Preserving ML, and Computer Vision. See the Join page." }
    // Add newer items ABOVE this line, following the same pattern.
  ],

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
      interests: "Systems Informatics, AI/ML, Smart Manufacturing, Digital Twins, Privacy-Preserving AI, Embodied Intelligence",
      bio:
        "Dr. Bappy is an Assistant Professor of Industrial Engineering in the Department of " +
        "Mechanical and Industrial Engineering at Louisiana State University. He earned his Ph.D. " +
        "in Industrial and Systems Engineering from Mississippi State University, his M.S. from " +
        "Bangladesh University of Engineering and Technology, and his B.S. from Shahjalal University " +
        "of Science and Technology, with about five years of industry experience. His research " +
        "advances the understanding of complex engineered systems through advanced sensing, data " +
        "analytics, and intelligent monitoring frameworks.",
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
  /*  RESEARCH AREAS / PROJECTS                                             */
  /* ---------------------------------------------------------------------- */
  research: [
    {
      title: "Cyber-Physical Intelligence for Additive Manufacturing",
      image: "assets/images/placeholder.svg",
      description:
        "In-situ, layer-wise process monitoring and certification for metal additive manufacturing " +
        "using thermal imaging, physics-informed models, and uncertainty-aware machine learning.",
      links: [] // e.g. [{ label: "Paper", url: "https://..." }]
    },
    {
      title: "Privacy-Preserving Modeling for Smart Manufacturing",
      image: "assets/images/placeholder.svg",
      description:
        "Methods such as federated learning and thermal-history de-identification that enable " +
        "collaboration and data sharing across manufacturing systems without exposing sensitive design information.",
      links: []
    },
    {
      title: "Real-Time Fault Diagnosis for Rotary Machinery",
      image: "assets/images/placeholder.svg",
      description:
        "Multi-channel sensor fusion and interpretable deep learning for real-time bearing and " +
        "machinery fault diagnosis and predictive maintenance.",
      links: []
    },
    {
      title: "AI for Water & Energy Systems Resilience",
      image: "assets/images/placeholder.svg",
      description:
        "Foundation-model-based forecasting and data-driven modeling for proactive control of rural " +
        "wastewater treatment and sustainable energy systems.",
      links: []
    }
    // Add more projects by copying a block above.
  ],

  /* ---------------------------------------------------------------------- */
  /*  PUBLICATIONS                                                          */
  /*  category: "journal" | "conference" | "preprint"                       */
  /*  (A representative selection — add/update from Google Scholar.)        */
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
    { category: "journal", year: 2023, authors: "Al Mamun, A., Bappy, M. M., Mudiyanselage, A. S., Li, J., Jiang, Z., Tian, Z., Fuller, S., Falls, T. C., Bian, L., & Tian, W.", title: "Multi-channel sensor fusion for real-time bearing fault diagnosis by frequency-domain multilinear principal component analysis", venue: "The International Journal of Advanced Manufacturing Technology, 124(3), 1321–1334", link: "" },
    { category: "journal", year: 2023, authors: "Bappy, M. M., Fullington, D., Bian, L., & Tian, W.", title: "Evaluation of design information disclosure through thermal feature extraction in metal-based additive manufacturing", venue: "Manufacturing Letters, 36, 86–90", link: "https://doi.org/10.1016/j.mfglet.2023.03.004" },
    { category: "journal", year: 2022, authors: "Bappy, M. M., Liu, C., Bian, L., & Tian, W.", title: "Morphological dynamics-based anomaly detection towards in-situ layer-wise certification for directed energy deposition processes", venue: "Journal of Manufacturing Science and Engineering, 144(11), 111007", link: "https://doi.org/10.1115/1.4054805" },
    { category: "journal", year: 2022, authors: "Esfahani, M. N., Bappy, M. M., Bian, L., & Tian, W.", title: "In-situ layer-wise certification for direct laser deposition processes based on thermal image series analysis", venue: "Journal of Manufacturing Processes, 75, 895–902", link: "https://doi.org/10.1016/j.jmapro.2021.12.041" },
    { category: "journal", year: 2021, authors: "Rahman, S., Hossain, N. U. I., Govindan, K., Nur, F., & Bappy, M.", title: "Assessing cyber resilience of additive manufacturing supply chain leveraging data fusion technique: A model to generate cyber resilience index of a supply chain", venue: "CIRP Journal of Manufacturing Science and Technology, 35, 911–928", link: "" },
    { category: "journal", year: 2019, authors: "Bappy, M. M., Ali, S. M., Kabir, G., & Paul, S. K.", title: "Supply chain sustainability assessment with Dempster-Shafer evidence theory: Implications in cleaner production", venue: "Journal of Cleaner Production, 237, 117771", link: "" },

    // ---- Preprints ----
    { category: "preprint", year: 2024, authors: "Wasi, A. T., Islam, M. D. S., Akib, A. R., & Bappy, M. M.", title: "Graph neural networks in supply chain analytics and optimization: Concepts, perspectives, dataset and benchmarks", venue: "arXiv preprint arXiv:2411.08550", link: "https://arxiv.org/abs/2411.08550" },

    // ---- Conference Proceedings ----
    { category: "conference", year: 2024, authors: "Nguimfack, R. T., Bappy, M. M., Al Mamun, A., & Tian, W.", title: "Domain adaptation between heterogeneous time series data: A case study on real-time rotary machinery fault diagnosis", venue: "52nd SME North American Manufacturing Research Conference (NAMRC 52), Knoxville, TN", link: "" }
    // Add more publications by copying a block above. Keep newest first within each category.
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
  /* ---------------------------------------------------------------------- */
  awards: [
    { year: "2023–2024", title: "ISE “Outstanding Graduate Student Researcher” Award", org: "Mississippi State University", person: "Mahathir Mohammad Bappy" },
    { year: "2023", title: "Best Poster Award, Research Week Poster Competition", org: "Mississippi State University", person: "Mahathir Mohammad Bappy" },
    { year: "2022", title: "INFORMS Student Chapter Magna Cum Laude Award", org: "INFORMS Annual Meeting, Indianapolis", person: "Mahathir Mohammad Bappy" },
    { year: "2023", title: "Selected for the Doctoral Student Colloquium", org: "IISE, USA", person: "Mahathir Mohammad Bappy" }
    // Add more awards by copying a block above.
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
