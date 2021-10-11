import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'data-fetcher',
  styleUrl: 'data-fetcher.css',
  shadow : false
})

export class DataFetcher {
  //For Response received from calling API
  @State() receivedData : JSON;

  createRequestParams = () =>{
    const params:NodeListOf<Element> = (document.querySelectorAll('.request-options') as NodeListOf<Element>);
    let request = {}
    params.forEach((param )=> {
      request[param.getAttribute('name')] = (param as HTMLFormElement).value
    })
    return request
  } 
  
  onButtonClick = () =>  {
    const url : string = (document.querySelector('.data-fetcher-input-url') as HTMLInputElement).value
      let requestInit = this.createRequestParams()
    

    fetch(url,requestInit)
      .then(response  => response.json())
      .catch(err => console.log(`Something went wrong. ERROR : ${err}`))
      .then( response => this.receivedData = response)
      .then(() => console.log(this.receivedData))
  }

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
          </div>

        <button onClick={this.onButtonClick} class="data-fetcher-submit  data-fetcher-child">
          Submit
        </button>
      </div>
    );
  }
}
