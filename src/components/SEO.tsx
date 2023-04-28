import { DefaultSeo } from "next-seo";

const SEO = () => {
  return (
    <DefaultSeo
      title="AI SF | May 15-19"
      description="May 15 - 19. An AI week for builders."
      openGraph={{
        url: "https://aisf.co",
        title: "AI SF | May 15-19",
        description: "May 15 - 19. An AI week for builders.",
        images: [
          {
            url: "https://aisf.co/preview-image.png",
            width: 1200,
            height: 630,
            alt: "Preview Image",
          },
        ],
        site_name: "AI SF",
      }}
    />
  );
};

export default SEO;
