import type { Metadata } from "next";
import { BellRing, Video, Siren, Camera } from "lucide-react";
import { SolutionPageTemplate, type SolutionFeature } from "@/components/solution-page-template";
import type { FAQItem } from "@/components/faq";

export const metadata: Metadata = {
  title: "Alarme e Vídeo Alarme para Condomínios em SP | Solport",
  description:
    "Detecção de invasão com verificação por vídeo antes do acionamento remoto e SLA de resposta documentado, para condomínios em todo o estado de São Paulo.",
  alternates: { canonical: "/solucoes/alarmes" },
};

const FEATURES: SolutionFeature[] = [
  {
    icon: <BellRing className="h-5 w-5" aria-hidden="true" />,
    title: "Detecção de invasão",
    text: "Sensores de abertura e movimento monitoram portões, acessos e áreas comuns.",
  },
  {
    icon: <Video className="h-5 w-5" aria-hidden="true" />,
    title: "Verificação por vídeo",
    text: "Antes de acionar a resposta, confirmamos a ocorrência por imagem, reduzindo falsos alarmes.",
  },
  {
    icon: <Siren className="h-5 w-5" aria-hidden="true" />,
    title: "Acionamento remoto",
    text: "A central de monitoramento aciona a resposta adequada assim que a invasão é confirmada.",
  },
  {
    icon: <Camera className="h-5 w-5" aria-hidden="true" />,
    title: "Integração com CFTV",
    text: "Checagem visual imediata a partir das câmeras já instaladas no condomínio.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Como vocês evitam falsos alarmes?",
    answer:
      "Toda ocorrência passa por verificação de vídeo antes do acionamento da resposta, reduzindo deslocamentos desnecessários.",
  },
  {
    question: "O alarme cobre a área externa e interna do condomínio?",
    answer:
      "Sim, dimensionamos os sensores conforme os pontos críticos de cada condomínio, incluindo portões, acessos e áreas comuns internas.",
  },
  {
    question: "O alarme se integra com o CFTV que já temos?",
    answer:
      "Avaliamos a infraestrutura existente durante o Diagnóstico 360° e propomos a integração possível com câmeras já instaladas.",
  },
  {
    question: "Como funciona a manutenção dos sensores?",
    answer:
      "Manutenção preventiva e corretiva incluídas no contrato de SLA, com suporte 24/7 para chamados críticos.",
  },
  {
    question: "Como fica a LGPD nas imagens captadas pelo vídeo alarme?",
    answer:
      "As imagens usadas na verificação por vídeo são armazenadas com controle de acesso restrito e finalidade limitada à confirmação de alarme, seguindo a mesma política aplicada ao CFTV. Consulte nossa Política de Privacidade para detalhes sobre retenção e exclusão de dados.",
  },
  {
    question: "Como sei que a área está sendo monitorada?",
    answer:
      "Todo local com verificação por vídeo recebe sinalização visível informando o monitoramento, conforme a LGPD (art. 6º, princípio da transparência). A instalação já inclui essa sinalização.",
  },
  {
    question: "Quem é o responsável pelos dados tratados no alarme?",
    answer:
      "A Solport atua como controladora dos dados tratados na prestação do serviço, nos termos do art. 42 da LGPD, sendo responsável por eventuais danos decorrentes de tratamento em desacordo com a lei. Consulte nossa Política de Privacidade para detalhes.",
  },
  {
    question: "Por quanto tempo as imagens do vídeo alarme ficam armazenadas?",
    answer:
      "As imagens são mantidas por um período mínimo de 30 dias e máximo de 90 dias, findo o qual são eliminadas automaticamente, salvo obrigação legal ou determinação judicial em contrário.",
  },
];

export default function AlarmesPage() {
  return (
    <SolutionPageTemplate
      breadcrumbLabel="Alarme e Vídeo Alarme"
      eyebrow="Segurança 24/7"
      title="Alarme e Vídeo Alarme com resposta rápida"
      subtitle="Detecção de invasão com verificação por vídeo e acionamento remoto, com SLA de resposta documentado."
      image={{ src: "/posters/alarmes.png", alt: "Atendente da central Solport verificando um alarme por vídeo antes de acionar a resposta" }}
      heroBullets={[
        "Sensores de abertura e movimento em áreas comuns",
        "Vídeo alarme com verificação em tempo real antes do acionamento",
      ]}
      ctaLabel="Agendar Diagnóstico 360°"
      features={FEATURES}
      faqItems={FAQ_ITEMS}
      diagnosticoQuery="?interesse=seguranca&solucao=alarmes"
    />
  );
}
