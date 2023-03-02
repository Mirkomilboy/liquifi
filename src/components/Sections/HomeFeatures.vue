<template>
    <div id="compliance-regulation" class="py-16 md:mx-auto md:max-w-6xl px-6 sm:px-8 lg:px-4">
        <div class="md:flex">
            <div class="md:mr-20 lg:mr-32 md:w-2/5">
                <heading preTitle="Build with confidence" title="Compliance at the core. Regulation you control."
                subtitle="
                The SEC has clear regulations regarding initial issuance and
                secondary trading of private securities. We provide a framework
                for you to regulate trading of excempt securities in an SEC
                compliant environment.
                "/>
                <div class="flex">
                    <div class="mr-6 mb-6 w-1/2">
                        <div
                            class="bg-raise mb-2 flex h-10 w-10 items-center justify-center rounded-full text-center"
                        >
                            <SwitchHorizontalIcon class="text-white/75 w-5"/>
                        </div>
                        <div
                            class="text-raise mb-2 text-xs font-bold uppercase"
                        >
                            Real-time banking funds transfers
                        </div>
                        <div class="text-grey-darkest text-sm leading-4">
                            We connect banks to simplify the funds transfer process by
                            automatically depositing directly into your account.
                        </div>
                    </div>
                    <div class="mb-6 w-1/2">
                        <div
                            class="bg-raise mb-2 flex h-10 w-10 items-center justify-center rounded-full text-center"
                        >
                            <DocumentTextIcon class="text-white/75 w-5"/>
                        </div>
                        <div
                            class="text-raise mb-2 text-xs font-bold uppercase"
                        >
                            Seamless document execution
                        </div>
                        <div class="text-grey-darkest text-sm leading-4">
                            Create a template and we will automatically deliver signing
                            documents and collect signatures on your behalf.
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="mr-6 mb-6 w-1/2">
                    <div
                        class="bg-raise mb-2 flex h-10 w-10 items-center justify-center rounded-full text-center"
                    >
                        <ChipIcon class="text-white/75 w-5"/>
                    </div>
                    <div
                        class="text-raise mb-2 text-xs font-bold uppercase"
                    >
                        Marketplaces accessible directly from your website
                    </div>
                    <div class="text-grey-darkest text-sm leading-4">
                        Once configured, your market can be accessible directly from
                        your existing website.
                    </div>
                    </div>
                </div>
            </div>
            <div
            class="wow fadeInRight mb-8 md:-ml-16 md:w-3/5"
            data-wow-delay="0.7s"
            >
            <img
                class="inline-block"
                src="@/assets/svgs/iconsSet.png"
                alt="Features"
            />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import heading from '@/components/heading.vue'
import { SwitchHorizontalIcon, DocumentTextIcon, ChipIcon, } from '@heroicons/vue/outline';

export default defineComponent({
    components: { DocumentTextIcon, SwitchHorizontalIcon, ChipIcon, heading },
    setup () {
        return {}
    }
})
</script>

<style scoped>

</style>