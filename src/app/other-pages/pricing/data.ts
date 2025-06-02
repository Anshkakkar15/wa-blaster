import { BsCheckLg, BsClock, BsGraphUpArrow, BsHeadset, BsLightningChargeFill, BsRocketTakeoffFill, BsSendFill } from 'react-icons/bs'

import client5 from '@/assets/images/client/05.svg'
import client1 from '@/assets/images/client/01.svg'
import client7 from '@/assets/images/client/07.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client6 from '@/assets/images/client/06.svg'

import { FeatureType, PricingType, ClientType, FaqType } from './types'

export const pricingData: PricingType[] = [
  {
    duration: 'month',
    plans: [
      {
        icon: BsLightningChargeFill,
        title: 'Basic',
        price: 0,
        features: [
          { icon: BsCheckLg, title: 'Start New Chat' },
          { icon: BsCheckLg, title: 'Copy Messages' },
          { icon: BsCheckLg, title: 'Quick Reply' },
          { icon: BsCheckLg, title: 'Export Contact' },
          { icon: BsCheckLg, title: '5 Templates' },
          { icon: BsCheckLg, title: 'Time Gap' },
          { icon: BsCheckLg, title: 'Privacy Feature' },
          { icon: BsCheckLg, title: 'Multi Language Support' },
          { icon: BsCheckLg, title: '2 Batch (Audience)' },
          { icon: BsCheckLg, title: 'Broadcasting With Branding' },
          { icon: BsCheckLg, title: 'File Attachment (Media, Files, Emoji, Gifs, Images)' },
          { icon: BsCheckLg, title: 'Email Support' },
          { icon: BsCheckLg, title: 'Filter Number' },
        ],
      },
      {
        icon: BsRocketTakeoffFill,
        title: 'Premium',
        isPopular: true,
        price: 5.99,
        features: [
          { icon: BsCheckLg, title: 'Start New Chat' },
          { icon: BsCheckLg, title: 'Copy Messages' },
          { icon: BsCheckLg, title: 'Quick Reply' },
          { icon: BsCheckLg, title: 'Export Contact' },
          { icon: BsCheckLg, title: '20 Templates' },
          { icon: BsCheckLg, title: 'Time Gap' },
          { icon: BsCheckLg, title: 'Privacy Feature' },
          { icon: BsCheckLg, title: 'Multi Language Support' },
          { icon: BsCheckLg, title: '500 Batch (Audience)' },
          { icon: BsCheckLg, title: 'Personal Broadcasting' },
          { icon: BsCheckLg, title: 'File Attachment (Media, Files, Emoji, Gifs, Images)' },
          { icon: BsCheckLg, title: 'Email Support / Ticket Support' },
          { icon: BsCheckLg, title: 'Filter Number' },
          { icon: BsCheckLg, title: 'WhatsApp Number Validator' },
          { icon: BsCheckLg, title: 'Templates Generate With AI' },
          { icon: BsCheckLg, title: 'Personalized Templates' },
          { icon: BsCheckLg, title: 'Click To Chat Generate' },
          { icon: BsCheckLg, title: 'Administrator Portal' },
          { icon: BsCheckLg, title: 'Custom Label Contacts & Groups' },
          { icon: BsCheckLg, title: 'CSV, Google Excel' },
          { icon: BsCheckLg, title: 'Broadcasting In WhatsApp Group' },
        ],
      },
      {
        icon: BsSendFill,
        title: 'Enterprise',
        price: null,
        features: [
          { icon: BsCheckLg, title: 'Start New Chat' },
          { icon: BsCheckLg, title: 'Copy Messages' },
          { icon: BsCheckLg, title: 'Quick Reply' },
          { icon: BsCheckLg, title: 'Export Contact' },
          { icon: BsCheckLg, title: 'Unlimited Templates' },
          { icon: BsCheckLg, title: 'Time Gap' },
          { icon: BsCheckLg, title: 'Privacy Feature' },
          { icon: BsCheckLg, title: 'Multi Language Support' },
          { icon: BsCheckLg, title: 'Unlimited Batch (Audience)' },
          { icon: BsCheckLg, title: 'Personal Broadcasting' },
          { icon: BsCheckLg, title: 'File Attachment (Media, Files, Emoji, Gifs, Images)' },
          { icon: BsCheckLg, title: 'Email Support / Ticket Support' },
          { icon: BsCheckLg, title: 'Filter Number' },
          { icon: BsCheckLg, title: 'WhatsApp Number Validator' },
          { icon: BsCheckLg, title: 'Templates Generate With AI' },
          { icon: BsCheckLg, title: 'Personalized Templates' },
          { icon: BsCheckLg, title: 'Click To Chat Generate' },
          { icon: BsCheckLg, title: 'Administrator Portal' },
          { icon: BsCheckLg, title: 'Custom Label Contacts & Groups' },
          { icon: BsCheckLg, title: 'CSV, Google Excel' },
          { icon: BsCheckLg, title: 'Broadcasting In WhatsApp Group' },
          { icon: BsCheckLg, title: 'Broadcasting Analytics' },
        ],
      },
    ],
  },
  {
    duration: 'year',
    plans: [
      {
        icon: BsLightningChargeFill,
        title: 'Basic',
        price: 0,
        features: [
          { icon: BsCheckLg, title: 'Start New Chat' },
          { icon: BsCheckLg, title: 'Copy Messages' },
          { icon: BsCheckLg, title: 'Quick Reply' },
          { icon: BsCheckLg, title: 'Export Contact' },
          { icon: BsCheckLg, title: '5 Templates' },
          { icon: BsCheckLg, title: 'Time Gap' },
          { icon: BsCheckLg, title: 'Privacy Feature' },
          { icon: BsCheckLg, title: 'Multi Language Support' },
          { icon: BsCheckLg, title: '2 Batch (Audience)' },
          { icon: BsCheckLg, title: 'Broadcasting With Branding' },
          { icon: BsCheckLg, title: 'File Attachment (Media, Files, Emoji, Gifs, Images)' },
          { icon: BsCheckLg, title: 'Email Support' },
          { icon: BsCheckLg, title: 'Filter Number' },
        ],
      },
      {
        icon: BsRocketTakeoffFill,
        title: 'Premium',
        isPopular: true,
        price: 58.99,
        features: [
          { icon: BsCheckLg, title: 'Start New Chat' },
          { icon: BsCheckLg, title: 'Copy Messages' },
          { icon: BsCheckLg, title: 'Quick Reply' },
          { icon: BsCheckLg, title: 'Export Contact' },
          { icon: BsCheckLg, title: '20 Templates' },
          { icon: BsCheckLg, title: 'Time Gap' },
          { icon: BsCheckLg, title: 'Privacy Feature' },
          { icon: BsCheckLg, title: 'Multi Language Support' },
          { icon: BsCheckLg, title: '500 Batch (Audience)' },
          { icon: BsCheckLg, title: 'Personal Broadcasting' },
          { icon: BsCheckLg, title: 'File Attachment (Media, Files, Emoji, Gifs, Images)' },
          { icon: BsCheckLg, title: 'Email Support / Ticket Support' },
          { icon: BsCheckLg, title: 'Filter Number' },
          { icon: BsCheckLg, title: 'WhatsApp Number Validator' },
          { icon: BsCheckLg, title: 'Templates Generate With AI' },
          { icon: BsCheckLg, title: 'Personalized Templates' },
          { icon: BsCheckLg, title: 'Click To Chat Generate' },
          { icon: BsCheckLg, title: 'Administrator Portal' },
          { icon: BsCheckLg, title: 'Custom Label Contacts & Groups' },
          { icon: BsCheckLg, title: 'CSV, Google Excel' },
          { icon: BsCheckLg, title: 'Broadcasting In WhatsApp Group' },
        ],
      },
      {
        icon: BsSendFill,
        title: 'Enterprise',
        price: null,
        features: [
          { icon: BsCheckLg, title: 'Start New Chat' },
          { icon: BsCheckLg, title: 'Copy Messages' },
          { icon: BsCheckLg, title: 'Quick Reply' },
          { icon: BsCheckLg, title: 'Export Contact' },
          { icon: BsCheckLg, title: 'Unlimited Templates' },
          { icon: BsCheckLg, title: 'Time Gap' },
          { icon: BsCheckLg, title: 'Privacy Feature' },
          { icon: BsCheckLg, title: 'Multi Language Support' },
          { icon: BsCheckLg, title: 'Unlimited Batch (Audience)' },
          { icon: BsCheckLg, title: 'Personal Broadcasting' },
          { icon: BsCheckLg, title: 'File Attachment (Media, Files, Emoji, Gifs, Images)' },
          { icon: BsCheckLg, title: 'Email Support / Ticket Support' },
          { icon: BsCheckLg, title: 'Filter Number' },
          { icon: BsCheckLg, title: 'WhatsApp Number Validator' },
          { icon: BsCheckLg, title: 'Templates Generate With AI' },
          { icon: BsCheckLg, title: 'Personalized Templates' },
          { icon: BsCheckLg, title: 'Click To Chat Generate' },
          { icon: BsCheckLg, title: 'Administrator Portal' },
          { icon: BsCheckLg, title: 'Custom Label Contacts & Groups' },
          { icon: BsCheckLg, title: 'CSV, Google Excel' },
          { icon: BsCheckLg, title: 'Broadcasting In WhatsApp Group' },
          { icon: BsCheckLg, title: 'Broadcasting Analytics' },
        ],
      },
    ],
  },
]

export const features: FeatureType[] = [
  {
    icon: BsClock,
    title: 'Get started in a minutes',
    description: "We've made it effortless so you can focus on what matters most.",
  },
  {
    icon: BsGraphUpArrow,
    title: 'Optimize your revenue',
    description: 'Experience power of revenue optimization to heights of success.',
  },
  {
    icon: BsHeadset,
    title: '24/7 customer supports',
    description: 'Our dedicated support team is your inquiries around the clock.',
  },
]

export const clients: ClientType[] = [
  { image: client5 },
  { image: client1 },
  { image: client2 },
  { image: client3 },
  { image: client4 },
  { image: client6 },
  { image: client7 },
]

export const faqData: FaqType[] = [
  {
    question: 'How many items are there on this list?',
    answer:
      'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal. Drawings offended yet answered Jennings perceive laughing six did far. Rooms oh fully taken by worse do. Points afraid but may end law lasted.',
  },
  {
    question: 'Can you describe mizzle in just one sentence?',
    answer:
      'September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.',
  },
  {
    question: 'Can I use this theme for my client?',
    answer:
      'How men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.',
  },
  {
    question: 'Do you offer themes in other categories?',
    answer:
      'But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.',
  },
  {
    question: 'Do I need to credit you when I use this theme?',
    answer:
      'But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.',
  },
]

export const pricingFeatures = [
  {
    label: 'Templates',
    basic: '5',
    premium: '20',
    enterprise: 'Unlimited',
  },
  {
    label: 'Time Gap',
    basic: true,
    premium: true,
    enterprise: true,
  },
  {
    label: 'Privacy Feature',
    basic: true,
    premium: true,
    enterprise: true,
  },
  {
    label: 'Multi Language Support',
    basic: true,
    premium: true,
    enterprise: true,
  },
  {
    label: 'Batch (Audience)',
    basic: '2',
    premium: '500',
    enterprise: 'Unlimited',
  },
  {
    label: 'Broadcasting With Branding',
    basic: true,
    premium: false,
    enterprise: false,
  },
  {
    label: 'Personal Broadcasting',
    basic: false,
    premium: true,
    enterprise: true,
  },
  {
    label: 'File Attachment (Media, Files, Emoji, Gifs, Images)',
    basic: true,
    premium: true,
    enterprise: true,
  },
  {
    label: 'Email Support',
    basic: true,
    premium: true,
    enterprise: true,
  },
  {
    label: 'Ticket Support',
    basic: false,
    premium: true,
    enterprise: true,
  },
  {
    label: 'Filter Number',
    basic: true,
    premium: true,
    enterprise: true,
  },
  {
    label: 'WhatsApp Number Validator',
    basic: false,
    premium: true,
    enterprise: true,
  },
  {
    label: 'Templates Generate With AI',
    basic: false,
    premium: true,
    enterprise: true,
  },
  {
    label: 'Personalized Templates',
    basic: false,
    premium: true,
    enterprise: true,
  },
  {
    label: 'Click To Chat Generate',
    basic: false,
    premium: true,
    enterprise: true,
  },
  {
    label: 'Administrator portal',
    basic: false,
    premium: true,
    enterprise: true,
  },
  {
    label: 'Custom Label Contacts & Groups',
    basic: false,
    premium: true,
    enterprise: true,
  },
  {
    label: 'CSV, Google Excel',
    basic: false,
    premium: true,
    enterprise: true,
  },
  {
    label: 'Broadcasting In WhatsApp Group',
    basic: false,
    premium: true,
    enterprise: true,
  },
  {
    label: 'Broadcasting Analytics',
    basic: false,
    premium: false,
    enterprise: true,
  },
]
