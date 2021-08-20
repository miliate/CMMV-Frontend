import { Model } from '@vuex-orm/core'
import Clinic from '../clinic/Clinic'
import Utente from '../utente/Utente'

export default class Appointment extends Model {
  static entity = 'appointments'

  static fields () {
    return {
      id: this.attr(null),
      appointmentDate: this.attr(''),
      time: this.attr(''),
      hasHappened: this.attr(false),
      orderNumber: this.attr(''),
      status: this.attr('PENDENTE'),
      visitDate: this.attr(''),
      user_id: this.attr(''),
      clinic_id: this.attr(''),



      // Relationships
      user: this.belongsTo(Utente, 'user_id'),
      clinic: this.belongsTo(Clinic, 'clinic_id')
    }
  }
}
