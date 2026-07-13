import type { Metadata } from "next";
import { MapPin, QrCode, Radar, Smartphone } from "lucide-react";
import { SolutionPageTemplate, type SolutionFeature } from "@/components/solution-page-template";
import type { FAQItem } from "@/components/faq";
import { WatchingUPartnership } from "@/components/watching-u-partnership";
import { AIExtrasGrid } from "@/components/ai-extras-grid";

export const metadata: Metadata = {
  title: "Watching U | Totem de Vigilância Colaborativa para Condomínios em SP | Solport",
  description:
    "Totem com câmeras HD, QR Code para notificação de ocorrências e integração oficial com Smart Sampa e Muralha Paulista. Proteção 24h para condomínios, escolas, comércios e residências em SP.",
};

const FEATURES: SolutionFeature[] = [
  {
    icon: <MapPin className="h-5 w-5" aria-hidden="true" />,
    title: "Totem estratégico",
    text: "Câmeras HD instaladas em pontos-chave da rua, portaria ou área comum, com sinalização visível de vigilância ativa.",
  },
  {
    icon: <QrCode className="h-5 w-5" aria-hidden="true" />,
    title: "QR Code — ação integrada",
    text: "Qualquer pessoa pode notificar uma ocorrência escaneando o QR Code do totem, unindo moradores, segurança e autoridades em uma resposta coordenada.",
  },
  {
    icon: <Radar className="h-5 w-5" aria-hidden="true" />,
    title: "Vigilância colaborativa",
    text: "Padrões de comportamento são analisados para identificar atividades suspeitas antes que se tornem ocorrências.",
  },
  {
    icon: <Smartphone className="h-5 w-5" aria-hidden="true" />,
    title: "App e chat colaborativo",
    text: "Moradores acompanham as imagens e trocam alertas em tempo real, direto do celular.",
  },
];

const AI_EXTRAS = [
  "Time-lapse",
  "Detecção de ausência",
  "Contagem de pessoas com mapa de calor",
  "Detecção de veículos frequentes",
  "Gestão de filas",
  "Detecção de comboio de veículos",
  "Detecção de pessoa suspeita",
  "Detecção de presença",
  "Anomal.IA",
  "Detecção de faces frequentes",
  "Detecção de movimento",
  "Leitura de placas de veículos (LPR)",
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Para quem o Watching U é indicado?",
    answer:
      "Condomínios, escolas, comércios e residências que querem levar a vigilância colaborativa para além dos muros, cobrindo ruas e áreas de acesso.",
  },
  {
    question: "Como funciona a integração com Smart Sampa e Muralha Paulista?",
    answer:
      "A adesão é voluntária e formalizada junto aos respectivos programas públicos. A Solport orienta o condomínio em toda a documentação e configuração do compartilhamento de imagens.",
  },
  {
    question: "Por quanto tempo as imagens ficam armazenadas?",
    answer:
      "As imagens do totem ficam 7 dias em nuvem, com resolução HD 720p e segurança AWS. O canal de notificação de ocorrências mantém registro por 12 meses.",
  },
  {
    question: "Como funciona a notificação via QR Code?",
    answer:
      "Qualquer pessoa pode escanear o QR Code do totem para notificar uma ocorrência, acionando moradores, segurança e autoridades em uma resposta coordenada.",
  },
  {
    question: "É possível contratar recursos adicionais de Inteligência Artificial?",
    answer:
      "Sim. Recursos como leitura de placas, detecção de pessoa suspeita e contagem de pessoas podem ser contratados à parte — consulte valores.",
  },
];

export default function WatchingUPage() {
  return (
    <SolutionPageTemplate
      breadcrumbLabel="Watching U"
      eyebrow="Vigilância Colaborativa 24/7"
      title="Watching U: vigilância colaborativa conectada à segurança pública de SP"
      subtitle="Totem com câmeras HD, QR Code para notificação de ocorrências e integração oficial com Smart Sampa e Muralha Paulista — para condomínios, escolas, comércios e residências."
      heroBullets={[
        "Câmeras HD em totem instalado na via, com QR Code para notificação imediata de ocorrências",
        "Integração oficial com Smart Sampa e Muralha Paulista, unindo sua rua à rede pública de segurança do estado",
        "Monitoramento colaborativo 24/7, com resposta coordenada entre moradores, segurança e autoridades",
      ]}
      ctaLabel="Agendar Diagnóstico 360°"
      image={{
        src: "/posters/watching-u.png",
        alt: "Totem Watching U instalado na entrada de um condomínio",
        heightClassName: "h-72 sm:h-96 lg:h-[640px]",
      }}
      features={FEATURES}
      faqItems={FAQ_ITEMS}
      diagnosticoQuery="?interesse=seguranca&solucao=watching-u"
      afterFeatures={
        <>
          <WatchingUPartnership />
          <AIExtrasGrid items={AI_EXTRAS} />
        </>
      }
    />
  );
}
