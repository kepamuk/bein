<template>
	<div id="app">
    <asideComponent></asideComponent>
    <main class="main_content">
  		<vueCustomScrollbar class="page_wrapper">
        <router-view />
      </vueCustomScrollbar>
    </main>
    
		<modal 
			name="modal" 
			class="send_to_walet_modal"
			width="90%"
			:maxWidth="540"
			height="auto" 
			:scrollable="true" 
			:adaptive="true">
			<foundsToWallet></foundsToWallet>
		</modal>
		<modal 
			name="modal-output" 
			class="receive_modal" 
			width="90%"
			:maxWidth="540"
			height="auto" 
			:scrollable="true" 
			:adaptive="true">
			<foundsOutput></foundsOutput>
		</modal>
		<modal 
			name="modal-confirm" 
			class="transactions_send" 
			width="90%"
			:maxWidth="540"
			height="auto" 
			:scrollable="true" 
			:adaptive="true">
			<transactionsSend></transactionsSend>
		</modal>
	</div>
</template>
<script>
import foundsToWallet from '@/components/modalTemplates/foundsToWallet'
import foundsOutput from '@/components/modalTemplates/foundsOutput'
import transactionsSend from '@/components/modalTemplates/transactionsSend'
import asideComponent from '@/components/asideComponent';
import vueCustomScrollbar from 'vue-custom-scrollbar';
import "vue-custom-scrollbar/dist/vueScrollbar.css";
export default {
  components: {
    asideComponent,
    vueCustomScrollbar,
    foundsToWallet, 
    foundsOutput, 
    transactionsSend, 
  }
}
</script>

<style lang="scss">
@import '@/includes/styles/_colors.scss';
@import '@/includes/styles/_reset.scss';
body{
  background-color: $bg-dark;
  color: $bg-dark;
}
#app{
  display: flex;
  width: 100%;
  height: 100vh;
}
.main_content{
  flex-grow: 1;
  padding: 10px 10px 10px 0px;
  @media(max-width: 1023px){
    padding: 70px 0px 0px;
  }
}
.page_wrapper{
  border-radius: 55px;
  background-color: $bg-light;
  width: 100%;
  height: 100%;
  padding: 50px;
  box-shadow: inset 12px 0px 40px rgba($black, .25);
  background-image: url('./assets/page_bg.svg');
  background-position: right center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 850px;
  @media (max-width: 1600px) {
    background-size: 500px;
    padding: 40px 40px;
  }
  @media (max-height: 850px) {
    padding: 40px 40px;
    border-radius: 30px;
    box-shadow: inset 12px 0px 30px rgba($black, .25);
  }
  @media(max-width: 1023px){
    border-radius: 55px 55px 0px 0px;
    box-shadow: inset 0px 12px 20px rgba($black, .25);
  }
  @media(max-width: 767px){
    border-radius: 30px 30px 0px 0px;
    padding: 40px 20px;
  }
}
</style>
