export interface SkillCategory {
  title: string;
  titleFi: string;
  items: string[];
}

export interface Certification {
  code: string;
  name: string;
  nameFi: string;
  issuer: "Microsoft" | "AWS";
  description: string;
  descriptionFi: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "DevOps & Version Control",
    titleFi: "DevOps ja versionhallinta",
    items: [
      "Azure DevOps",
      "Git",
      "GitHub Actions",
      "GitLab CI",
      "Jenkins",
      "Flux",
      "GitOps",
    ],
  },
  {
    title: "Cloud Platforms",
    titleFi: "Pilvialustat",
    items: [
      "Azure",
      "AWS",
      "Azure Functions",
      "AWS Lambda",
      "AKS",
      "EKS",
      "ECS",
      "Linux",
    ],
  },
  {
    title: "Infrastructure as Code",
    titleFi: "Infrastruktuuri koodina",
    items: [
      "Terraform",
      "Bicep",
      "CloudFormation",
      "ARM Templates",
      "Ansible",
      "Packer",
    ],
  },
  {
    title: "Containers & Orchestration",
    titleFi: "Kontit ja orkestrointi",
    items: ["Docker", "Podman", "Kubernetes", "Helm"],
  },
  {
    title: "Observability & Networking",
    titleFi: "Havainnointi ja verkko",
    items: [
      "Prometheus",
      "Grafana",
      "ElasticSearch",
      "Istio",
      "Nginx",
      "Azure Monitor",
      "CloudWatch",
    ],
  },
  {
    title: "Languages & Services",
    titleFi: "Kielet ja palvelut",
    items: [".NET", "Java", "Spring Boot", "TypeScript", "Node.js", "Python"],
  },
];

export const certifications: Certification[] = [
  {
    code: "AZ-900",
    name: "Microsoft Azure Fundamentals",
    nameFi: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    description: "Cloud concepts, Azure services, security, and pricing",
    descriptionFi:
      "Pilvikäsitteet, Azure-palvelut, tietoturva ja hinnoittelu",
  },
  {
    code: "AI-900",
    name: "Microsoft Azure AI Fundamentals",
    nameFi: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    description: "AI workloads, machine learning, and Azure AI services",
    descriptionFi:
      "AI-työkuormat, koneoppiminen ja Azure AI -palvelut",
  },
  {
    code: "CLF-C02",
    name: "AWS Certified Cloud Practitioner",
    nameFi: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    description: "AWS Cloud concepts, services, security, and billing",
    descriptionFi:
      "AWS-pilvikäsitteet, palvelut, tietoturva ja laskutus",
  },
  {
    code: "AIF-C01",
    name: "AWS Certified AI Practitioner",
    nameFi: "AWS Certified AI Practitioner",
    issuer: "AWS",
    description: "AI and ML concepts, generative AI, and AWS AI services",
    descriptionFi:
      "AI- ja ML-käsitteet, generatiivinen AI ja AWS AI -palvelut",
  },
];
