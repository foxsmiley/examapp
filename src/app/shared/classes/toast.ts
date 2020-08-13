import { Ng2IzitoastService } from 'ng2-izitoast';

export class Toast {
  iziToast: Ng2IzitoastService;
  constructor() {
    this.iziToast = new Ng2IzitoastService();
  }

  public displayToast(type: string, message?: string) {
    switch (type) {
      case 'success':
        this.iziToast.success({
          title: 'Success',
          message: message === undefined ? 'Record added successfully.' : message,
          position: 'center'
        });
        break;

      case 'error':
        this.iziToast.error({
          title: 'Error',
          message: message === undefined ? 'Something went wrong. Please try again' : message,
          position: 'center'
        });
        break;

      case 'warning':
        this.iziToast.warning({
          title: 'Caution',
          message: message === undefined ? 'You forgot to fill out all required fields' : message,
          position: 'center'
        });
        break;

      case 'info':
        this.iziToast.info({
          title: 'Info',
          message: message === undefined ? '' : message,
          position: 'center'
        });
        break;
    }
  }
}
