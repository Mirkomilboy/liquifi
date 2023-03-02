<template>
    <section id="faq" class="bg-grey-lightest">
      <div class="py-16 md:mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:max-w-6xl px-6 md:px-7 lg:px-4">
        <div>
          <h2 class="text-2xl text-grey-darkest text-center font-extralight mb-6">FAQ</h2>
          <div class="space-y-8">
            <div v-for="(faq, index) in faqs" :key="index" @click="() => handleAccordion(index)"
              class="border-grey-lighter flex border-b pb-4"
            >
              <div class="mr-4">
                <!-- circle icon -->
                <div
                  class="text-grey-dark mx-auto flex h-4 w-4 items-center rounded-full bg-white text-center shadow-sm"
                >
                  <span class="w-full">
                    <ChevronRightIcon/>
                  </span>
                </div>
                <!-- ./ circle icon -->
              </div>
              <div>
                <div
                  class="text-grey-darker cursor-pointer text-lg"
                >
                  {{ faq.question }}
                </div>
                <Collapse :when="faqs[index].isExpanded" class="collapseTrans"
                >
                  <div class="text-md text-grey-dark leading-tight mt-2">
                    {{ faq.answer }}
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-2xl text-grey-darkest text-center font-extralight mb-6">
            What we do
          </h2>
          <div class="leading-[18.4px]">
            <div v-for="(service, index) in services" :key="index"
              class="border-grey-lighter flex border-b h-24 pb-4 mb-4"
            >
              <div class="mr-4">
                <!-- circle icon -->

                <CheckIcon class="w-4 text-green-500"/>

                <!-- ./ circle icon -->
              </div>
              <div class="text-grey-darker cursor-pointer">
                {{ service.description }}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-2xl text-grey-darkest text-center font-extralight mb-6">
            What we don&#39;t do
          </h2>
          <div class="leading-[18.4px]">
            <div v-for="(notService, index) in notServices" :key="index"
              class="border-grey-lighter flex border-b h-24 pb-4 mb-4"
            >
              <div class="mr-4">
                <!-- circle icon -->

                <XIcon class="w-4 text-red-400"/>

                <!-- ./ circle icon -->
              </div>
              <div>
                <div class="text-grey-darker cursor-pointer">
                  {{ notService.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import { Collapse } from 'vue-collapsed'
import { ref, reactive, defineComponent } from 'vue'
import { CheckIcon, ChevronRightIcon, XIcon } from '@heroicons/vue/outline';

const faqs = reactive([
  {
    question: 'What does it mean to "Create Liquidity"?',
    answer: "Liquidity refers to the state of an asset, and how quickly it can be transacted, specifically – turning an asset into cash.Whether you are an investor or an employee who holds shares of a company, you are awaiting the opportunity to turn those shares into cash. Typically for a private company, that opportunity isn’t realized until a company is sold, receives a new round of funding, or goes public (IPO). The holding period waiting for liquidity is typically 7-10 years. With Liquifi, any person who holds shares of a tokenized company, can offer those shares for sale through the company’s private market, so long as, the company has set the market conditions to allow trading.",
    isExpanded: false
  },
  {
    question: 'What is KYC/AML?',
    answer: "Know Your Customer (KYC) and Anti-Money Laundering (AML) are policies and best practices that are applied in investment markets. Regulation and jurisdiction varies by industry and locales. KYC is designed to ensure that the customer is who they say they are. This helps control for identity theft and fraud. Similarly, AML policies are designed to ensure that money which is being put into a market, was obtained legally and handled in accordance with applicable laws and regulations.",
    isExpanded: false
  },
  {
    question: 'How do investors make an investment?',
    answer: "New investments must be made through the company directly via a link placed somewhere for investors to access. Investors must register with the company and meet all of their investment requirements before a purchase can be made.",
    isExpanded: false
  },
  {
    question: 'Who can see my company information on Liquifi?',
    answer: "You are in complete control of who you invite to your private market or issue security tokens. Registered users on the LIQUIFI platform will not be able to see your market unless you directly invite them. The general public does not have access without an invitation.",
    isExpanded: false
  }
])
const services = reactive([
  {
    description: 'Provide tools to assist in SEC compliant initial issuance of securities and subsequent trading of them'
  },
  {
    description: 'Help issuers build their own, private marketplaces for trading stock. These markets are only accessible through the issuer’s website portal and on the issuer’s terms.'
  },
  {
    description: 'Integrate with 3rd party providers to verify investor identities, perform KYC/AML where appropriate, and communicate with issuer-approved investors'
  },
  {
    description: 'Charge set-up fees and monthly hosting fees'
  }
])
const notServices = reactive([
  {
    description: 'Guarantee compliance with SEC regulations or provide legal advice about how to be SEC compliant when issuing or trading securities'
  },
  {
    description: 'Offer any kind of exchange for listing securities to be openly traded. Our markets are all controlled by the issuer.'
  },
  {
    description: 'Provide connections to investors or publically offer securities for sale in any way'
  },
  {
    description: 'Charge any kind of transaction fees or affect transactions'
  }
])

const accordion = ref(false)

function handleAccordion(selectedIndex) {
  faqs.forEach((_, index) => {
    faqs[index].isExpanded = index === selectedIndex ? !faqs[index].isExpanded : false
  })
}

const props = defineComponent({
    components: { CheckIcon, ChevronRightIcon, XIcon },
})
</script>

<style scoped>
.collapseTrans {
  transition: height 400ms cubic-bezier(0.3, 0, 0.6, 1);
}
</style>