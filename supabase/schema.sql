-- Solport — tabela de leads (Diagnóstico 360° / Agendar)
-- RPD v4.0, Seção 11 e 11.1: Supabase (Postgres) como banco de leads,
-- com acesso restrito à service role (RLS habilitado, sem policy para
-- anon/authenticated — só a API route, usando a service_role key,
-- consegue ler/gravar).
--
-- Como aplicar: cole este arquivo no SQL Editor do painel do Supabase
-- do projeto e execute uma vez.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  tipo_formulario text not null check (tipo_formulario in ('diagnostico', 'agendar')),

  nome text not null,
  telefone text not null,
  condominio text not null,
  cidade text,

  interesse text check (interesse in ('seguranca', 'eletromobilidade', 'ambos')),
  solucoes_interesse text[],
  detalhes jsonb,

  melhor_horario text check (melhor_horario in ('manha', 'tarde', 'noite')),
  mensagem text,

  consentimento_lgpd boolean not null default false,

  utm_source text,
  utm_medium text,
  utm_campaign text,

  status text not null default 'novo'
);

alter table public.leads enable row level security;

-- Nenhuma policy é criada de propósito: por padrão, com RLS habilitado
-- e sem policies, apenas a service_role (que ignora RLS) tem acesso.
-- Não conceder select/insert para os roles anon/authenticated.

comment on table public.leads is
  'Leads do Diagnóstico 360° e da página Agendar. Dados pessoais (nome, condomínio, telefone) — ver Política de Privacidade em /privacidade.

  Política de retenção proposta (RPD Seção 19.2, pendente de confirmação do cliente):
  exclusão mediante solicitação do titular a contato@solport.com.br, e revisão/expurgo
  de leads sem retorno comercial a cada 12 meses. Ajustar este texto e o da página
  /privacidade juntos caso a política definitiva seja diferente.';
