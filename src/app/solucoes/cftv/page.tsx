import type { Metadata } from "next";
import { Camera, HardDrive, Link2, Smartphone } from "lucide-react";
import { SolutionPageTemplate, type SolutionFeature } from "@/components/solution-page-template";
import type { FAQItem } from "@/components/faq";

export const metadata: Metadata = {
  title: "CFTV para Condomínios em SP | Solport",
  description:
    "Câmeras de alta definição, gravação contínua e monitoramento integrado à Portaria Virtual e ao Controle de Acesso, para condomínios em todo o estado de SP.",
  alternates: { canonical: "/solucoes/cftv" },
};

const FEATURES: SolutionFeature[] = [
  {
    icon: <Camera className="h-5 w-5" aria-hidden="true" />,
    title: "Cobertura estratégica",
    text: "Câmeras HD/4K posicionadas em portaria, garagem e áreas comuns.",
  },
  {
    icon: <HardDrive className="h-5 w-5" aria-hidden="true" />,
    title: "Gravação contínua",
    text: "Retenção configurável de imagens, com acesso rápido a gravações antigas.",
  },
  {
    icon: <Link2 className="h-5 w-5" aria-hidden="true" />,
    title: "Integração total",
    text: "Conectado à Portaria Virtual e ao Controle de Acesso para uma visão única de segurança.",
  },
  {
    icon: <Smartphone className="h-5 w-5" aria-hidden="true" />,
    title: "Acesso remoto",
    text: "Síndico e administradora acompanham as imagens de qualquer lugar, em tempo real.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Por quanto tempo as imagens ficam armazenadas?",
    answer:
      "As imagens são mantidas por um período mínimo de 30 dias e máximo de 90 dias, findo o qual são eliminadas automaticamente, salvo obrigação legal ou determinação judicial em contrário. Consulte nossa Política de Privacidade para mais detalhes.",
  },
  {
    question: "Como sei que a área está sendo monitorada por câmeras?",
    answer:
      "Todo local com captação de imagem recebe sinalização visível informando o monitoramento por câmeras, conforme a LGPD (art. 6º, princípio da transparência). A instalação já inclui essa sinalização.",
  },
  {
    question: "Quem é o responsável pelos dados tratados no CFTV?",
    answer:
      "A Solport atua como controladora dos dados tratados na prestação do serviço, nos termos do art. 42 da LGPD, sendo responsável por eventuais danos decorrentes de tratamento em desacordo com a lei. Consulte nossa Política de Privacidade para detalhes.",
  },
  {
    question: "As câmeras funcionam à noite?",
    answer:
      "Sim, utilizamos câmeras com visão noturna/infravermelho nos pontos que exigem cobertura 24h.",
  },
  {
    question: "O CFTV se integra com a portaria que já temos?",
    answer:
      "Avaliamos a infraestrutura existente durante o Diagnóstico 360° e propomos a integração possível com câmeras e sistemas já instalados.",
  },
  {
    question: "Como funciona a manutenção das câmeras?",
    answer:
      "Manutenção preventiva e corretiva incluídas no contrato de SLA, com suporte 24/7 para chamados críticos.",
  },
];

export default function CFTVPage() {
  return (
    <SolutionPageTemplate
      breadcrumbLabel="CFTV"
      eyebrow="Segurança 24/7"
      title="CFTV com imagens nítidas e auditoria completa"
      subtitle="Câmeras de alta definição, gravação contínua e monitoramento integrado à Portaria Virtual para dar rastreabilidade total ao seu condomínio."
      image={{ src: "/posters/cftv.png", alt: "Câmera de CFTV Solport instalada na fachada de um condomínio" }}
      heroBullets={[
        "Câmeras HD/4K em pontos estratégicos (portaria, garagem, áreas comuns)",
        "Gravação contínua com retenção configurável",
      ]}
      ctaLabel="Agendar Diagnóstico 360°"
      features={FEATURES}
      faqItems={FAQ_ITEMS}
      diagnosticoQuery="?interesse=seguranca&solucao=cftv"
    />
  );
}
