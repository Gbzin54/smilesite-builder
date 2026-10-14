import type { ComponentType } from "react";
import { HeartHandshake, ScanLine, ShieldCheck, Smile, Sparkles } from "lucide-react";

import { Tooth } from "./Tooth";

type IconComponent = ComponentType<{ className?: string }>;

export const navLinks = [
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#sobre", label: "Nosso cuidado" },
  { href: "#contato", label: "Contato" },
] as const;

export const trustItems: ReadonlyArray<{ icon: IconComponent; label: string }> = [
  { icon: HeartHandshake, label: "Atendimento humanizado" },
  { icon: ScanLine, label: "Tecnologia e precisão" },
  { icon: ShieldCheck, label: "Cuidado em cada detalhe" },
];

export const services: ReadonlyArray<{
  icon: IconComponent;
  title: string;
  description: string;
}> = [
  {
    icon: Tooth,
    title: "Clínica geral",
    description: "Prevenção, limpeza e cuidado completo para manter sua saúde bucal em dia.",
  },
  {
    icon: Sparkles,
    title: "Estética dental",
    description: "Clareamento e facetas para realçar a beleza natural do seu sorriso.",
  },
  {
    icon: Smile,
    title: "Ortodontia",
    description: "Alinhamento dos dentes com soluções pensadas para cada fase da vida.",
  },
  {
    icon: ScanLine,
    title: "Implantes",
    description: "Recupere a confiança e o conforto de sorrir com segurança.",
  },
];

export const aboutPoints = ["Escuta e acolhimento", "Cuidado personalizado"] as const;
