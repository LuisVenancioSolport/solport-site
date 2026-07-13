import type { Metadata } from "next";
import { KeyRound, Unlock, ClipboardList, MonitorSmartphone } from "lucide-react";
import { SolutionPageTemplate, type SolutionFeature } from "@/components/solution-page-template";
import type { FAQItem } from "@/components/faq";
import { AppSolportProcesses } from "@/components/app-solport-processes";

export const metadata: Metadata = {
  title: "App Solport — Controle de Acesso e Gestão em Nuvem | Solport",
  description:
    "App Solport: plataforma em nuvem para controle de acesso, encomendas, mural de avisos e chamados — acessível por computador, tablet e celular, para condomínios em todo o estado de SP.",
};

const FEATURES: SolutionFeature[] = [
  {
    icon: <KeyRound className="h-5 w-5" aria-hidden="true" />,
    title: "Acesso digital unificado",
    text: "QR Code, chave virtual e câmeras conectados em um só sistema, sem depender de cartões ou chaves físicas.",
  },
  {
    icon: <Unlock className="h-5 w-5" aria-hidden="true" />,
    title: "Acionamento e notificação remota",
    text: "Síndico e porteiro liberam acessos à distância, com notificação automática de cada entrada registrada.",
  },
  {
    icon: <ClipboardList className="h-5 w-5" aria-hidden="true" />,
    title: "Recursos que organizam o dia a dia",
    text: "Controle de entrega, mural de avisos, abertura de pedidos e relatório de turno em um único painel.",
  },
  {
    icon: <MonitorSmartphone className="h-5 w-5" aria-hidden="true" />,
    title: "Multiplataforma",
    text: "Acesso via computador, notebook, tablet ou celular — pelo operador da portaria ou diretamente pelo morador.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "O App Solport substitui a portaria física?",
    answer:
      "Não necessariamente. Ele digitaliza e automatiza os processos, podendo ser operado pela equipe de portaria ou, em modelos autônomos, diretamente pelos moradores.",
  },
  {
    question: "Como funciona o acesso por QR Code e chave virtual?",
    answer:
      "Cada morador ou visitante recebe uma credencial digital vinculada ao seu perfil, com liberação e histórico de acesso registrados automaticamente.",
  },
  {
    question: "É possível acompanhar os acessos em tempo real?",
    answer: "Sim. Cada entrada gera notificação e fica registrada no histórico da unidade.",
  },
  {
    question: "O app funciona em qualquer dispositivo?",
    answer:
      "Sim. O painel roda em computador, notebook, tablet e celular, tanto para o operador da portaria quanto para o morador.",
  },
  {
    question: "O App Solport se integra às câmeras do condomínio?",
    answer: "Sim, o controle de acesso pode ser integrado às câmeras e ao CFTV já instalado.",
  },
];

export default function AppSolportPage() {
  return (
    <SolutionPageTemplate
      breadcrumbLabel="App Solport"
      eyebrow="App Solport"
      title="App Solport: controle de acesso e gestão do condomínio em um só lugar"
      subtitle="Uma plataforma só para digitalizar e automatizar o dia a dia do condomínio — do acesso de moradores e visitantes à gestão de encomendas, avisos e chamados, acessível de qualquer dispositivo."
      heroBullets={[
        "QR Code, chave virtual e câmeras integrados em um único painel de controle de acesso",
        "Acionamento remoto de portões e notificação de cada acesso em tempo real",
        "Mural de avisos, controle de entregas e abertura de pedidos direto pelo app",
      ]}
      ctaLabel="Agendar Diagnóstico 360°"
      features={FEATURES}
      faqItems={FAQ_ITEMS}
      diagnosticoQuery="?interesse=seguranca&solucao=app-solport"
      afterFeatures={<AppSolportProcesses />}
    />
  );
}
