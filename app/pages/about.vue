<template>
  <div class="about-page">
    <h1>{{ $t('about.title') }}</h1>
    <div class="content">
      <p>
        {{ $t('about.intro') }}
      </p>
      <ul>
        <li><strong>{{ $t('about.frontend') }}</strong>: {{ $t('about.frontend_desc') }}</li>
        <li><strong>{{ $t('about.backend') }}</strong>: {{ $t('about.backend_desc') }}</li>
        <li><strong>{{ $t('about.config') }}</strong>: {{ $t('about.config_desc') }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
}
.content {
  line-height: 1.6;
  color: #444;
}
ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
}
li {
  margin-bottom: 0.5rem;
}
</style>
