export const siteConfig: SiteConfig = {
    title: "CodeArchives",
    language: "ja",
    description: "コードアーカイブスの公式ブログです。",
    keywords: "CodeArchives, CodeArchives Blog, CDA, CDA Blog, コドア",
    author: "CodeArchives",
    avatar: "/avatar.png",
    favicon: "/favicon.png",
    site: "https://blog.codearchives.net",

    page_size: 10,
}

export const navBarConfig: NavBarConfig = {
    links: [
        {
            name: 'Projects',
            url: '/projects'
        },
        {
            name: 'Links',
            url: '/links'
        },
        {
            name: 'About',
            url: '/about'
        }
    ]
}

export const socialLinks: SocialLink[] = [
    // https://icon-sets.iconify.design/material-symbols/
    {
        label: 'GitHub',
        icon: 'mdi-github',
        url: 'https://github.com/Jazee6'
    }
]

interface SiteConfig {
    title: string
    language: string
    description: string
    keywords: string
    author: string
    avatar: string
    favicon: string
    site: string

    page_size: number
    twikoo_uri?: string     // https://twikoo.js.org/
}

interface NavBarConfig {
    links: {
        name: string
        url: string
        target?: string
    }[]
}

interface SocialLink {
    label: string
    icon: string
    url: string
}
