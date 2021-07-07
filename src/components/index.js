import Vue from 'vue'

import asideComponent from '@/components/asideComponent';
import beAccordeon from '@/components/beAccordeon';
import beButton from '@/components/beButton';
import beCopyText from '@/components/beCopyText';
import beInput from '@/components/beInput';
import beInputCheckbox from '@/components/beInputCheckbox';
import beInputFile from '@/components/beInputFile';
import beInputRadio from '@/components/beInputRadio';
import bePrompt from '@/components/bePrompt';
import beSelect from '@/components/beSelect';

Vue.component("asideComponent", asideComponent);
Vue.component("beAccordeon", beAccordeon);
Vue.component("beButton", beButton);
Vue.component("beCopyText", beCopyText);
Vue.component("beInput", beInput);
Vue.component("beInputCheckbox", beInputCheckbox);
Vue.component("beInputFile", beInputFile);
Vue.component("beInputRadio", beInputRadio);
Vue.component("bePrompt", bePrompt);
Vue.component("beSelect", beSelect);


// modals
import addWallet from '@/components/modalTemplates/addWallet';
import balancePlanner from '@/components/modalTemplates/balancePlanner';
import beExchangeDone from '@/components/modalTemplates/beExchangeDone';
import beExchangeStart from '@/components/modalTemplates/beExchangeStart';
import createInvestment from '@/components/modalTemplates/createInvestment';
import createWallet from '@/components/modalTemplates/createWallet';
import foundsOutputUSDX from '@/components/modalTemplates/foundsOutputUSDX';
import foundsOutputXRP from '@/components/modalTemplates/foundsOutputXRP';
import foundsToWalletUSDX from '@/components/modalTemplates/foundsToWalletUSDX';
import foundsToWalletXRP from '@/components/modalTemplates/foundsToWalletXRP';
import howItWorks from '@/components/modalTemplates/howItWorks';
import passwordReset from '@/components/modalTemplates/passwordReset';
import passwordResetVarification from '@/components/modalTemplates/passwordResetVarification';
import transactionsSend from '@/components/modalTemplates/transactionsSend';
import twoFactorAuth from '@/components/modalTemplates/twoFactorAuth';
import twoFactorCode from '@/components/modalTemplates/twoFactorCode';
import twoFactorGAuth from '@/components/modalTemplates/twoFactorGAuth';
import walletInfo from '@/components/modalTemplates/walletInfo';

Vue.component("addWallet", addWallet);
Vue.component("balancePlanner", balancePlanner);
Vue.component("beExchangeDone", beExchangeDone);
Vue.component("beExchangeStart", beExchangeStart);
Vue.component("createInvestment", createInvestment);
Vue.component("createWallet", createWallet);
Vue.component("foundsOutputUSDX", foundsOutputUSDX);
Vue.component("foundsOutputXRP", foundsOutputXRP);
Vue.component("foundsToWalletUSDX", foundsToWalletUSDX);
Vue.component("foundsToWalletXRP", foundsToWalletXRP);
Vue.component("howItWorks", howItWorks);
Vue.component("passwordReset", passwordReset);
Vue.component("passwordResetVarification", passwordResetVarification);
Vue.component("transactionsSend", transactionsSend);
Vue.component("twoFactorAuth", twoFactorAuth);
Vue.component("twoFactorCode", twoFactorCode);
Vue.component("foundsToWalletXRP", foundsToWalletXRP);
Vue.component("twoFactorGAuth", twoFactorGAuth);
Vue.component("walletInfo", walletInfo);



import settingsStepForm from '@/components/modalTemplates/settingsStepForm/settingsStepForm';

Vue.component("settingsStepForm", settingsStepForm);
