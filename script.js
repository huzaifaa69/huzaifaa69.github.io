/**
 * ============================================================================
 * HUZAIFAA SHAIK — ENGINEERING PORTFOLIO INTERACTION & DOSSIER ENGINE
 * Static Vanilla JS · Zero Dependencies · Progressive Enhancement & A11y
 * ============================================================================
 */

(function () {
  'use strict';

  /**
   * Complete 14-point Engineering Dossiers for all 20 verified projects.
   * Audited against primary GitHub repositories (huzaifaa69), Hugging Face Spaces
   * (huzaifaa1), live deployments, and official TCS / OpenEnv certificates.
   */
  const PROJECTS_DATA = {
    'hr-knowledge-platform': {
      code: 'SYS-01 // TCS INTERNSHIP DELIVERABLE',
      title: 'HR Knowledge Intelligence Platform',
      subtitle: 'Offline-first enterprise HR policy assistant combining Vector RAG, Neo4j Knowledge Graph retrieval, local Llama 3 inference, JWT/RBAC security, and prompt-injection safeguards.',
      statuses: [
        { label: 'Implemented', type: 'implemented' },
        { label: 'Tested (14 Cases)', type: 'tested' },
        { label: 'Evaluated (RAGAS)', type: 'evaluated' }
      ],
      whatItIs: 'An internal, fully offline HR knowledge assistant built as my primary engineering deliverable during my 4-month Generative AI Developer Internship at Tata Consultancy Services (TCS, June–October 2026). It combines dense vector search with a Neo4j knowledge graph and local Llama 3 inference to answer employee policy questions with role-based access enforcement.',
      whyBuilt: 'Built during my TCS internship under the mentorship of Rekha Ram Burra to demonstrate how enterprise HR documentation can be queried safely on local infrastructure without exposing internal documents to external cloud LLM providers.',
      problem: 'Organizational HR policies, leave rules, benefits, and compliance guidelines are distributed across lengthy PDF manuals. Employees struggle to locate exact clauses manually, while standard cloud chatbots risk leaking internal policy data or hallucinating non-existent employee entitlements.',
      objective: 'Build a self-contained, local RAG + Knowledge Graph platform that answers HR queries strictly from authorized documents, enforces Employee vs. Admin access boundaries, logs audit trails, and refuses unsupported or adversarial queries.',
      targetUsers: 'Enterprise employees seeking policy clarification and HR administrators managing policy document lifecycles, role permissions, and audit logs.',
      technologies: ['Python', 'FastAPI', 'Streamlit', 'LangChain', 'ChromaDB / FAISS', 'Neo4j', 'Ollama (Llama 3)', 'PostgreSQL', 'JWT', 'bcrypt', 'RAGAS'],
      architecture: 'Dual-index local retrieval architecture: PDF documents uploaded by admins are parsed, chunked, and indexed into both a local vector store (ChromaDB/FAISS) and a Neo4j property graph. Incoming queries pass through JWT authentication, role-based document filtering, and prompt-injection checks before retrieving hybrid context and generating grounded answers via local Ollama (Llama 3).',
      workflowSteps: [
        'Admin PDF Upload & Role Tagging',
        'Chunking + Local Vector & Neo4j Graph Indexing',
        'JWT Auth + RBAC Role Check (Employee/Admin)',
        'Prompt-Injection Guardrail & Hybrid Retrieval',
        'Grounded Ollama Llama 3 Generation + Audit Log'
      ],
      implemented: [
        'End-to-end PDF ingestion, text chunking, vector embedding generation, and ChromaDB/FAISS persistence.',
        'Neo4j knowledge-graph integration for capturing structured policy relationships alongside semantic chunks.',
        'FastAPI backend with PostgreSQL storage, bcrypt password hashing, stateless JWT authentication, and Employee/Admin RBAC.',
        'Prompt-injection filtering, strict context-boundary system prompts to reduce unsupported claims, and query audit logging.',
        'Streamlit web interface for employee Q&A and administrator document management, plus RAGAS evaluation and a 14-case manual testing suite.'
      ],
      challenges: 'Balancing retrieval recall with local LLM faithfulness: while dense retrieval achieved 1.000 context recall, local 8B-parameter models occasionally paraphrased policy nuances. I tightened system-prompt grounding instructions and identified relationship-extraction bottlenecks in single-pass graph construction, which directly informed my two-pass graph builder in the follow-on Lenovo extension.',
      skills: ['Hybrid Graph RAG Architecture', 'Local LLM Deployment (Ollama)', 'FastAPI & PostgreSQL Security', 'JWT & RBAC Authorization', 'Quantitative RAG Evaluation (RAGAS)', 'Software Testing (Unit, Integration, Security, Performance)'],
      results: 'Evaluated with RAGAS: Answer Relevancy 0.939, Context Recall 1.000, Context Precision 0.750, and Faithfulness 0.688. Validated across 14 structured manual test cases covering unit, integration, security (role bypass & prompt-injection resistance), and local latency performance.',
      relevance: 'Demonstrates how privacy-sensitive enterprise departments (HR, Legal, Internal IT) can adopt Generative AI entirely on-premise with auditable access controls and quantitative retrieval benchmarks.',
      limitations: 'Developed and validated as an offline internship deliverable prototype rather than a multi-node production cluster. Local inference throughput depends on host GPU/CPU memory, and faithfulness (0.688) showed room for multi-hop graph relationship refinement.',
      evidence: [
        { label: 'TCS Internship Section & Certificate Evidence', url: '#internship', type: 'internal' },
        { label: 'GitHub Repository: Private / TCS Internship Deliverable', url: null },
        { label: 'Software Testing Report & RAGAS Summary: Verified in Internship Records (Public Summary To Be Added)', url: null },
        { label: 'Screenshot Placeholder: HR Portal & Admin Audit UI To Be Added', url: null }
      ]
    },

    'lenovo-troubleshooting-agent': {
      code: 'SYS-02 // HYBRID GRAPH RAG & STATEFUL AGENT EXTENSION',
      title: 'Lenovo Intelligent Customer Troubleshooting Agent',
      subtitle: 'First-level hardware support agent extending the HR Knowledge Platform with two-pass Neo4j diagnostic graph traversal, Lenovo document metadata, and stateful troubleshooting flows.',
      statuses: [
        { label: 'In Progress (Local Dev)', type: 'progress' },
        { label: 'Evaluated (RAGAS 8-Query)', type: 'evaluated' },
        { label: 'Planned (MCP & Ticketing)', type: 'planned' }
      ],
      whatItIs: 'An active local engineering extension of my TCS Hybrid Graph RAG platform adapted for first-level customer hardware troubleshooting. It combines vector search, domain-specific Lenovo metadata (e.g., LEN-BATTERY-001, LEN-POWER-001), and a six-entity Neo4j diagnostic graph.',
      whyBuilt: 'After evaluating the HR Knowledge Platform, I wanted to test whether Hybrid Graph RAG could solve sequential diagnostic reasoning—where a symptom must traverse ordered troubleshooting steps toward a verified hardware or firmware resolution.',
      problem: 'Standard vector-only RAG struggles with multi-step hardware diagnostics because troubleshooting guides contain procedural dependencies (Symptom → Step 1 → Step 2 → Solution) that get fragmented when split into flat text chunks.',
      objective: 'Design a hybrid retrieval and agentic support system that identifies laptop product/issue categories, traverses explicit Neo4j diagnostic edges (HAS_STEP, LEADS_TO), generates grounded troubleshooting steps, and prepares stateful follow-up and ticket escalation workflows.',
      targetUsers: 'Laptop owners seeking guided self-service diagnostics and first-level technical support administrators managing official troubleshooting knowledge bases.',
      technologies: ['Python', 'FastAPI', 'Streamlit', 'LangChain', 'LangGraph (Stateful Flow - In Progress)', 'ChromaDB', 'Neo4j', 'Ollama (Llama 3)', 'PostgreSQL', 'RAGAS'],
      architecture: 'Re-architected RBAC roles to Customer/Admin and introduced structured Lenovo document metadata (LEN-BATTERY-001, LEN-BATTERY-002, LEN-POWER-001) alongside a 6-entity Neo4j schema (Product, Component, Problem, Symptom, Step, Solution). Uses a two-pass graph builder with split relationship prompts so procedural edges (HAS_STEP, LEADS_TO) are reliably extracted.',
      workflowSteps: [
        'Customer Symptom Input & Category Detection',
        'Hybrid Retrieval: ChromaDB + Metadata + Neo4j Traversal',
        'Two-Pass Graph Lookup (Product → Symptom → Step → Solution)',
        'Grounded Diagnostic Step Generation (Ollama Llama 3)',
        'Planned: LangGraph Multi-Turn Follow-up & Ticket Escalation'
      ],
      implemented: [
        'Transitioned platform RBAC and data schemas from Employee/Admin to Customer/Admin support workflows.',
        'Created structured Lenovo troubleshooting corpus metadata (LEN-BATTERY-001, LEN-BATTERY-002, LEN-POWER-001).',
        'Defined the 6-node Neo4j diagnostic ontology: Product, Component, Problem, Symptom, Step, and Solution.',
        'Diagnosed and fixed a single-pass LLM graph extraction bug by engineering a two-pass graph-building pipeline with split relationship prompts, ensuring HAS_STEP and LEADS_TO edges are created reliably.',
        'Executed a combined 8-question HR + Lenovo RAGAS evaluation benchmark measuring retrieval and faithfulness gains.'
      ],
      challenges: 'In initial graph construction, single-pass prompts extracted entity nodes but frequently dropped sequential edges (HAS_STEP and LEADS_TO). Splitting extraction into a two-pass node-first, edge-second prompt pipeline resolved edge omission and measurably improved RAGAS faithfulness.',
      skills: ['Neo4j Ontology & Cypher Design', 'Two-Pass LLM Information Extraction', 'Hybrid Vector + Graph Retrieval', 'RAGAS Comparative Benchmarking', 'Stateful Agent Architecture Design'],
      results: 'On the combined 8-question HR + Lenovo RAGAS benchmark, achieved Faithfulness 0.715 (up from 0.688 baseline), Answer Relevancy 0.897, Context Precision 0.792 (up from 0.750), and Context Recall 0.958.',
      relevance: 'Shows how combining explicit graph causality (Symptom → Step → Solution) with vector embeddings improves precision and faithfulness in technical customer support.',
      limitations: 'Currently in active local development and not yet pushed to a public GitHub repository. Full LangGraph multi-turn follow-up loops, automated support ticket escalation, and Model Context Protocol (MCP) tool integrations are planned next phases and are not claimed as finished.',
      evidence: [
        { label: 'GitHub Repository: Not Published Yet (Active Local Development)', url: null },
        { label: 'RAGAS 8-Query Benchmark Log: Verified in Local Evaluation Notes (Screenshot To Be Added)', url: null },
        { label: 'Neo4j Graph Schema Visualization: Screenshot To Be Added', url: null }
      ]
    },

    'fhir-patient-insights': {
      code: 'SYS-03 // HEALTHCARE INTEROPERABILITY & SECURITY HUB',
      title: 'FHIR Patient Insights & Healthcare Interoperability Hub',
      subtitle: 'Full-stack clinical interoperability prototype built with Java 21, Spring Boot 3, HAPI FHIR R4, React/TypeScript, and local Ollama AI summarization with anti-IDOR RBAC security.',
      statuses: [
        { label: 'Implemented', type: 'implemented' },
        { label: 'Tested (33 Backend + 6 Frontend)', type: 'tested' }
      ],
      whatItIs: 'A full-stack healthcare interoperability prototype (227 files across backend, frontend, docs, and CI workflows) demonstrating secure FHIR R4 clinical data aggregation, patient-level authorization, and privacy-preserving local AI clinical summarization.',
      whyBuilt: 'Built to explore how modern EHR ecosystems (such as ModMed) can integrate local LLM summarization without leaking Protected Health Information (PHI) to external cloud APIs or exposing cross-patient records via Insecure Direct Object Reference (IDOR) vulnerabilities.',
      problem: 'Clinicians reviewing patient histories must synthesize fragmented encounters, observations, and medications. Connecting cloud LLMs directly to clinical databases creates severe PHI compliance and hallucination risks, while weak API authorization risks cross-patient data exposure.',
      objective: 'Architect a clean Java 21 / Spring Boot 3 backend with a pluggable FHIR R4 provider abstraction (Mock provider + mocked ModMed adapter), strict patient-level JWT/RBAC authorization, deterministic bounded-context local AI summarization via Ollama, and a clinical React/TypeScript UI.',
      targetUsers: 'Healthcare software engineers, EHR integration architects, and clinical providers (Doctor/Nurse/Admin roles) reviewing patient encounter summaries.',
      technologies: ['Java 21', 'Spring Boot 3', 'Gradle Kotlin DSL', 'HAPI FHIR R4', 'PostgreSQL', 'H2', 'Flyway', 'React 18', 'TypeScript', 'Vite', 'Material UI', 'Ollama (Llama 3.1 8B)', 'JWT & RBAC', 'Testcontainers', 'JaCoCo', 'Docker Compose', 'Nginx', 'GitHub Actions CI'],
      architecture: 'Nginx reverse proxy routes traffic to a React 18 / Material UI SPA and a Spring Boot 3 REST API. A FhirProviderClient abstraction switches between a synthetic Mock FHIR Provider and a mocked ModMed FHIR Adapter. An intercepting authorization layer verifies provider-to-patient access before querying PostgreSQL. The Patient AI Service builds a deterministic, bounded text context from authorized FHIR resources and queries a local Ollama (Llama 3.1) instance while excluding raw PHI from system audit logs.',
      workflowSteps: [
        'React SPA + Nginx Reverse Proxy (/api)',
        'JWT Authentication & Anti-IDOR Patient RBAC Gate',
        'FhirProviderClient (Mock FHIR R4 / Mocked ModMed Adapter)',
        'PostgreSQL (Flyway Migrations) + Bounded Context Builder',
        'Local Ollama (Llama 3.1) Grounded Summary + Sanitized Audit Log'
      ],
      implemented: [
        'Domain-structured Spring Boot 3 backend (Java 21, Gradle Kotlin DSL) with HAPI FHIR R4 resource mapping for patients, encounters, observations, appointments, and medications.',
        'FhirProviderClient abstraction supporting a synthetic Mock FHIR provider and a structurally modeled (mocked) ModMed adapter.',
        'Stateless JWT authentication, role-based access control, and bounded patient-level IDOR authorization checks.',
        'Grounded local AI summarization service (OllamaLlmProvider) with prompt-injection boundary fencing, deterministic FHIR resource ID tracking, and PHI-redacted AI audit logging (AiAuditService).',
        'React 18 + TypeScript + Material UI clinical dashboard, multi-stage Docker & Nginx config, and GitHub Actions CI running 33 backend tests (with Testcontainers PostgreSQL 15 & JaCoCo) and 6 frontend component tests.'
      ],
      challenges: 'Preventing LLM hallucination and PHI leakage in clinical summaries: rather than giving the LLM tool/SQL access, I designed a deterministic Patient Context Builder that serializes only pre-authorized FHIR resources and instructs the local Llama 3.1 model to act strictly as a bounded summarizer with source resource attribution.',
      skills: ['Java 21 & Spring Boot 3 Architecture', 'FHIR R4 Interoperability (HAPI FHIR)', 'Anti-IDOR & JWT/RBAC Security', 'Privacy-Preserving Local AI Guardrails', 'Integration Testing with Testcontainers', 'React + TypeScript + Material UI', 'CI/CD & Docker Containerization'],
      results: 'Verified by 33 automated backend tests (using real PostgreSQL 15 via Testcontainers + JaCoCo coverage enforcement) and 6 frontend tests in GitHub Actions CI, accompanied by comprehensive architecture, API, database, AI, and security documentation in docs/.',
      relevance: 'Directly addresses two of the hardest engineering problems in healthcare AI: EHR provider abstraction and zero-cloud-leakage clinical summarization.',
      limitations: 'Prototype system operating entirely on synthetic mock data. The ModMed adapter is MOCKED (no live ModMed production credentials or regulatory HIPAA/HL7 certification). JWTs are stored in localStorage for SPA simplicity (documented for migration to HttpOnly/SameSite cookies), and Docker Compose orchestration was structurally validated while local Docker daemon runtime execution was environment-blocked.',
      evidence: [
        { label: 'GitHub Repository (huzaifaa69/FHIR)', url: 'https://github.com/huzaifaa69/FHIR', type: 'repo' },
        { label: 'Architecture Documentation (docs/ARCHITECTURE.md)', url: 'https://github.com/huzaifaa69/FHIR/blob/main/docs/ARCHITECTURE.md', type: 'doc' },
        { label: 'Security & Anti-IDOR Spec (docs/SECURITY.md)', url: 'https://github.com/huzaifaa69/FHIR/blob/main/docs/SECURITY.md', type: 'doc' },
        { label: 'AI Guardrails Spec (docs/AI.md)', url: 'https://github.com/huzaifaa69/FHIR/blob/main/docs/AI.md', type: 'doc' },
        { label: 'Screenshot Placeholder: Clinical Dashboard UI To Be Added', url: null }
      ]
    },

    'ai-life-manager': {
      code: 'SYS-04 // META × PYTORCH OPENENV HACKATHON (SOLO FINALIST PROJECT)',
      title: 'AI Life Manager — OpenEnv RL & GRPO Task Prioritization Environment',
      subtitle: 'Custom OpenEnv reinforcement learning environment training Qwen2.5-1.5B with 4 decomposed GRPO reward functions to resolve chaotic inbox and calendar conflicts.',
      statuses: [
        { label: 'Implemented', type: 'implemented' },
        { label: 'Evaluated (4-Agent Benchmark)', type: 'evaluated' },
        { label: 'Deployed (Hugging Face Spaces)', type: 'deployed' }
      ],
      whatItIs: 'A custom OpenEnv reinforcement learning environment and 4-agent comparative training suite built solo for the Meta × PyTorch OpenEnv Hackathon × Scaler School of Technology (April 2026), deployed across multiple live Hugging Face Spaces.',
      whyBuilt: 'Built to test how tabular RL and Group Relative Policy Optimization (GRPO) can train small language models (Qwen2.5-1.5B) to make structured, multi-objective executive decisions (triaging urgent emails, matching emotional tone, and resolving calendar overlaps) without reward hacking.',
      problem: 'Personal assistant agents often fail on messy, multi-constraint daily workflows: they reply casually to angry critical emails, waste attention on low-priority newsletters, or ignore overlapping mandatory calendar meetings.',
      objective: 'Create a reproducible episodic RL environment with decomposed, anti-hacking reward functions (R1–R4) and benchmark Random, Tabular Q-Learning, zero-shot LLM inference, and GRPO fine-tuned Qwen2.5-1.5B agents on the exact same reward rubric.',
      targetUsers: 'RL/LLM researchers, OpenEnv hackathon judges, and developers exploring GRPO reward shaping for agentic personal productivity workflows.',
      technologies: ['Python', 'OpenEnv', 'PyTorch', 'Qwen2.5-1.5B-Instruct', 'Qwen2.5-0.5B-Instruct', 'GRPO (Hugging Face TRL)', 'Unsloth', 'LoRA', 'Tabular Q-Learning', 'Gradio', 'Matplotlib', 'Hugging Face Spaces'],
      architecture: 'Episodic environment generator creates randomized morning scenarios with multi-priority emails (critical/high/low, angry/formal/professional/casual tones) and overlapping calendar slots. Agent JSON outputs are graded by 4 independent functions: R1 Priority (±10), R2 Tone Matching (±5), R3 Calendar Conflict Resolution (±5), and R4 Structural/Ordering Validity (±3). Includes a 200-episode Q-learning trainer, HF Inference API runner, and a 150-step Unsloth + TRL GRPO LoRA training pipeline.',
      workflowSteps: [
        'Episode Generator (Emails + Priorities + Calendar Conflicts)',
        'Agent Policy (Random / Q-Table / Qwen2.5-0.5B / GRPO Qwen2.5-1.5B)',
        'Structured JSON Action Plan Output',
        '4 Decomposed Anti-Hacking Graders (R1 + R2 + R3 + R4)',
        'Comparative Reward Telemetry & Learning Curve Plots'
      ],
      implemented: [
        'Designed the OpenEnv episodic generator with difficulty scaling (levels 1–3) across email priority tiers, sender tones, and calendar time-slot overlaps.',
        'Engineered 4 orthogonal reward functions (R1 Priority, R2 Tone, R3 Conflicts, R4 Format) to prevent single-metric reward hacking.',
        'Implemented a 200-episode Tabular Q-Learning baseline with epsilon-greedy decay (0.30 → 0.05) and component-wise reward tracking.',
        'Fine-tuned Qwen2.5-1.5B-Instruct with LoRA for 150 steps using GRPO (Hugging Face TRL + Unsloth on T4 GPU) and built a 7-tab interactive Gradio evaluation dashboard deployed on Hugging Face Spaces.'
      ],
      challenges: 'Preventing reward hacking during GRPO training: a naive scalar reward allowed agents to maximize formatting points while ignoring critical emails. Decomposing the reward into R1–R4 with explicit penalties (-10 for ignoring critical emails, -5 for unresolved conflicts) forced all four sub-rewards to rise together.',
      skills: ['Reinforcement Learning Environment Design (OpenEnv)', 'Multi-Objective Reward Shaping', 'GRPO Fine-Tuning (TRL + Unsloth + LoRA)', 'Tabular Q-Learning', 'Interactive ML Visualization (Gradio)'],
      results: 'On the unified R1–R4 evaluation rubric: Random Agent averaged 5.0 pts; Tabular Q-Learning (200 episodes) reached 18.5 pts (+53% early-to-late improvement); Zero-shot Qwen2.5-0.5B scored 23.0 pts; and GRPO-trained Qwen2.5-1.5B (150 steps) achieved 40.0 pts (+35 pts over random baseline, with normalized GRPO step reward improving from 2.525 to 2.694). Qualified Round 1 (verified certificate) and selected for the Bangalore Grand Finale.',
      relevance: 'Provides a clean, verifiable blueprint for training compact 1.5B-parameter open-weights models to follow multi-constraint business rules via reinforcement learning.',
      limitations: 'The episodic environment uses a curated set of synthetic email and calendar templates rather than live IMAP/Google Calendar OAuth feeds. Expanding template diversity and multi-turn environment feedback are natural next steps.',
      evidence: [
        { label: 'Live HF Space: AI Life Manager OpenEnv (huzaifaa1/ai-life-manager)', url: 'https://huggingface.co/spaces/huzaifaa1/ai-life-manager', type: 'demo' },
        { label: 'Live HF Space: 4-Agent GRPO & Q-Learning Suite (huzaifaa1/lifemanagerlearningRL)', url: 'https://huggingface.co/spaces/huzaifaa1/lifemanagerlearningRL', type: 'demo' },
        { label: 'Companion HF Space: LifeManager-RL', url: 'https://huggingface.co/spaces/huzaifaa1/LifeManager-RL', type: 'demo' },
        { label: 'Hackathon Section & Round 1 Certificate Details', url: '#practical-learning', type: 'internal' }
      ]
    },

    'study-agent': {
      code: 'SYS-05 // DEPLOYED RAG APPLICATION',
      title: 'Study Agent — RAG Lecture Assistant & Exam Generator',
      subtitle: 'Deployed Streamlit RAG application for multi-PDF lecture Q&A with source-chunk attribution, 5-question MCQ generation, structured summaries, and revision flashcards.',
      statuses: [
        { label: 'Implemented', type: 'implemented' },
        { label: 'Deployed (Streamlit Cloud)', type: 'deployed' }
      ],
      whatItIs: 'A free, publicly deployed Retrieval-Augmented Generation (RAG) study assistant that ingests lecture PDFs and provides source-attributed Q&A, exam-style multiple-choice questions (MCQs), structured topic summaries, and revision flashcards.',
      whyBuilt: 'Students preparing for university exams often deal with hundreds of pages of lecture slides and textbooks. I built Study Agent to ground LLM study tools strictly in uploaded course PDFs with visible source previews.',
      problem: 'Generic LLM chat interfaces hallucinate definitions or omit specific formulas taught in a course lecture, and paid PDF-chat wrappers restrict uploads behind subscription paywalls.',
      objective: 'Build a zero-cost, fast RAG pipeline using local CPU embeddings, persistent ChromaDB vector storage, and Groq LPU inference (Llama 3.3 70B) deployed on Streamlit Community Cloud.',
      targetUsers: 'University students and self-learners who want grounded Q&A, practice quizzes, and flashcards generated directly from their own PDF course notes.',
      technologies: ['Python', 'Streamlit', 'LangChain', 'Groq API (llama-3.3-70b-versatile)', 'HuggingFaceEmbeddings (all-MiniLM-L6-v2)', 'ChromaDB', 'PDFPlumber', 'python-dotenv'],
      architecture: 'PDFPlumber extracts page-numbered text from uploaded PDFs. LangChain RecursiveCharacterTextSplitter chunks text into 1000-character segments with 200-character overlap. Local all-MiniLM-L6-v2 (CPU, L2-normalized) encodes chunks into a persistent ChromaDB collection. At query time, top-k=4 chunks and the last 6 chat turns are passed to Groq llama-3.3-70b-versatile (temperature=0.3, max_tokens=1024).',
      workflowSteps: [
        'PDFPlumber Page-Tagged Text Extraction',
        'RecursiveCharacterTextSplitter (1000 chars / 200-char overlap)',
        'Local all-MiniLM-L6-v2 Embeddings → Persistent ChromaDB',
        'Top-k=4 Semantic Retrieval + 6-Turn Chat Window',
        'Groq Llama 3.3 70B → Grounded Answer + Source Previews / MCQs / Flashcards'
      ],
      implemented: [
        'PDF extraction pipeline (extract_text_from_pdf) preserving page boundaries and graceful fallback for non-text PDFs.',
        'Vector indexing engine (build_vectorstore) with 1000-character chunks, 200-character overlap, and normalized local MiniLM embeddings.',
        'Source-attributed conversational QA (get_answer) returning source filenames and 200-character context previews alongside answers.',
        'Dedicated pedagogical generators for 5-option MCQs with explanations (generate_mcqs), 4-part structured summaries (generate_summary), and 8-card front/back flashcards (generate_flashcards).',
        'Multi-tab Streamlit UI deployed live on Streamlit Cloud.'
      ],
      challenges: 'Keeping hosting and usage 100% free while maintaining high answer quality: running all-MiniLM-L6-v2 embeddings locally on CPU eliminated embedding API costs, while pairing top-4 ChromaDB retrieval with Groq’s free-tier Llama 3.3 70B delivered fast, grounded responses.',
      skills: ['Retrieval-Augmented Generation (RAG)', 'Chunking & Vector Store Design (ChromaDB)', 'Prompt Engineering for Educational Formats', 'Streamlit Cloud Deployment'],
      results: 'Deployed and verified live at studyagent001.streamlit.app (HTTP 200). An approximately 2-second response time was observed during informal interactive testing via Groq LPU inference (noted as an observed test rather than a formal latency benchmark).',
      relevance: 'Shows practical end-to-end delivery of a user-facing RAG product with transparent source attribution.',
      limitations: 'Relies on pdfplumber text extraction, so scanned image-only PDFs without an OCR layer cannot be indexed directly (see SYS-18 Handwritten OCR System). Collection storage is shared per instance unless isolated per user session.',
      evidence: [
        { label: 'Live Deployed App (studyagent001.streamlit.app)', url: 'https://studyagent001.streamlit.app', type: 'demo' },
        { label: 'GitHub Repository (huzaifaa69/study_Agent)', url: 'https://github.com/huzaifaa69/study_Agent', type: 'repo' },
        { label: 'RAG Engine Source (backend/rag_engine.py)', url: 'https://github.com/huzaifaa69/study_Agent/blob/main/backend/rag_engine.py', type: 'doc' }
      ]
    },

    'voice-biometrics': {
      code: 'SYS-06 // VOICE BIOMETRICS & ANTI-SPOOFING PIPELINE',
      title: 'Voice Authentication & Anti-Spoofing System',
      subtitle: 'Dual-gate voice authentication prototype combining SpeechBrain ECAPA-TDNN speaker verification with a 6-feature acoustic anti-spoof analyzer and SNR/VAD quality checks.',
      statuses: [
        { label: 'Implemented', type: 'implemented' },
        { label: 'Tested (7 Logged Trials)', type: 'tested' }
      ],
      whatItIs: 'An Applied Learning Project (developed in a 5-member university team) implementing a multi-stage voice biometric authentication pipeline that verifies speaker identity while screening for replay, synthetic TTS, or poor-quality audio inputs.',
      whyBuilt: 'Conventional speaker verification models measure voice timbre similarity but can be fooled by replayed recordings or synthetic voice clones. We built a combined verification + acoustic liveness pipeline to study multi-factor voice security.',
      problem: 'Voice authentication systems face two distinct threats: unauthorized speakers attempting impersonation and spoofing/deepfake artifacts mimicking a legitimate speaker.',
      objective: 'Integrate pretrained deep speaker embeddings (ECAPA-TDNN) with a multi-feature acoustic liveness scorer and pre-authentication signal quality checks, logging every trial and generating diagnostic spectrogram/MFCC plots.',
      targetUsers: 'Security engineering students and researchers evaluating voice-based access control and acoustic liveness heuristics.',
      technologies: ['Python', 'PyTorch', 'SpeechBrain (spkrec-ecapa-voxceleb)', 'Torchaudio', 'Librosa', 'SciPy', 'NumPy', 'Sounddevice', 'Matplotlib'],
      architecture: 'Captures 15-second 16kHz mono audio (ref.wav and test.wav). Gate 1 validates audio quality (RMS > -40 dB, estimated SNR > 5 dB, and voice activity ratio > 20%). Gate 2 extracts 192-dimensional ECAPA-TDNN speaker embeddings (pretrained on VoxCeleb1+2) and computes pairwise cosine similarity (threshold ≥ 75%). Gate 3 computes a weighted 6-feature acoustic spoof score (MFCC delta variance 30%, pitch jitter via pyin 25%, spectral flux 20%, ZCR variance 10%, HNR via HPSS 8%, spectral rolloff std 7%; threshold < 35% for bonafide). Access is granted only if all three gates pass.',
      workflowSteps: [
        '16kHz Audio Capture (ref.wav & test.wav)',
        'Gate 1: Audio Quality Check (RMS, Est. SNR, VAD Ratio)',
        'Gate 2: ECAPA-TDNN Embedding Cosine Similarity (≥ 75%)',
        'Gate 3: 6-Feature Acoustic Anti-Spoof Score (< 35%)',
        'Access Decision + JSON Audit Log + 6-Panel Matplotlib Report'
      ],
      implemented: [
        'Audio quality validation gate (check_audio_quality) estimating noise floor from the 10th-percentile frame RMS and computing SNR and voice activity ratio.',
        'ECAPA-TDNN speaker embedding extraction (get_embedding) with automatic stereo-to-mono downmixing, 16kHz resampling, and PyTorch cosine similarity scoring.',
        'Weighted 6-feature acoustic anti-spoof detector (detect_spoof) combining MFCC delta variance, F0 pitch jitter, STFT spectral flux, zero-crossing rate variance, harmonic-to-noise ratio proxy, and spectral rolloff spread.',
        '6-panel diagnostic visualization (plot_results saved to auth_result.png) and JSON trial logging (auth_log.json).'
      ],
      challenges: 'Calibrating anti-spoof feature weights so natural human speech variations (pitch jitter and MFCC delta variance) are rewarded while overly smooth synthetic speech or noisy recordings are flagged.',
      skills: ['Speech Signal Processing (Librosa / Torchaudio)', 'Speaker Verification (ECAPA-TDNN Embeddings)', 'Acoustic Liveness Feature Engineering', 'Biometric Decision Gating & Audit Logging'],
      results: 'In the 7 recorded trials in auth_log.json (March 4, 2026), genuine same-speaker authentication runs recorded pairwise embedding cosine similarity scores of 86.34% (spoof score 16.88%) and 87.63% (spoof score 11.80%)—both granted access—while 5 non-matching trials scored between 22.07% and 61.71% similarity and were blocked. IMPORTANT METRIC CLARIFICATION: The ~86–87% figure is pairwise speaker-embedding cosine similarity (%) on genuine user trials, NOT overall classification accuracy or benchmark EER/FAR/FRR.',
      relevance: 'Illustrates defense-in-depth for biometric systems by requiring signal quality, speaker identity, and liveness checks simultaneously.',
      limitations: 'Group Applied Learning Project (co-authored with DSN Sathvik, Anireddy Manoj Kumar Reddy, Barath Sai Kumar J., and Erla Krishna Chaitanya). The anti-spoof module is a rule-weighted acoustic heuristic rather than a trained neural countermeasure (such as AASIST on ASVspoof), and evaluation was conducted on live microphone demo trials rather than a large-scale benchmark corpus.',
      evidence: [
        { label: 'GitHub Repository (huzaifaa69/Voice-Biometrics)', url: 'https://github.com/huzaifaa69/Voice-Biometrics', type: 'repo' },
        { label: 'Recorded Trial Log (auth_log.json)', url: 'https://github.com/huzaifaa69/Voice-Biometrics/blob/main/Voice-Biometrics-Anti-Spoof-and-deepfake-resistance-main/auth_log.json', type: 'doc' },
        { label: 'Diagnostic Plot Artifact (auth_result.png in Repo)', url: 'https://github.com/huzaifaa69/Voice-Biometrics/blob/main/Voice-Biometrics-Anti-Spoof-and-deepfake-resistance-main/auth_result.png', type: 'doc' }
      ]
    },

    'sql-fixer-env': {
      code: 'SYS-07 // OPENENV REINFORCEMENT LEARNING BENCHMARK',
      title: 'SQL Fixer Environment (OpenEnv RL Benchmark)',
      subtitle: 'Containerized OpenEnv RL environment where AI agents diagnose and repair broken SQL queries across 4 difficulty tiers against an in-memory SQLite database.',
      statuses: [
        { label: 'Implemented', type: 'implemented' },
        { label: 'Evaluated (Grader Suite)', type: 'evaluated' },
        { label: 'Deployed (HF Docker Space)', type: 'deployed' }
      ],
      whatItIs: 'An OpenEnv-compliant reinforcement learning environment (published on GitHub and deployed as a Docker Space on Hugging Face) designed to train and evaluate coding agents on multi-step SQL debugging.',
      whyBuilt: 'Binary pass/fail SQL execution rewards make RL training sparse: a query with one typo gets the same 0 reward as gibberish. I built SQL Fixer Env to provide dense, partial-progress reward signals.',
      problem: 'LLM coding agents frequently fail on subtle relational bugs—such as joining on primary keys instead of foreign keys (u.id = o.id vs u.id = o.user_id), omitting GROUP BY keys, or mishandling HAVING + CASE exclusion logic.',
      objective: 'Build a multi-step SQLite RL environment with 4 graded tasks (easy, medium, hard, expert), up to 5 repair steps per episode, execution error feedback in the observation space, and a 5-component dense grader.',
      targetUsers: 'RL and LLM agent developers benchmarking code-repair policies with OpenEnv.',
      technologies: ['Python', 'OpenEnv', 'SQLite3 (In-Memory)', 'Pydantic', 'Docker', 'uv', 'Hugging Face Spaces'],
      architecture: 'SQLFixerEnv initializes an in-memory SQLite database (users and orders tables) and returns a Pydantic SQLObservation containing the task description, broken query, schema, hint, last execution result, and SQLite error string. On each step(), the agent submits a SQLAction query, which is executed and scored by _grade() across 5 weighted criteria clamped to [0.01, 0.99]. Episodes terminate when reward ≥ 0.95 or steps == 5.',
      workflowSteps: [
        'Reset In-Memory SQLite DB (users, orders)',
        'Emit SQLObservation (Broken Query + Schema + Error/Hint)',
        'Agent Submits Repaired SQLAction Query (Max 5 Steps)',
        '5-Component Dense Grader (Syntax + Keywords + Tables + JOIN + Rows)',
        'Return Step Reward [0.01–0.99] & Termination State'
      ],
      implemented: [
        '4 structured SQL debugging benchmarks in server/environment.py: easy (keyword typos), medium (wrong JOIN key & comparison direction), hard (implicit join + missing DESC + GROUP BY), and expert (HAVING + SUM(CASE...) exclusion query).',
        '5-part partial-progress reward function (_grade): 20% syntax executability, 25% SQL keyword match, 20% referenced table accuracy, 15% JOIN foreign-key condition check, and 20% result-set exact/row-count equivalence.',
        'Automated verification grader suite (server/graders.py), inference script (inference.py), openenv.yaml specification, and Dockerfile deployed to Hugging Face Spaces.'
      ],
      challenges: 'Designing the reward function so an agent cannot achieve ≥0.95 (the solved threshold) merely by outputting a syntactically valid SELECT * FROM users query without matching the exact expected result rows.',
      skills: ['RL Environment Engineering (OpenEnv)', 'Dense Reward Function Design', 'SQL & Relational Query Verification', 'Docker Containerization'],
      results: 'Verified across all 4 difficulty tiers via server/graders.py and deployed to Hugging Face Spaces (huzaifaa1/sql-fixer-env).',
      relevance: 'Demonstrates practical environment design for training code-generation and self-debugging SQL agents.',
      limitations: 'Currently uses a fixed 4-task benchmark curriculum over a two-table schema; future iterations could procedurally mutate ASTs over larger multi-table schemas (such as Spider or BIRD subsets).',
      evidence: [
        { label: 'GitHub Repository (huzaifaa69/sql-fixer-env)', url: 'https://github.com/huzaifaa69/sql-fixer-env', type: 'repo' },
        { label: 'Live Hugging Face Space (huzaifaa1/sql-fixer-env)', url: 'https://huggingface.co/spaces/huzaifaa1/sql-fixer-env', type: 'demo' },
        { label: 'Environment & Grader Source (server/environment.py)', url: 'https://github.com/huzaifaa69/sql-fixer-env/blob/main/server/environment.py', type: 'doc' }
      ]
    },

    'autostream-agent': {
      code: 'SYS-08 // LANGGRAPH CONVERSATIONAL LEAD AGENT',
      title: 'AutoStream AI Agent — LangGraph Social-to-Lead Workflow',
      subtitle: 'Deterministic 4-node LangGraph conversational agent performing intent classification, local JSON RAG Q&A, progressive multi-turn lead extraction, and guarded tool execution.',
      statuses: [
        { label: 'Implemented', type: 'implemented' },
        { label: 'Tested (Multi-Turn Flows)', type: 'tested' }
      ],
      whatItIs: 'A stateful conversational AI agent built with LangGraph and Gemini 1.5 Flash for a fictional SaaS video-editing platform (AutoStream). It classifies user intent, answers pricing/feature questions from a local JSON knowledge base, and progressively captures lead details.',
      whyBuilt: 'Built as a structured agentic engineering assignment (ServiceHive / Inflx) to demonstrate why explicit state machines (LangGraph) are superior to unconstrained single-prompt loops for deterministic business workflows.',
      problem: 'Free-form conversational bots often trigger CRM/lead-capture tools prematurely with missing or hallucinated user fields, or lose track of which fields have already been collected across multi-turn dialogues.',
      objective: 'Architect an auditable 4-node LangGraph state machine that separates intent classification, RAG product answering, progressive single-field lead collection, and guarded tool invocation.',
      targetUsers: 'SaaS product teams and conversational AI engineers building deterministic customer acquisition workflows.',
      technologies: ['Python 3.11', 'LangGraph', 'LangChain Google GenAI', 'Gemini 1.5 Flash', 'TypedDict State Reducers', 'Regex Field Extraction', 'JSON RAG Knowledge Base'],
      architecture: 'Uses LangGraph AgentState (TypedDict with add_messages reducer, intent string, collected lead dictionary, and boolean state flags). Every message enters intent_classifier (greeting, product_inquiry, or high_intent). Greetings and product inquiries route to responder (grounded in knowledge_base/autostream_kb.json). High-intent messages route to lead_collector, which extracts name, email, and creator platform via regex and prompts for one missing field at a time before routing to lead_executor (mock_lead_capture()).',
      workflowSteps: [
        'User Turn → LangGraph AgentState (add_messages)',
        'Node 1: intent_classifier (greeting / product_inquiry / high_intent)',
        'Node 2: responder (Grounded in autostream_kb.json)',
        'Node 3: lead_collector (Progressive Regex Extraction: Name, Email, Platform)',
        'Node 4: lead_executor (Guarded mock_lead_capture() Tool Call)'
      ],
      implemented: [
        '4-node directed graph in agent/graph.py with explicit conditional edges and state transitions.',
        'Persistent multi-turn state schema in agent/state.py tracking conversation history, active lead-collection mode, and completion flags.',
        'Local JSON RAG loader (agent/rag.py) injecting verified pricing ($29 Basic / $79 Pro) and policy context.',
        'Guarded tool execution in tools/lead_capture.py that fires strictly when all 3 required fields are validated, plus a documented WhatsApp Business Cloud API + FastAPI + Redis webhook deployment architecture.'
      ],
      challenges: 'Ensuring the agent stays in lead-collection mode across 3–4 turns even when a user replies with a single word (e.g., "YouTube") that would otherwise be misclassified as a generic product inquiry.',
      skills: ['LangGraph State Machine Design', 'Multi-Turn Conversational Memory', 'Guarded Tool Calling', 'Webhook Deployment Architecture (WhatsApp + Redis)'],
      results: 'Verified across 5–6 turn conversational flows covering greeting, pricing RAG lookup, high-intent detection, progressive 3-field collection, and deterministic tool execution.',
      relevance: 'Directly applicable to production customer-support and sales-qualification agents that must never call backend APIs with incomplete payloads.',
      limitations: 'CLI-based execution with a mocked lead-capture function; the WhatsApp Business API + Redis webhook architecture is documented in the repository README as a deployment blueprint rather than a live hosted webhook.',
      evidence: [
        { label: 'GitHub Repository (huzaifaa69/autostream-agent)', url: 'https://github.com/huzaifaa69/autostream-agent', type: 'repo' },
        { label: 'LangGraph State Machine (agent/graph.py)', url: 'https://github.com/huzaifaa69/autostream-agent/blob/main/agent/graph.py', type: 'doc' }
      ]
    },

    'arvyax-emotional-guidance': {
      code: 'SYS-09 // MULTIMODAL TABULAR + TEXT ML & UNCERTAINTY ENGINE',
      title: 'ArvyaX Emotional Guidance & Uncertainty Engine',
      subtitle: 'End-to-end ML pipeline predicting 6-class emotional state and 1–5 ordinal intensity from reflective text and physiological metadata, paired with an uncertainty-aware decision engine.',
      statuses: [
        { label: 'Implemented', type: 'implemented' },
        { label: 'Evaluated (5-Fold CV & Ablation)', type: 'evaluated' }
      ],
      whatItIs: 'A feature-engineered machine learning and rule-based decision system (built for the ArvyaX / RevoltronX ML assignment) that predicts a user’s emotional state and intensity from short journal reflections plus physiological/contextual metadata, then recommends timed wellbeing interventions with explicit uncertainty gating.',
      whyBuilt: 'Built to solve a realistic human-centered ML challenge: short user reflections ("kinda calm...", "ok") are noisy and ambiguous, so an intervention system must fuse text with physiological context (sleep, stress, energy) and know when to abstain safely.',
      problem: 'Pure text classifiers fail on 2–4 word journal entries, while black-box regression models on subjective 1–5 intensity scales hide class uncertainty and risk recommending stimulating tasks when a user is exhausted.',
      objective: 'Engineer a hybrid text + metadata feature pipeline, compare text-only vs. multimodal models via 5-fold cross-validation ablation, quantify prediction confidence, and layer a safety-first decision engine.',
      targetUsers: 'Applied ML engineers and digital wellbeing product teams evaluating interpretable, uncertainty-aware classification pipelines.',
      technologies: ['Python', 'Scikit-Learn (GradientBoostingClassifier)', 'TF-IDF & Custom Emotion Lexicons', 'Pandas', 'NumPy', 'SciPy', 'Joblib', 'Flask API', 'HTML UI Demo'],
      architecture: 'Extracts 300 sublinear TF-IDF (1–2 n-gram) features, 6 custom emotion lexicon scores, negation/contrast/punctuation signals, ordinal metadata encodings (sleep_hours, energy_level, stress_level, time_of_day, previous_day_mood, face_emotion_hint), and engineered interaction ratios (sleep_stress_ratio, energy_stress_diff, recovery_need). Two GradientBoostingClassifiers predict 6-class state and 5-class ordinal intensity. Confidence gating and a 4-tier priority decision engine map predictions to timed actions.',
      workflowSteps: [
        'Text (TF-IDF + 6 Lexicons + Contrast/Negation) + Metadata Ingestion',
        'Engineered Interactions (sleep_stress_ratio, energy_stress_diff)',
        'Dual GradientBoostingClassifiers (6-Class State + 5-Class Ordinal Intensity)',
        'Uncertainty Gate (Confidence < 0.45 or ≤ 4 Words → Safe Pause Fallback)',
        'Priority Decision Engine (Safety Override → State/Time Action Mapping)'
      ],
      implemented: [
        'Feature engineering and training pipeline (pipeline.py) combining sparse n-grams, custom domain lexicons, and physiological interaction terms.',
        'Formulated 1–5 intensity as ordinal classification rather than MSE regression to preserve calibrated class probabilities for uncertainty scoring.',
        '4-tier hierarchical decision engine (decision_engine.py) with hard safety overrides (stress ≥ 8 and energy ≤ 3 → immediate box_breathing) and time-of-day filtering.',
        '5-fold cross-validation ablation study (predict.py --ablation), feature importance extraction, Flask API (app.py), UI demo (ui_demo.html), error analysis report (ERROR_ANALYSIS.md), and on-device edge deployment plan (EDGE_PLAN.md).'
      ],
      challenges: 'Disambiguating ultra-short or contradictory reflections ("tired but wired"): adding contrast-word counters and engineered ratios (sleep_stress_ratio ranked #3 in overall feature importance at 0.0246, outperforming raw sleep_hours at 0.0148) provided crucial disambiguating signal.',
      skills: ['Multimodal Feature Engineering (Text + Tabular)', 'Uncertainty Quantification & Abstention Gating', 'Ablation Studies & Error Analysis', 'Rule-Guided ML Decision Systems', 'Edge ML Planning'],
      results: '5-fold CV Macro-F1: 0.633 ± 0.018 on 6-class emotional state (improving +0.021 over the 0.612 text-only baseline in ablation testing) and 0.240 ± 0.025 on 5-class noisy ordinal intensity. On the 120-sample test set, the uncertainty gate flagged 38/120 (31.7%) ambiguous inputs for safe fallback.',
      relevance: 'Shows mature ML engineering practices beyond raw accuracy: ablation verification, feature importance auditing, error analysis, and safe fallback design.',
      limitations: 'Trained on a compact assignment dataset where 5-level subjective intensity labels have high inherent inter-annotator noise (0.240 macro-F1).',
      evidence: [
        { label: 'GitHub Repository (huzaifaa69/Arvyax-Intern)', url: 'https://github.com/huzaifaa69/Arvyax-Intern', type: 'repo' },
        { label: 'Error Analysis Report (ERROR_ANALYSIS.md)', url: 'https://github.com/huzaifaa69/Arvyax-Intern/blob/main/ERROR_ANALYSIS.md', type: 'doc' },
        { label: 'Edge Deployment Plan (EDGE_PLAN.md)', url: 'https://github.com/huzaifaa69/Arvyax-Intern/blob/main/EDGE_PLAN.md', type: 'doc' }
      ]
    },

    'primetrade-sentiment-analysis': {
      code: 'SYS-10 // QUANTITATIVE MARKET REGIME & BEHAVIORAL RESEARCH',
      title: 'PrimeTrade — Trader Behavior & Market Sentiment Analysis',
      subtitle: 'Empirical quantitative study of 211,224 Hyperliquid crypto trades across 32 traders (May 2023–May 2025) merged with the Bitcoin Fear & Greed Index.',
      statuses: [
        { label: 'Implemented', type: 'implemented' },
        { label: 'Evaluated (211,224 Trades)', type: 'evaluated' }
      ],
      whatItIs: 'A quantitative data science and behavioral finance investigation analyzing 211,224 historical perpetual futures executions (104,402 closed PnL events across 246 assets and 32 traders on Hyperliquid) aligned against daily Bitcoin Fear & Greed Index regimes.',
      whyBuilt: 'Built to test whether crowd sentiment regimes (Extreme Fear, Fear, Neutral, Greed, Extreme Greed) measurably alter trader position sizing, win rates, liquidation cascades, and profitability concentration.',
      problem: 'Retail trading narratives assume simple linear correlations between market greed and trader profits, ignoring regime-switching behavior (contrarian accumulation during Fear vs. momentum chasing during Greed).',
      objective: 'Merge 24 months of tick/execution-level trader logs with daily macro sentiment data, test statistical correlations (static and rolling 30-day windows), segment performance across 5 sentiment regimes, and produce visual diagnostic charts and strategic recommendations.',
      targetUsers: 'Quantitative researchers, crypto market analysts, and data science recruiters evaluating empirical financial analysis.',
      technologies: ['Python', 'Pandas', 'NumPy', 'SciPy (Pearson Correlation & p-values)', 'Matplotlib', 'Seaborn'],
      architecture: 'Data ingestion pipeline (analysis.py) cleans 211,224 raw execution rows, isolates 104,402 realized PnL closure events, joins timestamps against the daily Bitcoin Fear & Greed Index (5 regimes), computes trader-level Pareto concentration, rolling 30-day sentiment-PnL correlations, intraday IST liquidity windows, and coin-level regime sensitivity, and renders 3 multi-panel diagnostic charts.',
      workflowSteps: [
        'Ingest & Clean 211,224 Hyperliquid Trades (32 Traders, 246 Coins)',
        'Temporal Join with Daily Bitcoin Fear & Greed Index (May 2023–May 2025)',
        '5-Regime Segmentation (Extreme Fear → Extreme Greed)',
        'Rolling 30-Day Pearson Correlation & Liquidation Cascade Audit',
        'Multi-Panel Visualization (chart1–chart3) & Insights Report'
      ],
      implemented: [
        'End-to-end quantitative analysis script (analysis.py) processing 211,224 trades ($10.3M cumulative PnL).',
        'Regime profitability and position-sizing breakdown across Extreme Fear, Fear, Neutral, Greed, and Extreme Greed.',
        'Static and rolling 30-day Pearson correlation testing (r = -0.098, p = 0.0442) demonstrating dynamic strategy switching between bull runs and corrections.',
        'Generated 3 publication-ready analytical dashboards (chart1_overview.png, chart2_behavior.png, chart3_strategy.png) and a structured findings report (insights_report.md).'
      ],
      challenges: 'Separating total execution volume (211,224 fills including opening legs) from realized PnL events (104,402 closed trades) so win-rate and mean-PnL metrics were not diluted by zero-PnL entry orders.',
      skills: ['Quantitative Financial Data Analysis', 'Regime-Switching Behavioral Analysis', 'Statistical Hypothesis Testing (SciPy)', 'Financial Data Visualization'],
      results: 'Verified key findings from the 211,224-trade dataset: (1) Extreme Greed yielded the highest mean PnL ($130/trade, 89.2% win rate) while Fear yielded the largest average trade size ($8,041, 87.3% win rate, $113 mean PnL), revealing contrarian sizing by experienced traders; (2) Top 3 traders generated ~45% of the $10.3M total PnL (#1 trader: $2.14M); (3) Daily F&G vs. PnL had a statistically significant weak negative correlation (r = -0.098, p = 0.0442) that flipped sign across rolling 30-day regimes.',
      relevance: 'Provides real, auditable empirical evidence of financial regime analysis and sentiment-merged trade forensics.',
      limitations: 'Survivorship and sample bias: the dataset tracks 32 specific Hyperliquid accounts over May 2023–May 2025 rather than the entire exchange population.',
      evidence: [
        { label: 'GitHub Repository (huzaifaa69/primetrade-trader-analysis)', url: 'https://github.com/huzaifaa69/primetrade-trader-analysis', type: 'repo' },
        { label: 'Full Quantitative Report (insights_report.md)', url: 'https://github.com/huzaifaa69/primetrade-trader-analysis/blob/main/insights_report.md', type: 'doc' },
        { label: 'Regime & Strategy Charts (chart1–chart3 in Repo)', url: 'https://github.com/huzaifaa69/primetrade-trader-analysis/blob/main/chart1_overview.png', type: 'doc' }
      ]
    },

    'garch-hmm-market-analysis': {
      code: 'SYS-11 // QUANTITATIVE VOLATILITY & REGIME MODELING',
      title: 'Hybrid GARCH-HMM Financial Market Analysis',
      subtitle: 'Quantitative time-series framework combining GARCH conditional volatility estimation with Hidden Markov Model (HMM) latent regime detection and sentiment signals.',
      statuses: [
        { label: 'Implemented (Local Research)', type: 'implemented' },
        { label: 'Evaluated', type: 'evaluated' }
      ],
      whatItIs: 'A quantitative financial modeling project combining Generalized Autoregressive Conditional Heteroskedasticity (GARCH) volatility modeling with Hidden Markov Models (HMM) and sentiment indicators to characterize market volatility regimes.',
      whyBuilt: 'Built to explore how econometric volatility clustering (GARCH) and latent Markovian state transitions (HMM) complement each other when analyzing non-stationary financial return series.',
      problem: 'Single-regime volatility models underestimate tail risk during sudden market transitions, whereas standalone HMMs on raw returns can conflate directional drift with conditional variance spikes.',
      objective: 'Preprocess financial return series, estimate conditional volatility via GARCH, infer latent low/high-volatility market states using an HMM, and compare regime transitions alongside market sentiment indicators.',
      targetUsers: 'Quantitative finance researchers and data science teams studying econometric and probabilistic regime modeling.',
      technologies: ['Python', 'NumPy', 'Pandas', 'GARCH Volatility Modeling', 'Hidden Markov Models (HMM)', 'Sentiment Signal Integration'],
      architecture: 'Time-series pipeline computes log returns and stationarity diagnostics, fits a GARCH conditional variance process to capture volatility clustering, feeds volatility and return features into a Gaussian Hidden Markov Model to decode latent market regimes via the Viterbi/posterior algorithm, and aligns decoded regimes with sentiment indicators.',
      workflowSteps: [
        'Financial Time-Series Preprocessing & Log-Return Calculation',
        'GARCH Conditional Variance & Volatility Clustering Estimation',
        'Hidden Markov Model (HMM) Latent Regime Inference',
        'Sentiment Signal Alignment & Regime Transition Interpretation'
      ],
      implemented: [
        'Financial return preprocessing, rolling volatility calculation, and time-series alignment in Python (NumPy, Pandas).',
        'GARCH conditional volatility modeling paired with HMM latent state classification to distinguish calm vs. stressed market regimes.',
        'Integration of sentiment features to inspect how sentiment shifts coincide with HMM volatility regime transitions.'
      ],
      challenges: 'Avoiding look-ahead leakage when aligning rolling GARCH conditional variance estimates with HMM state transition probabilities.',
      skills: ['Time-Series Econometrics (GARCH)', 'Probabilistic Graphical Models (HMM)', 'Financial Regime Interpretation', 'Quantitative Python (NumPy / Pandas)'],
      results: 'Successfully segmented historical price series into interpretable volatility and sentiment regimes for diagnostic market analysis. (No fabricated predictive accuracy percentages or backtest trading return claims are stated.)',
      relevance: 'Complements the empirical 211,224-trade Hyperliquid sentiment-regime analysis in SYS-10 (primetrade-trader-analysis) with parametric volatility-regime modeling.',
      limitations: 'Developed as a local academic/research pipeline and not yet published as a standalone repository on github.com/huzaifaa69. Primarily a descriptive and diagnostic regime-identification framework rather than a live automated trading execution system.',
      evidence: [
        { label: 'Standalone GitHub Repository: Not Published Yet (Local Research Pipeline)', url: null },
        { label: 'Related Published Empirical Regime Repo (PrimeTrade SYS-10)', url: 'https://github.com/huzaifaa69/primetrade-trader-analysis', type: 'repo' },
        { label: 'Regime Transition Plot Placeholder: Screenshot To Be Added', url: null }
      ]
    },

    'visionvoice-captioning': {
      code: 'SYS-12 // MULTIMODAL VISION-LANGUAGE INFERENCE',
      title: 'VisionVoice — Multimodal Image Captioning Web App',
      subtitle: 'Vision-language web application generating descriptive natural-language captions from uploaded images using Salesforce BLIP-Large with beam-search decoding constraints.',
      statuses: [
        { label: 'Implemented', type: 'implemented' },
        { label: 'Deployed (Streamlit Cloud)', type: 'deployed' }
      ],
      whatItIs: 'A multimodal computer-vision and natural-language web application that generates descriptive captions for uploaded JPG/PNG images using a pretrained Vision-Language Transformer (Salesforce BLIP-Large), packaged with both a Streamlit UI and a Dockerized FastAPI service.',
      whyBuilt: 'Built to take a vision-language foundation model beyond a notebook snippet and package it into a cached, containerized web service with tuned beam-search generation parameters.',
      problem: 'Default greedy decoding on image captioning models often produces overly brief 4-word labels or repetitive n-gram loops.',
      objective: 'Wrap Salesforce/blip-image-captioning-large in a reusable PyTorch inference class with tuned beam search and repetition penalties, expose it via both Streamlit and FastAPI + vanilla JS frontends, and containerize with Docker.',
      targetUsers: 'Developers and end users testing automated image description, accessibility alt-text generation, and multimodal inference packaging.',
      technologies: ['Python 3.11', 'PyTorch', 'Hugging Face Transformers (Salesforce/blip-image-captioning-large)', 'Pillow (PIL)', 'Streamlit', 'FastAPI', 'Uvicorn / Gunicorn', 'Docker'],
      architecture: 'ImageCaptioner class in backend/model.py lazy-loads BlipProcessor and BlipForConditionalGeneration (Salesforce/blip-image-captioning-large) onto CUDA or CPU. Uploaded PIL images are preprocessed into tensors and decoded with num_beams=5, min_length=30, max_length=70, repetition_penalty=1.5, and no_repeat_ngram_size=2. Served via app.py (Streamlit with @st.cache_resource) or backend/main.py (FastAPI) + frontend/.',
      workflowSteps: [
        'User Image Upload (JPG / PNG via Streamlit or FastAPI)',
        'Pillow RGB Conversion & BlipProcessor Tensor Encoding',
        'BLIP-Large Conditional Generation (5-Beam Search, Length 30–70)',
        'N-Gram & Repetition Penalty Filtering (1.5x, 2-gram block)',
        'Decoded Natural-Language Caption Display'
      ],
      implemented: [
        'ImageCaptioner inference engine (backend/model.py) with automatic CUDA/CPU device selection and lazy model initialization.',
        'Beam-search decoding tuning (num_beams=5, min_length=30, max_length=70, repetition_penalty=1.5, no_repeat_ngram_size=2) for richer, non-repetitive multi-clause descriptions.',
        'Streamlit web frontend (app.py) with resource caching, plus an alternative FastAPI backend (backend/main.py), static HTML/CSS/JS frontend (frontend/), unit test script (test_app.py), and Dockerfile.'
      ],
      challenges: 'Preventing model reloads on every user interaction in Streamlit while managing the memory footprint of blip-image-captioning-large on CPU cloud instances.',
      skills: ['Vision-Language Models (BLIP / Transformers)', 'Beam Search & Decoding Control', 'Streamlit & FastAPI Serving', 'Docker Containerization'],
      results: 'Implemented, containerized, and linked to a Streamlit Community Cloud deployment (imgaes-caption-generator.streamlit.app).',
      relevance: 'Demonstrates clean packaging of Hugging Face multimodal models into web and Docker services.',
      limitations: 'Despite the name "VisionVoice", the current repository implements visual-to-text caption generation only (no TTS audio synthesis layer is wired in the codebase yet). Large model cold-start downloads can take 30–60 seconds on free-tier CPU containers.',
      evidence: [
        { label: 'GitHub Repository (huzaifaa69/Image-Caption-Generator)', url: 'https://github.com/huzaifaa69/Image-Caption-Generator', type: 'repo' },
        { label: 'BLIP-Large Inference Source (backend/model.py)', url: 'https://github.com/huzaifaa69/Image-Caption-Generator/blob/main/backend/model.py', type: 'doc' },
        { label: 'Streamlit Deployment Link (from Repo README)', url: 'https://imgaes-caption-generator.streamlit.app/', type: 'demo' }
      ]
    },

    'llm-access-hub': {
      code: 'SYS-13 // SERVERLESS FULL-STACK AI CHAT PLATFORM',
      title: 'LLM Access Hub — Full-Stack AI Chat Platform',
      subtitle: 'Reactive TypeScript web platform for multi-conversation LLM interaction backed by Convex serverless functions, real-time state sync, and authentication.',
      statuses: [
        { label: 'Implemented', type: 'implemented' },
        { label: 'Deployed (Convex)', type: 'deployed' }
      ],
      whatItIs: 'A full-stack TypeScript web application (50 files) providing a clean, real-time chat and prompt workspace backed by Convex serverless database/functions and the OpenAI SDK.',
      whyBuilt: 'Built to understand modern reactive full-stack TypeScript patterns for LLM applications—handling authentication, conversation persistence, model configuration, and serverless backend routing.',
      problem: 'Stateless frontend LLM wrappers lose conversation history across refreshes and expose API keys if calls are made directly from the browser.',
      objective: 'Build a responsive React 19 + TypeScript frontend paired with a Convex backend that manages user authentication, conversation threads, model settings, and server-side LLM API calls.',
      targetUsers: 'Developers and end users wanting a clean, authenticated web workspace for multi-turn LLM interactions.',
      technologies: ['React 19', 'TypeScript', 'Convex (Serverless DB & Functions)', '@convex-dev/auth', 'OpenAI SDK', 'Tailwind CSS', 'shadcn/ui', 'Vite', 'Sonner'],
      architecture: 'React 19 SPA connects to Convex via reactive queries and mutations. Backend modules in convex/ define the data schema (schema.ts), authentication (auth.ts, auth.config.ts), conversation management (conversations.ts), model definitions (models.ts, settings.ts), HTTP routing (http.ts, router.ts), and LLM completion orchestration (llm.ts).',
      workflowSteps: [
        'User Authentication (@convex-dev/auth)',
        'React 19 + shadcn/ui Prompt & Thread Workspace',
        'Convex Reactive Mutation (conversations.ts)',
        'Serverless LLM Execution (convex/llm.ts via OpenAI SDK)',
        'Real-Time Database Sync Back to Client UI'
      ],
      implemented: [
        'Convex backend schema and serverless functions (conversations.ts, llm.ts, models.ts, settings.ts, router.ts, auth.ts).',
        'React 19 + TypeScript + Tailwind CSS + shadcn/ui frontend interface.',
        'Deployed backend and frontend instance on Convex (tough-cobra-403.convex.app).'
      ],
      challenges: 'Coordinating asynchronous server-side LLM API calls with Convex’s deterministic reactive database mutations and authentication state.',
      skills: ['Full-Stack TypeScript & React 19', 'Serverless Backend Architecture (Convex)', 'Authentication & Session State', 'LLM API Integration'],
      results: 'Implemented full-stack repository (50 files) and deployed to Convex.',
      relevance: 'Shows full-stack TypeScript fluency alongside my primary Python and Java backend systems.',
      limitations: 'Requires valid upstream OpenAI/provider API credits in the Convex environment to generate live completions.',
      evidence: [
        { label: 'GitHub Repository (huzaifaa69/LLM-Access-Hub)', url: 'https://github.com/huzaifaa69/LLM-Access-Hub', type: 'repo' },
        { label: 'Convex Deployment Link (from Repo README)', url: 'https://tough-cobra-403.convex.app/', type: 'demo' }
      ]
    },

    'pki-dashboard': {
      code: 'SYS-14 // CERTIFICATE LIFECYCLE MANAGEMENT DASHBOARD',
      title: 'PKI Dashboard — Digital Certificate Lifecycle Management System',
      subtitle: 'Web-based Public Key Infrastructure dashboard for tracking certificate issuance, active/revoked states, role-gated administration, and SSL Labs domain expiry checks.',
      statuses: [
        { label: 'Implemented', type: 'implemented' }
      ],
      whatItIs: 'A React and Firebase web dashboard designed to centralize digital certificate lifecycle tracking—covering issuance metadata, active/revoked filtering, role-gated administration, local cert-server inspection, and SSL Labs API domain validation.',
      whyBuilt: 'Manual spreadsheet tracking of TLS/SSL certificates leads to missed expirations and unexpected outages. I built PKI Dashboard to practice role-gated security tooling and certificate lifecycle workflows.',
      problem: 'Organizations tracking certificates across disparate domains lack a single view to monitor validity dates, test live SSL endpoint readiness, and manage revocation states.',
      objective: 'Build an authenticated web dashboard where administrators can register certificates with generated hex serial numbers, check live domain SSL validity windows via the SSL Labs API, inspect local certificate files, and toggle Active/Revoked states.',
      targetUsers: 'System administrators and security engineering students studying Public Key Infrastructure (PKI) lifecycle management.',
      technologies: ['React.js', 'Firebase Authentication', 'Cloud Firestore (Real-Time Listeners)', 'Bootstrap 5', 'Axios', 'Qualys SSL Labs API v3'],
      architecture: 'React SPA authenticates users via Firebase Auth (onAuthStateChanged) and resolves user roles (getUserRole / admin override for local testing). Real-time Firestore subscriptions (subscribeUserCerts) sync certificate records. Admin actions mutate Firestore documents (addCertificate, updateCertificate for Renew/Revoke, deleteCertificate), query a local certificate parser endpoint (localhost:4000/api/list), or poll the SSL Labs API (api.ssllabs.com/api/v3/analyze) to populate validFrom/validTo dates.',
      workflowSteps: [
        'Firebase Auth Login & Role Resolution (User / Admin)',
        'Real-Time Firestore Subscription (subscribeUserCerts)',
        'Admin Issuance (Hex Serial Generation SN-XXXXXXXX)',
        'Live Domain SSL Check (Qualys SSL Labs API v3 Polling)',
        'Lifecycle State Transitions (Active / Renew / Revoke / Delete)'
      ],
      implemented: [
        '491-line React dashboard component (App.jsx) with Firebase Auth session management and real-time Firestore certificate listeners.',
        'Role-based UI gating restricting certificate creation (+ Add Certificate) to admin role holders, plus a localhost development role-testing helper.',
        'Live SSL Labs API v3 domain analyzer (checkSSL) extracting notBefore, notAfter, and issuerLabel metadata directly into Firestore.',
        'Status filtering (All, Active, Revoked), certificate renewal/revocation actions, and local certificate permissions modal.'
      ],
      challenges: 'Handling asynchronous multi-second polling against the Qualys SSL Labs analysis API and gracefully managing Firestore permission fallbacks during local development.',
      skills: ['PKI & TLS Certificate Lifecycle Concepts', 'React & Firebase/Firestore Real-Time Sync', 'Role-Based UI Access Control', 'REST API Integration'],
      results: 'Functional React + Firebase certificate management dashboard with real-time CRUD, revocation state tracking, and SSL Labs endpoint inspection.',
      relevance: 'Connects my interest in cybersecurity directly to practical infrastructure and certificate lifecycle tooling.',
      limitations: 'Student prototype: certificate issuance records metadata and serial numbers in Firestore and queries a local helper server (localhost:4000) rather than operating a production HSM-backed X.509 Certificate Authority. The SSL Labs check uses a public CORS proxy for client-side fetching.',
      evidence: [
        { label: 'GitHub Repository (huzaifaa69/pki-dashboard)', url: 'https://github.com/huzaifaa69/pki-dashboard', type: 'repo' },
        { label: 'Dashboard Source Code (App.jsx)', url: 'https://github.com/huzaifaa69/pki-dashboard/blob/main/PKI-Dashboard-A-Web-Based-Certificate-Lifecycle-Management-System-main/App.jsx', type: 'doc' },
        { label: 'Screenshot Placeholder: PKI Certificate Table UI To Be Added', url: null }
      ]
    },

    'auto-biz-agent': {
      code: 'SYS-15 // MULTI-AGENT MARKET STRATEGY PIPELINE',
      title: 'Auto-Biz Agent — 4-Agent Market Research & Strategy Pipeline',
      subtitle: 'Full-stack multi-agent orchestrator chaining Research, Analysis, Strategy, and Report agents with automatic multi-LLM failover and React report viewer.',
      statuses: [
        { label: 'Implemented (Prototype)', type: 'implemented' }
      ],
      whatItIs: 'A full-stack multi-agent business intelligence prototype combining a Python FastAPI orchestrator (chaining 4 specialized role agents) with a React + Vite frontend for generating structured market and go-to-market reports.',
      whyBuilt: 'Built to experiment with sequential multi-agent decomposition—where each agent has a distinct system persona and output contract—and resilient fallback handling when free-tier LLM APIs hit rate limits.',
      problem: 'Single-prompt business report generators often blur factual market observations, SWOT analysis, and actionable monetization roadmaps into generic prose, and fail completely when a single free-tier model endpoint throttles requests.',
      objective: 'Implement a 4-stage sequential orchestrator (ResearchAgent → AnalysisAgent → StrategyAgent → ReportAgent) with automatic model failover across multiple OpenRouter LLMs and a React report viewer UI.',
      targetUsers: 'Founders, students, and developers exploring sequential multi-agent LLM pipelines.',
      technologies: ['Python', 'FastAPI', 'OpenAI SDK (OpenRouter API)', 'Gemini 2.0 Flash / Llama 3.1 8B / Mistral 7B', 'React', 'Vite'],
      architecture: 'Frontend (MarketInput.jsx, ReportViewer.jsx) submits a target market domain to the FastAPI backend. AutoBizOrchestrator executes a 4-step pipeline: ResearchAgent gathers competitors and segments; AnalysisAgent derives SWOT and market gaps; StrategyAgent formulates MVP phases and pricing; and ReportAgent synthesizes an executive Markdown report. Each agent retries across 3 OpenRouter models before falling back to a clearly labeled Simulation Mode.',
      workflowSteps: [
        'React Market Domain Input (MarketInput.jsx)',
        'Agent 1: ResearchAgent (Competitors, Segments, Trends)',
        'Agent 2: AnalysisAgent (SWOT, Gaps & Risk Factors)',
        'Agent 3: StrategyAgent (Personas, UVP, GTM & Monetization)',
        'Agent 4: ReportAgent → Markdown ReportViewer.jsx'
      ],
      implemented: [
        'Base Agent class and 4 specialized subclasses in backend/agents.py with multi-model failover (google/gemini-2.0-flash-exp:free → meta-llama/llama-3.1-8b-instruct:free → mistralai/mistral-7b-instruct:free).',
        'Transparent Simulation Mode fallback when upstream API rate limits are exhausted.',
        'Sequential pipeline coordinator (AutoBizOrchestrator in backend/orchestrator.py), FastAPI endpoint (backend/main.py), and React/Vite frontend.'
      ],
      challenges: 'Handling unpredictable rate limits on free OpenRouter model endpoints without crashing the 4-step sequential chain.',
      skills: ['Sequential Multi-Agent Orchestration', 'LLM Failover & Resilience Engineering', 'FastAPI + React Full-Stack Integration'],
      results: 'End-to-end 4-agent pipeline and React report viewer implemented in huzaifaa69/Auto-Biz-agent.',
      relevance: 'Demonstrates multi-agent prompt chaining and fault-tolerant API integration.',
      limitations: 'Agents operate strictly on LLM parametric knowledge (no live web-search scraper tool is wired into ResearchAgent yet), and repo cleanup is recommended to ensure no local .env files are tracked.',
      evidence: [
        { label: 'GitHub Repository (huzaifaa69/Auto-Biz-agent)', url: 'https://github.com/huzaifaa69/Auto-Biz-agent', type: 'repo' },
        { label: 'Multi-Agent Definitions (backend/agents.py)', url: 'https://github.com/huzaifaa69/Auto-Biz-agent/blob/main/backend/agents.py', type: 'doc' },
        { label: 'Pipeline Orchestrator (backend/orchestrator.py)', url: 'https://github.com/huzaifaa69/Auto-Biz-agent/blob/main/backend/orchestrator.py', type: 'doc' }
      ]
    },

    'velocity-mart': {
      code: 'SYS-16 // WAREHOUSE OPERATIONS RESEARCH & ANALYTICS',
      title: 'Velocity-Mart — Warehouse Slotting Optimization Dashboard',
      subtitle: '4-view Streamlit operations analytics app auditing 800 SKUs, picker travel telemetry, and bin constraints to generate an ABC-optimized warehouse slotting map.',
      statuses: [
        { label: 'Implemented', type: 'implemented' },
        { label: 'Deployed (Streamlit Cloud)', type: 'deployed' }
      ],
      whatItIs: 'A 690-line Streamlit and Plotly operations analytics dashboard (built as a competition submission) that audits warehouse order transactions, SKU master records, picker movement logs, and physical bin constraints to optimize SKU slotting.',
      whyBuilt: 'Built to apply data forensics and Pareto (ABC) optimization to a concrete logistics problem: reducing warehouse picker travel distance while respecting temperature, weight, and fragility constraints.',
      problem: 'Suboptimal warehouse slotting places high-velocity SKUs far from packing stations and violates physical constraints—such as storing fragile items on high shelves (levels E/F), exceeding bin weight capacities, or mismatching temperature zones.',
      objective: 'Analyze 800 SKUs and historical picker movement logs, detect data quality and constraint violations, apply ABC velocity classification (80/15/5), and provide an interactive before-vs-after slotting dashboard with CSV export.',
      targetUsers: 'Supply chain analysts, operations researchers, and data analytics competition reviewers.',
      technologies: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Plotly Express & Graph Objects'],
      architecture: 'Loads 6 CSV datasets (cleaned_sku_master.csv, cleaned_order_transactions.csv, cleaned_picker_movement.csv, warehouse_constraints.csv, final_slotting_plan.csv, optimized_slotting_map.csv) via @st.cache_data. Computes cumulative order frequencies to assign ABC classes (A ≤ 80%, B 80–95%, C > 95%) and renders 4 analytical views: Executive Summary, Data Forensics, Current State Analysis, and Optimization Results.',
      workflowSteps: [
        'Load & Cross-Join 6 Warehouse CSV Datasets (800 SKUs)',
        'View 1 & 2: Executive KPIs + Data Forensics & Constraint Audit',
        'Pareto ABC Velocity Classification (A: 80%, B: 15%, C: 5%)',
        'View 3: Zone Utilization & Picker Travel Speed/Distance Telemetry',
        'View 4: Optimized Slotting Map Validation & CSV Export'
      ],
      implemented: [
        '690-line Streamlit analytics application (app.py) with 4 multi-tab views and interactive Plotly charts.',
        'Automated constraint violation detector auditing temperature-zone mismatches, bin max_weight_kg overloads, and fragile items placed on high shelf levels (E and F).',
        'Picker performance profiler aggregating travel distance, pick count, average speed, and peak operating hours.',
        'ABC zone placement validator confirming 100% unique assignment across all 800 SKUs with direct CSV download.'
      ],
      challenges: 'Reconciling high-velocity A-class SKU placement near packing zones (Zones A & B) without violating bin temperature requirements or shelf weight limits.',
      skills: ['Operations Research & ABC Slotting', 'Data Forensics & Constraint Auditing', 'Interactive Business Intelligence (Streamlit + Plotly)', 'Pandas Data Wrangling'],
      results: 'Audited and assigned all 800 SKUs with zero duplicate assignments, zero missing values, and 100% constraint compliance (modeling a conservative 25% travel distance reduction estimate in the optimization comparison view). Deployed to Streamlit Cloud.',
      relevance: 'Demonstrates strong tabular data forensics and constraint-satisfaction analytics complementing my Deloitte Data Analytics simulation work.',
      limitations: 'Note on repo hygiene: the public repository currently includes a committed Python virtual environment directory (venv/) that inflates the file count and should be removed via .gitignore. In the dashboard UI, the post-optimization travel distance reduction is modeled using a 25% conservative estimate multiplier over the precomputed slotting map.',
      evidence: [
        { label: 'GitHub Repository (huzaifaa69/Velocity-Mart)', url: 'https://github.com/huzaifaa69/Velocity-Mart', type: 'repo' },
        { label: 'Live Streamlit App (velocitymartapp.streamlit.app)', url: 'https://velocitymartapp.streamlit.app/', type: 'demo' },
        { label: 'Dashboard Source Code (app.py)', url: 'https://github.com/huzaifaa69/Velocity-Mart/blob/main/app.py', type: 'doc' }
      ]
    },

    'iot-scm-dashboard': {
      code: 'SYS-17 // TELEMETRY STREAMING & PREDICTIVE ML PROTOTYPE',
      title: 'IoT Supply Chain Telemetry & Spoilage Risk Dashboard',
      subtitle: 'Real-time supply chain condition monitoring prototype pairing a Python sensor simulator and FastAPI backend with RandomForest ETA, spoilage risk, and anomaly detection.',
      statuses: [
        { label: 'Implemented (Prototype)', type: 'implemented' }
      ],
      whatItIs: 'A full-stack IoT telemetry simulation and predictive monitoring prototype consisting of a Python sensor simulator, a FastAPI backend running RandomForest ETA and spoilage classifiers plus anomaly detection, and a live-polling HTML/CSS/JS frontend dashboard.',
      whyBuilt: 'Built to understand how streaming sensor telemetry (temperature, humidity, shock/vibration) is ingested by a REST backend, scored by serialized ML models in real time, and surfaced in a monitoring UI.',
      problem: 'Cold-chain and sensitive logistics shipments suffer spoilage when temperature or vibration excursions go undetected until delivery.',
      objective: 'Create an end-to-end local telemetry loop: simulate realistic package sensor streams, push payloads to a FastAPI endpoint, run real-time ETA, 3-tier spoilage risk (Safe / Warning / High Risk), and anomaly detection, and visualize alerts in a browser dashboard.',
      targetUsers: 'Students and engineers prototyping IoT telemetry ingestion and real-time ML inference APIs.',
      technologies: ['Python', 'FastAPI', 'Uvicorn', 'Scikit-Learn (RandomForest)', 'Pandas & NumPy', 'HTML5 / CSS3 / Vanilla JavaScript'],
      architecture: 'sensor_simulator.py generates periodic telemetry payloads (temperature, humidity, shock, package ID, timestamp) and POSTs them to FastAPI (/api/push-data). The backend (backend/main.py) runs an anomaly detector (utils/anomaly_detector.py) and loads serialized RandomForest models (eta_model.pkl, spoilage_model.pkl). The frontend (dashboard/index.html, script.js) polls the backend to update live charts and status indicators.',
      workflowSteps: [
        'Python Sensor Simulator (Temp, Humidity, Shock/Vibration)',
        'HTTP POST → FastAPI Backend (/api/push-data)',
        'Anomaly Detector + RandomForest Inference (ETA & Spoilage Risk 0/1/2)',
        'Real-Time Frontend Polling (dashboard/script.js) & Alert Panel'
      ],
      implemented: [
        'Sensor telemetry simulator (simulator/sensor_simulator.py) streaming synthetic package events.',
        'FastAPI ingestion and prediction server (backend/main.py) integrating anomaly detection (anomaly_detector.py) and serialized RandomForest models.',
        'Interactive dark-themed monitoring dashboard (dashboard/index.html, script.js, style.css) with live charts and alert badges.'
      ],
      challenges: 'Synchronizing asynchronous simulator pushes with frontend polling intervals while keeping inference latency low.',
      skills: ['FastAPI Real-Time Ingestion', 'ML Model Serialization & Serving', 'IoT Telemetry Simulation', 'Vanilla JS Dashboard Polling'],
      results: 'Complete end-to-end simulator → FastAPI → ML inference → browser dashboard prototype.',
      relevance: 'Shows full-stack system integration across data generation, REST APIs, ML inference, and frontend visualization.',
      limitations: 'As explicitly documented in backend/models/TRAINING_SUMMARY.txt, eta_model.pkl and spoilage_model.pkl are RandomForest models trained on synthetic random data for architectural demonstration purposes only.',
      evidence: [
        { label: 'GitHub Repository (huzaifaa69/IOT-SCM-Dashboard)', url: 'https://github.com/huzaifaa69/IOT-SCM-Dashboard', type: 'repo' },
        { label: 'Model Training Note (TRAINING_SUMMARY.txt)', url: 'https://github.com/huzaifaa69/IOT-SCM-Dashboard/blob/main/IoT_SCM_Dashboard-main/backend/models/TRAINING_SUMMARY.txt', type: 'doc' }
      ]
    },

    'handwritten-ocr-system': {
      code: 'SYS-18 // SEQUENCE-TO-SEQUENCE COMPUTER VISION',
      title: 'Handwritten OCR System (CRNN: CNN + BiLSTM + CTC)',
      subtitle: 'PyTorch handwritten text recognition pipeline combining OpenCV document preprocessing, a 7-layer VGG-style CNN extractor, Bidirectional LSTM sequence modeling, and a Streamlit UI.',
      statuses: [
        { label: 'Implemented (Prototype)', type: 'implemented' }
      ],
      whatItIs: 'A custom PyTorch Optical Character Recognition (OCR) codebase implementing a Convolutional Recurrent Neural Network (CRNN) with Connectionist Temporal Classification (CTC) loss for recognizing handwritten text, accompanied by image preprocessing, line/word segmentation, and a Streamlit interface.',
      whyBuilt: 'Built to implement the classic CRNN (CNN + BiLSTM + CTC) sequence-to-sequence vision architecture from scratch in PyTorch rather than relying solely on off-the-shelf OCR APIs.',
      problem: 'Recognizing variable-length handwritten text without character-level bounding boxes requires collapsing 2D spatial image features into a 1D horizontal feature sequence aligned via CTC.',
      objective: 'Implement image preprocessing (denoising, thresholding, skew correction), a 7-stage CNN backbone that compresses image height H=32 to 1, a Bidirectional LSTM sequence encoder, CTC training/evaluation utilities (CER/WER), and a Streamlit inference app.',
      targetUsers: 'Computer vision learners and engineers studying sequence-to-sequence OCR architectures in PyTorch.',
      technologies: ['Python', 'PyTorch (nn.Conv2d, nn.BatchNorm2d, nn.LSTM)', 'Torchvision', 'OpenCV / Image Preprocessing', 'Streamlit'],
      architecture: 'Input grayscale images (H=32, W) pass through preprocessing (src/preprocess.py) and segmentation (src/segmentation.py). The CRNN model (src/model.py) uses 7 convolutional stages (64 → 128 → 256 → 256 → 512 → 512 → 512 channels) with anisotropic MaxPool2d((2,2), (2,1)) in stages 3–4 to reduce vertical height to H=1 while preserving horizontal width steps. The (B, W, 512) sequence feeds a 256-unit Bidirectional LSTM and a linear projection to character vocabulary classes.',
      workflowSteps: [
        'Document Preprocessing (Grayscale, Denoising, Thresholding, Skew Fix)',
        '7-Layer CNN Backbone (Compresses Height H=32 → 1, 512 Channels)',
        'Spatial-to-Sequence Reshape (B, 512, 1, W) → (B, W, 512)',
        'Bidirectional LSTM (256 Hidden Units) + Linear Vocabulary Projection',
        'CTC Decoding & Streamlit OCR Preview + CER/WER Utilities'
      ],
      implemented: [
        'Custom CRNN PyTorch module (src/model.py) with 7 conv/batchnorm/pooling stages and BiLSTM sequence head.',
        'Modular computer vision pipeline across src/preprocess.py, src/segmentation.py, src/dataset.py, src/train.py, and src/utils.py.',
        'Synthetic data generator (scripts/create_dummy_data.py) for pipeline verification and a Streamlit web app (app.py).'
      ],
      challenges: 'Designing anisotropic pooling kernels ((2,2) stride (2,1) with width padding) so vertical height collapses exactly to 1 at H=32 without squashing horizontal character time-steps.',
      skills: ['PyTorch Custom Neural Architectures (CRNN)', 'Sequence-to-Sequence Vision (BiLSTM + CTC)', 'Document Image Preprocessing', 'Modular ML Codebase Structuring'],
      results: 'Complete, modular 17-file PyTorch CRNN implementation and Streamlit UI verified in huzaifaa69/Handwritten-OCR-System. (No unverified benchmark CER/WER percentages are claimed.)',
      relevance: 'Shows low-level PyTorch tensor manipulation and CNN-to-RNN architectural engineering.',
      limitations: 'Repository provides the architecture, training loop, and synthetic dummy-data verification script; pre-trained production checkpoint weights on IAM Handwriting are not bundled in the git tree.',
      evidence: [
        { label: 'GitHub Repository (huzaifaa69/Handwritten-OCR-System)', url: 'https://github.com/huzaifaa69/Handwritten-OCR-System', type: 'repo' },
        { label: 'CRNN PyTorch Architecture (src/model.py)', url: 'https://github.com/huzaifaa69/Handwritten-OCR-System/blob/main/src/model.py', type: 'doc' }
      ]
    },

    'text-summarizer-app': {
      code: 'SYS-19 // NLP TRANSFORMER PROTOTYPE',
      title: 'Abstractive Text Summarizer App (T5-Small)',
      subtitle: 'Lightweight NLP web application and notebook workflow using Hugging Face’s T5-Small transformer for abstractive summarization of long-form articles.',
      statuses: [
        { label: 'Implemented', type: 'implemented' },
        { label: 'Deployed (Streamlit Cloud)', type: 'deployed' }
      ],
      whatItIs: 'An introductory NLP web application and Jupyter notebook experiment using Hugging Face’s T5-Small encoder-decoder transformer to generate abstractive summaries of long paragraphs and articles.',
      whyBuilt: 'Built as an early applied NLP project to learn sequence-to-sequence transformer inference with Hugging Face and deploy a clean Streamlit web interface.',
      problem: 'Extractive summarization merely copies sentences verbatim; abstractive summarization requires a sequence-to-sequence language model capable of paraphrasing core ideas concisely.',
      objective: 'Experiment with T5-Small summarization in a Jupyter notebook and package the inference pipeline into an accessible Streamlit web app running on CPU or GPU.',
      targetUsers: 'Students and readers wanting quick abstractive summaries of articles or study notes.',
      technologies: ['Python', 'Hugging Face Transformers (t5-small)', 'PyTorch', 'Streamlit', 'Jupyter Notebook'],
      architecture: 'Loads the pretrained t5-small tokenizer and conditional generation model, prepends the T5 task prefix, encodes input text tensors, generates summary tokens via beam search, and renders the output in a Streamlit interface.',
      workflowSteps: [
        'User Article / Paragraph Input in Streamlit UI',
        'T5 Tokenizer Encoding',
        'T5-Small Encoder-Decoder Sequence Generation',
        'Abstractive Summary Output'
      ],
      implemented: [
        'Experimental notebook (Text_Summarization_Project.Huzaifaa.ipynb) testing T5 abstractive summarization.',
        'Streamlit web application wrapper (app.py) and dependency configuration.'
      ],
      challenges: 'Handling T5 token input length limits on longer multi-paragraph articles.',
      skills: ['Encoder-Decoder Transformers (T5)', 'Hugging Face Pipelines', 'Streamlit Prototyping'],
      results: 'Implemented notebook and Streamlit web app deployed to Streamlit Cloud.',
      relevance: 'Served as an early foundational NLP stepping stone toward my later advanced RAG and Hybrid Graph RAG systems (Study Agent, HR Knowledge Platform, Lenovo Troubleshooting Agent).',
      limitations: 'Lightweight early prototype using t5-small (512-token context window); README clone snippet references classmate DSN Sathvik’s repository (sathvik-web/text-summarizer-app), reflecting shared coursework roots.',
      evidence: [
        { label: 'GitHub Repository (huzaifaa69/text-summarizer-app)', url: 'https://github.com/huzaifaa69/text-summarizer-app', type: 'repo' },
        { label: 'Notebook Experiment (Text_Summarization_Project.Huzaifaa.ipynb)', url: 'https://github.com/huzaifaa69/text-summarizer-app/blob/main/text-summarizer-app-main/Text_Summarization_Project.Huzaifaa.ipynb', type: 'doc' },
        { label: 'Streamlit App Link (from Repo README)', url: 'https://text-summarizer-app-ddu6pjgtpwque3rvt98fsi.streamlit.app', type: 'demo' }
      ]
    },

    'ai-resume-analyzer': {
      code: 'SYS-20 // FASTAPI DOCUMENT SCORING PROTOTYPE',
      title: 'AI Resume Analyzer & ATS Scoring Service',
      subtitle: 'FastAPI backend prototype parsing candidate resumes against target job descriptions to evaluate skill alignment, keyword coverage, and structured ATS compatibility.',
      statuses: [
        { label: 'Implemented (Local Prototype)', type: 'implemented' }
      ],
      whatItIs: 'A FastAPI-based document analysis utility designed to parse uploaded resumes against job descriptions and compute ATS keyword coverage and structured feedback.',
      whyBuilt: 'Built to practice FastAPI REST endpoint design for PDF document parsing and structured rubric scoring.',
      problem: 'Job applicants often submit resumes missing critical domain keywords or formatting structures expected by Applicant Tracking Systems (ATS).',
      objective: 'Create a FastAPI service that accepts resume PDFs and target role descriptions, extracts text, evaluates skill/keyword overlap, and returns actionable improvement suggestions.',
      targetUsers: 'Job seekers and students benchmarking resume alignment against technical job descriptions.',
      technologies: ['Python', 'FastAPI', 'PDF Text Extraction', 'NLP / LLM Rubric Scoring'],
      architecture: 'FastAPI REST endpoint accepts resume document uploads and job description text, extracts structured sections, computes keyword and semantic alignment scores, and returns a JSON evaluation payload.',
      workflowSteps: [
        'Resume PDF & Job Description Input (FastAPI Endpoint)',
        'Text Extraction & Section Normalization',
        'Keyword Coverage & ATS Rubric Evaluation',
        'Structured JSON Score & Improvement Feedback'
      ],
      implemented: [
        'FastAPI endpoint and resume-to-job-description scoring pipeline developed locally.'
      ],
      challenges: 'Normalizing inconsistent multi-column PDF resume layouts into clean text sections before scoring.',
      skills: ['FastAPI REST Service Design', 'PDF Document Parsing', 'Automated Rubric Evaluation'],
      results: 'Functional local FastAPI prototype. (No unverified benchmark metrics are claimed.)',
      relevance: 'Complements my broader document-intelligence portfolio (HR Knowledge Platform, Study Agent).',
      limitations: 'Audited against github.com/huzaifaa69: this project is currently a local build and is NOT published among the 17 public GitHub repositories. The repository link is maintained as an explicit placeholder until pushed publicly.',
      evidence: [
        { label: 'GitHub Repository: Not Published Yet (Local FastAPI Build — Link To Be Added)', url: null },
        { label: 'API Docs / Screenshot Placeholder: To Be Added Once Published', url: null }
      ]
    }
  };

  const PROJECT_KEYS = Object.keys(PROJECTS_DATA);

  // ============================================================================
  // DOM REFERENCES
  // ============================================================================
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');

  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('project-search');
  const projectCards = document.querySelectorAll('.project-card');
  const filterStatus = document.getElementById('filter-status');

  const modalBackdrop = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const modalCode = document.getElementById('modal-code');
  const modalStatuses = document.getElementById('modal-statuses');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalEvidenceBar = document.getElementById('modal-evidence-bar');
  const modalDossierContent = document.getElementById('modal-dossier-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalPrevBtn = document.getElementById('modal-prev-btn');
  const modalNextBtn = document.getElementById('modal-next-btn');

  let activeFilter = 'all';
  let currentProjectId = null;
  let lastFocusedTrigger = null;

  // ============================================================================
  // 1. MOBILE NAVIGATION
  // ============================================================================
  if (mobileNavToggle && primaryNav) {
    mobileNavToggle.addEventListener('click', function () {
      const isOpen = primaryNav.classList.toggle('open');
      mobileNavToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (primaryNav.classList.contains('open')) {
          primaryNav.classList.remove('open');
          mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // ============================================================================
  // 2. STICKY SCROLL SPY & BACK-TO-TOP VISIBILITY
  // ============================================================================
  const sections = document.querySelectorAll('main section[id]');

  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    if (backToTopBtn) {
      if (scrollY > 450) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    let currentSectionId = '';
    sections.forEach(function (sec) {
      const top = sec.offsetTop - 130;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === '#' + currentSectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ============================================================================
  // 3. PROJECT CATEGORY FILTERING & KEYWORD SEARCH
  // ============================================================================
  function filterProjects() {
    const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
    let visibleCount = 0;

    projectCards.forEach(function (card) {
      const categories = (card.getAttribute('data-categories') || '').split(/\s+/);
      const matchesCategory = activeFilter === 'all' || categories.includes(activeFilter);
      const cardText = card.textContent.toLowerCase();
      const matchesQuery = !query || cardText.includes(query);

      if (matchesCategory && matchesQuery) {
        card.removeAttribute('hidden');
        visibleCount++;
      } else {
        card.setAttribute('hidden', '');
      }
    });

    if (filterStatus) {
      const categoryLabel = activeFilter === 'all' ? 'all categories' : activeFilter.toUpperCase();
      if (query) {
        filterStatus.textContent = 'Showing ' + visibleCount + ' of ' + projectCards.length + ' verified projects matching "' + query + '" in ' + categoryLabel + '.';
      } else {
        filterStatus.textContent = 'Showing ' + visibleCount + ' of ' + projectCards.length + ' verified engineering projects (' + categoryLabel + ').';
      }
    }
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      activeFilter = btn.getAttribute('data-filter') || 'all';
      filterButtons.forEach(function (b) {
        const isCurrent = b === btn;
        b.classList.toggle('active', isCurrent);
        b.setAttribute('aria-pressed', String(isCurrent));
      });
      filterProjects();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', filterProjects);
  }

  // ============================================================================
  // 4. SAFE DOM RENDERING HELPERS FOR 14-POINT DOSSIER MODAL
  // ============================================================================
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderDossierSection(number, title, bodyHtml, fullSpan) {
    return (
      '<section class="dossier-section' + (fullSpan ? ' full-span' : '') + '">' +
        '<span class="dossier-num">' + escapeHtml(number) + '</span>' +
        '<h3 class="dossier-heading">' + escapeHtml(title) + '</h3>' +
        '<div class="dossier-text">' + bodyHtml + '</div>' +
      '</section>'
    );
  }

  function openProjectModal(projectId, triggerElement) {
    const data = PROJECTS_DATA[projectId];
    if (!data || !modalBackdrop) return;

    currentProjectId = projectId;
    if (triggerElement) {
      lastFocusedTrigger = triggerElement;
    }

    // Header code & title
    modalCode.textContent = data.code;
    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;

    // Status badges
    modalStatuses.innerHTML = data.statuses
      .map(function (st) {
        return '<span class="status-badge status-' + escapeHtml(st.type) + '">' + escapeHtml(st.label) + '</span>';
      })
      .join('');

    // Evidence bar buttons/placeholders
    modalEvidenceBar.innerHTML = data.evidence
      .map(function (ev) {
        if (ev.url) {
          const isInternal = ev.type === 'internal' || ev.url.startsWith('#');
          const btnClass = ev.type === 'demo' ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm';
          const targetAttr = isInternal ? '' : ' target="_blank" rel="noopener noreferrer"';
          const icon = isInternal ? '↓' : '↗';
          return (
            '<a href="' + escapeHtml(ev.url) + '"' + targetAttr + ' class="' + btnClass + '" data-modal-internal="' + isInternal + '">' +
              '<span>' + escapeHtml(ev.label) + '</span>' +
              '<span aria-hidden="true">' + icon + '</span>' +
            '</a>'
          );
        } else {
          return (
            '<span class="evidence-pill pill-amber" role="note">' +
              escapeHtml(ev.label) +
            '</span>'
          );
        }
      })
      .join('');

    // Attach handler if an internal section link is clicked inside modal evidence bar
    const internalLinks = modalEvidenceBar.querySelectorAll('a[data-modal-internal="true"]');
    internalLinks.forEach(function (a) {
      a.addEventListener('click', function () {
        closeProjectModal(false);
      });
    });

    // Build workflow steps HTML
    const workflowHtml =
      '<p>' + escapeHtml(data.architecture) + '</p>' +
      '<div class="dossier-workflow" aria-label="Architecture workflow">' +
        data.workflowSteps
          .map(function (step) {
            return '<span class="workflow-step">' + escapeHtml(step) + '</span>';
          })
          .join('<span class="workflow-arrow" aria-hidden="true">→</span>') +
      '</div>';

    // Build tech stack pills
    const techHtml =
      '<ul class="tech-list">' +
        data.technologies
          .map(function (t) {
            return '<li>' + escapeHtml(t) + '</li>';
          })
          .join('') +
      '</ul>';

    // Build personal implementation bullets
    const implementedHtml =
      '<ul class="dossier-list">' +
        data.implemented
          .map(function (item) {
            return '<li>' + escapeHtml(item) + '</li>';
          })
          .join('') +
      '</ul>';

    // Build skills pills
    const skillsHtml =
      '<ul class="tech-list">' +
        data.skills
          .map(function (s) {
            return '<li>' + escapeHtml(s) + '</li>';
          })
          .join('') +
      '</ul>';

    // Build evidence list in section 14
    const evidenceListHtml =
      '<ul class="dossier-list">' +
        data.evidence
          .map(function (ev) {
            if (ev.url) {
              const isInternal = ev.url.startsWith('#');
              const targetAttr = isInternal ? '' : ' target="_blank" rel="noopener noreferrer"';
              return '<li><a href="' + escapeHtml(ev.url) + '"' + targetAttr + '>' + escapeHtml(ev.label) + ' (' + escapeHtml(ev.url) + ')</a></li>';
            }
            return '<li><span class="text-muted">' + escapeHtml(ev.label) + '</span></li>';
          })
          .join('') +
      '</ul>';

    // Render all 14 required sections
    modalDossierContent.innerHTML = [
      renderDossierSection('01 // WHAT IT IS', 'System Overview', '<p>' + escapeHtml(data.whatItIs) + '</p>', false),
      renderDossierSection('02 // WHY I BUILT IT', 'Motivation & Context', '<p>' + escapeHtml(data.whyBuilt) + '</p>', false),
      renderDossierSection('03 // PROBLEM STATEMENT', 'Engineering Problem', '<p>' + escapeHtml(data.problem) + '</p>', false),
      renderDossierSection('04 // OBJECTIVE', 'System Goal', '<p>' + escapeHtml(data.objective) + '</p>', false),
      renderDossierSection('05 // TARGET USERS', 'Intended Audience & Operators', '<p>' + escapeHtml(data.targetUsers) + '</p>', false),
      renderDossierSection('06 // TOOLS & TECHNOLOGIES', 'Verified Tech Stack', techHtml, false),
      renderDossierSection('07 // ARCHITECTURE & WORKFLOW', 'System Design & Data Flow', workflowHtml, true),
      renderDossierSection('08 // WHAT I PERSONALLY IMPLEMENTED', 'Engineering Implementation', implementedHtml, true),
      renderDossierSection('09 // CHALLENGES & TECHNICAL DECISIONS', 'Key Trade-offs & Problem Solving', '<p>' + escapeHtml(data.challenges) + '</p>', false),
      renderDossierSection('10 // OUTCOME & MEASURED RESULTS', 'Quantitative & Verified Results', '<p>' + escapeHtml(data.results) + '</p>', false),
      renderDossierSection('11 // SKILLS DEVELOPED', 'Core Competencies Applied', skillsHtml, false),
      renderDossierSection('12 // REAL-WORLD RELEVANCE', 'Practical Engineering Value', '<p>' + escapeHtml(data.relevance) + '</p>', false),
      renderDossierSection('13 // LIMITATIONS & FUTURE WORK', 'Honest Boundaries & Next Steps', '<p>' + escapeHtml(data.limitations) + '</p>', true),
      renderDossierSection('14 // VERIFICATION & EVIDENCE', 'Audited Links & Placeholders', evidenceListHtml, true)
    ].join('');

    // Show modal and lock background scroll
    modalBackdrop.removeAttribute('hidden');
    document.body.classList.add('modal-open');
    modalBody.scrollTop = 0;

    // Move keyboard focus to Close button for immediate accessibility
    if (modalCloseBtn) {
      modalCloseBtn.focus();
    }
  }

  function closeProjectModal(restoreFocus) {
    if (!modalBackdrop || modalBackdrop.hasAttribute('hidden')) return;
    modalBackdrop.setAttribute('hidden', '');
    document.body.classList.remove('modal-open');
    currentProjectId = null;

    if (restoreFocus !== false && lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
    }
  }

  function stepProject(delta) {
    if (!currentProjectId) return;
    const idx = PROJECT_KEYS.indexOf(currentProjectId);
    if (idx === -1) return;
    const nextIdx = (idx + delta + PROJECT_KEYS.length) % PROJECT_KEYS.length;
    openProjectModal(PROJECT_KEYS[nextIdx], lastFocusedTrigger);
  }

  // Bind all "[data-open-project]" buttons across the entire page
  document.querySelectorAll('[data-open-project]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const pid = btn.getAttribute('data-open-project');
      openProjectModal(pid, btn);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', function () {
      closeProjectModal(true);
    });
  }

  if (modalPrevBtn) {
    modalPrevBtn.addEventListener('click', function () {
      stepProject(-1);
    });
  }

  if (modalNextBtn) {
    modalNextBtn.addEventListener('click', function () {
      stepProject(1);
    });
  }

  // Close when clicking backdrop outside modal container
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function (event) {
      if (event.target === modalBackdrop) {
        closeProjectModal(true);
      }
    });
  }

  // Keyboard Accessibility: Escape closes modal/nav; Left/Right arrows navigate projects; Tab traps focus in modal
  document.addEventListener('keydown', function (event) {
    const isModalOpen = modalBackdrop && !modalBackdrop.hasAttribute('hidden');

    if (event.key === 'Escape') {
      if (isModalOpen) {
        event.preventDefault();
        closeProjectModal(true);
        return;
      }
      if (primaryNav && primaryNav.classList.contains('open')) {
        primaryNav.classList.remove('open');
        if (mobileNavToggle) {
          mobileNavToggle.setAttribute('aria-expanded', 'false');
          mobileNavToggle.focus();
        }
      }
    }

    if (!isModalOpen) return;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      stepProject(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      stepProject(1);
    } else if (event.key === 'Tab') {
      const focusable = modalBackdrop.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
})();
