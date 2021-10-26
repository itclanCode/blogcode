<template>
  <div>
    <div id="circle-btn">
      <div class="btn-container">
        <button>Hover</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "circularEffect"
};
</script>

<style lang="scss" scoped>
#circle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
}

.btn-container {
  position: relative;
}

button {
  border: 0;
  border-radius: 50px;
  color: white;
  background: #5f55af;
  padding: 15px 40px 16px 40px;
  text-transform: uppercase;
  background: linear-gradient(to right, #f72585 50%, #5f55af 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 2s ease;
}

button:hover {
  background-position: left bottom;
}
</style>