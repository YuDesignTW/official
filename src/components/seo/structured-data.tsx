export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Yu Design",
    url: "https://yu-design.tw",
    logo: "https://yu-design.tw/images/logo.png",
    sameAs: [
      "https://www.linkedin.com/in/yudesign",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: "TW",
      availableLanguage: ["zh-TW", "en"]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Yu Design",
    url: "https://yu-design.tw",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://yu-design.tw/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yuga",
    jobTitle: "UI/UX 設計顧問",
    worksFor: {
      "@type": "Organization",
      name: "Yu Design"
    },
    url: "https://yu-design.tw",
    sameAs: [
      "https://github.com/YuDesignTW"
    ],
    knowsAbout: ["UI/UX Design", "Product Design", "AI Development", "No-Code", "Digital Marketing"]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "Yu Design"
    },
    serviceType: ["UI/UX 設計", "網站開發", "品牌設計", "數位行銷策略"],
    areaServed: {
      "@type": "Country",
      name: "Taiwan"
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://yu-design.tw",
      availableLanguage: ["zh-TW", "en"]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}