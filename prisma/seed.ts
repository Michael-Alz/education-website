import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.article.deleteMany();
  await prisma.course.deleteMany();

  // Seed with initial articles
  const articles = [
    {
      title: 'Getting Into STEM: A Practical Guide for High School Students',
      subtitle: 'Strategies, resources, and mindsets to start strong',
      publishedAt: new Date('2024-07-14T00:00:00.000Z'),
      imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop',
      excerpt: 'Explore actionable steps to build your STEM foundation—from choosing courses to joining competitions.',
      body: `<p>Launching a STEM journey can feel overwhelming. In this article, we break down a step-by-step plan: course selection, clubs and competitions, and building a project portfolio.</p>
            <p>Focus on fundamentals, practice consistently, and seek feedback. Over time, you will compound your skills.</p>`,
    },
    {
      title: 'SAT Strategy: How to Use Practice Tests Effectively',
      publishedAt: new Date('2024-06-30T00:00:00.000Z'),
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
      excerpt: 'Turn practice into progress with deliberate review cycles and timing drills.',
      body: `<p>Practice tests are most valuable when paired with structured review. Track mistakes by category, re-test your weak areas, and iterate weekly.</p>`,
    },
    {
      title: 'Writing College Essays That Stand Out',
      subtitle: 'Personal stories, not clichés',
      publishedAt: new Date('2024-05-22T00:00:00.000Z'),
      excerpt: 'Admissions officers value authenticity. Here is a framework to find and shape your narrative.',
      body: `<p>Your story matters. Start by listing defining experiences, extract themes, and draft multiple angles before choosing.</p>`,
    },
    {
      title: 'Math Habits That Compound Over Time',
      publishedAt: new Date('2024-04-10T00:00:00.000Z'),
      imageUrl: 'https://images.unsplash.com/photo-1520975682031-a98b5f7c7b3b?q=80&w=1200&auto=format&fit=crop',
      excerpt: 'Daily problem-solving, spaced repetition, and reflective error logs build durable mastery.',
      body: `<p>Mastery is built on habits. Keep a simple log of mistakes and revisit them weekly to prevent repeat errors.</p>`,
    },
    {
      title: 'Build a Study System You Can Stick To',
      publishedAt: new Date('2024-03-15T00:00:00.000Z'),
      excerpt: 'A lightweight system beats a perfect one you never use.',
      body: `<p>Design for consistency: fixed time blocks, minimal friction, and weekly reflection.</p>`,
    },
  ];

  for (const article of articles) {
    await prisma.article.create({ data: article });
  }

  // Seed courses (match src/data/courses.ts)
  const courses = [
    {
      id: 'ap-physics-1',
      title: 'AP Physics 1 Tutoring',
      description:
        'Algebra-based mechanics and fluids with strong focus on problem-solving and AP-style practice. Build confidence and accuracy through step-by-step explanations and real-world applications.',
      detailedDescription: `AP Physics 1 is an algebra-based course that covers the fundamentals of classical mechanics and fluids mechanics. Our tutoring program focuses on building a solid understanding of core concepts, strengthening problem-solving skills, and preparing students for both classroom tests and the AP exam.\n\nKey Contents of AP Physics 1 Tutoring\n• Kinematics – Motion graphs, displacement, velocity, acceleration.\n• Dynamics – Newton’s laws, forces, friction, and free-body diagrams.\n• Energy – Work, energy, power, and conservation of energy.\n• Momentum – Impulse, momentum conservation, and collisions.\n• Circular Motion and Gravitation – Centripetal force, orbital motion.\n• Rotational Motion – Torque, rotational kinematics, angular momentum.\n• Oscillations – Simple harmonic motion, pendulums, and springs.\n• Fluids – Density, pressure, buoyancy, fluid dynamics, Bernoulli’s equation.\n• Experimental Design and Data Analysis – Lab-based skills, graphing, and error analysis.`,
      imageUrl: 'https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?auto=format&fit=crop&w=1200&q=80',
      duration: 'Ongoing',
      level: 'High School',
      features: ['AP Prep', 'Mechanics', 'Fluids', 'Problem Solving'],
      color: '#f57c00',
    },
    {
      id: 'ap-physics-2',
      title: 'AP Physics 2 Tutoring',
      description:
        'Algebra-based thermodynamics, electricity, magnetism, waves, optics, and modern physics. Clear explanations and targeted AP-style practice build deep understanding and confidence.',
      detailedDescription: `AP Physics 2 explores advanced topics such as thermodynamics, electricity, magnetism, mechanical waves, optics, and modern physics. Our tutoring focuses on breaking down these challenging concepts, developing strong analytical and problem-solving skills, and preparing students for both classwork and the AP exam.\n\nKey Contents of AP Physics 2 Tutoring\n• Thermodynamics – Temperature, heat, laws of thermodynamics, PV diagrams.\n• Electric Force and Fields – Coulomb’s law, electric fields, and potential.\n• Electric Circuits – Capacitors, resistors, RC circuits, energy in circuits.\n• Magnetism and Electromagnetic Induction – Magnetic fields, forces, Faraday’s law, Lenz’s law.\n• Geometric and Physical Optics – Reflection, refraction, lenses, mirrors, and wave optics.\n• Waves and Sound – Wave properties, superposition, and resonance.\n• Modern Physics – Quantum, atomic, and nuclear physics concepts.\n• Data Analysis and Lab Skills – Experimental design, error analysis, and graphing.\n\n“Master advanced physics concepts and excel in AP Physics 2 with expert, personalized tutoring.”`,
      imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
      duration: 'Ongoing',
      level: 'High School',
      features: ['AP Prep', 'Circuits', 'Optics', 'Modern Physics'],
      color: '#0288d1',
    },
    {
      id: 'ap-physics-c',
      title: 'AP Physics C: Mechanics & E&M',
      description:
        'Calculus-based mechanics and E&M for strong math students. Master calculus applications in physics with rigorous problem-solving and targeted AP exam preparation.',
      detailedDescription: `AP Physics C is a calculus-based course divided into Mechanics and Electricity & Magnetism, designed for students with strong math backgrounds seeking in-depth understanding of physics concepts. Our tutoring focuses on mastering calculus applications in physics, solving complex problems, and preparing for the AP exam with targeted practice and clear explanations.\n\nMechanics:\n• Kinematics in one and two dimensions\n• Newton’s laws and applications\n• Work, energy, and power\n• Systems of particles and linear momentum\n• Circular motion and rotation\n• Oscillations and gravitation\n\nElectricity & Magnetism:\n• Electrostatics and electric fields\n• Conductors, capacitors, and dielectrics\n• Electric circuits and Kirchhoff’s laws\n• Magnetic fields and forces\n• Electromagnetic induction\n• Maxwell’s equations (conceptual overview)`,
      imageUrl: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
      duration: 'Ongoing',
      level: 'High School (Calculus-based)',
      features: ['Mechanics', 'E&M', 'Calculus', 'AP Exam Prep'],
      color: '#7b1fa2',
    },
    {
      id: 'ap-precalculus',
      title: 'AP Pre-Calculus Tutoring',
      description:
        'Foundations in algebra, trigonometry, and functions to prepare students for calculus. Personalized lessons build fluency and confidence.',
      detailedDescription: `AP Pre-Calculus builds a strong foundation in algebra, trigonometry, and functions to prepare students for calculus. Our tutoring focuses on deepening understanding of key concepts, enhancing problem-solving skills, and developing readiness for advanced math courses.\n\nKey Contents\n• Functions and Graphs – Polynomial, rational, exponential, and logarithmic functions.\n• Trigonometry – Unit circle, identities, equations, and applications.\n• Complex Numbers – Operations, polar form, and De Moivre’s theorem.\n• Vectors and Parametric Equations – Vector operations, parametric curves.\n• Sequences and Series – Arithmetic and geometric progressions.\n• Conic Sections – Parabolas, ellipses, hyperbolas.\n• Limits and Introduction to Calculus – Understanding limits and continuity basics.`,
      imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
      duration: 'Ongoing',
      level: 'High School',
      features: ['Functions', 'Trigonometry', 'Sequences', 'Vectors'],
      color: '#388e3c',
    },
    {
      id: 'ap-calculus',
      title: 'AP Calculus AB/BC Tutoring',
      description:
        'Differential and integral calculus for AB; BC extends to series and parametrics. Strong emphasis on conceptual understanding and AP-style problem solving.',
      detailedDescription: `AP Calculus AB and BC cover differential and integral calculus, with BC extending into more advanced topics like sequences and series. Our tutoring builds strong conceptual understanding and problem-solving skills.\n\nKey Contents\nCalculus AB:\n• Limits and continuity\n• Derivatives and applications\n• Integrals and the Fundamental Theorem of Calculus\n• Differential equations and modeling\n• Applications of integrals (area, volume)\n\nCalculus BC (includes AB topics plus):\n• Parametric, polar, and vector functions\n• Advanced integration techniques (integration by parts, partial fractions)\n• Sequences and series, including convergence tests\n• Taylor and Maclaurin series\n• More complex differential equations`,
      imageUrl: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?auto=format&fit=crop&w=1200&q=80',
      duration: 'Ongoing',
      level: 'High School',
      features: ['Derivatives', 'Integrals', 'Series', 'AP Practice'],
      color: '#1976d2',
    },
    {
      id: 'ap-statistics',
      title: 'AP Statistics Tutoring',
      description:
        'Data analysis, probability, and inference with real-world applications. Build statistical reasoning and master AP exam techniques.',
      detailedDescription: `AP Statistics introduces students to data analysis, probability, and inferential statistics. Our tutoring clarifies key concepts and prepares students for the AP exam.\n\nKey Contents\n• Exploring Data – Describing distributions, measures of center and spread, and data displays.\n• Sampling and Experimentation – Designing studies, sampling methods, and experimental design.\n• Probability – Basic probability rules, conditional probability, and random variables.\n• Distributions – Binomial and normal distributions, Central Limit Theorem.\n• Statistical Inference – Confidence intervals, hypothesis testing, significance tests, and p-values.\n• Regression and Correlation – Least-squares regression, correlation coefficients, and interpreting models.`,
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      duration: 'Ongoing',
      level: 'High School',
      features: ['Probability', 'Inference', 'Regression', 'AP Prep'],
      color: '#9c27b0',
    },
    {
      id: 'ap-chemistry',
      title: 'AP Chemistry Tutoring',
      description:
        'Foundational chemical principles, problem-solving, and lab skills geared to AP exam success. Clear explanations and targeted practice.',
      detailedDescription: `AP Chemistry covers fundamental chemical principles including atomic structure, reactions, and thermodynamics. Our tutoring deepens conceptual understanding and prepares students for the AP exam.\n\nKey Contents\n• Atomic Structure and Periodicity – Electron configuration, periodic trends.\n• Chemical Bonding – Ionic, covalent, metallic bonds, and molecular geometry.\n• Stoichiometry – Mole concept, balancing equations, limiting reactants.\n• Thermochemistry – Energy changes, enthalpy, Hess’s law.\n• Kinetics – Reaction rates, rate laws, factors affecting rates.\n• Chemical Equilibrium – Le Chatelier’s principle, equilibrium constants.\n• Acids and Bases – pH, strength, titrations, buffers.\n• Electrochemistry – Redox reactions, galvanic cells.\n• Laboratory Skills – Experimental design, data analysis, and safety.`,
      imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
      duration: 'Ongoing',
      level: 'High School',
      features: ['Stoichiometry', 'Equilibrium', 'Kinetics', 'Lab Skills'],
      color: '#d32f2f',
    },
    {
      id: 'alevel-physics',
      title: 'A-level Physics Tutoring',
      description:
        'Comprehensive mechanics, electricity, waves, and modern physics with strong problem-solving and practical skills for A-level exams.',
      detailedDescription: `A-level Physics covers a broad range of fundamental and advanced topics in mechanics, electricity, waves, and modern physics. Our tutoring deepens conceptual understanding and prepares students for exams and practical assessments.\n\nKey Contents\n• Mechanics – Motion, forces, energy, momentum, and circular motion.\n• Materials – Properties of materials, stress, strain, and Young’s modulus.\n• Waves – Wave properties, sound, light, and superposition.\n• Electricity – Current, potential difference, resistance, circuits, and electromagnetism.\n• Atomic and Nuclear Physics – Atomic models, radioactivity, nuclear reactions.\n• Thermal Physics – Temperature, heat transfer, and kinetic theory.\n• Fields and Forces – Gravitational, electric, and magnetic fields.\n• Oscillations and SHM – Pendulums, springs, and resonance.\n• Modern Physics – Quantum phenomena, photoelectric effect, and nuclear physics.\n• Practical Skills – Experimental design, data analysis, and error evaluation.`,
      imageUrl: 'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=1200&q=80',
      duration: 'Ongoing',
      level: 'A-level',
      features: ['Mechanics', 'Electricity', 'Waves', 'Modern Physics'],
      color: '#455a64',
    },
    {
      id: 'alevel-math',
      title: 'A-level Mathematics Tutoring',
      description:
        'Pure math, mechanics, and statistics with rigorous problem-solving for A-level exam success.',
      detailedDescription: `A-level Mathematics covers pure math, mechanics, and statistics. Our tutoring builds deep understanding and strong problem-solving skills for exam performance.\n\nKey Contents\n• Pure Mathematics – Algebra, functions, sequences and series, trigonometry, calculus, coordinate geometry.\n• Mechanics – Kinematics, forces, Newton’s laws, moments, vectors.\n• Statistics – Probability, distributions (binomial, normal), hypothesis testing, data interpretation.\n• Mathematical Reasoning – Proof, logic, and strategies.\n• Applied Mathematics – Real-world applications integrating pure math with mechanics and statistics.`,
      imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
      duration: 'Ongoing',
      level: 'A-level',
      features: ['Pure', 'Mechanics', 'Statistics', 'Exam Prep'],
      color: '#2e7d32',
    },
    {
      id: 'alevel-chemistry',
      title: 'A-level Chemistry Tutoring',
      description:
        'Atomic theory to organic chemistry with labs and data analysis. Clear explanations and exam-focused practice.',
      detailedDescription: `A-level Chemistry explores structure, properties, and reactions of matter with practical applications. Our tutoring emphasizes understanding, problem-solving, and lab technique.\n\nKey Contents\n• Atomic Structure and the Periodic Table – Electron configuration, periodic trends.\n• Bonding and Structure – Ionic, covalent, metallic, and molecular geometry.\n• Stoichiometry – Moles, molar calculations, empirical formulas.\n• Energetics – Enthalpy changes, Hess’s law, calorimetry.\n• Kinetics – Reaction rates and rate equations.\n• Equilibrium – Dynamic equilibrium and Le Chatelier’s principle.\n• Acids and Bases – pH, strengths, titration curves.\n• Redox & Electrochemistry – Oxidation states, redox equations, cells.\n• Organic Chemistry – Hydrocarbons, functional groups, mechanisms, spectroscopy.\n• Transition Metals & Inorganic – Properties and reactions of transition elements.\n• Practical Skills – Techniques, data analysis, error evaluation.`,
      imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
      duration: 'Ongoing',
      level: 'A-level',
      features: ['Stoichiometry', 'Organic', 'Electrochemistry', 'Lab Skills'],
      color: '#c62828',
    },
    {
      id: 'ib-math',
      title: 'IB Math HL/SL Tutoring',
      description:
        'Pure and applied topics with strong emphasis on reasoning, calculus, and statistics for IB HL/SL.',
      detailedDescription: `IB Math HL and SL develop mathematical understanding through pure and applied topics, fostering analytical and problem-solving skills.\n\nKey Contents\n• Algebra and Functions – Equations, inequalities, sequences, transformations.\n• Calculus – Differentiation, integration, and applications.\n• Trigonometry – Functions, identities, equations.\n• Vectors – Operations, geometry, applications.\n• Statistics and Probability – Data analysis, distributions, inference.\n• Discrete Math (HL) – Graph theory, combinatorics, recursion.\n• Complex Numbers (HL) – Arithmetic, polar form, De Moivre’s theorem.\n• Mathematical Exploration (IA) – Investigative projects in real contexts.`,
      imageUrl: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?auto=format&fit=crop&w=1200&q=80',
      duration: 'Ongoing',
      level: 'IB HL/SL',
      features: ['Calculus', 'Statistics', 'Vectors', 'IA Support'],
      color: '#1565c0',
    },
    {
      id: 'ib-physics',
      title: 'IB Physics HL/SL Tutoring',
      description:
        'Mechanics, waves, electricity, and modern physics with experimental skills for IB HL/SL success.',
      detailedDescription: `IB Physics HL and SL cover mechanics, waves, electricity, and modern physics, building critical thinking and experimental skills.\n\nKey Contents\n• Measurements and Uncertainties – Data analysis and error.\n• Mechanics – Kinematics, dynamics, circular motion, work-energy.\n• Thermal Physics – Temperature, heat, gas laws.\n• Waves – Wave properties, sound, Doppler effect.\n• Electricity and Magnetism – Fields, circuits, magnetic forces.\n• Circular Motion and Gravitation – Fields and orbits.\n• Atomic, Nuclear, Particle – Models, radioactivity, particles.\n• Energy Production – Sources and efficiency.\n• HL Topics – Wave phenomena, advanced fields, quantum and nuclear physics.\n• Practical Skills – Experimental design and analysis.`,
      imageUrl: 'https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?auto=format&fit=crop&w=1200&q=80',
      duration: 'Ongoing',
      level: 'IB HL/SL',
      features: ['Mechanics', 'Electricity', 'Waves', 'IA/IA Labs'],
      color: '#00838f',
    },
    {
      id: 'ib-chemistry',
      title: 'IB Chemistry HL/SL Tutoring',
      description:
        'Atomic theory to organic chemistry with lab technique and IA support for IB HL/SL.',
      detailedDescription: `IB Chemistry HL and SL cover essential chemical principles from atomic theory to organic chemistry, with HL including advanced topics.\n\nKey Contents\n• Stoichiometric Relationships – Formulas, equations, mole concept.\n• Atomic Structure – Electron configurations and isotopes.\n• Periodicity – Trends and properties.\n• Bonding and Structure – Ionic, covalent, metallic, IMF.\n• Energetics/Thermochemistry – Enthalpy changes and calculations.\n• Kinetics – Rates and factors.\n• Equilibrium – Dynamic equilibrium, Le Chatelier.\n• Acids and Bases – pH, strength, titrations.\n• Redox Processes – Oxidation-reduction and electrochemistry.\n• Organic Chemistry – Functional groups, mechanisms (HL).\n• Measurement and Data – Experimental techniques and analysis.`,
      imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
      duration: 'Ongoing',
      level: 'IB HL/SL',
      features: ['Stoichiometry', 'Organic', 'Equilibrium', 'IA Support'],
      color: '#6a1b9a',
    },
    {
      id: 'physics-bowl',
      title: 'Physics Bowl Contest Tutoring',
      description:
        'Fast-paced multiple-choice contest prep focusing on speed, conceptual mastery, and strategy across core physics topics.',
      detailedDescription: `Physics Bowl is a competitive exam testing students’ understanding of physics concepts across various topics. Our tutoring strengthens speed, clarity, and strategy.\n\nKey Contents\n• Mechanics – Kinematics, forces, energy, momentum, rotation.\n• Electricity & Magnetism – Circuits, fields, forces, induction.\n• Waves & Optics – Properties, sound, light, reflection/refraction.\n• Thermodynamics – Heat, temperature, laws.\n• Modern Physics – Quantum, atomic, nuclear.\n• Problem-Solving Strategies – Time management and common pitfalls.`,
      imageUrl: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
      duration: 'Ongoing',
      level: 'High School',
      features: ['Contest Prep', 'Speed', 'Strategy', 'Concept Review'],
      color: '#ff8f00',
    },
    {
      id: 'amc-competitions',
      title: 'AMC 8/10/12 Tutoring',
      description:
        'Problem-solving strategies and practice for AMC contests across number theory, algebra, geometry, and counting.',
      detailedDescription: `The AMC 8/10/12 challenge students’ reasoning and problem-solving. Our tutoring builds strategy and mastery of contest-style problems.\n\nKey Contents\n• Number Theory and Arithmetic – Divisibility, primes, modular arithmetic.\n• Algebra – Expressions, equations, inequalities, functions.\n• Geometry – Angles, triangles, circles, coordinate geometry, volume.\n• Counting and Probability – Combinatorics, permutations, combinations, probability.\n• Strategies – Logical reasoning, pattern recognition, time management.\n• Advanced (AMC 10/12) – Polynomials, sequences/series, advanced geometry, inequalities.`,
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      duration: 'Ongoing',
      level: 'Middle/High School',
      features: ['Number Theory', 'Geometry', 'Combinatorics', 'Strategy'],
      color: '#303f9f',
    },
  ];

  for (const course of courses) {
    await prisma.course.create({ data: course });
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
