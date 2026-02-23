import { Question } from '../types';

export const ALL_QUESTIONS: Question[] = [
  // ── Pathway 1: Independent Linux Foundation ────────────────────────────────
  {
    id: 1,
    category: 'Linux Independence',
    categoryIcon: '🐧',
    question:
      'Red Hat unexpectedly restricts access to RHEL source code overnight. Your 500-server estate runs RHEL. What is the FASTEST sovereignty-preserving response that requires zero OS changes?',
    options: [
      'Migrate immediately to Ubuntu Pro — it\'s also enterprise Linux',
      'Stay on RHEL and hope the policy reverses itself',
      'Switch to SUSE Multi-Linux Support: EU-based patches and support, same OS, zero retraining',
      'Move everything to unmanaged CentOS Stream',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 1a — SUSE Multi-Linux Support lets you decouple your support and patch supply chain from the OS vendor instantly. Your RHEL systems stay untouched while patches now flow through an EU-headquartered company. It\'s the lowest-friction entry point to sovereignty with zero disruption.',
    difficulty: 'easy',
  },
  {
    id: 2,
    category: 'Linux Independence',
    categoryIcon: '🐧',
    question:
      'Your security team demands NIS2 and DORA compliance with reproducible, auditable OS builds and a 16-year support lifecycle. Which OS migration achieves this?',
    options: [
      'Red Hat Enterprise Linux — it has the longest market history',
      'Ubuntu Pro — Canonical offers 10-year ESM coverage',
      'SUSE Linux Enterprise Server (SLES) — SLSA Level 4, SBOMs, EAL4+ certified, 16-year lifecycle',
      'Debian LTS — it\'s community-supported and free',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 1b — SLES delivers verifiable security through reproducible builds and a fully transparent, auditable build pipeline. It\'s the only enterprise Linux with SLSA Level 4 provenance, SBOMs per package, EAL4+ certification, and a 16-year support lifecycle — making it the gold standard for NIS2, DORA, and federal security compliance.',
    difficulty: 'medium',
  },
  {
    id: 3,
    category: 'Linux Independence',
    categoryIcon: '🐧',
    question:
      'Your organization runs a mixed fleet of RHEL, Ubuntu, and SLES across 800 servers. Patching is inconsistent and compliance audits are failing. What\'s the most efficient fix?',
    options: [
      'Standardize on one Linux distro — migration takes 6 months but unifies tooling',
      'Buy separate vendor consoles for each Linux distribution',
      'Deploy SUSE Multi-Linux Manager: one console for patching, compliance, and config across all Linux',
      'Write custom Ansible playbooks to manage each distro independently',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 1c — SUSE Multi-Linux Manager provides a single pane of glass across RHEL, Ubuntu, and SLES simultaneously. You get unified patch management, a single compliance audit trail, and consistent security posture — without forcing a full migration. It\'s a Quick Win that improves SEAL-3 operational sovereignty immediately.',
    difficulty: 'medium',
  },

  // ── Pathway 2: Virtualization Independence ────────────────────────────────
  {
    id: 4,
    category: 'Virtualization',
    categoryIcon: '⚙️',
    question:
      'After the Broadcom acquisition, your VMware licensing costs have tripled and renewal terms changed overnight. 200 VMs need a home. Which move best restores your independence?',
    options: [
      'Negotiate a 3-year VMware renewal — Broadcom will eventually stabilize pricing',
      'Move all workloads to AWS EC2 — public cloud scales better than VMs',
      'Migrate VMs to Microsoft Hyper-V — still proprietary but cheaper',
      'Migrate to SUSE Virtualization: open-source, KVM-based, Kubernetes-native, air-gap capable',
    ],
    correct: 3,
    explanation:
      '💡 SUSE PATHWAY 2a — SUSE Virtualization runs your existing VMs as-is on an open, auditable platform you fully control. The hypervisor is KVM-based (kernel-native, no license fees), the platform is air-gap capable for regulated environments, and you decide your own upgrade cycle. This is Pathway 2a: break the proprietary hypervisor cycle.',
    difficulty: 'medium',
  },
  {
    id: 5,
    category: 'Virtualization',
    categoryIcon: '⚙️',
    question:
      'Your organization is using the VMware exit to modernize. You want legacy VMs AND new containerized workloads on a single platform. What achieves this without running two separate stacks?',
    options: [
      'Run VMs on SUSE Virtualization and containers on a separate Kubernetes cluster from a different vendor',
      'SUSE Virtualization + SUSE Rancher Prime: one Kubernetes-native platform for both VMs and containers',
      'Keep VMs on VMware and add OpenShift for containers — best of both worlds',
      'Containerize all VMs immediately — VMs are legacy technology anyway',
    ],
    correct: 1,
    explanation:
      '💡 SUSE PATHWAY 2b — Converging on SUSE Virtualization + Rancher Prime means Kubernetes becomes your single operational standard for both traditional and cloud-native workloads. One API, one management plane, one team skill set. This eliminates infrastructure complexity and puts you on the path to SEAL-4 for your infrastructure layer.',
    difficulty: 'hard',
  },

  // ── Pathway 3: Hybrid & Multi-Cloud ───────────────────────────────────────
  {
    id: 6,
    category: 'Cloud Strategy',
    categoryIcon: '☁️',
    question:
      'Your critical workloads span AWS EKS and Azure AKS. Each team uses different deployment tools and policies. Auditors can\'t get a unified compliance view. What\'s the sovereign fix?',
    options: [
      'Pick one hyperscaler and consolidate — multi-cloud adds complexity',
      'Write a custom meta-orchestration layer on top of both cloud APIs',
      'Deploy SUSE Rancher Prime as a multi-cluster control plane across on-prem, AWS, and Azure',
      'Use Terraform to standardize infrastructure-as-code across both clouds',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 3a — SUSE Rancher Prime gives you a single control plane that abstracts away the underlying cloud. Your team\'s skills become portable across any environment, policies are enforced uniformly, and you get consistent governance across hybrid infrastructure — without being forced to consolidate on one cloud. That\'s SEAL-3 for cloud operations.',
    difficulty: 'medium',
  },
  {
    id: 7,
    category: 'Cloud Strategy',
    categoryIcon: '☁️',
    question:
      'Your bank\'s trading algorithms run on AWS. Legal flags that the US CLOUD Act can compel AWS to hand over data regardless of GDPR. The board demands these "Crown Jewel" workloads move. Where do they go?',
    options: [
      'AWS GovCloud with a DPA — GDPR compliant and still AWS',
      'Encrypt data at rest with customer-managed keys on AWS — that blocks CLOUD Act requests',
      'Repatriate to SUSE Rancher Prime on-premise or a sovereign EU cloud using SUSE Rancher Prime + SLES',
      'Move to Azure — Microsoft is headquartered in the EU through its EU Data Boundary program',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 3b — The US CLOUD Act (2018) can compel any US-incorporated company to provide data stored anywhere in the world. Encryption alone does NOT block this. The only real fix is repatriation: move Crown Jewel workloads to infrastructure you control, governed by your own legal framework. SUSE Rancher Prime + SLES on-premise or in an EU-operated sovereign cloud is the sovereign answer.',
    difficulty: 'hard',
  },

  // ── Pathway 4: Software Supply Chain Security ─────────────────────────────
  {
    id: 8,
    category: 'Supply Chain Security',
    categoryIcon: '🔗',
    question:
      'A security audit reveals your developers pull 300+ container images from Docker Hub, many with unknown licenses and no vulnerability history. The EU Cyber Resilience Act (CRA) audit is in 90 days. What\'s your fastest compliant fix?',
    options: [
      'Block Docker Hub at the firewall and tell developers to build their own images',
      'Move to GitHub Container Registry — it\'s more enterprise than Docker Hub',
      'Switch to SUSE Application Collection: 100+ audited apps, each with SBOM, SLSA provenance, and license clarity',
      'Scan all existing Docker Hub images with Trivy and document the results',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 4a — SUSE Application Collection is a curated, audited source for container images. Every image ships with a full SBOM, SLSA Level 4 provenance, clear license information, and regular CVE scans. Developer velocity stays high, but every image is pre-vetted. This is a Quick Win that puts you on the path to EU CRA and AI Act audit readiness from day one.',
    difficulty: 'medium',
  },
  {
    id: 9,
    category: 'Supply Chain Security',
    categoryIcon: '🔗',
    question:
      'Your defense contractor operates classified networks that cannot touch the public internet. Developers still need curated, secure container images. How do you solve this?',
    options: [
      'Build all images from scratch on air-gapped build servers — slow but fully controlled',
      'Use SUSE Application Collection mirrored into SUSE Private Registry for a fully self-sufficient internal supply chain',
      'Allow internet access in a DMZ only for image pulls, then scan and re-push internally',
      'Approve a list of Docker Hub images manually and update the list quarterly',
    ],
    correct: 1,
    explanation:
      '💡 SUSE PATHWAY 4b — SUSE Private Registry (mirroring SUSE Application Collection) gives you a fully air-gapped, internally-operated image supply chain. Images never need to touch the internet. You maintain full chain of custody — mandatory for regulated, classified, and defense environments. This achieves SEAL-4 for supply chain sovereignty.',
    difficulty: 'hard',
  },

  // ── Pathway 5: Private & Sovereign AI ─────────────────────────────────────
  {
    id: 10,
    category: 'Sovereign AI',
    categoryIcon: '🤖',
    question:
      'Your legal team blocks AI adoption because customer data would leave your EU jurisdiction via OpenAI or Azure OpenAI APIs. The business wants AI capabilities NOW. What does SUSE recommend?',
    options: [
      'Use OpenAI API with anonymization — strip PII before sending to the API',
      'Deploy SUSE AI: run open-weight LLMs on your own GPU-equipped hardware, data never leaves your premises',
      'Use Microsoft Azure OpenAI — Azure is GDPR compliant and has EU data residency',
      'Ban AI until EU regulations fully stabilize',
    ],
    correct: 1,
    explanation:
      '💡 SUSE PATHWAY 5a — SUSE AI deploys open-weight large language models on your own on-premise GPU infrastructure. AI processing happens inside your firewall — no API calls to foreign clouds, no data residency risk, no CLOUD Act exposure. Your intellectual property stays yours. This achieves SEAL-4 for AI workloads and is designed for EU AI Act compliance from day one.',
    difficulty: 'medium',
  },
  {
    id: 11,
    category: 'Sovereign AI',
    categoryIcon: '🤖',
    question:
      'Your CISO suspects employees are sending sensitive documents to ChatGPT and Gemini from corporate devices. You don\'t yet have an approved AI platform. What\'s the immediate step?',
    options: [
      'Block all AI-related domains at the firewall immediately',
      'Launch an internal survey to understand which AI tools employees use',
      'Use SUSE Security + SUSE Observability to detect unauthorized AI API calls leaving your network',
      'Issue a policy memo reminding staff not to use unsanctioned AI tools',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 5b — SUSE Security and SUSE Observability can detect unauthorized AI API calls leaving your network right now — before you build full AI infrastructure. You gain visibility into which tools employees use, what data flows where, and can act before exposure occurs. This Quick Win strengthens SEAL-2/3 immediately and gives you the data to build a proper AI governance strategy.',
    difficulty: 'medium',
  },

  // ── Pathway 7: Sovereign Operational Support ──────────────────────────────
  {
    id: 12,
    category: 'Sovereign Support',
    categoryIcon: '⚖️',
    question:
      'Your open-source stack is sovereign, but your support contract is with a US-based vendor whose engineers access your systems from outside the EU. Your legal team calls this a hidden jurisdictional risk. What closes this gap?',
    options: [
      'Ask the vendor to sign a GDPR-compliant Data Processing Agreement',
      'Only allow support sessions via end-to-end encrypted remote access tools',
      'Switch to SUSE Sovereign Premium Support: support handled exclusively by EU-based engineers under EU law',
      'Build an internal support team to eliminate all external vendor access',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 7a — Even a perfectly sovereign open-source stack carries a hidden risk if the humans accessing it for support operate under a different legal jurisdiction. SUSE Sovereign Premium Support provides support handled exclusively by EU-based engineers, under EU law. This is the "last mile" of sovereignty — bridging from SEAL-3 to SEAL-4 for your operational layer.',
    difficulty: 'hard',
  },
  // ── Pathway 6: Edge & Disconnected Operations ─────────────────────────────
  {
    id: 13,
    category: 'Edge Computing',
    categoryIcon: '🌐',
    question:
      'A utility company operates 3,000 substations across Europe. When WAN connectivity drops, substations must keep running autonomously. Cloud-dependent architecture is not an option. What\'s the right solution?',
    options: [
      'Deploy AWS Outposts at each substation — it\'s designed for on-premise workloads',
      'Add redundant 4G/5G failover — connectivity is the real problem, not architecture',
      'Deploy SUSE Edge at each site: fully autonomous, air-gap capable, self-sufficient compute per location',
      'Use a proprietary RTOS designed for OT/SCADA environments',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 6a — SUSE Edge makes each site a self-sufficient island of compute based on SLE Micro and K3s. Sites run autonomously regardless of WAN connectivity. For utilities, telcos, and defense, this is existential — operational continuity is non-negotiable. Each site can achieve SEAL-4 independently.',
    difficulty: 'hard',
  },
  {
    id: 14,
    category: 'Edge Computing',
    categoryIcon: '🌐',
    question:
      'Your telecom manages 10,000 edge nodes across the country. Sending engineers to each site for patches and config updates is not sustainable. How do you maintain consistent security posture at scale?',
    options: [
      'Automate with Ansible Tower across all sites — it\'s already in your toolchain',
      'Standardize on AWS Outposts and use EKS Anywhere for fleet-wide management',
      'SUSE Rancher Prime + SUSE Edge: manage all 10,000 sites as a single logical fleet with centralized policy and rollback',
      'Accept some inconsistency — fully uniform edge fleets are unrealistic at this scale',
    ],
    correct: 2,
    explanation:
      '💡 SUSE PATHWAY 6b — SUSE Rancher Prime combined with SUSE Edge turns thousands of autonomous sites into a single managed fleet. Policy, updates, and configurations roll out as fleet operations. Each site stays autonomous yet is centrally governed — giving you SEAL-3/4 security posture across the entire edge estate without sending engineers to every location.',
    difficulty: 'hard',
  },
  // ── General Sovereignty Concepts ─────────────────────────────────────────
  {
    id: 15,
    category: 'Supply Chain Security',
    categoryIcon: '📦',
    question:
      'What is an SBOM (Software Bill of Materials) and why does SUSE Application Collection include one for every container image?',
    options: [
      'A software licensing cost breakdown required for procurement approval',
      'A cryptographic manifest listing every component and dependency — enabling CVE tracking, license audit, and EU CRA compliance',
      'A performance benchmark report for container image optimization',
      'A GDPR compliance declaration for data processed inside the container',
    ],
    correct: 1,
    explanation:
      '💡 SUSE PATHWAY 4a — An SBOM is a complete, machine-readable inventory of every library, dependency, and component inside a piece of software. The EU Cyber Resilience Act (CRA) mandates SBOMs for products sold in Europe. SUSE Application Collection ships SBOMs automatically with every image, making CRA and AI Act audit readiness a feature rather than an afterthought.',
    difficulty: 'medium',
  },
  {
    id: 16,
    category: 'Cloud Strategy',
    categoryIcon: '☁️',
    question:
      'What does the EU\'s "SEAL" framework measure in the context of digital sovereignty?',
    options: [
      'The security encryption level of cloud storage systems',
      'The maturity of an organization\'s sovereign infrastructure across strategic, legal, operational, and supply chain dimensions',
      'A certification standard for EU-approved cloud providers',
      'A GDPR adequacy rating for data transfers to third countries',
    ],
    correct: 1,
    explanation:
      '💡 The SEAL framework (Sovereign, Encrypted, Auditable, Legally-bound) measures how mature your sovereign infrastructure is across multiple dimensions. SUSE\'s pathways are explicitly mapped to SEAL levels — for example, SUSE Multi-Linux Support advances SEAL-3 on operational sovereignty, while full migration to SLES with EU support can achieve SEAL-4.',
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
  timePerQuestion: 15, // seconds
  basePoints: 1000,
  maxSpeedBonus: 500,
};
