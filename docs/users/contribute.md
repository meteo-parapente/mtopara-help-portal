---
hide: footer,edit,toc,search,navigation
extra_css:
  #- https://cdn.jsdelivr.net/combine/npm/vue-tel-input@5.6.2/dist/css/component.min.css,npm/vue-tel-input@5.6.2/dist/css/sprite.min.css
  - /css/vendors.css
  - /css/contribute.css
extra_javascript:
  #- https://cdn.jsdelivr.net/combine/npm/vue@2.6.14,npm/vue-tel-input@5.6.2/dist/vue-tel-input.umd.min.js,npm/vue-resource@1.5.3/dist/vue-resource.min.js
  - https://meteo-parapente.com/api/order/country.js
  - /js/vendors.js
  - /js/contribute.js
title: Subscribe
---

# Subscribe to Meteo-Parapente
 
- Enjoy the best forecasts every day. Meteo-Parapente can exist thanks to you!
 
- Support the development of a quality tool accessible to every pilots
 
- Get free entry to local weather trainings and users meetups
 
- Meet me once a month to discuss new features and improvements

- 👋 <a href="/about-us/" target="_blank">Discover who we are</a>

<script>
  const mp_form_locale = {
    locale: `en`,
    default_country: `GB`,
    product_contributor_title: `Contributor`,
    product_contributor_description: `€3 per month <small>(12 months)</small>`,
    product_supporter_title: `Supporter`,
    product_supporter_description: `€5 per month <small>(12 months)</small>`,
    product_small_text: `Single payment of €### for 12 months. No renewal.`,
    header_coordinates: `About you`,
    email: `Email`,
    mobile_phone: `Mobile phone`,
    mobile_phone_small_text: `Only used to receive your access code and to reset it in case you lose it. If you don't have a cell phone, contact support@meteo-parapente.com`,
    payment_method: `Payment method`,
    payment_card: `Credit card / Debit card`,
    payment_proceed: `Proceed to payment ►`,
    terms_approval: `By clicking on "proceed to payment", you hereby agree and consent to the <a href="/legal/#terms" target="_blank">general conditions of use of Meteo-Parapente</a>, the <a href="/legal/#membership" target="_blank">specific conditions of subscription</a> and the <a href="/privacy/" target="_blank">privacy policy</a>.`,
    error_email: `Email address is not valid`,
    error_phone: `Phone number is not valid`,
    error_request: `Error: cannot reach server. Check your connection and try again.`,
    need_help: `Do you need help?`,
    email_us: `Write an email to <strong>support@meteo-parapente.com</strong>`,
    payment_declined: `Your bank has declined the payment. Please try again.`,
    payment_sepa: `SEPA Bank Transfer`
  };
</script>
<div id="app">
  <p v-if="!ready"><img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." /></p>
</div>