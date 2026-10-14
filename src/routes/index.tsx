import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/site/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sorria | Odontologia com cuidado e leveza" },
      {
        name: "description",
        content:
          "Cuidado odontológico acolhedor para a saúde e a beleza do seu sorriso. Conheça nossos tratamentos e agende sua avaliação.",
      },
      { property: "og:title", content: "Sorria | Odontologia com cuidado e leveza" },
      {
        property: "og:description",
        content: "Um cuidado completo, humano e personalizado para o seu sorriso.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});
