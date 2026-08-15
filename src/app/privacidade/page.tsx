import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Política de Privacidade e LGPD | Solport",
  description:
    "Como a Solport coleta, usa e protege os dados pessoais enviados pelo site, em conformidade com a LGPD.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <>
      <PageHero
        breadcrumbLabel="Política de Privacidade"
        eyebrow="LGPD"
        title="Política de Privacidade e Proteção de Dados"
        subtitle="Última atualização: julho de 2026."
        hideCtaRow
      />

      <article className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-4 text-navy/80 sm:px-6 lg:px-8">
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-navy">1. Quem somos</h2>
            <p>
              A Solport Soluções Tecnológicas (&ldquo;Solport&rdquo;, &ldquo;nós&rdquo;) atua em segurança eletrônica e eletromobilidade
              para condomínios em todo o estado de São Paulo. Esta política explica como tratamos os dados
              pessoais coletados através deste site, em conformidade com a Lei Geral de Proteção de Dados
              (Lei nº 13.709/2018 — LGPD).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-navy">2. Quem é o controlador dos seus dados</h2>
            <p>
              A Solport Soluções Tecnológicas atua como controladora dos dados pessoais tratados na prestação
              dos seus serviços — inclusive dados coletados através deste site e das soluções instaladas nos
              condomínios atendidos (CFTV, vídeo alarme, controle de acesso e portaria virtual). Como
              controladora, a Solport é responsável, nos termos do art. 42 da LGPD, por reparar eventuais danos
              causados a terceiros em decorrência de tratamento de dados realizado em desacordo com a lei.
              Para exercer seus direitos ou tirar dúvidas sobre o tratamento, use os canais indicados na
              seção 9.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-navy">3. Quais dados coletamos</h2>
            <p>
              Ao preencher os formulários de Diagnóstico 360° ou Agendar, coletamos: nome, telefone/WhatsApp,
              nome do condomínio, cidade e, dependendo do formulário, informações sobre o interesse em soluções
              de segurança e/ou eletromobilidade (ex.: número de unidades, número de vagas, carga elétrica
              disponível). Também registramos automaticamente a origem do contato (ex.: parâmetros de campanha)
              quando disponível.
            </p>
            <p>
              Nas soluções instaladas em condomínios atendidos pela Solport, também podem ser tratados: imagens
              captadas por CFTV e vídeo alarme, e dados biométricos (facial ou digital) e de QR Code usados no
              controle de acesso. Todo local com captação de imagem ou dados biométricos recebe sinalização
              visível informando o monitoramento, conforme o princípio da transparência da LGPD (art. 6º) — a
              instalação já inclui essa sinalização como parte do projeto.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-navy">4. Para que usamos esses dados</h2>
            <p>
              Os dados de contato coletados pelo site são usados exclusivamente para fins comerciais: retornar
              sua solicitação de diagnóstico ou agendamento, apresentar uma proposta e dar andamento ao
              atendimento. Imagens e dados biométricos coletados nas soluções instaladas são usados
              exclusivamente para segurança do condomínio (verificação de ocorrências, controle de acesso e
              auditoria). Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing de
              outras empresas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-navy">5. Base legal</h2>
            <p>
              O tratamento de dados de contato se baseia no seu consentimento, fornecido explicitamente ao
              marcar a caixa de concordância no formulário antes do envio (Art. 7º, I da LGPD), e no legítimo
              interesse da Solport em responder a uma solicitação comercial que você mesmo iniciou. O
              tratamento de imagens e dados biométricos nas soluções instaladas se baseia no legítimo interesse
              do condomínio contratante na proteção do patrimônio e da segurança de moradores (Art. 7º, IX).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-navy">6. Onde seus dados ficam armazenados</h2>
            <p>
              Os leads são armazenados em um banco de dados Supabase (Postgres), com acesso restrito por meio
              de controle de acesso técnico (Row Level Security) — apenas sistemas autorizados da Solport
              conseguem ler ou gravar esses registros. A notificação de novos leads para nossa equipe é enviada
              por e-mail via Resend.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-navy">7. Retenção e exclusão</h2>
            <p>
              Mantemos os dados de contato enquanto durar o relacionamento comercial ou a negociação em
              andamento. Leads sem retorno comercial são revisados e podem ser excluídos periodicamente
              (a cada 12 meses, como prática padrão).
            </p>
            <p>
              Nas soluções de segurança instaladas em condomínios atendidos: imagens de CFTV e vídeo alarme são
              mantidas por um período mínimo de 30 dias e máximo de 90 dias; registros de controle de acesso
              (entradas, saídas e tentativas) são mantidos por até 6 meses. Findo o prazo aplicável, os dados
              são eliminados automaticamente, salvo obrigação legal ou determinação judicial em contrário. A
              qualquer momento você pode solicitar a exclusão antecipada dos seus dados — ver seção 9.
            </p>
            <p className="text-sm text-navy/55">
              Nota: os prazos acima são a proposta padrão da Solport, baseada em prática de mercado, enquanto os
              prazos definitivos não são confirmados formalmente pelo responsável do projeto; ajuste este texto
              caso os prazos oficiais sejam diferentes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-navy">8. Cookies</h2>
            <p>
              Usamos cookies e ferramentas de análise (Google Analytics, Meta Pixel) apenas após o seu
              consentimento, dado através do banner exibido na primeira visita ao site. Você pode recusar o uso
              desses cookies sem que isso afete o funcionamento do site ou o envio dos formulários.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-navy">9. Seus direitos</h2>
            <p>
              Conforme a LGPD, você pode solicitar a qualquer momento: confirmação do tratamento, acesso,
              correção, exclusão, portabilidade ou revogação do consentimento sobre os seus dados pessoais.
              Para exercer esses direitos, entre em contato pelo WhatsApp +55 11 4759-9009 ou pelo e-mail
              contato@solport.com.br.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-navy">10. Alterações desta política</h2>
            <p>
              Esta política pode ser atualizada para refletir mudanças legais ou operacionais. A data da última
              atualização está sempre indicada no topo desta página.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
