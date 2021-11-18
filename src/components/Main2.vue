<template>

  <div id='app'>
      <!-- <div><img src="../assets/logo.png" /></div> -->

      <div id='headpart'>
          <HeadPart></HeadPart>

      </div>
      <!-- <div>head</div> -->
      <div id='content'>
          <Look></Look>


      </div>
      <div id='footpart'>
          <FootPart></FootPart>

      </div>

  </div>
 

</template>

<script>
import HeadPart from '@/components/Head';
import FootPart from '@/components/Foot';
import Look from '@/components/Look'

export default {
    components:{
        HeadPart,FootPart,Look

    },
    name: 'Main',
    data (){

        return {

        }
    }

}
</script>

<style>
#headpart{
    width: 100%;
    height: 50px;
    /* background-color: yellow; */

}

#content{
    width: 100%;
    height: 540px;
    /* background-color: yellow; */

}

#footpart{
    width: 100%;
    height: 50px;
    /* background-color: green; */

}

</style>