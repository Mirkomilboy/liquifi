<template>
    <div>
        <!-- partners -->
        <div id="markets" class="py-16 md:mx-auto md:flex md:max-w-6xl sm:px-8 lg:px-4 -mt-0.5">
            <heading class="px-4 md:mr-20 lg:mr-32 md:w-2/5 md:px-0" preTitle="Build with us" title="Markets tailored specifically to suit your needs."
            subtitle="
            Imagine building a fully compliant private stock exchange where you
            control who can invest, how much, and how often. Liquifi packages
            this extremely complex task into a simple and easy to use
            application.
            "/>
            <div class="grid grid-cols-2 md:gap-x-5 md:gap-y-6 md:w-3/5 md:pt-8">
                <div
                    data-wow-delay="0.5s"
                    class="fadeInRight wow border-token border-t-4 bg-white px-6 py-6 pt-4 shadow-sm hover:shadow md:rounded-sm"
                >
                    <!-- circle icon -->
                    <div
                    class="bg-token mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-center text-3xl text-white shadow-sm"
                    >
                    <span>
                        <LibraryIcon class="w-8"/>
                    </span>
                    </div>
                    <!-- ./ circle icon -->
                    <div class="text-grey-darker mb-2 text-lg">Private Companies</div>
                    <div class="text-grey-dark text-sm leading-tight">
                    Approve investors to buy and sell private company stock with a
                    company hosted marketplace.
                    </div>
                </div>
                <div
                    data-wow-delay="0.7s"
                    class="fadeInRight wow border-raise border-t-4 bg-white px-6 py-6 pt-4 shadow-sm hover:shadow md:rounded-sm"
                >
                    <!-- circle icon -->
                    <div
                    class="bg-raise mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-center text-3xl text-white shadow-sm"
                    >
                    <span>
                        <ClipboardListIcon class="w-8"/>
                    </span>
                    </div>
                    <!-- ./ circle icon -->
                    <div class="text-grey-darker mb-2 text-lg">
                    Employee Stock Options
                    </div>
                    <div class="text-grey-dark text-sm leading-tight">
                    Allow employees to liquidate stock options with an employer
                    hosted marketplace.
                    </div>
                </div>
                <div
                    data-wow-delay="0.7s"
                    class="fadeInRight wow border-trade border-t-4 bg-white px-6 py-6 shadow-sm hover:shadow md:rounded-sm"
                >
                    <!-- circle icon -->
                    <div
                    class="bg-trade mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-center text-3xl text-white shadow-sm"
                    >
                    <span>
                        <CashIcon class="w-8"/>
                    </span>
                    </div>
                    <!-- ./ circle icon -->
                    <div class="text-grey-darker mb-2 text-lg">
                    VC Funds and REITS
                    </div>
                    <div class="text-grey-dark text-sm leading-tight">
                    Grant fund participants the ability to trade ownership securely
                    in a private marketplace.
                    </div>
                </div>
                <div
                    data-wow-delay="0.9s"
                    class="fadeInRight wow border-wallet border-t-4 bg-white px-6 py-6 shadow-sm hover:shadow md:rounded-sm"
                >
                    <!-- circle icon -->
                    <div
                    class="bg-wallet mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-center text-3xl text-white shadow-sm"
                    >
                    <span>
                        <FireIcon class="w-8"/>
                    </span>
                    </div>
                    <!-- ./ circle icon -->
                    <div class="text-grey-darker mb-2 text-lg">Sport Teams</div>
                    <div class="text-grey-dark text-sm leading-tight">
                    Engage fans and create long-term loyalty by allowing fans to
                    purchase ownership in the team.
                    </div>
                </div>
            </div>
        </div>
        <!-- ./ partners -->
        <!-- how -->
        <div id="markets" class="py-16 md:mx-auto md:flex md:max-w-6xl px-6 sm:px-8 lg:px-4">
            <div
            class="wow fadeInLeft md:-ml-16 md:mr-20 lg:mr-32 md:w-3/5 md:pt-8"
            data-wow-delay="0.7s"
            >
            <img
                class="inline-block w-full"
                src="@/assets/svgs/openTheMarket.png"
                alt="How"
            />
            </div>
            <heading class="md:w-2/5" preTitle="Build with simplicity" title="Configure the details. Let Liquifi do the rest."
            subtitle="
            We provide a comprehensive set of tools to define a market based on
            your requirements. Seriously, Liquifi makes trading ownership
            between qualified parties simple–see how it works.
            "/>
        </div>
        <!-- ./ how it works -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import heading from '@/components/heading.vue'
import { CashIcon, ClipboardListIcon, FireIcon, LibraryIcon } from '@heroicons/vue/outline';

export default defineComponent({
    components: { heading, LibraryIcon, ClipboardListIcon, CashIcon, FireIcon },
    setup () {
        return {}
    }
})
</script>

<style scoped>

</style>