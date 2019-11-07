<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: 'Hello World',
    };
  },

  mounted() {
    console.log('Component ready.');
  },
};
</script>
