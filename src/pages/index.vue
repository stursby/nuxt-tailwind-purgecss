<template>
  <div>
    <!-- heading -->
    <h2 class="mb-4 text-purple text-2xl font-bold">Homepage</h2>
    <p class="mb-4 bg-gray-300 p-4 text-sm rounded leading-normal">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dolor
      placerat enim suscipit porttitor et sodales orci. In eget lorem a odio
      rhoncus finibus vel quis ex. Donec varius nisl ligula, vel finibus velit
      dignissim in.
    </p>

    <!-- component example -->
    <MyComponent />

    <!-- custom CSS example (see src/assets/css/site.css) -->
    <p class="custom">Custom CSS example</p>

    <!-- Tailwind UI example (https://tailwindui.com/components/marketing/sections/cta-sections) -->
    <div class="bg-gray-50 mt-6">
      <div
        class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <h2
          class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          Ready to dive in?
          <br />
          <span class="text-indigo-600">Start your free trial today.</span>
        </h2>
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Get started
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyComponent from '~/components/MyComponent'
export default {
  components: {
    MyComponent
  }
}
</script>
