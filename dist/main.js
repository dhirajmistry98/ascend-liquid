"use strict";
const icons = {
    navLogo: `
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="52" height="52" rx="11.375" fill="white"/>
      <path d="M39.3125 40.7598H36.252L31.9082 29.3018L31.2578 27.5986C25.4431 26.6699 21.1536 29.4247 19.2139 31.4248L19.0439 31.8662L15.6523 40.7598H12.6328L24.1729 11.1836H27.7725L39.3125 40.7598ZM20.6768 27.6133C23.0969 26.1481 26.4121 25.0072 30.4043 25.3643L25.9521 13.707L20.6768 27.6133Z" fill="#F35233"/>
    </svg>
  `,
    heroLogo: `
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="52" height="52" rx="14" fill="#f35233"/>
      <path d="M39.3125 40.7598H36.252L31.9082 29.3018L31.2578 27.5986C25.4431 26.6699 21.1536 29.4247 19.2139 31.4248L19.0439 31.8662L15.6523 40.7598H12.6328L24.1729 11.1836H27.7725L39.3125 40.7598ZM20.6768 27.6133C23.0969 26.1481 26.4121 25.0072 30.4043 25.3643L25.9521 13.707L20.6768 27.6133Z" fill="white"/>
    </svg>
  `,
    arrow: `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M7 17L17 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M9 7H17V15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
    chevron: `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
    eternl: `
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="url(#eternlBg)"/>
      <path d="M12.6 12.8H27.4V27.2H12.6V12.8Z" stroke="#FF6B45" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M15.8 16.2H23.9" stroke="#2EE6FF" stroke-width="2.1" stroke-linecap="round"/>
      <path d="M15.8 20H22.4" stroke="#FFBA59" stroke-width="2.1" stroke-linecap="round"/>
      <path d="M15.8 23.8H23.9" stroke="#C267FF" stroke-width="2.1" stroke-linecap="round"/>
      <defs>
        <linearGradient id="eternlBg" x1="3.5" y1="2.5" x2="36" y2="37" gradientUnits="userSpaceOnUse">
          <stop stop-color="#7725E7"/>
          <stop offset="0.5" stop-color="#42209B"/>
          <stop offset="1" stop-color="#0D0B1F"/>
        </linearGradient>
      </defs>
    </svg>
  `,
    lace: `
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#4A1389"/>
      <circle cx="20" cy="20" r="9.6" stroke="#FFC454" stroke-width="2"/>
      <path d="M25 26C22.1 22.8 20.4 20 20.4 16.8C20.4 14.5 21.2 12.5 22.8 10.7" stroke="#FFC454" stroke-width="2" stroke-linecap="round"/>
      <path d="M13.8 24.2C13.8 18.6 17.8 14 23 14" stroke="#A45DFF" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
    vespr: `
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#2A66C6"/>
      <path d="M10.5 14L20 25.5L29.5 14" stroke="#D9ECFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
    metamask: `
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M0 10C0 4.47715 4.47715 0 10 0H22C27.5228 0 32 4.47715 32 10V22C32 27.5228 27.5228 32 22 32H10C4.47715 32 0 27.5228 0 22V10Z" fill="#FF6518" fill-opacity="0.67"/>
      <path d="M23.5573 23.7318L19.8094 22.6274L16.9829 24.2994L15.0109 24.2986L12.1828 22.6274L8.43645 23.7318L7.29688 19.9249L8.43645 15.6997L7.29688 12.1275L8.43645 7.7002L14.2904 11.1612H17.7034L23.5573 7.7002L24.6969 12.1275L23.5573 15.6997L24.6969 19.9249L23.5573 23.7318Z" fill="#FF5C16"/>
      <path d="M8.4375 7.7002L14.2914 11.1636L14.0586 13.5405L8.4375 7.7002Z" fill="#FF5C16"/>
      <path d="M12.1797 19.9268L14.7554 21.8684L12.1797 22.6277V19.9268Z" fill="#FF5C16"/>
      <path d="M14.5561 16.7163L14.061 13.542L10.8922 15.7004L10.8906 15.6996V15.7012L10.9004 17.923L12.1854 16.7163H12.1862H14.5561Z" fill="#FF5C16"/>
      <path d="M23.557 7.7002L17.7031 11.1636L17.9351 13.5405L23.557 7.7002Z" fill="#FF5C16"/>
      <path d="M19.8101 19.9268L17.2344 21.8684L19.8101 22.6277V19.9268Z" fill="#FF5C16"/>
      <path d="M21.1021 15.7012V15.6996L21.1013 15.7004L17.9325 13.542L17.4375 16.7163H19.8073L21.0931 17.923L21.1021 15.7012Z" fill="#FF5C16"/>
      <path d="M12.1828 22.6267L8.43645 23.7311L7.29688 19.9258H12.1828V22.6267Z" fill="#E34807"/>
      <path d="M14.5549 16.7158L15.2705 21.3047L14.2788 18.7533L10.8984 17.9233L12.1843 16.7158H14.5541H14.5549Z" fill="#E34807"/>
      <path d="M19.8125 22.6267L23.5588 23.7311L24.6984 19.9258H19.8125V22.6267Z" fill="#E34807"/>
      <path d="M17.4422 16.7158L16.7266 21.3047L17.7183 18.7533L21.0986 17.9233L19.812 16.7158H17.4422Z" fill="#E34807"/>
      <path d="M7.29688 19.9243L8.43645 15.6992H10.8872L10.8961 17.9218L14.2765 18.7517L15.2682 21.3032L14.7585 21.8651L12.1828 19.9235H7.29688V19.9243Z" fill="#FF8D5D"/>
      <path d="M24.6979 19.9243L23.5583 15.6992H21.1076L21.0986 17.9218L17.7183 18.7517L16.7266 21.3032L17.2363 21.8651L19.812 19.9235H24.6979V19.9243Z" fill="#FF8D5D"/>
      <path d="M17.7075 11.1611H16.001H14.2945L14.0625 13.538L15.2723 21.3013H16.7297L17.9403 13.538L17.7075 11.1611Z" fill="#FF8D5D"/>
      <path d="M8.43645 7.7002L7.29688 12.1275L8.43645 15.6997H10.8872L14.0576 13.5405L8.43645 7.7002Z" fill="#661800"/>
      <path d="M13.8475 17.6375H12.7373L12.1328 18.2238L14.2805 18.7509L13.8475 17.6367V17.6375Z" fill="#661800"/>
      <path d="M23.5586 7.7002L24.6982 12.1275L23.5586 15.6997H21.1079L17.9375 13.5405L23.5586 7.7002Z" fill="#661800"/>
      <path d="M18.1525 17.6375H19.2643L19.8688 18.2247L17.7188 18.7525L18.1525 17.6367V17.6375Z" fill="#661800"/>
      <path d="M16.9822 22.7842L17.2355 21.8666L16.7257 21.3047H15.2676L14.7578 21.8666L15.0111 22.7842" fill="#661800"/>
      <path d="M16.9868 22.7852V24.3005H15.0156V22.7852H16.9868Z" fill="#C0C4CD"/>
      <path d="M12.1875 22.6255L15.0164 24.2991V22.7839L14.7632 21.8662L12.1875 22.6255Z" fill="#E7EBF6"/>
      <path d="M19.8133 22.6255L16.9844 24.2991V22.7839L17.2376 21.8662L19.8133 22.6255Z" fill="#E7EBF6"/>
    </svg>
  `,
    phantom: `
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#B4A9F3"/>
      <path d="M11.7 24.2C11.7 18.3 15.5 14.2 20.1 14.2C24.6 14.2 28.4 18.3 28.4 24.2C28.4 25.1 27.7 25.8 26.8 25.8C25.8 25.8 25 25.1 24.9 24.1C24.3 25.1 22.8 25.8 21.3 25.8C20.1 25.8 19 25.3 18.3 24.5C17.6 25.3 16.5 25.8 15.3 25.8C13.8 25.8 12.4 25.1 11.8 24.1C11.8 24.1 11.7 24.1 11.7 24.2Z" fill="white"/>
      <circle cx="16.1" cy="20.3" r="1.25" fill="#7B69D6"/>
      <circle cx="24" cy="20.3" r="1.25" fill="#7B69D6"/>
      <path d="M15.3 22.8C16.4 23.6 17.9 24 19.8 24C21.5 24 23 23.6 24.2 22.8" stroke="#7B69D6" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `,
    apple: `
    <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4">
      <path d="M12.182 8.635c.017 1.882 1.634 2.513 1.65 2.522-.012.041-.26 0.884-.856 1.76-.515.748-1.053 1.492-1.892 1.508-.825.015-1.09-.485-2.036-.485-.945 0-1.24.47-2.02.5-.811.03-1.428-.809-1.946-1.558-1.058-1.53-1.868-4.32-1.39-6.398.238-1.03.82-1.743 1.486-2.04.59-.264 1.15-.45 1.73-.45.626 0 1.217.432 1.603.432.384 0 1.08-.535 1.84-.458.318.013 1.212.128 1.787.97-.046.03-.896.522-.896 1.56.015 1.258 1.077 1.69 1.1 1.7zM10.15 2.92c.348-.423.584-1.01.52-1.597-.504.02-1.116.335-1.478.758-.324.378-.607.97-.53 1.54.56.044 1.14-.277 1.488-.7z"/>
    </svg>
  `
};
const cardanoWallets = [
    { name: "Eternl", icon: icons.eternl },
    { name: "Lace", icon: icons.lace },
    { name: "Vespr", icon: icons.vespr }
];
const swapWallets = [
    { name: "Metamask", icon: icons.metamask },
    { name: "Phantom", icon: icons.phantom }
];
const app = document.querySelector("#app");
if (!app) {
    throw new Error("Missing #app root element.");
}
app.innerHTML = `
  <div class="relative min-h-screen overflow-x-hidden bg-[#0f0201] text-white">
    <div class="pointer-events-none fixed inset-0 bg-[linear-gradient(90deg,rgba(12,2,2,0.28)_0%,rgba(10,2,1,0.12)_34%,rgba(0,0,0,0)_62%)]"></div>
    <canvas id="gradient-canvas" class="fixed inset-0 h-full w-full"></canvas>
    <canvas id="noise-canvas" class="noise-canvas fixed inset-0 h-full w-full pointer-events-none"></canvas>
    <div class="pointer-events-none absolute inset-0">
      <span class="absolute inset-y-0 left-[4.5%] w-px bg-[#b96b56]/36"></span>
      <span class="absolute inset-y-0 left-[52.5%] w-px bg-[#b96b56]/36"></span>
      <span class="absolute inset-y-0 right-[4.5%] w-px bg-[#b96b56]/36"></span>
      <span class="absolute left-0 right-0 top-[11%] h-px bg-[#b96b56]/36"></span>
      <span class="absolute left-0 right-0 bottom-[10.7%] h-px bg-[#b96b56]/36"></span>
      ${guideDiamond("left-[4.5%] top-[11%]")}
      ${guideDiamond("left-[52.5%] top-[11%]")}
      ${guideDiamond("right-[4.5%] top-[11%]")}
      ${guideDiamond("left-[4.5%] bottom-[10.7%]")}
      ${guideDiamond("left-[52.5%] bottom-[10.7%]")}
      ${guideDiamond("right-[4.5%] bottom-[10.7%]")}
    </div>

    <main class="page-shell relative z-10 mx-auto flex min-h-screen w-full max-w-[1360px] flex-col px-5 pb-8 pt-6 sm:px-8 sm:pt-7 lg:px-8 xl:px-9">
      <header class="page-header flex items-center gap-3 pl-0.5 text-white/95 sm:gap-3.5 lg:ml-5 xl:ml-6">
        <div class="nav-brand-shell h-7 w-7 shrink-0 sm:h-8 sm:w-8">${icons.navLogo}</div>
        <span class="text-[20px] font-medium tracking-[-0.055em] text-white/92 hero-type-glow sm:text-[22px]">Ascend</span>
      </header>

      <section class="desktop-stage grid flex-1 grid-cols-1 gap-8 pt-8 sm:gap-10 sm:pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(560px,620px)] lg:items-stretch lg:gap-9 xl:grid-cols-[minmax(0,0.92fr)_minmax(600px,660px)] xl:pt-10 2xl:grid-cols-[minmax(0,0.94fr)_minmax(620px,680px)]">
        <div class="order-1 flex h-full items-center lg:items-end lg:pl-8 xl:pl-12 2xl:pl-14">
          <div class="hero-copy relative mx-auto w-full max-w-[352px] pb-2 lg:mx-0 lg:max-w-[34rem] lg:pb-8 xl:max-w-[36rem] xl:pb-10 2xl:max-w-[38rem]">
            <div class="mb-3 flex justify-center lg:mb-4 lg:justify-start">
              <div class="hero-coin-shell h-16 w-16 sm:h-20 sm:w-20 lg:h-[118px] lg:w-[118px] xl:h-[132px] xl:w-[132px]">
                <img src="assets/image.png" alt="Ascend Coin" class="hero-coin-image h-full w-full object-contain" />
              </div>
            </div>
            <div class="mb-10 text-center lg:text-left">
              <div class="hero-badge mb-5 inline-block bg-[#f7663f] px-5 py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5">
                <span class="text-[clamp(2.25rem,4.2vw,3.25rem)] font-semibold uppercase leading-none tracking-[-0.06em] text-white font-sans">$ASCEND</span>
              </div>
            <h1 class="hero-title mb-10 text-[clamp(4rem,7.5vw,6.5rem)] font-semibold leading-[1.22] tracking-[-0.06em] text-white hero-type-glow">
  Liquid<br />
  Staking
</h1>
              <div class="mt-2 flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-between lg:mt-3 lg:items-end lg:gap-8">
<p class="hero-summary mx-auto max-w-[600px] text-center 
text-[20px] sm:text-[22px] lg:text-[24px] 
font-normal leading-[1.4] tracking-[-0.01em] text-white/90 
sm:text-left">
                  <span class="lg:block">First crosschain compatible Liquid staking protocol.</span>
                  <span class="lg:block">Earn 100% of protocol revenue.</span>
                </p>

                <div class="relative w-full flex-1 sm:w-auto">
                  <button
                    type="button"
                    class="arrow-tile relative mx-auto flex h-18 w-18 items-center justify-center rounded-lg bg-white text-[#f35233] transition-transform hover:scale-105 active:scale-95 sm:mx-0 sm:h-20 sm:w-20 lg:ml-auto lg:translate-x-[3.5rem] lg:h-[68px] lg:w-[68px] xl:translate-x-[4.5rem] 2xl:translate-x-[5.25rem]"
                    aria-label="Open staking flow"
                  >
                    <span class="h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11">${icons.arrow}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="panel-column order-2 w-full lg:ml-auto lg:max-w-[560px] lg:translate-x-10 lg:translate-y-6 xl:max-w-[606px] xl:translate-x-12 xl:translate-y-8 2xl:max-w-[642px] 2xl:translate-x-14 2xl:translate-y-9">
          <div class="panel-shell relative rounded-[34px] p-2 sm:p-2.5">
            <div class="absolute inset-x-5 top-[-40px] h-64 rounded-full bg-[radial-gradient(circle,rgba(255,60,20,0.12),rgba(255,60,20,0)_80%)] blur-[60px]"></div>
            <div class="absolute inset-x-5 bottom-[-45px] h-64 rounded-full bg-[radial-gradient(circle,rgba(243,82,51,0.3),rgba(243,82,51,0)_85%)] blur-[80px]"></div>
            <div class="panel-card relative rounded-[30px] border border-white/6 bg-[radial-gradient(circle_at_50%_0%,rgba(124,78,63,0.22),rgba(124,78,63,0)_34%),linear-gradient(180deg,rgba(45,29,28,0.98)_0%,rgba(16,9,9,0.985)_42%,rgba(4,1,1,1)_100%)] px-6 pb-2.5 pt-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] sm:px-8 sm:pb-3 md:px-10 md:pb-3.5">
              <div class="panel-header mb-3 flex flex-col items-center text-center sm:mb-4">
                <div class="panel-brand-shell mb-2 h-[38px] w-[38px] shrink-0 sm:h-[42px] sm:w-[42px]">${icons.heroLogo}</div>
                <h2 class="panel-title text-[clamp(1.75rem,3.8vw,2.3rem)] font-semibold tracking-[-0.05em] text-white hero-type-glow">
  $Ascend Liquid Staking
</h2>
                <p class="panel-subtitle mt-2 text-[13px] tracking-[-0.03em] text-white/42 sm:text-[14px]">
                  Stake to earn a part of 100% of Ascend protocol revenue
                </p>
              </div>

              <div class="panel-sections space-y-4">
                ${renderWalletSection("CHOOSE CARDANO WALLET", cardanoWallets)}
                ${renderWalletSection("OR SWAP TOKENS TO $ASCEND", swapWallets)}

                <section class="buy-card wallet-block rounded-[22px] border border-white/5 bg-[#050101] p-0 overflow-hidden">
                  <div class="flex min-h-[72px] items-stretch">
                    <div class="buy-thumb hidden w-[110px] shrink-0 sm:block md:w-[124px] bg-[linear-gradient(225deg,#1c0808_0%,#090303_100%)] relative">
                      <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)]"></div>
                      <div class="absolute top-1/2 left-0 right-0 h-4 bg-white/5 blur-sm"></div>
                    </div>
                    <div class="buy-content flex min-h-[72px] flex-1 items-center justify-between gap-4 px-6 py-2.5">
                      <div>
                        <div class="buy-title text-[17px] font-semibold tracking-[-0.04em] text-white hero-type-glow sm:text-[19px]">
                          Buy $Ascend with card
                        </div>
                        <div class="buy-payments mt-2.5 flex items-center gap-3">
                          <span class="rounded-[4px] bg-white px-1.5 py-0.5 text-[10px] font-black tracking-tighter text-[#253b9a] leading-none">VISA</span>
                          <div class="flex items-center -space-x-1.5">
                            <span class="h-3 w-3.5 rounded-full bg-[#eb001b]"></span>
                            <span class="h-3 w-3.5 rounded-full bg-[#f79e1b] opacity-90"></span>
                          </div>
                          <div class="flex items-center gap-0.5 text-white">
                            ${icons.apple}
                            <span class="text-[14px] font-medium tracking-tight">Pay</span>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="wallet-arrow shrink-0 border border-white/5 bg-white/5" aria-label="Buy with card">
                        <span class="h-6 w-6">${icons.chevron}</span>
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
`;
function guideDiamond(positionClass) {
    return `
    <span class="absolute ${positionClass} h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/80 bg-transparent"></span>
  `;
}
function renderWalletSection(title, wallets) {
    const isSwapSection = title.startsWith("OR ");
    const displayTitle = isSwapSection
        ? `<span class="text-white/36">OR</span> <span class="text-[#f35233]">${title.slice(3)}</span>`
        : `<span class="text-[#f35233]">${title}</span>`;
    return `
    <section class="wallet-block rounded-[24px] border border-white/4 bg-[#1a191f] px-6 py-2.5 sm:px-8">
      <div class="wallet-section-title mb-3 text-[11px] font-medium uppercase tracking-[0.16em] sm:text-[12px]">${displayTitle}</div>
      <div class="space-y-2">
        ${wallets.map(renderWalletRow).join("")}
      </div>
    </section>
  `;
}
function renderWalletRow(wallet) {
    return `
    <button type="button" class="wallet-row flex w-full items-center justify-between gap-3 rounded-[18px] border border-transparent bg-transparent px-5 py-0 text-left text-white transition sm:px-8">
      <div class="flex min-w-0 items-center gap-4">
        <div class="h-7 w-7 shrink-0 overflow-hidden rounded-[10px] sm:h-8 sm:w-8">
          ${wallet.icon}
        </div>
        <span class="wallet-name truncate text-[14px] font-medium tracking-[-0.045em] hero-type-glow sm:text-[15px]">${wallet.name}</span>
      </div>

      <span class="wallet-arrow" aria-hidden="true">
        <span class="h-6 w-6">${icons.chevron}</span>
      </span>
    </button>
  `;
}
const canvas = document.querySelector("#gradient-canvas");
const noiseCanvas = document.querySelector("#noise-canvas");
if (!canvas || !noiseCanvas) {
    throw new Error("Missing background canvas element.");
}
const context = canvas.getContext("2d");
const noiseContext = noiseCanvas.getContext("2d");
if (!context || !noiseContext) {
    throw new Error("2D canvas context is not available.");
}
const blobs = [
    {
        x: 0.93,
        y: 0.9,
        radius: 0.72,
        speed: 0.12,
        alpha: 0.72,
        color: "#ff4d20",
        phase: 0.3,
        stretchX: 1.35,
        stretchY: 1.08
    },
    {
        x: 0.16,
        y: 0.92,
        radius: 0.72,
        speed: 0.15,
        alpha: 0.34,
        color: "#8d1405",
        phase: 5.8,
        stretchX: 1.7,
        stretchY: 1.1
    },
    {
        x: 0.46,
        y: 0.42,
        radius: 0.48,
        speed: 0.14,
        alpha: 0.26,
        color: "#ad2009",
        phase: 2.1,
        stretchX: 1.5,
        stretchY: 1.08
    },
    {
        x: 0.3,
        y: 0.14,
        radius: 0.24,
        speed: 0.1,
        alpha: 0.08,
        color: "#ff6a34",
        phase: 3.4,
        stretchX: 1.92,
        stretchY: 0.8
    }
];
const resizeCanvas = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    noiseCanvas.width = Math.floor(width * (window.devicePixelRatio || 1));
    noiseCanvas.height = Math.floor(height * (window.devicePixelRatio || 1));
    noiseCanvas.style.width = `${width}px`;
    noiseCanvas.style.height = `${height}px`;
    renderNoise();
};
const renderNoise = () => {
    const width = noiseCanvas.width;
    const height = noiseCanvas.height;
    const imageData = noiseContext.createImageData(width, height);
    const data = imageData.data;
    for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {
            const index = (y * width + x) * 4;
            const nx = x / width;
            const ny = y / height;
            const hotzone = radialInfluence(nx, ny, 0.84, 0.82, 0.9);
            const midzone = radialInfluence(nx, ny, 0.48, 0.46, 0.7);
            const leftField = radialInfluence(nx, ny, 0.24, 0.52, 0.92);
            const ambientField = radialInfluence(nx, ny, 0.56, 0.5, 1.12);
            const topShadow = radialInfluence(nx, ny, 0.18, 0.12, 0.48);
            // FIX: leftField and ambientField weights reduced (0.16→0.08, 0.14→0.07)
            // to stop the centre-left band lifting too bright
            const brightness = hotzone * 0.56 + midzone * 0.24 + leftField * 0.08 + ambientField * 0.07 - topShadow * 0.06;
            const sample = Math.random();
            let red = 0, green = 0, blue = 0, alpha = 0;
            if (sample < 0.3) {
                red = 16 + Math.max(0, brightness) * 30 + Math.random() * 18;
                green = 1 + Math.max(0, brightness) * 6 + Math.random() * 3;
                blue = 0;
                // FIX: alpha ceiling reduced from 207 → 160 to cut left-half over-brightness
                alpha = 140 + Math.max(0, brightness) * 20 + Math.random() * 30;
            }
            else if (sample < 0.84) {
                red = 62 + Math.max(0, brightness) * 94 + Math.random() * 18;
                green = 6 + Math.max(0, brightness) * 18 + Math.random() * 5;
                blue = Math.random() * 3;
                // FIX: alpha ceiling reduced from 168 → 130
                alpha = 110 + Math.max(0, brightness) * 30 + Math.random() * 20;
            }
            else {
                red = 188 + Math.max(0, brightness) * 54 + Math.random() * 14;
                green = 14 + Math.max(0, brightness) * 24 + Math.random() * 6;
                blue = 2 + Math.random() * 4;
                // FIX: alpha ceiling reduced from 190 → 148
                alpha = 128 + Math.max(0, brightness) * 36 + Math.random() * 20;
            }
            data[index] = Math.min(255, red);
            data[index + 1] = Math.min(255, green);
            data[index + 2] = Math.min(255, blue);
            data[index + 3] = Math.min(255, alpha);
        }
    }
    noiseContext.putImageData(imageData, 0, 0);
};
const radialInfluence = (x, y, centerX, centerY, radius) => {
    const distance = Math.hypot(x - centerX, y - centerY);
    return Math.max(0, 1 - distance / radius);
};
const drawBackground = (time) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const seconds = time * 0.001;
    context.clearRect(0, 0, width, height);
    const base = context.createLinearGradient(0, 0, width, height);
    base.addColorStop(0, "#090101");
    base.addColorStop(0.22, "#140201");
    base.addColorStop(0.54, "#240402");
    base.addColorStop(0.82, "#3a0704");
    base.addColorStop(1, "#561004");
    context.fillStyle = base;
    context.fillRect(0, 0, width, height);
    const fieldGlow = context.createRadialGradient(width * 0.44, height * 0.48, 0, width * 0.46, height * 0.5, Math.max(width, height) * 0.76);
    fieldGlow.addColorStop(0, "rgba(162, 34, 12, 0.14)");
    fieldGlow.addColorStop(0.56, "rgba(98, 12, 5, 0.09)");
    fieldGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
    context.fillStyle = fieldGlow;
    context.fillRect(0, 0, width, height);
    const leftRedField = context.createRadialGradient(width * 0.2, height * 0.56, 0, width * 0.18, height * 0.58, Math.max(width, height) * 0.68);
    leftRedField.addColorStop(0, "rgba(86, 16, 6, 0.1)");
    leftRedField.addColorStop(0.7, "rgba(28, 4, 1, 0.05)");
    leftRedField.addColorStop(1, "rgba(0, 0, 0, 0)");
    context.fillStyle = leftRedField;
    context.fillRect(0, 0, width, height);
    const upperWarmth = context.createRadialGradient(width * 0.72, height * 0.16, 0, width * 0.7, height * 0.14, Math.max(width, height) * 0.54);
    upperWarmth.addColorStop(0, "rgba(150, 34, 14, 0.11)");
    upperWarmth.addColorStop(0.62, "rgba(86, 16, 6, 0.06)");
    upperWarmth.addColorStop(1, "rgba(0, 0, 0, 0)");
    context.fillStyle = upperWarmth;
    context.fillRect(0, 0, width, height);
    const bottomGlow = context.createRadialGradient(width * 1.03, height * 1.02, 0, width * 0.9, height * 0.88, height * 0.92);
    bottomGlow.addColorStop(0, "rgba(255, 74, 24, 0.82)");
    bottomGlow.addColorStop(0.34, "rgba(255, 34, 10, 0.38)");
    bottomGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
    context.fillStyle = bottomGlow;
    context.fillRect(0, 0, width, height);
    const cornerGlow = context.createRadialGradient(width, height, 0, width, height, width * 0.84);
    cornerGlow.addColorStop(0, "rgba(255, 98, 28, 0.58)");
    cornerGlow.addColorStop(0.52, "rgba(255, 50, 14, 0.18)");
    cornerGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
    context.fillStyle = cornerGlow;
    context.fillRect(0, 0, width, height);
    context.save();
    context.globalCompositeOperation = "screen";
    context.filter = "blur(146px)";
    blobs.forEach((blob) => {
        const offsetX = Math.sin(seconds * blob.speed + blob.phase) * width * 0.045;
        const offsetY = Math.cos(seconds * (blob.speed + 0.03) + blob.phase) * height * 0.052;
        const centerX = blob.x * width + offsetX;
        const centerY = blob.y * height + offsetY;
        const radius = blob.radius * Math.max(width, height);
        context.save();
        context.translate(centerX, centerY);
        context.scale(blob.stretchX, blob.stretchY);
        const glow = context.createRadialGradient(0, 0, radius * 0.04, 0, 0, radius);
        glow.addColorStop(0, withAlpha(blob.color, blob.alpha));
        glow.addColorStop(0.4, withAlpha(blob.color, blob.alpha * 0.7));
        glow.addColorStop(1, withAlpha(blob.color, 0));
        context.fillStyle = glow;
        context.beginPath();
        context.arc(0, 0, radius, 0, Math.PI * 2);
        context.fill();
        context.restore();
    });
    context.restore();
    const vignette = context.createRadialGradient(width * 0.64, height * 0.74, 0, width * 0.52, height * 0.56, Math.max(width, height) * 0.94);
    vignette.addColorStop(0, "rgba(0,0,0,0)");
    vignette.addColorStop(1, "rgba(0,0,0,0.5)");
    context.fillStyle = vignette;
    context.fillRect(0, 0, width, height);
    window.requestAnimationFrame(drawBackground);
};
function withAlpha(hex, alpha) {
    const safeAlpha = Math.max(0, Math.min(alpha, 1));
    const normalized = hex.replace("#", "");
    if (normalized.length !== 6) {
        return `rgba(255, 255, 255, ${safeAlpha})`;
    }
    const red = Number.parseInt(normalized.slice(0, 2), 16);
    const green = Number.parseInt(normalized.slice(2, 4), 16);
    const blue = Number.parseInt(normalized.slice(4, 6), 16);
    return `rgba(${red}, ${green}, ${blue}, ${safeAlpha})`;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);
window.requestAnimationFrame(drawBackground);
