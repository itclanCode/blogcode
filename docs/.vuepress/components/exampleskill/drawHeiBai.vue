<template>
    <div>
        <div class="container">
            <div id="inked-painted" ref="inkedPainted">
                <img src="https://codyhouse.co/demo/image-comparison-slider/img/img-modified.jpg" id="inked" ref="inkedImg" alt>
                <div id="colored" ref="colored"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'drawHeiBai',
    mounted() {
        this.$refs.inkedPainted.addEventListener('mousemove',this.trackLocation,false);
        this.$refs.inkedPainted.addEventListener('touchstart',this.trackLocation,false);
        this.$refs.inkedPainted.addEventListener('touchmove',this.trackLocation,false);
    },
    methods: {
        trackLocation(e) {
            let rect = this.$refs.inkedImg.getBoundingClientRect();
	        let position = ((e.pageX - rect.left) / this.$refs.inkedImg.offsetWidth)*100;
	        if(position <= 100){ 
                this.$refs.colored.style.width = position+"%";
            }
        }
    }

}
</script>
<style scoped>
#inked-painted { 
  position: relative;
  font-size: 0; 
  -ms-touch-action: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
}

#inked-painted img { 
  width: 100%;
  height: auto; 
}

#colored { 
  background-image: url(https://codyhouse.co/demo/image-comparison-slider/img/img-original.jpg);
  position: absolute;
  top: 0; 
  left: 0;
  height: 100%;
  width: 50%;
  background-size: cover; 
}

#inked-painted:hover {
  cursor: col-resize; 
}
</style>