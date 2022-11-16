//Importar axios para hacer llamadas a servicios externos
import axios from "axios";

// Make a request for a user with a given ID
axios.get('https://thronesapi.com/api/v2/Characters')
  .then(function (response) {
    // handle success
    console.log("Success!!!");
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log("ERROR!!");
    console.log(error);
  })
  .finally(function () {
    // always executed
  });