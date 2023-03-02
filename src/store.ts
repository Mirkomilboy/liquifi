import { defineStore } from 'pinia'

const useStore = defineStore('main', {
  state: () => {
    return {
      header: {
        nav: [
          {
            label: 'Software',
            path: '/#software',
            subnav: [
              { label: 'For Investors', path: '/investors' },
              { label: 'For Companies', path: '/companies' },
            ],
          },
          {
            label: 'Administration',
            path: '/#administration',
            subnav: [
              { label: 'Fund Formation', path: '/fund-management' },
              {
                label: 'Fund Administration',
                path: '/fund-management#administration',
              },
              { label: 'SPV Management', path: '/spv-management' },
            ],
          },
          // { label: 'All Things VC', path: '/#all-things-vc' },
          { label: 'About us', path: '/about' },
        ],
      },
      footer: {
        nav: [
          [
            ['Software', null],
            ['For Investors', '/investors'],
            ['For Companies', '/companies'],
          ],
          [
            ['Administration', null],
            ['Fund Formation', '/fund-management'],
            ['Fund Administration', '/fund-management#administration'],
            ['SPV Management', '/spv-management'],
          ],
          [
            ['Resources', null],
            ['Login', 'https://auth.venture360.co'],
            ['About Us', '/about'],
            // 'COVID-19 Report',
            // 'Podcast',
            ['Terms of Service', '/terms-of-service'],
            ['Privacy Policy', '/privacy-policy'],
          ],
        ],
      },
    }
  },
})

export { useStore }
