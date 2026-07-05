"use client";

import { motion } from "framer-motion";

const MODALIDADES = [
  {
    id: "integral-24-7",
    nome: "Integral 24/7",
    descricao: "Monitoramento humano contínuo, todos os dias.",
    indicada: "Condomínios que substituem porteiro presencial por completo.",
  },
  {
    id: "por-turno",
    nome: "Por Turno",
    descricao: "Monitoramento humano em períodos definidos (ex.: noturno).",
    indicada: "Condomínios que já têm portaria diurna e querem cobrir lacunas de horário.",
  },
  {
    id: "autonoma",
    nome: "Autônoma",
    descricao:
      "Operação sem operador humano fixo, com tecnologia de reconhecimento e acionamento remoto sob demanda.",
    indicada: "Condomínios com baixo fluxo ou orçamento mais enxuto.",
  },
];

const COMPARATIVO = [
  {
    criterio: "Custo mensal",
    presencial: "Folha, encargos e substituições de porteiro",
    virtual: "Sem encargos trabalhistas de porteiro fixo",
  },
  {
    criterio: "Cobertura",
    presencial: "Depende de escala e sujeita a faltas",
    virtual: "Monitoramento contínuo, sem lacunas de turno",
  },
  {
    criterio: "Registro e auditoria",
    presencial: "Manual, sujeito a falhas humanas",
    virtual: "Vídeo e log de acessos auditável",
  },
  {
    criterio: "SLA de resposta",
    presencial: "Informal, sem tempo definido",
    virtual: "Documentado, com tempo de resposta claro",
  },
];

export function ComparisonTable() {
  return (
    <section id="modalidades" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-extrabold text-navy sm:text-4xl"
        >
          As três modalidades de Portaria Virtual
        </motion.h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {MODALIDADES.map((m, i) => (
            <motion.div
              key={m.id}
              id={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="scroll-mt-24 rounded-card border border-surface-muted bg-surface-light p-6"
            >
              <h3 className="font-heading text-lg font-bold text-navy">{m.nome}</h3>
              <p className="mt-3 text-sm text-navy/75">{m.descricao}</p>
              <p className="mt-4 border-t border-surface-muted pt-4 text-xs font-medium uppercase tracking-wide text-brand-red">
                Indicada para
              </p>
              <p className="mt-1 text-sm text-navy/70">{m.indicada}</p>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 font-heading text-2xl font-bold text-navy"
        >
          Portaria Presencial x Portaria Virtual
        </motion.h3>

        <div className="mt-8 overflow-x-auto rounded-card border border-surface-muted">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-navy text-white">
                <th scope="col" className="px-5 py-4 font-heading font-semibold">
                  Critério
                </th>
                <th scope="col" className="px-5 py-4 font-heading font-semibold">
                  Portaria Presencial
                </th>
                <th scope="col" className="px-5 py-4 font-heading font-semibold text-neon-cyan">
                  Portaria Virtual (Solport)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-muted">
              {COMPARATIVO.map((row) => (
                <tr key={row.criterio} className="bg-white even:bg-surface-light">
                  <th scope="row" className="px-5 py-4 font-semibold text-navy">
                    {row.criterio}
                  </th>
                  <td className="px-5 py-4 text-navy/70">{row.presencial}</td>
                  <td className="px-5 py-4 text-navy/70">{row.virtual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
