module.exports = {
  title: 'Bingo Anke',
  tagline: 'アンケに回答、ビンゴをプレイ!',
  url: 'https://noy4.github.io/',
  baseUrl: '/bingo-anke-site/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ball.png',
  organizationName: 'noy4', // Usually your GitHub org/user name.
  projectName: 'bingo-anke-site', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Bingo Anke',
      logo: {
        alt: 'Bingo Anke Logo',
        src: 'img/bingo_anke_logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '背景',
              to: 'docs/',
            },
            {
              label: '目的',
              to: 'docs/purpose/',
            },
            {
              label: 'ビンゴアンケの仕様',
              to: 'docs/bingo-anke/',
            },
            {
              label: '実験方法',
              to: 'docs/method/',
            },
            {
              label: '結果・考察',
              to: 'docs/result/',
            },
            {
              label: 'おわりに',
              to: 'docs/conclusion/',
            },
          ],
        },
        {
          title: 'Naoya Kuwamura',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/kuwappi_',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/noy4/bingo-anke-site',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Naoya Kuwamura.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
