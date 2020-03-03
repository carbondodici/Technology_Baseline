import * as $ from 'jquery';
class Influx{
  constructor(){
      this.host = 'http://localhost:8086';
  }

  async getSources(){
        let query = 'q=show tag values on "telegraf" with key = "instance"';
        return $.ajax({
          url: this.host + '/query?',
          type: 'GET',
          contentType: 'application/octet-stream',
          data: query,
          processData: false,
          success: data => {
            return data;
          },
          error: exception => {
            console.log("Error: " + exception);
          }
        });
  }

  async getParams(){
    let query = 'q=show field keys on telegraf';
    return $.ajax({
      url: this.host + '/query?',
      type: 'GET',
      contentType: 'application/octet-stream',
      data: query,
      processData: false,
      success: data => {
        return data;
      },
      error: exception => {
        console.log("Error: " + exception);
      }
    });
  }

}
module.exports = Influx;