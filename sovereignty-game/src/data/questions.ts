import { Question } from '../types';

export const ALL_QUESTIONS: Question[] = [
  // ── Pathway 1: Independent Linux Foundation ────────────────────────────────
  {
    id: 1,
    category: 'Linux Independence',
    categoryIcon: '🐧',
    scenario: 'Red Hat restricts RHEL source code overnight. Your 500-server estate is at risk.',
    question: 'Fastest sovereignty fix with zero OS changes?',
    options: [
      'Migrate to Ubuntu Pro',
      'Stay on RHEL and wait',
      'SUSE Multi-Linux Support — EU patches, same OS',
      'Switch to unmanaged CentOS Stream',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 1a — SUSE Multi-Linux Support lets you decouple your support and patch supply chain from the OS vendor instantly. Your RHEL systems stay untouched while patches now flow through an EU-headquartered company.',
    difficulty: 'easy',
  },
  {
    id: 2,
    category: 'Linux Independence',
    categoryIcon: '🐧',
    scenario: 'Auditors demand NIS2/DORA compliance: auditable builds, 16-year support lifecycle.',
    question: 'Which enterprise Linux meets every requirement?',
    options: [
      'Red Hat Enterprise Linux — longest market history',
      'Ubuntu Pro — 10-year ESM coverage',
      'SUSE SLES — SLSA L4, SBOMs, EAL4+, 16-year lifecycle',
      'Debian LTS — community-supported, free',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 1b — SLES is the only enterprise Linux with SLSA Level 4 provenance, SBOMs per package, EAL4+ certification, and a 16-year support lifecycle — the gold standard for NIS2, DORA, and federal security compliance.',
    difficulty: 'medium',
  },
  {
    id: 3,
    category: 'Linux Independence',
    categoryIcon: '🐧',
    scenario: '800 mixed servers: RHEL, Ubuntu, SLES. Patching is inconsistent. Compliance audits are failing.',
    question: 'Most efficient fix for multi-distro compliance?',
    options: [
      'Standardize on one distro — 6-month migration',
      'Buy separate consoles per distro',
      'SUSE Multi-Linux Manager — one console for all Linux',
      'Custom Ansible playbooks per distro',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 1c — SUSE Multi-Linux Manager provides a single pane of glass across RHEL, Ubuntu, and SLES. Unified patch management, one compliance audit trail, consistent security posture — without forcing a full migration.',
    difficulty: 'medium',
  },

  // ── Pathway 2: Virtualization Independence ────────────────────────────────
  {
    id: 4,
    category: 'Virtualization',
    categoryIcon: '⚙️',
    scenario: 'Broadcom buys VMware. Your VMware licensing cost just tripled. 200 VMs need a new home.',
    question: 'Which move best restores your independence?',
    options: [
      'Negotiate a 3-year VMware renewal',
      'Move all workloads to AWS EC2',
      'Migrate to Microsoft Hyper-V',
      'SUSE Virtualization — open KVM, air-gap capable',
    ],
    correct: 3,
    explanation:
      '💡 SUSE PATHWAY 2a — SUSE Virtualization runs your existing VMs on open, auditable KVM. No license fees, air-gap capable for regulated environments, and you control your own upgrade cycle.',
    difficulty: 'medium',
  },
  {
    id: 5,
    category: 'Virtualization',
    categoryIcon: '⚙️',
    scenario: 'Using the VMware exit to modernize. You want legacy VMs AND containers — without running two stacks.',
    question: 'Best single platform for both VMs and containers?',
    options: [
      'SUSE Virt + separate Kubernetes from another vendor',
      'SUSE Virtualization + Rancher Prime — one platform',
      'VMware for VMs + OpenShift for containers',
      'Containerize all VMs immediately',
    ],
    correct: 1,
    explanation:
      '💡 SUSE PATHWAY 2b — SUSE Virtualization + Rancher Prime makes Kubernetes your single operational standard for both traditional and cloud-native workloads. One API, one management plane, one team skill set.',
    difficulty: 'hard',
  },

  // ── Pathway 3: Hybrid & Multi-Cloud ───────────────────────────────────────
  {
    id: 6,
    category: 'Cloud Strategy',
    categoryIcon: '☁️',
    scenario: 'Critical workloads span AWS EKS and Azure AKS. No unified compliance view. Auditors are blocked.',
    question: 'What is the sovereign multi-cloud fix?',
    options: [
      'Consolidate on one hyperscaler',
      'Build a custom meta-orchestration layer',
      'SUSE Rancher Prime — single control plane everywhere',
      'Standardize with Terraform IaC',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 3a — SUSE Rancher Prime abstracts away the underlying cloud. Skills become portable, policies enforced uniformly, and governance is consistent across hybrid infrastructure — without consolidating on one cloud.',
    difficulty: 'medium',
  },
  {
    id: 7,
    category: 'Cloud Strategy',
    categoryIcon: '☁️',
    scenario: "Bank's trading algorithms run on AWS. Legal flags US CLOUD Act jurisdiction risk over your data.",
    question: "Where do your 'Crown Jewel' workloads belong?",
    options: [
      'AWS GovCloud with a DPA',
      'Customer-managed encryption keys on AWS',
      'SUSE Rancher Prime + SLES on-premise or EU sovereign cloud',
      'Azure EU Data Boundary program',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 3b — The US CLOUD Act (2018) can compel any US company to hand over data stored anywhere. Encryption alone does NOT block this. The only real fix: repatriate Crown Jewel workloads to infrastructure you control.',
    difficulty: 'hard',
  },

  // ── Pathway 4: Software Supply Chain Security ─────────────────────────────
  {
    id: 8,
    category: 'Supply Chain Security',
    categoryIcon: '🔗',
    scenario: '300+ Docker Hub images with unknown licenses. EU Cyber Resilience Act audit in 90 days.',
    question: 'Fastest compliant fix for your container supply chain?',
    options: [
      'Block Docker Hub; devs build their own images',
      'Switch to GitHub Container Registry',
      'SUSE Application Collection — audited images, SBOM + SLSA',
      'Scan existing Docker Hub images with Trivy',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 4a — SUSE Application Collection ships every image with a full SBOM, SLSA Level 4 provenance, clear licenses, and regular CVE scans. Developer velocity stays high; every image is pre-vetted for CRA compliance.',
    difficulty: 'medium',
  },
  {
    id: 9,
    category: 'Supply Chain Security',
    categoryIcon: '🔗',
    scenario: 'Defense contractor on a classified, air-gapped network. Developers still need secure container images.',
    question: 'How do you supply secure images with zero internet access?',
    options: [
      'Build all images from scratch on air-gapped servers',
      'SUSE App Collection mirrored to SUSE Private Registry',
      'DMZ internet access for image pulls, then re-push',
      'Manually approve Docker Hub images quarterly',
    ],
    correct: 1,
    explanation:
      '💡 SUSE PATHWAY 4b — SUSE Private Registry (mirroring SUSE Application Collection) gives you a fully air-gapped, internally-operated image supply chain. Full chain of custody — mandatory for classified and defense environments.',
    difficulty: 'hard',
  },

  // ── Pathway 5: Private & Sovereign AI ─────────────────────────────────────
  {
    id: 10,
    category: 'Sovereign AI',
    categoryIcon: '🤖',
    scenario: 'Legal blocks AI: customer data cannot leave EU jurisdiction via OpenAI or Azure OpenAI APIs.',
    question: 'How do you deliver AI without data leaving your premises?',
    options: [
      'Use OpenAI API with PII anonymization',
      'SUSE AI — open-weight LLMs on your own hardware',
      'Azure OpenAI — GDPR compliant, EU data residency',
      'Ban AI until EU regulations stabilize',
    ],
    correct: 1,
    explanation:
      '💡 SUSE PATHWAY 5a — SUSE AI runs open-weight LLMs on your own on-premise GPU infrastructure. AI processing stays inside your firewall — no CLOUD Act exposure, no data residency risk, EU AI Act compliant from day one.',
    difficulty: 'medium',
  },
  {
    id: 11,
    category: 'Sovereign AI',
    categoryIcon: '🤖',
    scenario: 'CISO suspects staff are sending sensitive documents to ChatGPT. No approved AI platform exists yet.',
    question: 'What is your immediate action?',
    options: [
      'Block all AI domains at the firewall',
      'Survey employees on AI tool usage',
      'SUSE Security + Observability — detect AI API call leaks',
      'Send a policy memo about unsanctioned AI tools',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 5b — SUSE Security and Observability detect unauthorized AI API calls leaving your network right now. You gain visibility before exposure occurs — and the data to build a proper AI governance strategy.',
    difficulty: 'medium',
  },

  // ── Pathway 7: Sovereign Operational Support ──────────────────────────────
  {
    id: 12,
    category: 'Sovereign Support',
    categoryIcon: '⚖️',
    scenario: 'Open-source stack is sovereign, but support engineers access your systems from outside the EU.',
    question: 'How do you close this jurisdictional support gap?',
    options: [
      'Sign a GDPR Data Processing Agreement',
      'Restrict sessions to E2E encrypted tools',
      'SUSE Sovereign Premium Support — EU engineers, EU law',
      'Build an internal team, remove all vendor access',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 7a — Even a sovereign stack carries risk if support operates under a different legal jurisdiction. SUSE Sovereign Premium Support provides EU-based engineers under EU law — the "last mile" of sovereignty.',
    difficulty: 'hard',
  },

  // ── Pathway 6: Edge & Disconnected Operations ─────────────────────────────
  {
    id: 13,
    category: 'Edge Computing',
    categoryIcon: '🌐',
    scenario: '3,000 utility substations across Europe. WAN drops regularly. Cloud-dependent architecture fails.',
    question: 'What keeps every substation running autonomously?',
    options: [
      'AWS Outposts at each substation',
      'Redundant 4G/5G WAN failover',
      'SUSE Edge — autonomous, air-gap capable per site',
      'Proprietary RTOS for OT/SCADA environments',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 6a — SUSE Edge (SLE Micro + K3s) makes each site a self-sufficient island of compute. Sites run autonomously regardless of WAN connectivity — non-negotiable for utilities, telcos, and defense.',
    difficulty: 'hard',
  },
  {
    id: 14,
    category: 'Edge Computing',
    categoryIcon: '🌐',
    scenario: '10,000 telecom edge nodes nationwide. Sending engineers to each site for patches is unsustainable.',
    question: 'How do you maintain security posture at fleet scale?',
    options: [
      'Ansible Tower across all sites',
      'AWS Outposts with EKS Anywhere',
      'SUSE Rancher Prime + Edge — manage 10,000 sites as one fleet',
      'Accept inconsistency at this scale',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 6b — SUSE Rancher Prime + SUSE Edge turns thousands of autonomous sites into a single managed fleet. Policy, updates, and rollbacks as fleet operations — SEAL-4 security posture without on-site visits.',
    difficulty: 'hard',
  },

  // ── General Sovereignty Concepts ─────────────────────────────────────────
  {
    id: 15,
    category: 'Supply Chain Security',
    categoryIcon: '📦',
    scenario: 'EU Cyber Resilience Act mandates full software transparency for every product sold in Europe.',
    question: 'What does an SBOM provide, and why does SUSE ship one per image?',
    options: [
      'A licensing cost breakdown for procurement',
      'Full component inventory — enabling CVE tracking and CRA compliance',
      'A performance benchmark for containers',
      'A GDPR declaration for data in the container',
    ],
    correct: 1,
    explanation:
      '💡 SUSE PATHWAY 4a — An SBOM is a machine-readable inventory of every library and dependency inside software. EU CRA mandates SBOMs for products sold in Europe. SUSE Application Collection ships them automatically, making compliance a feature.',
    difficulty: 'medium',
  },
  {
    id: 16,
    category: 'Cloud Strategy',
    categoryIcon: '☁️',
    scenario: 'Your board wants a framework to measure digital independence across all infrastructure dimensions.',
    question: "What does the EU's SEAL framework measure?",
    options: [
      'Cloud storage encryption security levels',
      'Sovereign infrastructure maturity across four key dimensions',
      'A certification standard for EU cloud providers',
      'GDPR adequacy rating for data transfers',
    ],
    correct: 1,
    explanation:
      '💡 The SEAL framework measures sovereign infrastructure maturity across Strategic, Economic, Access, and Legal dimensions. SUSE pathways are explicitly mapped to SEAL levels — from SEAL-3 (Multi-Linux Support) to SEAL-4 (full on-premise + EU support).',
    difficulty: 'hard',
  },
];

/** Pick N random questions from the full pool */
export function pickQuestions(n: number): Question[] {
  const shuffled = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, ALL_QUESTIONS.length));
}

export const GAME_CONFIG = {
  totalQuestions: 10,
  timePerQuestion: 20, // seconds — increased for readability
  basePoints: 1000,
  maxSpeedBonus: 500,
};
