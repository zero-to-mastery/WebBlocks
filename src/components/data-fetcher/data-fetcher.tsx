import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'data-fetcher',
  styleUrl: 'data-fetcher.css',
  shadow : false
})

export class DataFetcher {
  
  @State() receivedData : JSON; //This state handles the response and can be passed for child

  //bellow method creates and return requestInit object for fetch API using user inputs
  createRequestParams = () =>{ 
    const params:NodeListOf<Element> = (document.querySelectorAll('.request-options') as NodeListOf<Element>);
    let request = {}
    //Note : url is not considered as request param or to be passed as requestInit object
    params.forEach((param )=> {
      request[param.getAttribute('name')] = (param as HTMLFormElement).value //new properties are added according to given name attribute to element and inserted into request object which will be returned
    })
    return request
  } 
  
  //this handler handles the click event of submit button
  onButtonClick = () =>  {
    //fetching url given by user
    const url : string = (document.querySelector('.data-fetcher-input-url') as HTMLInputElement).value
      let requestInit = this.createRequestParams() || {} 
    

      //making call to an api through url provided by user
    fetch(url,requestInit)
      .then(response  => {
        console.log('Status : ' + response.status)
        return  response.json()
      })
      .catch(err => console.log(`Something went wrong. ERROR : ${err}`))
      .then( response => this.receivedData = response)
      .then(() => console.log(this.receivedData))
  }

  /*Note : For further development
  /for creating requestInit object for fetch :
  - elements must HTMLFormElements
  - elements must have name attribute corresponding to the 'property name' used while making 'requestInit' object in 'fetch'
  - elements must have class set to 'request-options'
  - values of elements must be set to corresponding 'values' passed during making of 'requestInit' Object in 'fetch'.
  - Follow these steps mention above to create requestInit  object 
  - This must be followed because 'createRequestParam' method only create the same object requestInit object passed to fetch by user inputs in UI.
  */
  render() {
    return (
      
      <div class="data-fetcher-main">

        <p class="data-fetcher-info">Enter a valid url for an API and get response</p>
        <input class="data-fetcher-input-url data-fetcher-child" id="data-fetcher-url" placeholder="Url Here" value="" name="url"></input>

          <div class='request-params'>

            <label htmlFor ='method' class='labels' > Choose Method :</label>
            <select id='method' name='method' class='request-options'>
              <option value="GET">GET</option>
              <option value="POST">POST</option>
            </select>

            <label htmlFor ='mode' class='labels' > Choose Mode :</label>
            <select id='mode' name='mode' class='request-options'>
              <option value="cors">cors</option>
              <option value="same-origin">same-origin</option>
              <option value="no-cors">no-cors</option>
            </select>

          </div>

        <button onClick={this.onButtonClick} class="data-fetcher-submit  data-fetcher-child">
          Submit
        </button>

      </div>
    );
  }
}
