"use strict"

const { createApp} = Vue

//Crea app con struttura dati 

createApp({
  data() {
    return {
      emails: [],
      emailsGenerated: false,
    };
  },
  methods: {
    generateEmails() {
        this.emailsGenerated = false;
        this.emails = [];
      
        for (let i = 0; i < 10; i++) {
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
              this.emails.push(response.data.response);
              if (this.emails.length === 10) {
                this.emailsGenerated = true;
              }
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
  },
}).mount('#app');