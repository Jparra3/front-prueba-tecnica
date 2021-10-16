
export class Helpers {

  constructor() {
  }

  setData(form: any, name: any, event: any): void {
    form[name].value = event;
  }

}
